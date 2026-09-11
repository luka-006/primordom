"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site";
import { ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-0 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-sky-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.7 0 0 / 0.12) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 rounded-full px-3 py-1">
              Hrvatska & BiH · Besplatna procjena
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Održavanje vaše nekretnine{" "}
            <span className="text-primary">dok ste daleko</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            {siteConfig.name} preuzima brigu o okućnicama, vikendicama, jahtama,
            brodovima, apartmanima i vilama — uz profesionalno soboslikanje i
            redovite izvještaje s fotografijama.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <Link href="#kontakt" className={cn(buttonVariants({ size: "lg" }))}>
              Zatražite besplatnu procjenu
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#usluge"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Pogledajte usluge
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {[
            { icon: ShieldCheck, label: "Provjereni izvođači" },
            { icon: Clock, label: "Brza reakcija 24/7" },
            { icon: MapPin, label: "Obala i unutrašnjost" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
