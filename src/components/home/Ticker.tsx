import { services } from "@/content/home";

// Bandeau doré qui défile en continu avec les noms des services.
export function Ticker() {
  const items = services.map((s) => s.title);
  // La liste est écrite deux fois : c'est ce qui rend la boucle sans coupure.
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[...items, ...items].map((title, i) => (
          <span key={i} className="ticker__item">
            {title}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
