import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/motion";
import { siteConfig } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pošaljite upit
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Opišite objekt i potrebe — javljamo se u roku od 24 sata s
              prijedlogom i okvirnom cijenom.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">E-mail</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Telefon</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Područje rada</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.regions.join(" · ")}
                  </p>
                </div>
              </li>
            </ul>
          </FadeIn>

          <FadeIn className="lg:col-span-3" delay={0.1}>
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
