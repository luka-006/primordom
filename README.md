# PrimorDom

Profesionalna landing stranica za **PrimorDom** — usluge održavanja okućnica, vikendica, jahti, brodova, apartmana, vila i soboslikanja u Hrvatskoj i Bosni i Hercegovini.

Stranica je optimizirana za SEO i hvatanje leadova putem kontakt forme.

## Repozitorij

GitHub: [github.com/luka-006/primordom](https://github.com/luka-006/primordom)

## Pokretanje lokalno

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplikacija je dostupna na [http://localhost:4317](http://localhost:4317).

## Deploy (Vercel + GitHub)

Projekt je povezan s GitHub repozitorijem. Svaki push na `main` automatski pokreće deploy na Vercelu.

### Environment varijable na Vercelu

| Varijabla | Opis |
|-----------|------|
| `CONTACT_EMAIL` | Adresa na koju stižu upiti (`itsnovahub@gmail.com`) |
| `NEXT_PUBLIC_SITE_URL` | Produkcijski URL (npr. `https://primordom-luka6.vercel.app`) |
| `RESEND_API_KEY` | (opcionalno) Resend API ključ za slanje mailova |
| `RESEND_FROM` | (opcionalno) Verificirana adresa pošiljatelja |

Bez Resend ključa upiti se logiraju u server log (korisno za testiranje).

## Struktura

- `src/lib/site.ts` — konfiguracija firme, usluge, FAQ
- `src/components/` — UI komponente i sekcije
- `src/app/api/contact/route.ts` — API za kontakt formu
- `src/app/privatnost/` — politika privatnosti i kolačića
- `public/images/` — lokalne slike za hero i showcase

## SEO

- Hrvatski jezik (`lang="hr"`)
- Open Graph i Twitter meta tagovi
- JSON-LD LocalBusiness schema
- `sitemap.xml` i `robots.txt`

## Tehnologije

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
