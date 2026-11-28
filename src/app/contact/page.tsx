import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ContactDialog } from "@/components/contact/ContactDialog";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig, whatsappHref } from "@/config/site";
import { teamImageSrc } from "@/content/pages";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez AZ Solution à Douala et Yaoundé : formulaire, WhatsApp, téléphone et e-mail.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  const teamImage = teamImageSrc ? `url(${teamImageSrc})` : "none";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        lead="Une question, une demande de service ou un rendez-vous à convenir : nous sommes à votre écoute."
      />

      <section className="section">
        <div className="container contact-page__grid">
          <div
            className="team-photo team-photo--large"
            role="img"
            aria-label="Photo de l'équipe AZ Solution à ajouter"
            style={{ "--img": teamImage } as CSSProperties}
          >
            <span>Photo de l'équipe AZ Solution à ajouter</span>
          </div>

          <div className="contact-page__details">
            <SectionHeading
              align="left"
              eyebrow="Nous joindre"
              title="Restons en contact"
              lead="Nos équipes vous répondent du lundi au samedi, de 8h à 18h."
            />
            <ul className="contact-list" role="list">
              <li>
                <PhoneIcon size={18} />
                <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              </li>
              <li>
                <WhatsAppIcon size={18} />
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <MailIcon size={18} />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <MapPinIcon size={18} />
                {siteConfig.googleMapsUrl ? (
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.addressLines.join(", ")}
                  </a>
                ) : (
                  <span>{siteConfig.addressLines.join(", ")}</span>
                )}
              </li>
              <li>
                <ClockIcon size={18} />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--muted" id="contact">
        <div className="container contact-page__appointment">
          <div>
            <span className="eyebrow">Rendez-vous</span>
            <h2 className="section-title">Choisissez un créneau qui vous arrange</h2>
            <p>
              Remplissez le formulaire en indiquant le ou les services qui vous intéressent et
              la tranche horaire qui vous convient. Nous vous recontactons pour confirmer
              l&apos;échange avec un agent.
            </p>
            <ol className="contact-page__steps" role="list">
              <li>Vous indiquez vos coordonnées et vos disponibilités.</li>
              <li>Vous précisez le service souhaité et votre message.</li>
              <li>Un agent d&apos;AZ Solution vous rappelle sous peu.</li>
            </ol>
            <div className="contact-page__actions">
              <ContactDialog />
              <a
                className="btn btn--ghost"
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                Passer directement sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
