import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { Strengths } from "@/components/home/Strengths";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: {
    absolute: "AZ Solution SARL — Immigration, voyage et services au Cameroun"
  },
  description: siteConfig.description
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.legalName,
  alternateName: siteConfig.agencyName,
  description: siteConfig.description,
  foundingDate: String(siteConfig.foundedYear),
  areaServed: "Cameroun",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM"
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Yaoundé",
      addressCountry: "CM"
    }
  ],
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  url: `https://${siteConfig.domain}`,
  openingHours: siteConfig.hours,
  knowsAbout: [
    "Immigration et visas",
    "Voyage et billetterie",
    "Cours de langues",
    "Placement de personnel",
    "Puits et aménagement",
    "Immobilier",
    "Auto-école"
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Ticker />
      <Services />
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Strengths />
      </Reveal>
      <Reveal>
        <ContactCta />
      </Reveal>
    </>
  );
}
