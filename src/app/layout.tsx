import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

const siteUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AZ Solution SARL — Immigration, voyage et services au Cameroun",
    template: "%s · AZ Solution"
  },
  description: siteConfig.description,
  keywords: [
    "immigration Cameroun",
    "agence de voyage",
    "visa études",
    "visa travail",
    "cours de langues",
    "placement de personnel",
    "puits et aménagement",
    "immobilier",
    "auto-école",
    "AZ Solution",
    "Douala",
    "Yaoundé"
  ],
  authors: [{ name: siteConfig.legalName }],
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: siteConfig.legalName,
    title: "AZ Solution SARL — Immigration, voyage et services au Cameroun",
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1128"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
