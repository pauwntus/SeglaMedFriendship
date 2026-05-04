// ═══════════════════════════════════════════════════════
// SITE CONTENT
// Edit this file to update all text on the site.
// In titles, wrap italic text with <em>...</em>
// ═══════════════════════════════════════════════════════

export const site = {
  title:       'Friendship — S/Y Albin Viggen',
  description: 'Segla med Friendship, en Albin Viggen vid Svindersviks Båtklubb i Nacka.',
};

export const boat = {
  name:   'Friendship',
  prefix: 'S/Y',
  type:   'Albin Viggen',
  club:   'Svindersviks Båtklubb',
  area:   'Nacka · Stockholm',
};

export const navLinks = [
  { label: 'Om båten',      href: '#om' },
  { label: 'Bilder',        href: '#bilder' },
  { label: 'Packlista',     href: '#pack' },
  { label: 'Inför segling', href: '#infor' },
  { label: 'Ombord',        href: '#regler' },
];

export const about = {
  label: '01 — Om båten',
  title: 'En klassiker<br>på <em>Stockholms vatten</em>',
  paragraphs: [
    'Friendship är en Albin Viggen — en av Sveriges mest omtyckta kölbåtar. Med sina stabila egenskaper och lätthanterliga rigg är hon perfekt för seglarkvällar och helgäventyr i skärgården.',
    'Båten ligger vid Svindersviks Båtklubb i Nacka, strax söder om Stockholm. Härifrån når du Baggensfjärden och skärgårdens gömda vikar på kort tid.',
  ],
  specs: [
    { label: 'Typ',        value: 'Albin Viggen' },
    { label: 'Längd',      value: '7,6 m' },
    { label: 'Bredd',      value: '2,5 m' },
    { label: 'Djupgående', value: '1,2 m' },
    { label: 'Motor',      value: 'Inombords' },
    { label: 'Platser',    value: '4–5 pers' },
  ],
};

export const gallery = {
  label: '02 — Bilder',
  title: 'Livet<br><em>ombord</em>',
  intro: 'Lägg till era egna bilder — under förberedelser, segling och i hamn.',
  hint:  'Ersätt platshållarna med era egna bilder',
  items: [
    { label: 'Friendship\ni hamn' },
    { label: 'Under segling' },
    { label: 'Cockpit' },
    { label: 'Kajuta' },
    { label: 'Skärgårdsvy' },
  ],
};

export const packing = {
  label: '03 — Packlista',
  title: 'Vad tar du<br><em>med dig?</em>',
  tip:   'Packa lätt och i mjuka väskor — de går att trycka in i bagutrymmen. Hårda resväskor är opraktiska ombord. Allt på däck behöver tåla att bli vått.',
  cards: [
    {
      icon:   '🧥',
      title:  'Kläder & skydd',
      snacks: false,
      items: [
        { text: 'Regnkläder — jacka och byxor', important: true },
        { text: 'Kläder för både varmt och kallt' },
        { text: 'Keps' },
        { text: 'Solglasögon' },
        { text: 'Badkläder' },
        { text: 'Tofflor / sandaler' },
        { text: 'Halkfria skor (gärna båtskor)' },
        { text: 'Solskyddsfaktor' },
      ],
    },
    {
      icon:   '🎒',
      title:  'Personligt',
      snacks: false,
      items: [
        { text: 'Sovsäck eller sängkläder + filt', important: true },
        { text: 'Handduk' },
        { text: 'Pannlampa', important: true },
        { text: 'Powerbank' },
        { text: 'Vattenflaska' },
        { text: 'Myggmedel' },
        { text: 'Medicin mot sjösjuka' },
        { text: 'Personliga mediciner' },
      ],
    },
    {
      icon:   '🎭',
      title:  'Det oväntade snackset',
      snacks: true,
      items: [
        { text: 'Varje person tar med ett snacks' },
        { text: 'Det ska vara oväntat', important: true },
        { text: 'Ingen berättar vad det är' },
        { text: 'Avslöjas ombord' },
      ],
      tradition: {
        label:  'Årets förslag',
        value:  'Halloumi-chips med citron & za\'atar',
        footer: '… eller nåt som ingen sett komma.',
      },
    },
  ],
};

export const prep = {
  label: '04 — Att tänka på',
  title: 'Inför<br><em>avfärd</em>',
  checklists: [
    {
      title: '✅ Inför avfärd',
      items: [
        'Fyll på vatten',
        'Fyll bensindunkarna',
        'Fyll bensintanken',
        'Fyll på spritköket',
        'Sätt i bensinslangen (snurran)',
        'Förbered försegel',
        'Ta fram sjökort',
        'Kolla ankare och linor',
        'Kolla batteri',
        'Städa ur kölsvinet',
      ],
    },
    {
      title: '👨‍🏫 Säkerhetsgenomgång',
      items: [
        'Snurran (motorn) — hur den används',
        'Bommen — var den är och hur den rör sig',
        'Skota — hur man hanterar den',
        'För- och storsegel — skillnad och funktion',
        'Kryssa och slå',
        'Gippa — vad det innebär',
        'Lägga runt knap',
        'Sätta och ta ner segel',
        'Ankra',
        'Var säkerhetsutrustning finns',
      ],
    },
  ],
};

export const rules = {
  label: '05 — Ombord',
  title: 'Att tänka på<br><em>som besättning</em>',
  items: [
    { num: '01', title: 'Flytväst alltid',       desc: 'Obligatorisk i dåligt väder och mörker. Skippern bestämmer när.' },
    { num: '02', title: 'Akta bommen',           desc: 'Bommen är i ögonhöjd och rör sig snabbt vid gipp. Håll koll alltid.' },
    { num: '03', title: 'Tre kontaktpunkter',    desc: 'En hand för dig, en för båten. Rusa aldrig på ett gungande däck.' },
    { num: '04', title: 'Skippern bestämmer',    desc: 'Ombord gäller skipperns ord — inte av hierarki, utan för säkerhetens skull.' },
    { num: '05', title: 'Inget glas',            desc: 'Glasflaskor och dricksglas är förbjudet på däck. Plastmuggar alltid.' },
    { num: '06', title: 'Sjösjuka händer',       desc: 'Ta tabletter INNAN avfärd. Säg till tidigt. Horisontblick och frisk luft hjälper.' },
    { num: '07', title: 'Sopor & miljö',         desc: 'Absolut inget skräp i havet. Allt avfall tas tillbaka till land.' },
    { num: '08', title: 'Hjälps åt',             desc: 'Lina, fender, kaffe, disk. En segelbåt fungerar bäst när alla drar sitt strå.' },
  ],
  emergency: {
    phone:  '020-41 03 00',
    vhf:    'VHF kanal 16',
    mayday: 'MAYDAY',
    note:   'Skippern visar vid avfärd var nödutrustning (raketer, brandsläckare, livboj) finns.',
  },
};

export const howToFind = {
  label: '06 — Praktiskt',
  title: 'Att hitta<br><em>till båten</em>',
  intro: 'Kolla med skippern om exakt bryggnummer och mötestid inför varje tur.',
  details: [
    { label: 'Klubb',      value: 'Svindersviks Båtklubb' },
    { label: 'Adress',     value: 'Svindersviksvägen, Nacka' },
    { label: 'Kollektivt', value: 'Buss 401 från Slussen' },
    { label: 'Bil',        value: 'Parkering vid klubben' },
  ],
};
