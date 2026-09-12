import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  location?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() ?? "";
    const service = body.service?.trim();
    const location = body.location?.trim();
    const message = body.message?.trim();
    if (!name || !email || !service || !location || !message) {
      return NextResponse.json({ error: "Molimo ispunite sva obavezna polja." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Unesite ispravnu e-mail adresu." }, { status: 400 });
    }
    const recipient = process.env.CONTACT_EMAIL ?? "itsnovahub@gmail.com";
    const emailBody = `Novi upit s web stranice ${siteConfig.name}\n\nIme: ${name}\nE-mail: ${email}\nTelefon: ${phone || "nije naveden"}\nUsluga: ${service}\nLokacija: ${location}\n\nPoruka:\n${message}`.trim();
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && recipient) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: process.env.RESEND_FROM ?? `${siteConfig.name} <onboarding@resend.dev>`, to: [recipient], reply_to: email, subject: `Novi upit: ${service}, ${location}`, text: emailBody }),
      });
      if (!res.ok) {
        return NextResponse.json({ error: "Greška pri slanju e-maila." }, { status: 500 });
      }
    } else {
      console.log(emailBody);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Došlo je do greške." }, { status: 500 });
  }
}
