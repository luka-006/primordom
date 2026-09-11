export const siteConfig = {
  name: "PrimorDom",
  legalName: "PrimorDom d.o.o.",
  tagline: "Profesionalno održavanje nekretnina uz more i u prirodi",
  description:
    "PrimorDom pruža pouzdano održavanje okućnica, vikendica, jahti, brodova, apartmana i vila te soboslikanje u Hrvatskoj i Bosni i Hercegovini. Besplatna procjena i brza reakcija.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://primordom.hr",
  locale: "hr_HR",
  email: process.env.CONTACT_EMAIL ?? "upit@primordom.hr",
  phone: "+385 91 000 0000",
  regions: ["Hrvatska", "Bosna i Hercegovina"],
  keywords: [
    "održavanje okućnica",
    "održavanje vikendica",
    "održavanje jahti",
    "održavanje brodova",
    "održavanje apartmana",
    "održavanje vila",
    "soboslikanje",
    "održavanje nekretnina Hrvatska",
    "održavanje nekretnina Dalmacija",
    "održavanje nekretnina Istra",
    "održavanje vikendice udaljeno",
    "sezonsko održavanje kuće",
    "održavanje nekretnine dok ste odsutni",
  ],
};

export const services = [
  {
    id: "okucnice",
    title: "Održavanje okućnica",
    description:
      "Redoviti pregledi, sitni popravci, provjera instalacija i priprema objekta za vaš dolazak — bez brige dok ste daleko.",
    icon: "home",
  },
  {
    id: "vikendice",
    title: "Održavanje vikendica",
    description:
      "Sezonsko otvaranje i zatvaranje, provjera krova, ventilacije i vlažnosti te brza intervencija po potrebi.",
    icon: "cabin",
  },
  {
    id: "jahte-brodovi",
    title: "Jahte i brodovi",
    description:
      "Praćenje stanja plovila, koordinacija servisa, provjera nakon oluje i priprema za sezonu ili skladištenje.",
    icon: "ship",
  },
  {
    id: "apartmani-vile",
    title: "Apartmani i vile",
    description:
      "Održavanje za iznajmljivače i vlasnike: kontrola između gostiju, hitne intervencije i redoviti izvještaji.",
    icon: "building",
  },
  {
    id: "soboslikanje",
    title: "Soboslikanje",
    description:
      "Profesionalno krečenje i bojanje unutarnjih prostora uz pažljivu pripremu zidova i čist rad.",
    icon: "paint",
  },
  {
    id: "hitne-intervencije",
    title: "Hitne intervencije",
    description:
      "Brza reakcija na curenje, oštećenja nakon vremena ili neočekivane situacije — dostupni kad vam treba.",
    icon: "alert",
  },
];

export const benefits = [
  {
    title: "Jedan kontakt za sve",
    description:
      "Kuća, vikendica, plovilo ili apartman — sve na jednom mjestu, bez traženja različitih izvođača.",
  },
  {
    title: "Izvještaji s fotografijama",
    description:
      "Nakon svakog obilaska dobivate jasan pregled stanja i što je napravljeno — transparentno i pouzdano.",
  },
  {
    title: "Pokrivenost HR i BiH",
    description:
      "Radimo na obali i u unutrašnjosti Hrvatske te u dijelovima Bosne i Hercegovine po dogovoru.",
  },
  {
    title: "Fleksibilni planovi",
    description:
      "Mjesečno održavanje, sezonski paketi ili jednokratne intervencije — prilagođeno vašem objektu.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Besplatna procjena",
    description: "Opišite objekt i potrebe — javimo se s prijedlogom i okvirnom cijenom.",
  },
  {
    step: "02",
    title: "Dogovor i plan",
    description: "Definiramo učestalost obilazaka, prioritete i način izvještavanja.",
  },
  {
    step: "03",
    title: "Redovito održavanje",
    description: "Naš tim preuzima brigu — vi dobivate mir i ažurne informacije.",
  },
];

export const faqs = [
  {
    question: "Radite li s vlasnicima koji žive u inozemstvu?",
    answer:
      "Da. Većina naših klijenata ima nekretninu u Hrvatskoj ili BiH, a živi u drugoj državi. Redovito šaljemo izvještaje i po potrebi koordiniramo hitne intervencije bez vašeg fizičkog prisustva.",
  },
  {
    question: "Koliko brzo možete reagirati na hitan problem?",
    answer:
      "Za ugovorene klijente ciljamo odgovor u roku od 24 sata, a za hitne slučajeve (curenje, oštećenje) prioritetno u istom ili sljedećem danu, ovisno o lokaciji.",
  },
  {
    question: "Pokrivate li i unutrašnje poslove poput soboslikanja?",
    answer:
      "Da. Soboslikanje je dio naše ponude. Možete ga uključiti u sezonski paket ili naručiti kao zasebnu uslugu.",
  },
  {
    question: "Kako funkcionira naplata?",
    answer:
      "Nudimo fiksne mjesečne pakete ili naplatu po obavljenom poslu, ovisno o vrsti i učestalosti održavanja. Sve je dogovoreno unaprijed — bez skrivenih troškova.",
  },
];

export const serviceOptions = [
  "Održavanje okućnice",
  "Održavanje vikendice",
  "Održavanje jahte / broda",
  "Održavanje apartmana / vile",
  "Soboslikanje",
  "Hitna intervencija",
  "Ostalo",
];
