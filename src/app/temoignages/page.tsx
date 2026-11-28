import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ContactCta } from "@/components/home/ContactCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/content/home";
import { testimonialMedia } from "@/content/pages";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Découvrez les retours des clients accompagnés par AZ Solution, en texte, en photo et en vidéo.",
  alternates: { canonical: "/temoignages" }
};

export default function TestimonialsPage() {
  const mediaItems = testimonialMedia.filter((item) => item.photoSrc || item.videoSrc);

  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title="Ils ont fait confiance à AZ Solution"
        lead="Des retours sincères, recueillis auprès de personnes et de familles accompagnées dans leurs démarches."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Leurs mots"
            title="Des expériences partagées"
            lead="Chaque projet est différent. Ces témoignages donnent une idée de notre façon de travailler."
          />
          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <figure className="testimonial" key={testimonial.name}>
                <div className="testimonial__stars" role="img" aria-label="5 étoiles sur 5">
                  ★★★★★
                </div>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <span className="testimonial__name">{testimonial.name}</span>
                  <span className="testimonial__service">{testimonial.service}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          {mediaItems.length > 0 && (
            <>
              <SectionHeading
                eyebrow="Témoignages en image"
                title="Photos et vidéos de nos clients"
                lead="Les supports multimédias sont publiés avec l'accord des personnes concernées."
              />
              <div className="testimonial-media-grid">
                {mediaItems.map((item) => (
                  <article className="testimonial-media" key={item.id}>
                    {item.videoSrc ? (
                      <video
                        className="testimonial-media__video"
                        src={item.videoSrc}
                        controls
                        preload="metadata"
                        aria-label={`Témoignage vidéo de ${item.name}`}
                      />
                    ) : (
                      <div className="testimonial-media__placeholder">
                        <span>Photo de {item.name} à ajouter</span>
                      </div>
                    )}
                    <div className="testimonial-media__body">
                      <h3>{item.name}</h3>
                      <span className="testimonial__service">{item.service}</span>
                      <p>{item.quote}</p>
                      {item.photoSrc && (
                        <div
                          className="testimonial-media__photo"
                          role="img"
                          aria-label={`Photo de ${item.name}`}
                          style={{ "--img": `url(${item.photoSrc})` } as CSSProperties}
                        />
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
          <div className="testimonial-share">
            <p>Vous avez été accompagné par AZ Solution ? Partagez votre expérience.</p>
            <a className="btn btn--primary" href="/contact">
              Partager mon témoignage
            </a>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
