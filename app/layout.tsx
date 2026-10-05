import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.santosvillada.com";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Santos Villada | Soluciones digitales con desarrollo e IA",
  description: "Santos Villada construye websites, aplicaciones web, automatizaciones y productos digitales con desarrollo moderno e inteligencia artificial.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Santos Villada",
    title: "Santos Villada | Soluciones digitales con desarrollo e IA",
    description: "Desarrollo productos digitales, automatizaciones y aplicaciones web con herramientas modernas e IA.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Santos Villada, desarrollo web e IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santos Villada | Soluciones digitales con desarrollo e IA",
    description: "Desarrollo productos digitales, automatizaciones y aplicaciones web con herramientas modernas e IA.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${display.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
