"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/content/home";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  WhatsAppIcon
} from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="header-main">
        <div className="container header-main__inner">
          <a className="brand" href="#top" aria-label={`${siteConfig.name} — accueil`}>
            <Image
              className="brand__logo"
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={68}
              height={68}
              priority
            />
            <span className="brand__text">
              <strong>{siteConfig.name}</strong>
              <small>Travel Agency</small>
            </span>
          </a>

          <nav className="nav nav--desktop" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a key={link.href} className="nav__link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn--primary btn--sm header-cta" href="#contact">
              Prendre contact
              <ArrowRightIcon size={16} />
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <nav className="mobile-menu__links" aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="mobile-menu__link"
              href={link.href}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <a className="btn btn--primary btn--block" href="#contact" onClick={close}>
            Prendre contact
          </a>
          <a
            className="btn btn--whatsapp btn--block"
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
