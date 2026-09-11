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
    <section id="usluge" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Usluge prilagođene vašem objektu
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Od sezonskog održavanja vikendice do redovitih obilazaka jahte —
            jedan tim, jedan kontakt, bez komplikacija.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={service.id}>
                <Card className="h-full border-border/60 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
                  <CardHeader>
                    <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
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
