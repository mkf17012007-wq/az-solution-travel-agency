import { steps } from "@/content/home";
import { SectionHeading } from "../SectionHeading";

export function Process() {
  return (
    <section className="section section--muted" id="processus">
      <div className="container">
        <SectionHeading
          eyebrow="Comment ça marche"
          title="Un parcours clair, en 5 étapes"
          lead="De la première prise de contact au suivi de votre projet, vous savez toujours où vous en êtes."
        />

        <ol className="process">
          {steps.map((step, index) => (
            <li key={step.title} className="process__step">
              <span className="process__num">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
