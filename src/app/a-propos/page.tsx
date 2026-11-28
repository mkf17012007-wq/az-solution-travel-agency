import type { Metadata } from "next";
import { ContactCta } from "@/components/home/ContactCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { aboutTimeline } from "@/content/pages";
import { steps } from "@/content/home";
import { CheckIcon, ShieldIcon, UsersIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez l'histoire et la méthode de ${siteConfig.legalName}, à Douala et Yaoundé.`,
  alternates: { canonical: "/a-propos" }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une équipe à vos côtés, depuis 2022"
        lead="AZ Solution SARL réunit plusieurs expertises autour d'une même idée : rendre les démarches plus simples et le suivi plus humain."
      />

      <section className="section">
        <div className="container about-story">
          <div>
            <span className="eyebrow">Notre histoire</span>
            <h2 className="section-title">Deux villes, une seule ambition</h2>
            <p>
              Créée en {siteConfig.foundedYear}, AZ Solution accompagne les particuliers et les
              entreprises à Douala, Yaoundé et au-delà. Ce qui a commencé avec l'immigration
              et le voyage s'est élargi à d'autres services, toujours avec la même exigence
              dans le suivi des dossiers.
            </p>
            <p>
              Notre fondateur et notre équipe ont construit l'entreprise autour d'un principe
              simple : expliquer clairement, vérifier avec soin et rester joignable. Chaque
              demande est traitée comme un projet singulier, jamais comme une formalité.
            </p>
          </div>
          <ol className="timeline" role="list">
            {aboutTimeline.map((item) => (
              <li className="timeline__item" key={item.year}>
                <span className="timeline__year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container team-section">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Notre équipe"
              title="Des personnes, pas un standard"
              lead="Un interlocuteur dédié vous accompagne et coordonne les intervenants selon votre besoin."
            />
            <div className="team-values">
              <div>
                <UsersIcon size={22} />
                <span>Accompagnement humain</span>
              </div>
              <div>
                <ShieldIcon size={22} />
                <span>Transparence des étapes</span>
              </div>
              <div>
                <CheckIcon size={22} />
                <span>Suivi jusqu'au bout</span>
              </div>
            </div>
          </div>
          <div className="team-photo" role="img" aria-label="Photo de l'équipe AZ Solution à ajouter">
            <span>Photo de l'équipe à ajouter</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Notre méthode"
            title="Comment nous traitons un dossier"
            lead="Une organisation claire, pour que vous sachiez toujours où en est votre demande."
          />
          <div className="process">
            {steps.map((step, index) => (
              <article className="process__step" key={step.title}>
                <span className="process__num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
