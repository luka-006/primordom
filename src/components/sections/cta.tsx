import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
              Spremni za mir u glavi?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Pošaljite upit danas i dobijte besplatnu procjenu za održavanje
              vaše nekretnine ili plovila — bez obveze.
            </p>
            <Link
              href="#kontakt"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "relative mt-8"
              )}
            >
              Zatražite procjenu
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
