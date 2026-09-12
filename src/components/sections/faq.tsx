"use client";
import { useState } from "react";
import { faqs } from "@/lib/site";
import { FadeIn } from "@/components/motion";
import { ChevronDown } from "lucide-react";
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Često pitaju</h2>
        </FadeIn>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
                  <button type="button" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}>
                    {faq.question}
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p className="px-5 pb-4 text-sm text-muted-foreground">{faq.answer}</p>}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
