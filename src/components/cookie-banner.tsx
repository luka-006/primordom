"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "primordom-cookie-consent";

export type CookieConsent = "accepted" | "declined" | null;

export function getCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-label="Postavke kolačića" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl animate-in slide-in-from-bottom-4 fade-in duration-500 rounded-2xl border border-border/60 bg-card/95 p-5 shadow-2xl backdrop-blur-md sm:inset-x-6">
      <div className="flex gap-4">
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
          <Cookie className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-sm font-medium text-foreground">Kolačići i privatnost</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Koristimo nužne kolačiće za rad stranice te, uz vaš pristanak, obrađujemo podatke iz kontakt obrasca radi odgovora na upit.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={() => handleConsent("accepted")}>Prihvaćam</Button>
            <Button size="sm" variant="outline" onClick={() => handleConsent("declined")}>Samo nužni</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
