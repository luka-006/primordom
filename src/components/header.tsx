"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#teren", label: "Teren" },
  { href: "#proces", label: "Kako radimo" },
  { href: "#faq", label: "Pitanja" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/90 shadow-sm backdrop-blur-lg"
          : "bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/"><Logo size="sm" /></Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Glavna navigacija">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="#kontakt" className={cn(buttonVariants())}>Upit</Link>
        </div>
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden" aria-label={mobileOpen ? "Zatvori izbornik" : "Otvori izbornik"} onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobilna navigacija">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2.5 text-sm font-medium" onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
            <Link href="#kontakt" className={cn(buttonVariants(), "mt-2")} onClick={() => setMobileOpen(false)}>Upit</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
