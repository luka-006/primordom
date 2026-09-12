import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/motion";
import { siteConfig } from "@/lib/site";
import { MapPin } from "lucide-react";
export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Kontakt</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Pošaljite upit</h2>
          </FadeIn>
          <FadeIn className="lg:col-span-3" delay={0.1}>
            <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm sm:p-8"><ContactForm /></div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
