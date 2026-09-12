export const siteConfig = {
  name: "PrimorDom",
  legalName: "PrimorDom d.o.o.",
  tagline: "Kad niste na objektu, mi jesmo",
  description: "PrimorDom održava okućnice, vikendice, jahte, brodove, apartmane i vile u Hrvatskoj i Bosni i Hercegovini. Dolazimo na objekt i šaljemo fotografije.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://primordom.hr",
  locale: "hr_HR",
  regions: ["Hrvatska", "Bosna i Hercegovina"],
  keywords: ["održavanje okućnica", "održavanje vikendica", "održavanje jahti", "održavanje brodova", "održavanje apartmana", "održavanje vila", "soboslikanje", "održavanje nekretnina Hrvatska", "održavanje nekretnina Dalmacija", "održavanje vikendice udaljeno"],
};

export const services = [
  { id: "okucnice", title: "Okućnice", description: "Provjera prozora, vrata, instalacija i dvorišta. Prije vašeg dolaska provetrimo prostor i pripremimo kuću.", icon: "home" },
  { id: "vikendice", title: "Vikendice", description: "Otvaranje i zatvaranje sezone, kontrola vlage i krovišta. Posebno za objekte u zaleđu i na otocima.", icon: "cabin" },
  { id: "jahte-brodovi", title: "Jahte i brodovi", description: "Provjera plovila u luci, koordinacija servisa i pregled nakon jakog vremena. Javljamo vam stanje prije nego ste stigli u marinu.", icon: "ship" },
  { id: "apartmani-vile", title: "Apartmani i vile", description: "Kontrola između gostiju, sitni popravci i priprema za sezonu. Imamo iskustvo s iznajmljivačima duž cijele obale.", icon: "building" },
  { id: "soboslikanje", title: "Soboslikanje", description: "Krečenje stanova, kuća i apartmana. Zaštitimo namještaj, pripremimo zidove i ostavimo prostor spreman za korištenje.", icon: "paint" },
  { id: "hitne-intervencije", title: "Hitne intervencije", description: "Curenje, oluljeni krov, razbita stakla. Za ugovorene klijente dolazimo isti ili sljedeći dan, ovisno o lokaciji.", icon: "alert" },
];

export const benefits = [
  { title: "Jedan tim, više objekata", description: "Ako imate kuću u Splitu i brod u Trogiru, ne morate tražiti dva odvojena servisa. Sve ide preko jednog kontakta." },
  { title: "Fotografije nakon svakog obilaska", description: "Ne šaljemo samo poruku da je sve u redu. Dobivate slike ulaza, ključnih prostorija i svega što smo popravili." },
  { title: "Poznajemo teren", description: "Radimo od Istre do Dubrovnika, uključujući otoke i dijelove Hercegovine. Znamo lokalne majstore i servise u luci." },
  { title: "Dogovor bez iznenađenja", description: "Prije početka rada znate cijenu i učestalost dolazaka. Nema dodatnih računa koje niste vidjeli unaprijed." },
];

export const processSteps = [
  { step: "1", title: "Upit", description: "Pošaljete lokaciju objekta i što vam treba. Odgovaramo s pitanjima i okvirnom cijenom." },
  { step: "2", title: "Prvi obilazak", description: "Dolazimo na licu mjesta, snimimo stanje i dogovorimo plan rada i učestalost dolazaka." },
  { step: "3", title: "Redovni nadzor", description: "Preuzimamo brigu o objektu. Nakon svakog dolaska šaljemo kratki izvještaj s fotografijama." },
];

export const faqs = [
  { question: "Radite li ako živim izvan Hrvatske?", answer: "Da, to je najčešći slučaj. Većina klijenata nam ne može otvoriti vrata osobno. Dogovorimo ključeve ili pristup, a vi pratite sve putem maila." },
  { question: "Koliko brzo stižete na hitan kvar?", answer: "Za klijente s ugovorom obično isti ili sljedeći radni dan. Za curenje vode i oštećenje nakon oluje prioritet nam je dolazak što prije." },
  { question: "Možete li krečiti apartman prije sezone?", answer: "Da. Soboslikanje radimo kao zasebnu uslugu ili u sklopu sezonskog paketa za apartmane i vile." },
  { question: "Kako se naplaćuje?", answer: "Nudimo fiksni mjesečni iznos za redovite obilaske ili naplatu po obavljenom poslu. Sve piše u ponudi prije nego krenemo." },
];

export const serviceOptions = ["Održavanje okućnice", "Održavanje vikendice", "Održavanje jahte i broda", "Održavanje apartmana ili vile", "Soboslikanje", "Hitna intervencija", "Ostalo"];
