import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. Dolazimo na objekt i šaljemo fotografije.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Stranica</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#usluge" className="hover:text-primary">Usluge</Link></li>
              <li><Link href="#teren" className="hover:text-primary">Teren</Link></li>
              <li><Link href="#kontakt" className="hover:text-primary">Kontakt</Link></li>
              <li><Link href="/privatnost" className="hover:text-primary">Privatnost</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {year} {siteConfig.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
