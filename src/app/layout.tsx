import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const serif = DM_Serif_Display({ variable: "--font-heading", subsets: ["latin", "latin-ext"], weight: "400", display: "swap" });
const sans = Source_Sans_3({ variable: "--font-sans", subsets: ["latin", "latin-ext"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Održavanje kuća, vikendica i plovila`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="hr" className={`${serif.variable} ${sans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
