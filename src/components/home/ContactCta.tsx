import { siteConfig, whatsappHref } from "@/config/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "../icons";

export function ContactCta() {
  return (
    <section className="cta-band" id="contact">
      <div className="container cta-band__inner">
        <div className="cta-band__text">
          <span className="eyebrow eyebrow--light">Parlons de votre projet</span>
          <h2>Prêt à démarrer ? Nous vous répondons rapidement.</h2>
          <p>
            Décrivez-nous votre besoin par téléphone, WhatsApp ou e-mail. Un
            conseiller vous recontacte pour étudier votre situation.
          </p>
        </div>

        <div className="cta-band__actions">
          <a
            className="btn btn--light btn--lg"
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            Discuter sur WhatsApp
          </a>
          <a className="btn btn--outline-light btn--lg" href={siteConfig.phoneHref}>
            <PhoneIcon size={18} />
            {siteConfig.phoneDisplay}
          </a>
          <a className="cta-band__mail" href={`mailto:${siteConfig.email}`}>
            <MailIcon size={17} />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
