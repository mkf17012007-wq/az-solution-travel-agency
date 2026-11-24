export type IconKey =
  | "plane"
  | "globe"
  | "users"
  | "droplet"
  | "home"
  | "car"
  | "check"
  | "star"
  | "shield";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: IconKey;
  href: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "immigration",
    title: "Immigration & voyage",
    description:
      "Visas long et court séjour, assistance, billetterie et accompagnement jusqu'à l'installation.",
    icon: "plane",
    href: "#contact",
    featured: true
  },
  {
    slug: "cours-de-langues",
    title: "Cours de langues",
    description:
      "Français, anglais, allemand, italien et préparation aux tests de langue.",
    icon: "globe",
    href: "#contact"
  },
  {
    slug: "placement",
    title: "Placement de personnel",
    description:
      "Mise en relation entre entreprises à la recherche de profils et candidats qualifiés.",
    icon: "users",
    href: "#contact"
  },
  {
    slug: "puits-et-amenagement",
    title: "Puits & aménagement",
    description:
      "Réalisation de puits et travaux d'aménagement pour particuliers et entreprises.",
    icon: "droplet",
    href: "#contact"
  },
  {
    slug: "immobilier",
    title: "Immobilier",
    description:
      "Location et achat de biens avec un accompagnement personnalisé de bout en bout.",
    icon: "home",
    href: "#contact"
  },
  {
    slug: "auto-ecole",
    title: "Auto-école",
    description:
      "Formation complète de conducteurs, de l'apprentissage au passage du permis.",
    icon: "car",
    href: "#contact"
  }
];

export type Step = {
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    title: "Prise de contact",
    description:
      "Vous nous présentez votre projet par téléphone, WhatsApp ou via le formulaire."
  },
  {
    title: "Évaluation",
    description:
      "Nous analysons votre situation et identifions la solution la plus adaptée."
  },
  {
    title: "Proposition & devis",
    description:
      "Vous recevez un plan clair : étapes, délais indicatifs et coûts, sans surprise."
  },
  {
    title: "Accompagnement",
    description:
      "Nous traitons votre dossier et vous guidons à chaque étape des démarches."
  },
  {
    title: "Suivi",
    description:
      "Nous restons à vos côtés jusqu'à l'aboutissement de votre projet."
  }
];

export type Testimonial = {
  quote: string;
  name: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mon dossier de visa études a été préparé avec rigueur et suivi jusqu'au bout. Je recommande vivement AZ Solution.",
    name: "Aïcha N.",
    service: "Visa études"
  },
  {
    quote:
      "Les cours d'anglais m'ont réellement aidé à réussir mon test. Des formateurs à l'écoute et disponibles.",
    name: "Samuel T.",
    service: "Cours de langues"
  },
  {
    quote:
      "Une équipe sérieuse et disponible. Mon puits a été réalisé dans les délais annoncés.",
    name: "Famille Tchoumi",
    service: "Puits & aménagement"
  }
];

export type Strength = {
  title: string;
  description: string;
  icon: IconKey;
};

export const strengths: Strength[] = [
  {
    title: "Depuis 2022",
    description:
      "Une expérience concrète de l'accompagnement des particuliers et des entreprises.",
    icon: "star"
  },
  {
    title: "Expertise multisectorielle",
    description:
      "Six domaines complémentaires réunis sous un même toit, pour un parcours sans rupture.",
    icon: "globe"
  },
  {
    title: "Accompagnement humain",
    description:
      "Un interlocuteur dédié, attentif à votre situation et à vos contraintes.",
    icon: "users"
  },
  {
    title: "Transparence totale",
    description:
      "Des étapes, des délais et des coûts expliqués clairement, avant tout engagement.",
    icon: "shield"
  }
];

export const heroChips: string[] = [
  "Accompagnement de A à Z",
  "Démarches simplifiées",
  "Suivi personnalisé"
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" }
];
