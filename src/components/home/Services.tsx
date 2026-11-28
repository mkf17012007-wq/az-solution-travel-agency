import { services } from "@/content/home";
import { IconByKey } from "../IconByKey";
import type { CSSProperties } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { ArrowRightIcon } from "../icons";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Nos domaines d'expertise"
          title="Un accompagnement pour chaque projet"
          lead="Six services complémentaires réunis sous un même toit, pour vous simplifier la vie et vous faire gagner du temps."
        />

        <div className="services">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90}>
              <article
                className={`service-card${
                  service.featured ? " service-card--featured" : ""
                }`}
              >
                <div
                  className="service-card__media"
                  style={
                    {
                      "--img": `url(/images/services/${service.slug}.jpg)`
                    } as CSSProperties
                  }
                >
                  <span className="service-card__icon">
                    <IconByKey name={service.icon} size={26} />
                  </span>
                  {service.featured && (
                    <span className="service-card__badge">Service phare</span>
                  )}
                </div>
                <div className="service-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a className="service-card__link" href={service.href}>
                    Découvrir le service
                    <ArrowRightIcon size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
