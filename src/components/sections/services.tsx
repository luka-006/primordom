import {
  Home,
  TreePine,
  Ship,
  Building2,
  Paintbrush,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/site";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const iconMap = {
  home: Home,
  cabin: TreePine,
  ship: Ship,
  building: Building2,
  paint: Paintbrush,
  alert: Zap,
};

export function Services() {
  return (
    <section id="usluge" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Usluge
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Što radimo na terenu
          </h2>
          <p className="mt-4 text-muted-foreground">
            Svaki objekt je drugačiji. Prilagodimo učestalost dolazaka i posao
            prema vašim potrebama.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={service.id}>
                <Card className="h-full border-border/40 bg-background transition-shadow duration-300 hover:shadow-md">
                  <CardHeader>
                    <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="font-heading text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
