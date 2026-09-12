"use client";
import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
const staggerContainer: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
export function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (<motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: fadeUp.hidden, visible: { ...fadeUp.visible, transition: { ...(fadeUp.visible as { transition: object }).transition, delay } } }}>{children}</motion.div>);
}
export function StaggerChildren({ children, className }: { children: ReactNode; className?: string }) {
  return (<motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}>{children}</motion.div>);
}
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (<motion.div className={className} variants={fadeUp}>{children}</motion.div>);
}
