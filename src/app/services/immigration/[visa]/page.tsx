import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { servicePages, visaSlugs } from "@/content/services";

type VisaRouteProps = {
  params: Promise<{ visa: string }>;
};

export function generateStaticParams() {
  return visaSlugs.map((visa) => ({ visa }));
}

export async function generateMetadata({ params }: VisaRouteProps): Promise<Metadata> {
  const { visa } = await params;
  const page = servicePages[visa];

  if (!page || page.parent?.href !== "/services/immigration") {
    return {};
  }

  return {
    title: page.title,
    description: page.lead,
    alternates: { canonical: `/services/immigration/${visa}` },
    openGraph: {
      title: `${page.title} · AZ Solution`,
      description: page.lead,
      url: `/services/immigration/${visa}`,
      images: [{ url: page.image }]
    }
  };
}

export default async function VisaPage({ params }: VisaRouteProps) {
  const { visa } = await params;
  const page = servicePages[visa];

  if (!page || page.parent?.href !== "/services/immigration") {
    notFound();
  }

  return <ServiceLayout page={page} />;
}
