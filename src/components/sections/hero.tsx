"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <motion.p className="text-sm font-medium uppercase tracking-widest text-primary" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>Split i Jadran</motion.p>
          <motion.h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.06 }}>Održavanje kuća, vikendica i plovila dok niste tu</motion.h1>
          <motion.p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>Dolazimo na objekt, provjeravamo stanje i šaljemo fotografije. Radimo u Hrvatskoj i Bosni i Hercegovini.</motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }}>
            <Link href="#kontakt" className={cn(buttonVariants({ size: "lg" }))}>Pošaljite upit</Link>
            <Link href="#usluge" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>Pogledajte usluge</Link>
          </motion.div>
        </div>
        <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.15 }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 sm:aspect-[5/4]">
            <Image src={images.hero.src} alt={images.hero.alt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>
          <motion.div className="absolute -bottom-4 -left-4 rounded-2xl border border-border/50 bg-card p-4 shadow-lg sm:-bottom-6 sm:-left-6" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <p className="text-xs text-muted-foreground">Zadnji izvještaj</p>
            <p className="font-medium">Vikendica, Brač</p>
            <p className="text-sm text-primary">12 fotografija poslano</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
