import { processSteps } from "@/lib/site";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
export function Process() {
  return (
    <section id="proces" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Suradnja</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Kako krenemo</h2>
        </FadeIn>
        <StaggerChildren className="mt-14 grid gap-8 md:grid-cols-3">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative rounded-2xl border border-border/50 bg-background p-6">
                <span className="font-heading text-5xl font-light text-primary/20">{step.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
