import { testimonials } from "@/content/home";
import { SectionHeading } from "../SectionHeading";
import { StarIcon } from "../icons";

export function Testimonials() {
  return (
    <section className="section" id="temoignages">
      <div className="container">
        <SectionHeading
          eyebrow="Ils nous font confiance"
          title="Ce que disent nos clients"
          lead="Des parcours accompagnés avec sérieux, du premier échange à l'aboutissement du projet."
        />

        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="testimonial">
              <div className="testimonial__stars" aria-label="Note : 5 sur 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} size={16} />
                ))}
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <span className="testimonial__name">{testimonial.name}</span>
                <span className="testimonial__service">
                  {testimonial.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="section-note">
          Témoignages illustratifs, à remplacer par des avis clients réels
          publiés avec leur accord.
        </p>
      </div>
    </section>
  );
}
