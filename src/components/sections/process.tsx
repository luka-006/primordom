import { processSteps } from "@/lib/site";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

export function Process() {
  return (
    <section id="proces" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Kako surađujemo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Jednostavan proces — od prvog upita do redovitog održavanja u tri
            koraka.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-14 grid gap-8 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <StaggerItem key={step.step} className="relative">
              {index < processSteps.length - 1 && (
                <div
                  className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-border md:block"
                  aria-hidden="true"
                />
              )}
              <div className="text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-md">
                  {step.step}
                </span>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
