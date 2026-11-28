import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { servicePages } from "@/content/services";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.values(servicePages)
    .filter((page) => !page.parent)
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug];

  if (!page || page.parent) {
    return {};
  }

  return {
    title: page.title,
    description: page.lead,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${page.title} · AZ Solution`,
      description: page.lead,
      url: `/services/${slug}`,
      images: [{ url: page.image }]
    }
  };
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const page = servicePages[slug];

  if (!page || page.parent) {
    notFound();
  }

  return <ServiceLayout page={page} />;
}
