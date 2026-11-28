import Image from "next/image";
import { siteConfig, whatsappHref } from "@/config/site";
import { services } from "@/content/home";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon
} from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: siteConfig.socials.facebook, label: "Facebook", icon: FacebookIcon },
    { href: siteConfig.socials.instagram, label: "Instagram", icon: InstagramIcon }
  ].filter((item) => item.href);

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <a className="brand brand--footer" href="/#top" aria-label={`${siteConfig.name} — accueil`}>
            <Image
              className="brand__logo"
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={104}
              height={104}
            />
          </a>
          <p className="site-footer__desc">{siteConfig.description}</p>
          {socials.length > 0 && (
            <div className="site-footer__socials">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="site-footer__col">
          <h3>Nos services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <a href={service.href}>{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Entreprise</h3>
          <ul>
            <li><a href="/a-propos">À propos</a></li>
            <li><a href="/temoignages">Témoignages</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="site-footer__col site-footer__col--contact">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <PhoneIcon size={17} />
              <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <WhatsAppIcon size={17} />
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <MailIcon size={17} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <MapPinIcon size={17} />
              {siteConfig.googleMapsUrl ? (
                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  {siteConfig.addressLines.join(", ")}
                </a>
              ) : (
                <span>{siteConfig.addressLines.join(", ")}</span>
              )}
            </li>
            <li>
              <ClockIcon size={17} />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__legal">
        <div className="container site-footer__legal-inner">
          <span>
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </span>
        </div>
      </div>
    </footer>
  );
}
