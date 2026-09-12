# PrimorDom

Profesionalna landing stranica za **PrimorDom** — usluge održavanja okućnica, vikendica, jahti, brodova, apartmana, vila i soboslikanja u Hrvatskoj i Bosni i Hercegovini.

Stranica je optimizirana za SEO i hvatanje leadova putem kontakt obrasca.

## Pokretanje

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplikacija je dostupna na [http://localhost:4317](http://localhost:4317).

## Konfiguracija e-maila

1. Postavite `CONTACT_EMAIL` u `.env.local` na adresu na koju želite primati upite.
2. Za produkciju preporučujemo [Resend](https://resend.com):
   - `RESEND_API_KEY` — API ključ
   - `RESEND_FROM` — verificirana adresa pošiljatelja

Bez Resend ključa upiti se logiraju u konzolu servera (korisno za razvoj).

## Struktura

- `src/lib/site.ts` — konfiguracija firme, usluge, FAQ
- `src/components/` — UI komponente i sekcije
- `src/app/api/contact/route.ts` — API za kontakt formu
- `src/app/privatnost/` — politika privatnosti i kolačića

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
