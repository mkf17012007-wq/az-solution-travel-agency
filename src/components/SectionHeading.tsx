type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div className={`section-head${align === "left" ? " section-head--left" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
