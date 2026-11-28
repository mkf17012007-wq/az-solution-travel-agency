import Image from "next/image";
import Link from "next/link";
import { mailtoHref, whatsappHref } from "@/config/site";
import { services } from "@/content/home";
import type { ServicePageData } from "@/content/services";
import { ArrowRightIcon, CheckIcon, MailIcon, WhatsAppIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";
import { ServiceCta } from "./ServiceCta";

type ServiceLayoutProps = {
  page: ServicePageData;
};

export function ServiceLayout({ page }: ServiceLayoutProps) {
  const message = `Bonjour AZ Solution, je souhaite obtenir des informations sur ${page.title}.`;
  const related = services.filter((service) => service.slug !== page.slug);

  return (
    <>
      <section className="service-hero">
        <div className="container service-hero__inner">
          <div className="service-hero__content">
            <nav className="breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden="true">/</span>
              <Link href="/#services">Services</Link>
              {page.parent && (
                <>
                  <span aria-hidden="true">/</span>
                  <Link href={page.parent.href}>{page.parent.title}</Link>
                </>
              )}
              <span aria-hidden="true">/</span>
              <span aria-current="page">{page.title}</span>
            </nav>
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p className="service-hero__lead">{page.lead}</p>
            <div className="service-hero__actions">
              <a
                className="btn btn--primary btn--lg"
                href={whatsappHref(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                Demander des informations
              </a>
              <a
                className="btn btn--ghost btn--lg"
                href={mailtoHref(`Information — ${page.title}`)}
              >
                <MailIcon size={18} />
                Nous écrire
              </a>
            </div>
          </div>
          <div className="service-hero__media">
            <Image
              src={page.image}
              alt={`Illustration du service ${page.title}`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className="service-hero__image"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="left"
            eyebrow="Notre accompagnement"
            title="Comment nous vous accompagnons"
            lead={page.intro}
          />
          <div className="service-blocks">
            {page.blocks.map((block) => (
              <article className="service-block" key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
                <ul className="check-list" role="list">
                  {block.points.map((point) => (
                    <li key={point}>
                      <CheckIcon size={17} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container service-highlights">
          <div>
            <span className="eyebrow">Ce qui nous guide</span>
            <h2 className="section-title">Un cadre clair, avant tout engagement</h2>
          </div>
          <ul className="check-list check-list--large" role="list">
            {page.highlights.map((highlight) => (
              <li key={highlight}>
                <CheckIcon size={18} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {page.subServices && (
        <section className="section">
          <div className="container">
            <SectionHeading
              align="left"
              eyebrow="Nos accompagnements"
              title="Les demandes les plus fréquentes"
            />
            <div className="subservices">
              {page.subServices.map((subService) => (
                <Link className="subservice-card" href={subService.href} key={subService.href}>
                  <h3>{subService.title}</h3>
                  <p>{subService.description}</p>
                  <span className="subservice-card__link">
                    En savoir plus
                    <ArrowRightIcon size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            align="left"
            eyebrow="Découvrir aussi"
            title="Nos autres services"
          />
          <div className="related-services">
            {related.map((service) => (
              <Link className="related-service" href={service.href} key={service.slug}>
                <span>{service.title}</span>
                <ArrowRightIcon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCta title={page.title} />
    </>
  );
}
