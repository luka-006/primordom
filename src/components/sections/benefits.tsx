import { benefits } from "@/lib/site";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { Check } from "lucide-react";

export function Benefits() {
  return (
    <section id="zasto" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Zašto vlasnici biraju PrimorDom
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Znamo koliko je važeno imati nekretninu pod nadzorom kad niste na
              mjestu. Zato radimo transparentno, redovito i s fokusom na mir
              vlasnika — bilo da ste u Zagrebu, Münchenu ili Sydneyu.
            </p>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm font-medium text-primary">
                &ldquo;Vaša nekretnina zaslužuje istu pažnju kao da ste sami
                tamo.&rdquo;
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
