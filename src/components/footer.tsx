import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Anchor, Mail, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Anchor className="h-4 w-4" aria-hidden="true" /></span>
              <span className="text-lg font-semibold">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{siteConfig.tagline}. Pouzdano održavanje nekretnina i plovila u Hrvatskoj i Bosni i Hercegovini.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Navigacija</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#usluge" className="hover:text-primary">Usluge</Link></li>
              <li><Link href="#zasto" className="hover:text-primary">Zašto PrimorDom</Link></li>
              <li><Link href="#proces" className="hover:text-primary">Kako radimo</Link></li>
              <li><Link href="#kontakt" className="hover:text-primary">Kontakt</Link></li>
              <li><Link href="/privatnost" className="hover:text-primary">Privatnost</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" aria-hidden="true" /><a href={`mailto:${siteConfig.email}`} className="hover:text-primary">{siteConfig.email}</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" aria-hidden="true" /><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-primary">{siteConfig.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.legalName}. Sva prava pridržana.</p>
          <p>Hrvatska · Bosna i Hercegovina</p>
        </div>
      </div>
    </footer>
  );
}
