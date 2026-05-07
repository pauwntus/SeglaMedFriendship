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
    'Friendship är en Albin Viggen från 1972 — stabil, lättseglad och precis rätt stor för tre till fyra vänner. Hon ligger vid Svindersviks Båtklubb i Nacka, och härifrån når du Baggensfjärden och skärgårdens gömda vikar på en timme.',
    'Varje tur är lite annorlunda. Ibland lägger sig vinden. Ibland trasslar tampen in sig i motorn. Men det är inte det man minns — det är solnedgången i Norrviken, bastun på Härsö, och att äntligen få säga "skepp ohoj!" igen efter en lång höst.',
  ],
  specs: [
    { label: 'Typ',        value: 'Albin Viggen' },
    { label: 'Årsmodell',  value: '1975' },
    { label: 'Längd',      value: '7,1 m' },
    { label: 'Bredd',      value: '2,24 m' },
    { label: 'Djupgående', value: '1,06 m' },
    { label: 'Deplacement',value: '1 400 kg' },
    { label: 'Motor',      value: 'Utombordare' },
    { label: 'Platser',    value: '4 pers' },
  ],
};

export const gallery = {
  label: '02 — Bilder',
  title: 'Äventyr<br><em>ombord</em>',
  intro: 'Svindersvik, Härsö, Björnö, Arholma — och platser vi inte hittade på kartan men minns för alltid.',
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
  tip:   'Packa lätt och i mjuka väskor — de går att trycka in i bagutrymmena. Hårda resväskor är opraktiska ombord. Allt på däck behöver tåla att bli vått.',
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
        { text: 'Ingen berättar vad det är förrän ombord' },
        { text: 'Traditionen får inte brytas' },
      ],
      tradition: {
        label:  'Ur historien',
        value:  'Salmia & cidervinägerchips · Halloumichips · Cidervinäger surprise',
        footer: 'Laget runt. Ingen vet vad som väntar.',
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
        'Fyll på vatten (det finns inget stopp — ta till när det rinner över)',
        'Fyll bensindunkarna',
        'Fyll bensintanken',
        'Fyll på spritköket',
        'Sätt i bensinslangen (snurran)',
        'Förbered försegel — kolla att tamparna sitter rätt',
        'Ta fram sjökort',
        'Kolla ankare och linor',
        'Kolla batteri',
        'Städa ur kölsvinet',
        'Röj upp på hyllorna',
        'Ta onödiga saker till segelvinden',
      ],
    },
    {
      title: '👨‍🏫 Säkerhetsgenomgång',
      items: [
        'Snurran (motorn) — hur den startas och stoppas',
        'Bommen — var den är och hur den rör sig utan förvarning',
        'Skota — hur man hanterar den',
        'För- och storsegel — skillnad och funktion',
        'Kryssa och slå',
        'Gippa — vad det innebär och varför det ska ropas',
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
    { num: '01', title: 'Flytväst alltid',       desc: 'Obligatorisk i dåligt väder och mörker. Skippern bestämmer när — inga diskussioner.' },
    { num: '02', title: 'Akta bommen',           desc: 'Den sitter i ögonhöjd och rör sig snabbt utan förvarning. Den har träffat folk förut.' },
    { num: '03', title: 'Tre kontaktpunkter',    desc: 'En hand för dig, en för båten. Däcket gungar och är halt — spring aldrig.' },
    { num: '04', title: 'Skippern bestämmer',    desc: 'Ombord gäller skipperns ord. Inte av hierarki — utan för att det finns en anledning.' },
    { num: '05', title: 'Inget glas på däck',    desc: 'Glasflaskor och dricksglas stannar i kajutan. Plastmuggar finns ombord.' },
    { num: '06', title: 'Sjösjuka händer',       desc: 'Ta tabletter i god tid innan avfärd. Säg till tidigt om det börjar gunga — horisontblick och frisk luft på fören hjälper mer än att krypa ner i kajutan.' },
    { num: '07', title: 'Sopor & miljö',         desc: 'Inget skräp i havet. Allt tar vi tillbaka till land.' },
    { num: '08', title: 'Alla drar sitt strå',   desc: 'Lina, fender, kaffe, disk. En segelbåt är ett litet samhälle och det märks direkt om någon inte bidrar.' },
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
  intro: 'Kolla med skippern om exakt bryggnummer och mötestid inför varje tur — och kom inte bakfull. (Rookie mistake.)',
  details: [
    { label: 'Klubb',      value: 'Svindersviks Båtklubb' },
    { label: 'Adress',     value: 'Henriksdalsbacken, Nacka' },
    { label: 'Kollektivt', value: 'Buss 53/55 från Slussen (Henriksdalsberget) eller Sickla tvärbanestation' },
    { label: 'Bil',        value: 'Parkering vid klubben' },
  ],
};
