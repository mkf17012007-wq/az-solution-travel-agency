import { siteConfig } from "@/config/site";
import { heroChips } from "@/content/home";
import { ArrowRightIcon, CheckIcon, PlaneIcon } from "../icons";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="pill">
            <PlaneIcon size={15} />
            {siteConfig.agencyName} · depuis {siteConfig.foundedYear}
          </span>

          <h1 className="hero__title">
            Réalisez vos projets d&apos;immigration et de voyage{" "}
            <span>en toute confiance.</span>
          </h1>

          <p className="hero__lead">
            Immigration, cours de langues, placement de personnel, immobilier,
            puits et aménagement, auto-école : AZ Solution vous accompagne de la
            première démarche jusqu&apos;à l&apos;installation.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#contact">
              Demander une évaluation
              <ArrowRightIcon size={18} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#services">
              Découvrir nos services
            </a>
          </div>

          <ul className="hero__chips">
            {heroChips.map((chip) => (
              <li key={chip}>
                <CheckIcon size={16} />
                {chip}
              </li>
            ))}
          </ul>
        </div>


      </div>
    </section>
  );
}
