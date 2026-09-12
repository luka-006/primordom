"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/images";
import { FadeIn } from "@/components/motion";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="teren" ref={ref} className="scroll-mt-20 overflow-hidden bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Teren</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Radimo tamo gdje je vaš objekt</h2>
          <p className="mt-4 text-muted-foreground">Obala, otoci, zaleđe i marine. Svaki obilazak završavamo fotografijama koje možete proslijediti obitelji ili suvlasnicima.</p>
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-12 md:grid-rows-2">
          <motion.div style={{ y: y1 }} className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-[420px]">
            <Image src={images.villa.src} alt={images.villa.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 58vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-medium text-white">Vile i apartmani</p>
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative aspect-[16/10] overflow-hidden rounded-2xl md:col-span-5">
            <Image src={images.yacht.src} alt={images.yacht.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 42vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-medium text-white">Jahte i brodovi</p>
          </motion.div>
          <motion.div style={{ y: y1 }} className="relative aspect-[16/10] overflow-hidden rounded-2xl md:col-span-5">
            <Image src={images.paint.src} alt={images.paint.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 42vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-medium text-white">Soboslikanje</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
