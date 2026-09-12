export const siteConfig = {
  name: "PrimorDom",
  legalName: "PrimorDom d.o.o.",
  tagline: "Kad niste na objektu, mi jesmo",
  description:
    "PrimorDom održava okućnice, vikendice, jahte, brodove, apartmane i vile u Hrvatskoj i Bosni i Hercegovini. Dolazimo na objekt i šaljemo fotografije.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://primordom.hr",
  locale: "hr_HR",
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
    "održavanje vikendice udaljeno",
  ],
};

export const serviceOptions = [
  "Održavanje okućnice",
  "Održavanje vikendice",
  "Održavanje jahte i broda",
  "Održavanje apartmana ili vile",
  "Soboslikanje",
  "Hitna intervencija",
  "Ostalo",
];
