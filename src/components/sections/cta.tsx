import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion";
export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Trebate nekoga tko će redovito provjeriti objekt?</h2>
            <Link href="#kontakt" className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "mt-8")}>Pošaljite upit</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
