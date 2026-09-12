import { benefits } from "@/lib/site";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
export function Benefits() {
  return (
    <section id="zasto" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Zašto nas zovu</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Ljudi nam vjeruju jer im šaljemo slike, ne samo obećanja</h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <StaggerItem key={benefit.title}>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                <span className="font-heading text-4xl font-light text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
