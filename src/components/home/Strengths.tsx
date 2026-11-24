import { strengths } from "@/content/home";
import { IconByKey } from "../IconByKey";
import { SectionHeading } from "../SectionHeading";

export function Strengths() {
  return (
    <section className="section section--muted" id="apropos">
      <div className="container about">
        <div className="about__intro">
          <SectionHeading
            align="left"
            eyebrow="À propos"
            title="Un partenaire de confiance depuis 2022"
            lead="Fondée par M. Wandji Loïc, AZ Solution SARL réunit plusieurs expertises pour accompagner les particuliers comme les entreprises dans leurs projets les plus importants."
          />
          <p>
            Notre approche est simple : comprendre votre situation, vous expliquer
            chaque étape sans jargon, et rester à vos côtés jusqu&apos;au bout.
          </p>
          <a className="btn btn--primary" href="#contact">
            Contacter l&apos;équipe
          </a>
        </div>

        <ul className="strengths">
          {strengths.map((strength) => (
            <li key={strength.title} className="strength">
              <span className="strength__icon">
                <IconByKey name={strength.icon} size={22} />
              </span>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
