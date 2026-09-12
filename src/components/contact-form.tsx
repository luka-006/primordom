"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions } from "@/lib/site";
import { getCookieConsent } from "@/components/cookie-banner";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setConsent(getCookieConsent());

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<"accepted" | "declined">).detail;
      setConsent(detail);
    };
    window.addEventListener("cookie-consent-change", handler);
    return () => window.removeEventListener("cookie-consent-change", handler);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (consent !== "accepted") {
      setErrorMessage(
        "Za slanje upita potrebno je prihvatiti kolačiće u banneru na dnu stranice."
      );
      setState("error");
      return;
    }

    setState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Greška pri slanju upita.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Došlo je do greške. Pokušajte ponovo."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/30">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" aria-hidden="true" />
        <div>
          <h3 className="text-lg font-semibold">Upit je poslan!</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Javit ćemo vam se u najkraćem roku, obično unutar 24 sata.
          </p>
        </div>
        <Button variant="outline" onClick={() => setState("idle")}>
          Pošalji novi upit
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {consent !== "accepted" && (
        <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-100">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            Za slanje upita prihvatite kolačiće u banneru na dnu stranice. To
            nam omogućuje obradu vaših podataka radi odgovora.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Ime i prezime *</Label>
          <Input id="name" name="name" required placeholder="Ivan Horvat" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input id="email" name="email" type="email" required placeholder="ivan@primjer.hr" autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+385 91 123 4567" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Grad / lokacija objekta *</Label>
          <Input id="location" name="location" required placeholder="npr. Split, Makarska, Dubrovnik..." />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Vrsta usluge *</Label>
        <select id="service" name="service" required className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50" defaultValue="">
          <option value="" disabled>Odaberite uslugu</option>
          {serviceOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Poruka *</Label>
        <Textarea id="message" name="message" required rows={4} placeholder="Opišite objekt, učestalost održavanja i posebne zahtjeve..." />
      </div>

      {state === "error" && errorMessage && (<p className="text-sm text-destructive" role="alert">{errorMessage}</p>)}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={state === "loading"}>
        {state === "loading" ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />Šaljem...</>) : ("Pošalji upit")}
      </Button>

      <p className="text-xs text-muted-foreground">
        Slanjem upita potvrđujete da ste pročitali{" "}
        <a href="/privatnost" className="underline underline-offset-2 hover:text-foreground">politiku privatnosti</a>.
      </p>
    </form>
  );
}
