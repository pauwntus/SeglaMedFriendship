#!/usr/bin/env python3
"""Genererar geometrin till den handritade kartan i HowToFind.astro.

Kartunderlag: Overture Maps (OSM-härledd data, © OpenStreetMap-bidragsgivarna),
läses anonymt från S3. Pipeline:

  1. Hämta vatten- och vägdata för Svindersviken-området (bbox-filter
     med predicate pushdown, laddar bara berörda radgrupper).
  2. Bygg gånggraf av gångbara segment, splittade vid delade noder.
  3. Dijkstra: busshållplatsen Henriksdalsberget -> klubben (trapporna)
     och Sickla station -> klubben (gångvägen längs viken).
  4. Klipp till scenen, projicera till viewBox 800x668, förenkla,
     lägg på deterministiskt penndarr, skriv ut SVG-pathdata.

Körning:  pip install pyarrow s3fs shapely && python3 scripts/generate-map.py
Utdata:   mapdata.json med path-d-strängar. Etiketter, båten och kompassen
          i HowToFind.astro är handplacerade ovanpå dessa.
"""
import math, heapq, json
from collections import Counter

import pyarrow.dataset as ds
import pyarrow.parquet as pq
import s3fs
from shapely import wkb
from shapely.geometry import box, LineString, MultiLineString
from shapely.ops import unary_union, linemerge

REL = 'release/2026-06-17.0'
FETCH_BBOX = (18.085, 59.298, 18.162, 59.322)   # lon0, lat0, lon1, lat1
SCENE = (18.1060, 59.3048, 18.1505, 59.3175)
SICKLA = (18.12145, 59.30671)   # tvärbanans ändpunkt
CLUB   = (18.12177, 59.31070)   # klubbens brygga på vikens norra strand
BUS    = (18.11700, 59.31095)   # ICA Nära Henriksdal, ringens östsida (ur Overture places)
WALK = {'footway','path','steps','cycleway','pedestrian','residential',
        'living_street','service','unclassified','tertiary','secondary'}
COS = math.cos(math.radians(59.31))
W = 800

def fetch(theme, typ, cols):
    fs = s3fs.S3FileSystem(anon=True, client_kwargs={'region_name': 'us-west-2'})
    d = ds.dataset(f'overturemaps-us-west-2/{REL}/theme={theme}/type={typ}/',
                   filesystem=fs, format='parquet')
    f = ds.field
    x0, y0, x1, y1 = FETCH_BBOX
    filt = ((f('bbox','xmin') < x1) & (f('bbox','xmax') > x0) &
            (f('bbox','ymin') < y1) & (f('bbox','ymax') > y0))
    return d.to_table(filter=filt, columns=cols).to_pylist()

def dist(a, b):
    return math.hypot((a[0]-b[0])*COS, (a[1]-b[1])) * 111320

def build_graph(segments):
    key = lambda p: (round(p[0],5), round(p[1],5))
    lines = []
    for s in segments:
        if s['class'] not in WALK: continue
        g = wkb.loads(bytes(s['geometry']))
        for L in (g.geoms if g.geom_type=='MultiLineString' else [g]):
            c = list(L.coords)
            if len(c) >= 2: lines.append(c)
    cnt = Counter()
    for c in lines:
        seen = set()
        for p in c:
            k = key(p)
            if k not in seen: cnt[k] += 1; seen.add(k)
        for p in (c[0], c[-1]): cnt[key(p)] += 1
    edges, geoms = {}, []
    def add(c):
        a, b = key(c[0]), key(c[-1])
        w = sum(dist(c[i], c[i+1]) for i in range(len(c)-1))
        i = len(geoms); geoms.append(c)
        edges.setdefault(a, []).append((b, w, i, False))
        edges.setdefault(b, []).append((a, w, i, True))
    for c in lines:
        start = 0
        for i in range(1, len(c)):
            if i == len(c)-1 or cnt[key(c[i])] > 1:
                add(c[start:i+1]); start = i
    return edges, geoms

def dijkstra(edges, geoms, srcpt, dstpt):
    near = lambda pt: min(edges, key=lambda n: dist(n, pt))
    src, dst = near(srcpt), near(dstpt)
    D, prev, h = {src: 0.0}, {}, [(0.0, src)]
    while h:
        d, u = heapq.heappop(h)
        if d > D.get(u, 1e18): continue
        for v, w, i, rev in edges.get(u, ()):
            nd = d + w
            if nd < D.get(v, 1e18):
                D[v] = nd; prev[v] = (u, i, rev); heapq.heappush(h, (nd, v))
    coords, u = [], dst
    while u != src:
        p, i, rev = prev[u]
        c = list(geoms[i])[::-1] if rev else list(geoms[i])
        coords = c[:-1] + coords if coords else c
        u = p
    return coords, D[dst]

def main():
    x0, y0, x1, y1 = SCENE
    H = W * (y1-y0) / ((x1-x0) * COS)
    P = lambda c: ((c[0]-x0)/(x1-x0)*W, (y1-c[1])/(y1-y0)*H)
    def jitter(pts, amp):
        return [(x + amp*math.sin(i*0.63 + x*0.031),
                 y + amp*math.cos(i*0.57 + y*0.027)) for i,(x,y) in enumerate(pts)]
    def to_d(coords, close=False, simp=1e-5, amp=1.2):
        ls = LineString(coords).simplify(simp, preserve_topology=True)
        pts = jitter([P(c) for c in ls.coords], amp)
        return 'M ' + ' L '.join(f'{x:.1f} {y:.1f}' for x,y in pts) + (' Z' if close else '')

    water = fetch('base', 'water', ['geometry','subtype','class','names'])
    seg = fetch('transportation', 'segment', ['geometry','subtype','class','names'])
    name = lambda n: n.get('primary') if n else None
    scene_box = box(*SCENE[::2], *SCENE[1::2]) if False else box(x0, y0, x1, y1)

    ocean = unary_union([wkb.loads(bytes(w['geometry'])) for w in water
                         if w['subtype']=='ocean']).intersection(scene_box)
    parts = sorted((ocean.geoms if ocean.geom_type=='MultiPolygon' else [ocean]),
                   key=lambda p: -p.area)[:2]

    edges, geoms = build_graph(seg)
    rA, dA = dijkstra(edges, geoms, BUS, CLUB)
    rB, dB = dijkstra(edges, geoms, SICKLA, CLUB)
    print(f'Rutt A {dA:.0f} m, rutt B {dB:.0f} m')

    def named(nm, simp):
        ls = []
        for s in seg:
            if name(s['names']) == nm:
                g = wkb.loads(bytes(s['geometry']))
                ls += list(g.geoms) if g.geom_type=='MultiLineString' else [g]
        m = linemerge(MultiLineString(ls)).intersection(scene_box)
        parts = list(m.geoms) if m.geom_type=='MultiLineString' else [m]
        return [to_d(list(p.coords), simp=simp, amp=1.0)
                for p in parts if not p.is_empty and p.length > 0.0008]

    out = {
        'viewbox': f'0 0 {W} {H:.0f}',
        'sea_parts': [to_d(list(p.exterior.coords), close=True) for p in parts],
        'routeA': to_d(rA, simp=6e-6, amp=0),
        'routeB': to_d(rB, simp=6e-6, amp=0),
        'varmdoleden': named('Värmdöleden', 2e-5),
        'ring': named('Henriksdalsringen', 1.2e-5),
        'tvarbanan': named('Tvärbanan', 2e-5),
        'saltsjobanan': named('Saltsjöbanan', 2e-5),
        'kvarnholmsvagen': named('Kvarnholmsvägen', 2e-5),
        'sickla': [round(v,1) for v in P(SICKLA)],
        'club': [round(v,1) for v in P(CLUB)],
        'bus': [round(v,1) for v in P(BUS)],
    }
    json.dump(out, open('mapdata.json','w'), ensure_ascii=False)
    print('skrev mapdata.json')

if __name__ == '__main__':
    main()
