"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { siteConfig, whatsappHref } from "@/config/site";
import { services } from "@/content/home";
import { availabilitySlots } from "@/content/pages";
import { CloseIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

export function ContactDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const open = () => {
    setSubmitted(false);
    setError("");
    setSelectedServices([]);
    setMessage("");
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const toggleService = (slug: string, checked: boolean) => {
    setSelectedServices((current) =>
      checked ? [...current, slug] : current.filter((item) => item !== slug)
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const slot = String(data.get("slot") ?? "");
    const note = String(data.get("note") ?? "").trim();

    if (!name || !phone || !slot || selectedServices.length === 0) {
      setError("Renseignez votre nom, votre téléphone, un service et un créneau horaire.");
      return;
    }

    const requestedServices = services
      .filter((service) => selectedServices.includes(service.slug))
      .map((service) => service.title)
      .join(", ");

    const summary = [
      "Bonjour AZ Solution, je souhaite être recontacté(e).",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      email ? `E-mail : ${email}` : "",
      `Service(s) souhaité(s) : ${requestedServices}`,
      `Créneau pour échanger : ${slot}`,
      note ? `Message : ${note}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    setMessage(summary);
    setSubmitted(true);
    window.open(whatsappHref(summary), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button className="btn btn--primary btn--lg" type="button" onClick={open}>
        Prendre contact
      </button>

      <dialog
        className="contact-dialog"
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
      >
        <div className="contact-dialog__head">
          <div>
            <span className="eyebrow">Demande de contact</span>
            <h2 id="contact-dialog-title">Parlons de votre projet</h2>
          </div>
          <button
            className="contact-dialog__close"
            type="button"
            aria-label="Fermer le formulaire"
            onClick={close}
          >
            <CloseIcon size={22} />
          </button>
        </div>

        {submitted ? (
          <div className="contact-dialog__success" role="status">
            <p className="contact-dialog__thanks">Merci, nous vous recontacterons sous peu.</p>
            <p>
              Votre demande a aussi été préparée dans WhatsApp. Si la fenêtre ne s&apos;est pas
              ouverte, envoyez-la depuis le bouton ci-dessous.
            </p>
            <div className="contact-dialog__actions">
              <a
                className="btn btn--whatsapp"
                href={whatsappHref(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                Envoyer sur WhatsApp
              </a>
              <a
                className="btn btn--ghost"
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Demande de contact AZ Solution")}&body=${encodeURIComponent(message)}`}
              >
                <MailIcon size={18} />
                Envoyer par e-mail
              </a>
            </div>
            <button className="btn btn--ghost" type="button" onClick={close}>
              Fermer
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <label>
                Nom complet <span aria-hidden="true">*</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Téléphone <span aria-hidden="true">*</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
            </div>

            <label>
              E-mail
              <input name="email" type="email" autoComplete="email" />
            </label>

            <fieldset className="contact-form__services">
              <legend>
                Services qui vous intéressent <span aria-hidden="true">*</span>
              </legend>
              <div className="contact-form__options">
                {services.map((service) => (
                  <label className="contact-form__option" key={service.slug}>
                    <input
                      type="checkbox"
                      name="services"
                      value={service.slug}
                      checked={selectedServices.includes(service.slug)}
                      onChange={(event) => toggleService(service.slug, event.target.checked)}
                    />
                    <span>{service.title}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label>
              Créneau horaire pour échanger avec un agent *
              <select name="slot" defaultValue="" required>
                <option value="" disabled>
                  Choisir un créneau
                </option>
                {availabilitySlots.map((slot) => (
                  <option value={slot} key={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Votre message
              <textarea name="note" rows={4} placeholder="Présentez brièvement votre besoin." />
            </label>

            {error && (
              <p className="contact-form__error" role="alert">
                {error}
              </p>
            )}

            <div className="contact-dialog__actions">
              <button className="btn btn--primary" type="submit">
                Envoyer ma demande
              </button>
              <button className="btn btn--ghost" type="button" onClick={close}>
                Annuler
              </button>
            </div>
          </form>
        )}
      </dialog>
    </>
  );
}
