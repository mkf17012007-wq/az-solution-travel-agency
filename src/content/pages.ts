export type TimelineItem = {
  year: string;
  title: string;
  text: string;
};

export const aboutTimeline: TimelineItem[] = [
  {
    year: "2022",
    title: "La création d'AZ Solution",
    text: "AZ Solution SARL naît d'une volonté simple : accompagner concrètement les personnes et les entreprises dans leurs démarches au Cameroun."
  },
  {
    year: "2023",
    title: "L'ouverture à de nouveaux services",
    text: "Aux accompagnements immigration et voyage s'ajoutent les cours de langues, le placement de personnel et l'aménagement."
  },
  {
    year: "2024",
    title: "Un accompagnement complété",
    text: "L'immobilier et l'auto-école rejoignent l'offre, pour répondre à des besoins qui se succèdent souvent dans un même projet de vie."
  },
  {
    year: "Aujourd'hui",
    title: "Un interlocuteur unique",
    text: "Une équipe basée à Douala et Yaoundé, organisée pour suivre chaque dossier avec la même exigence, du premier échange jusqu'au suivi final."
  }
];

export type TestimonialMedia = {
  id: string;
  name: string;
  service: string;
  quote: string;
  photoSrc: string;
  videoSrc: string;
};

export const testimonialMedia: TestimonialMedia[] = [
  {
    id: "aicha",
    name: "Aïcha N.",
    service: "Visa études",
    quote:
      "Mon dossier de visa études a été préparé avec rigueur et suivi jusqu'au bout. Je recommande vivement AZ Solution.",
    photoSrc: "",
    videoSrc: ""
  },
  {
    id: "samuel",
    name: "Samuel T.",
    service: "Cours de langues",
    quote:
      "Les cours d'anglais m'ont réellement aidé à réussir mon test. Des formateurs à l'écoute et disponibles.",
    photoSrc: "",
    videoSrc: ""
  },
  {
    id: "famille-tchoumi",
    name: "Famille Tchoumi",
    service: "Puits & aménagement",
    quote:
      "Une équipe sérieuse et disponible. Mon puits a été réalisé dans les délais annoncés.",
    photoSrc: "",
    videoSrc: ""
  }
];

export const teamImageSrc = "";
export const availabilitySlots = [
  "Matin — 8h à 12h",
  "Après-midi — 12h à 17h",
  "Fin de journée — 17h à 18h",
  "Samedi — 8h à 13h"
] as const;
