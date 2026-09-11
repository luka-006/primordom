import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
