// ═══════════════════════════════════════════════════════
// SITE CONTENT
// Edit this file to update all text on the site.
// In titles, wrap italic text with <em>...</em>
// ═══════════════════════════════════════════════════════

export const site = {
  title:       'Friendship – S/Y Albin Viggen',
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
  { label: 'Packlista',     href: '#pack' },
  { label: 'Inför segling', href: '#infor' },
  { label: 'Ombord',        href: '#regler' },
  { label: 'Hitta hit',     href: '#hitta' },
  { label: 'Bilder',        href: '#bilder' },
];

export const about = {
  label: '01 – Om båten',
  title: 'En klassiker<br>på <em>Stockholms vatten</em>',
  paragraphs: [
    'Friendship är en Albin Viggen – stabil, lättseglad och precis rätt stor för tre till fyra vänner. Hon ligger vid Svindersviks Båtklubb i Nacka, och härifrån når du Baggensfjärden och skärgårdens naturhamnar på ungefär en timme.',
    'Varje sommar, efter en lång höst och vinter, är det äntligen dags igen. Man ställer iordning, packar mat och sätter kurs mot Härsö, Björnö eller vart det bär.',
    'Det händer saker ombord – det hör till. Men det är inte det man minns efteråt. Man minns solnedgången i Norrviken, bastun på Härsö, att räkna stjärnfall på rygg på däck en nattsvart augustikväll.',
  ],
  specs: [
    { label: 'Typ',        value: 'Albin Viggen' },
    { label: 'Årsmodell',  value: '1975' },
    { label: 'Längd',      value: '7,1 m' },
    { label: 'Bredd',      value: '2,24 m' },
    { label: 'Djupgående', value: '1,11 m' },
    { label: 'Deplacement',value: '1 400 kg' },
    { label: 'Motor',      value: 'Utombordare' },
    { label: 'Platser',    value: '4 pers' },
  ],
};

export const gallery = {
  label: '02 – Bilder',
  title: 'Eskapader<br><em>och bravader</em>',
  intro: 'Ur loggboken: Svindersvik, Härsö, Björnö, Arholma – och platser vi inte hittade på kartan men minns för alltid.',
  // Lägg bildfiler i src/assets/bilder/ och skriv filnamnet i src-fältet.
  // Labeln blir alt-text. featured: true ger en stor 2×2-ruta i rutnätet.
  // Tom src visar en platshållare med labeln.
  items: [
    { label: 'Friendship för ankar i naturhamn',   src: 'IMG_1693.jpeg', featured: true },
    { label: 'Under segling på öppet vatten',      src: 'IMG_3381.jpeg' },
    { label: 'Rorsman i regnväder',                src: 'IMG_1610.jpeg' },
    { label: 'Kartläsning i sittbrunnen',          src: 'IMG_0639.jpeg' },
    { label: 'Skrovet under gång i motljus',       src: 'IMG_3405.jpeg' },
    { label: 'Glada miner i sittbrunnen',          src: 'IMG_9216.jpeg' },
    { label: 'Vila ombord',                        src: 'IMG_9056.jpeg' },
    { label: 'Lunch under segling',                src: 'IMG_9208.jpeg' },
    { label: 'Kaffe över sjökortet',               src: 'IMG_9186.jpeg' },
    { label: 'Besättningen',                       src: '000006280016.jpeg', featured: true },
    { label: 'Frukost i naturhamn',                src: 'IMG_4952.jpeg' },
    { label: 'Middag ombord',                      src: 'P1210565.jpeg' },
    { label: 'Grillkväll på klipporna',            src: 'IMG_1076.jpeg' },
    { label: 'En get på strandbesök',              src: 'IMG_5276.jpeg' },
    { label: 'Svala på mantåget',                  src: 'IMG_8884.jpeg' },
    { label: 'Ankrad i viken',                     src: 'IMG_8856.jpeg' },
    { label: 'Förtöjd vid klipporna',              src: 'R1-02503-0011.jpeg' },
    { label: 'Kvällsljus vid bryggan',             src: 'IMG_3346.jpeg' },
    { label: 'Solnedgång över fjärden',            src: 'IMG_1082.jpeg' },
    { label: 'Sen kväll ombord',                   src: 'P1210593.jpeg' },
    { label: 'Arbete på fördäck',                  src: 'IMG_3714.jpeg' },
    { label: 'Sjösättning',                        src: 'IMG_2035.jpeg' },
  ],
};

export const packing = {
  label: '03 – Packlista',
  title: 'Vad tar du<br><em>med dig?</em>',
  tip:   'Packa i mjuka väskor – de ryms i stuvutrymmena, hårda resväskor passar inte ombord. Allt på däck behöver tåla att bli vått.',
  cards: [
    {
      icon:   'clothes',
      title:  'Kläder & skydd',
      snacks: false,
      items: [
        { text: 'Regnkläder' },
        { text: 'Kläder för både varmt och kallt' },
        { text: 'Keps' },
        { text: 'Solglasögon' },
        { text: 'Badkläder' },
        { text: 'Tofflor / sandaler' },
        { text: 'Halkfria skor' },
        { text: 'Solskyddsfaktor' },
      ],
    },
    {
      icon:   'bag',
      title:  'Personligt',
      snacks: false,
      items: [
        { text: 'Sovsäck eller sängkläder + filt' },
        { text: 'Handduk' },
        { text: 'Pannlampa' },
        { text: 'Powerbank' },
        { text: 'Vattenflaska' },
        { text: 'Myggmedel' },
        { text: 'Personliga mediciner' },
      ],
    },
    {
      icon:   'star',
      title:  'Oväntat snacks',
      snacks: true,
      items: [
        { text: 'Alla tar med varsitt snacks att dela' },
        { text: 'Något oväntat' },
        { text: 'Avslöjas ombord' },
      ],
      tradition: {
        label:  'Tidigare år',
        value:  'Svampte · Lakritspipor',
        footer: 'En frivillig tradition ombord.',
      },
    },
  ],
};

export const prep = {
  label: '04 – Att tänka på',
  title: 'Inför<br><em>avfärd</em>',
  intro: 'Det här gör vi tillsammans innan vi lägger ut. Kapten visar och alla hjälps åt, ingen förväntas kunna något i förväg.',
  checklists: [
    {
      title: 'Vi ställer i ordning',
      items: [
        'Fyll på vatten',
        'Fyll bensindunkarna',
        'Fyll bensintanken',
        'Fyll på spritköket',
        'Sätt i bensinslangen (snurran)',
        'Förbered försegel – kolla att tamparna sitter rätt',
        'Ta fram sjökort',
        'Kolla ankare och linor',
        'Kolla batteri',
        'Städa ur kölsvinet',
        'Röj upp på hyllorna',
        'Ta onödiga saker till segelvinden',
      ],
    },
    {
      title: 'Säkerhetsgenomgång',
      items: [
        'Snurran (motorn) – hur den startas och stoppas',
        'Bommen – var den är och hur den rör sig utan förvarning',
        'Skota – hur man hanterar den',
        'För- och storsegel – skillnad och funktion',
        'Kryssa och slå',
        'Gippa – vad det innebär och varför det ska ropas',
        'Lägga runt knap',
        'Sätta och ta ner segel',
        'Ankra',
        'Var säkerhetsutrustning finns',
      ],
    },
  ],
};

export const rules = {
  label: '05 – Ombord',
  title: 'Att tänka på<br><em>som besättning</em>',
  items: [
    { num: '01', title: 'Flytväst alltid',    desc: 'Alla ombord bär flytväst, oavsett väder.' },
    { num: '02', title: 'Akta bommen',        desc: 'Hänger i ögonhöjd och rör sig snabbt utan förvarning. Ropar någon "gipp" – ducka omedelbart, fråga sen.' },
    { num: '03', title: 'Håll i dig',         desc: 'En hand för dig, en för båten. Däcket gungar och är halt. Spring aldrig – det slutar alltid dåligt.' },
    { num: '04', title: 'Kapten bestämmer', desc: 'Demokrati är fint till lands. Ombord gäller kaptenens ord, och det finns alltid en anledning.' },
    { num: '05', title: 'Sjösjuka',           desc: 'Frisk luft och blicken mot horisonten hjälper mer än att krypa ihop i kajutan.' },
    { num: '06', title: 'Sopor',              desc: 'Inget skräp i havet. Allt tar vi tillbaka till land.' },
    { num: '07', title: 'Alla bidrar',        desc: 'Lina, fender, kaffe, disk. Det är en liten båt och man märker direkt om någon inte drar sitt strå.' },
  ],
  emergency: {
    phone:     '112',
    phoneHref: 'tel:112',
    phoneNote: 'begär sjöräddning',
    vhf:       'VHF kanal 16 (anropa Sweden Rescue)',
    mayday:    'MAYDAY',
    ssrsLabel: 'Sjöräddningssällskapet',
    ssrsPhone: '077-579 00 90',
    ssrsHref:  'tel:+46775790090',
    note:      'Kapten visar vid avfärd var nödutrustning (raketer, brandsläckare, livboj) finns.',
  },
};

export const howToFind = {
  label: '06 – Praktiskt',
  title: 'Att hitta<br><em>till båten</em>',
  intro: 'Kolla med kapten om bryggnummer och mötestid inför varje tur.',
  details: [
    { label: 'Klubb',      value: 'Svindersviks Båtklubb' },
    { label: 'Adress',     value: 'Henriksdalsbacken, Nacka', href: 'https://maps.google.com/?q=Svindersviks+B%C3%A5tklubb,+Nacka' },
    { label: 'Kollektivt', value: 'Buss 53/55 från Slussen (Henriksdalsberget) eller Sickla tvärbanestation' },
    { label: 'Bil',        value: 'Parkering vid klubben' },
  ],
};
