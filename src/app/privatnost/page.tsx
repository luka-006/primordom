import Link from "next/link";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: `Politika privatnosti i kolačića, ${siteConfig.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-4 sm:px-6">
          <Link href="/" className="text-sm font-medium text-primary hover:underline">
            ← Natrag na početnu
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight">Politika privatnosti</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Posljednje ažuriranje: {new Date().toLocaleDateString("hr-HR")}
        </p>

        <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground dark:prose-invert">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Tko smo</h2>
            <p>
              {siteConfig.legalName} ({siteConfig.name}) pruža usluge održavanja
              nekretnina i plovila u Republici Hrvatskoj i Bosni i Hercegovini.
              Za upite koristite kontakt obrazac na početnoj stranici.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Koje podatke prikupljamo</h2>
            <p>
              Putem kontakt obrasca prikupljamo: ime i prezime, e-mail adresu,
              telefon (opcionalno), lokaciju objekta, vrstu usluge i poruku.
              Te podatke koristimo isključivo za odgovor na vaš upit i eventualnu
              ponudu usluga.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Kolačići</h2>
            <p>
              Koristimo nužne kolačiće za osnovno funkcioniranje stranice. Uz
              vaš pristanak pohranjujemo izbor o kolačićima u lokalnoj pohrani
              preglednika (localStorage). Ne koristimo oglašivačke kolačiće trećih
              strana na ovoj stranici.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Pravna osnova i zadržavanje</h2>
            <p>
              Podatke obrađujemo na temelju vašeg pristanka (slanje upita) i
              legitimnog interesa (odgovor na upit). Podatke čuvamo do završetka
              komunikacije ili do isteka zakonskih rokova, ovisno o tome što je
              duže potrebno.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Vaša prava</h2>
            <p>
              Imate pravo na pristup, ispravak, brisanje, ograničenje obrade,
              prigovor i prijenos podataka. Za ostvarivanje prava pošaljite upit
              putem kontakt obrasca na početnoj stranici.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Analitika</h2>
            <p>
              Ova stranica može koristiti alate za analitiku posjećenosti u svrhu
              poboljšanja usluge. Ako se takvi alati uključe, ova politika će biti
              ažurirana s detaljima o vrsti podataka i načinu odjave.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
