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
          <motion.h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Održavanje kuća, vikendica i plovila dok niste tu</motion.h1>
          <motion.div className="mt-8 flex flex-wrap gap-3">
            <Link href="#kontakt" className={cn(buttonVariants({ size: "lg" }))}>Pošaljite upit</Link>
          </motion.div>
        </div>
        <motion.div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl sm:aspect-[5/4]">
            <Image src={images.hero.src} alt={images.hero.alt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
