import { siteConfig, mailtoHref, whatsappHref } from "@/config/site";
import { MailIcon, WhatsAppIcon } from "../icons";

type ServiceCtaProps = {
  title: string;
};

export function ServiceCta({ title }: ServiceCtaProps) {
  const message = `Bonjour AZ Solution, je souhaite obtenir des informations sur ${title}.`;

  return (
    <section className="cta-band" id="contact">
      <div className="container cta-band__inner">
        <div className="cta-band__text">
          <span className="eyebrow eyebrow--light">Parlons de votre projet</span>
          <h2>Un besoin lié à notre service « {title} » ? Écrivez-nous.</h2>
          <p>
            Indiquez le service souhaité et quelques détails sur votre situation.
            Un conseiller vous répondra pour étudier votre demande.
          </p>
        </div>
        <div className="cta-band__actions">
          <a
            className="btn btn--light btn--lg"
            href={whatsappHref(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            Discuter sur WhatsApp
          </a>
          <a
            className="btn btn--outline-light btn--lg"
            href={mailtoHref(`Demande d'information — ${title}`)}
          >
            <MailIcon size={18} />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
