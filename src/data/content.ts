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
    'Friendship är en Albin Viggen — stabil, lättseglad och precis rätt stor för tre till fyra vänner. Hon ligger vid Svindersviks Båtklubb i Nacka, och härifrån når du Baggensfjärden och skärgårdens naturhamnar på ungefär en timme.',
    'Varje sommar, efter en lång höst och vinter, är det äntligen dags igen. Man ställer iordning, packar mat och sätter kurs mot Härsö, Björnö eller vart det bär.',
    'Det händer saker ombord — det hör till. Men det är inte det man minns efteråt. Man minns solnedgången i Norrviken, bastun på Härsö, att räkna stjärnfall på rygg på däck en nattsvart augustikväll.',
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
  tip:   'Packa i mjuka väskor — de ryms i bagutrymmena, hårda resväskor passar inte ombord. Allt på däck behöver tåla att bli vått.',
  cards: [
    {
      icon:   'clothes',
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
      icon:   'bag',
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
      icon:   'star',
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
      title: 'Inför avfärd',
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
      ],
    },
    {
      title: 'Säkerhetsgenomgång',
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
    { num: '01', title: 'Flytväst alltid',    desc: 'Obligatorisk i dåligt väder och mörker. Skippern bestämmer när — det är inte upp för omröstning.' },
    { num: '02', title: 'Akta bommen',        desc: 'Hänger i ögonhöjd och rör sig snabbt utan förvarning. Ropar någon "gipp" — ducka omedelbart, fråga sen.' },
    { num: '03', title: 'Håll i dig',         desc: 'En hand för dig, en för båten. Däcket gungar och är halt. Spring aldrig — det slutar alltid dåligt.' },
    { num: '04', title: 'Skippern bestämmer', desc: 'Demokrati är fint till lands. Ombord gäller skipperns ord, och det finns alltid en anledning.' },
    { num: '05', title: 'Inget glas på däck', desc: 'Glasflaskor och dricksglas stannar nere i kajutan. Det är inte förhandlingsbart.' },
    { num: '06', title: 'Sjösjuka',           desc: 'Ta tabletterna i god tid — inte när det redan vaggar. Frisk luft och blicken mot horisonten hjälper mer än att krypa ihop i kajutan.' },
    { num: '07', title: 'Sopor',              desc: 'Inget skräp i havet. Allt tar vi tillbaka till land.' },
    { num: '08', title: 'Alla bidrar',        desc: 'Lina, fender, kaffe, disk. Det är en liten båt och man märker direkt om någon inte drar sitt strå.' },
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
  intro: 'Kolla med skippern om bryggnummer och mötestid inför varje tur.',
  details: [
    { label: 'Klubb',      value: 'Svindersviks Båtklubb' },
    { label: 'Adress',     value: 'Svindersviksvägen, Nacka' },
    { label: 'Kollektivt', value: 'Buss 401 från Slussen' },
    { label: 'Bil',        value: 'Parkering vid klubben' },
  ],
};
