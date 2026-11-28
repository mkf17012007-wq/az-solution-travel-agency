export type InfoBlock = {
  title: string;
  text: string;
  points: string[];
};

export type SubServiceLink = {
  title: string;
  href: string;
  description: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  intro: string;
  image: string;
  blocks: InfoBlock[];
  highlights: string[];
  subServices?: SubServiceLink[];
  parent?: { title: string; href: string };
};

export const servicePages: Record<string, ServicePageData> = {
  immigration: {
    slug: "immigration",
    title: "Immigration & voyage",
    eyebrow: "Service phare — AZ Solution Travel Agency",
    lead: "Un seul interlocuteur pour préparer votre départ, constituer votre dossier et vous accompagner jusqu'à votre installation.",
    intro:
      "Étudier, travailler, rendre visite à un proche ou découvrir un nouveau pays : chaque projet suit une procédure précise. Nous vous expliquons les étapes, vérifions les pièces demandées et suivons votre dossier avec vous.",
    image: "/images/services/immigration.jpg",
    blocks: [
      {
        title: "Visas long et court séjour",
        text: "Nous vous orientons vers la catégorie de visa adaptée à votre situation et vous accompagnons dans la préparation du dossier.",
        points: [
          "Visa d'études",
          "Visa de travail",
          "Visiteur et court séjour",
          "Vérification des pièces et suivi du dossier"
        ]
      },
      {
        title: "Voyage et billetterie",
        text: "La logistique du départ est préparée en parallèle des démarches administratives, pour un voyage organisé sereinement.",
        points: [
          "Réservation de vols",
          "Information sur les conditions d'entrée",
          "Préparation des documents de voyage",
          "Accompagnement avant le départ"
        ]
      },
      {
        title: "Installation et suivi",
        text: "Notre accompagnement ne s'arrête pas à l'obtention du visa : nous vous aidons à préparer votre arrivée et vos premières démarches.",
        points: [
          "Recherche d'un logement",
          "Démarches administratives sur place",
          "Orientation vers nos autres services",
          "Points d'étape réguliers"
        ]
      }
    ],
    highlights: [
      "Analyse de votre situation avant toute recommandation",
      "Dossier vérifié pièce par pièce",
      "Délais et coûts expliqués avant engagement",
      "Suivi personnalisé jusqu'à l'installation"
    ],
    subServices: [
      {
        title: "Visa études",
        href: "/services/immigration/visa-etudes",
        description: "Préparer votre dossier d'études et votre départ dans de bonnes conditions."
      },
      {
        title: "Visa travail",
        href: "/services/immigration/visa-travail",
        description: "Réunir les justificatifs et suivre les étapes de votre demande."
      },
      {
        title: "Visiteur & court séjour",
        href: "/services/immigration/visa-visiteur",
        description: "Organiser un séjour temporaire et constituer le dossier adapté."
      }
    ]
  },
  "visa-etudes": {
    slug: "visa-etudes",
    title: "Visa études",
    eyebrow: "Immigration & voyage",
    lead: "De l'orientation du programme à la préparation du départ, nous structurons votre demande d'études à l'étranger.",
    intro:
      "Une demande de visa études repose sur un dossier complet et cohérent : choix de formation, justificatifs financiers, documents d'admission et préparation du départ. Nous vous aidons à y voir clair et à avancer étape par étape.",
    image: "/images/services/immigration.jpg",
    parent: { title: "Immigration & voyage", href: "/services/immigration" },
    blocks: [
      {
        title: "Choisir un programme",
        text: "Avant de constituer le dossier, nous clarifions votre projet et les exigences du pays et de l'établissement visés.",
        points: [
          "Orientation vers une formation adaptée",
          "Vérification des conditions d'admission",
          "Calendrier des inscriptions et des demandes",
          "Liste des pièces à fournir"
        ]
      },
      {
        title: "Constituer le dossier",
        text: "Chaque pièce est vérifiée pour éviter les incohérences et les allers-retours inutiles.",
        points: [
          "Lettre d'admission et documents scolaires",
          "Justificatifs financiers",
          "Formulaire et pièces d'identité",
          "Préparation de l'entretien si nécessaire"
        ]
      },
      {
        title: "Avant le départ",
        text: "Une fois la décision reçue, nous vous accompagnons dans l'organisation pratique de votre arrivée.",
        points: [
          "Réservation du vol",
          "Préparation du logement",
          "Information sur les démarches sur place",
          "Orientation vers nos cours de langues"
        ]
      }
    ],
    highlights: [
      "Dossier vérifié avant dépôt",
      "Calendrier clair des étapes",
      "Aucune promesse de résultat : chaque décision appartient à l'autorité compétente",
      "Accompagnement jusqu'au départ"
    ]
  },
  "visa-travail": {
    slug: "visa-travail",
    title: "Visa travail",
    eyebrow: "Immigration & voyage",
    lead: "Préparez votre mobilité professionnelle avec un dossier clair et un suivi adapté à votre situation.",
    intro:
      "Une demande de visa de travail implique souvent plusieurs intervenants : employeur, autorités administratives et services consulaires. Nous vous aidons à identifier les pièces attendues et à organiser les étapes dans le bon ordre.",
    image: "/images/services/immigration.jpg",
    parent: { title: "Immigration & voyage", href: "/services/immigration" },
    blocks: [
      {
        title: "Vérifier l'éligibilité",
        text: "Nous examinons avec vous votre situation professionnelle et les conditions applicables à votre destination.",
        points: [
          "Nature du contrat ou de l'offre",
          "Qualifications et expérience",
          "Conditions propres au pays de destination",
          "Orientation vers la bonne catégorie de visa"
        ]
      },
      {
        title: "Préparer le dossier",
        text: "Les documents sont rassemblés et contrôlés avant le dépôt de la demande.",
        points: [
          "Contrat ou lettre d'embauche",
          "Diplômes et attestations professionnelles",
          "Pièces d'identité et justificatifs",
          "Formulaires consulaires"
        ]
      },
      {
        title: "Suivi et installation",
        text: "Nous restons à vos côtés après la décision pour préparer votre départ et vos premières démarches.",
        points: [
          "Suivi de l'instruction du dossier",
          "Organisation du voyage",
          "Préparation de l'arrivée",
          "Orientation vers le logement ou l'auto-école"
        ]
      }
    ],
    highlights: [
      "Analyse de votre situation avant conseil",
      "Dossier contrôlé pièce par pièce",
      "Étapes et délais indicatifs expliqués",
      "Décision finale réservée aux autorités compétentes"
    ]
  },
  "visa-visiteur": {
    slug: "visa-visiteur",
    title: "Visiteur & court séjour",
    eyebrow: "Immigration & voyage",
    lead: "Un séjour temporaire bien préparé : dossier, documents de voyage et organisation sur place.",
    intro:
      "Visite familiale, tourisme ou séjour professionnel de courte durée : nous vous accompagnons dans la préparation de votre demande et dans l'organisation de votre voyage.",
    image: "/images/services/immigration.jpg",
    parent: { title: "Immigration & voyage", href: "/services/immigration" },
    blocks: [
      {
        title: "Court séjour",
        text: "Nous identifions avec vous la procédure adaptée à la durée et au motif de votre séjour.",
        points: [
          "Visite familiale ou amicale",
          "Tourisme",
          "Déplacement professionnel temporaire",
          "Vérification de la durée autorisée"
        ]
      },
      {
        title: "Dossier et justificatifs",
        text: "Nous vous accompagnons dans la constitution d'un dossier complet et cohérent.",
        points: [
          "Lettre d'invitation le cas échéant",
          "Justificatifs d'hébergement et de ressources",
          "Pièces d'identité et photos",
          "Assurance et documents de voyage"
        ]
      },
      {
        title: "Organisation du voyage",
        text: "Une fois le visa obtenu, nous vous aidons à finaliser les aspects pratiques de votre séjour.",
        points: [
          "Réservation de vols",
          "Information sur les conditions d'entrée",
          "Préparation des documents à emporter",
          "Coordonnées utiles sur place"
        ]
      }
    ],
    highlights: [
      "Dossier adapté au motif du séjour",
      "Vérification des justificatifs",
      "Organisation du voyage",
      "Aucune promesse de délivrance du visa"
    ]
  },
  "cours-de-langues": {
    slug: "cours-de-langues",
    title: "Cours de langues",
    eyebrow: "Cours de langues",
    lead: "Apprendre une langue pour étudier, travailler ou communiquer, à votre rythme et avec un suivi régulier.",
    intro:
      "Nos formations s'adressent aux débutants comme aux apprenants qui souhaitent consolider un niveau ou préparer un test. Le contenu est adapté à votre objectif et à votre niveau de départ.",
    image: "/images/services/cours-de-langues.jpg",
    blocks: [
      {
        title: "Langues proposées",
        text: "Nous proposons des cours dans plusieurs langues, avec une approche adaptée à votre projet.",
        points: ["Français", "Anglais", "Allemand", "Italien"]
      },
      {
        title: "Niveaux et objectifs",
        text: "Chaque parcours part d'une évaluation simple de votre niveau pour fixer des objectifs réalistes.",
        points: [
          "Du débutant au niveau avancé",
          "Expression orale et compréhension",
          "Écrit et vocabulaire professionnel",
          "Préparation aux tests de langue"
        ]
      },
      {
        title: "Organisation des cours",
        text: "Les séances sont organisées pour s'adapter à votre disponibilité et à votre rythme d'apprentissage.",
        points: [
          "Cours en présentiel",
          "Horaires définis avec le formateur",
          "Suivi pédagogique individuel",
          "Points de progrès réguliers"
        ]
      }
    ],
    highlights: [
      "Niveau de départ évalué avant l'inscription",
      "Objectifs clairs et suivi régulier",
      "Préparation aux tests selon votre projet",
      "Horaires et modalités à convenir"
    ]
  },
  placement: {
    slug: "placement",
    title: "Placement de personnel",
    eyebrow: "Placement de personnel",
    lead: "Mettre en relation les entreprises et les candidats, avec une méthode claire et un suivi des deux côtés.",
    intro:
      "Nous accompagnons les entreprises dans leur recherche de profils et les candidats dans leur démarche d'emploi. Notre rôle est de qualifier les besoins, de présenter des profils pertinents et de suivre les échanges jusqu'à la décision.",
    image: "/images/services/placement.jpg",
    blocks: [
      {
        title: "Volet entreprises",
        text: "Nous prenons le temps de comprendre votre besoin avant de vous proposer des candidats.",
        points: [
          "Définition du poste et du profil recherché",
          "Recherche et présélection de candidats",
          "Organisation des entretiens",
          "Suivi jusqu'à la décision finale"
        ]
      },
      {
        title: "Volet candidats",
        text: "Nous vous accompagnons dans la préparation de votre candidature et dans vos échanges avec les recruteurs.",
        points: [
          "Étude de votre parcours et de vos attentes",
          "Conseils pour le CV et la lettre de motivation",
          "Préparation aux entretiens",
          "Mise en relation avec des entreprises"
        ]
      },
      {
        title: "Secteurs et méthode",
        text: "Nous intervenons dans plusieurs secteurs et adaptons notre méthode à chaque recherche.",
        points: [
          "Commerce, administration et services",
          "Bâtiment et travaux d'aménagement",
          "Restauration et hôtellerie",
          "Profil recherché défini avant toute mise en relation"
        ]
      }
    ],
    highlights: [
      "Besoins qualifiés avant mise en relation",
      "Candidats et entreprises suivis",
      "Confidentialité des informations transmises",
      "Aucune garantie d'embauche : la décision revient à l'entreprise"
    ]
  },
  "puits-et-amenagement": {
    slug: "puits-et-amenagement",
    title: "Puits & aménagement",
    eyebrow: "Puits & aménagement",
    lead: "Des travaux d'aménagement organisés autour de votre besoin, du premier devis à la remise des ouvrages.",
    intro:
      "Nous accompagnons les particuliers et les entreprises pour la réalisation de puits et de travaux d'aménagement. Chaque intervention commence par une visite et une discussion sur vos attentes.",
    image: "/images/services/puits-et-amenagement.jpg",
    blocks: [
      {
        title: "Types de travaux",
        text: "Nous intervenons sur différents besoins, avec une méthode adaptée à chaque site.",
        points: [
          "Forage et réalisation de puits",
          "Aménagement de terrains",
          "Travaux de maçonnerie et de finition",
          "Entretien et remise en état"
        ]
      },
      {
        title: "Notre méthode",
        text: "Le chantier est préparé en amont pour limiter les imprévus et clarifier les responsabilités.",
        points: [
          "Visite du site et échange sur le besoin",
          "Étude technique et préparation du chantier",
          "Planification des étapes",
          "Suivi des travaux et points d'avancement"
        ]
      },
      {
        title: "Devis et suivi",
        text: "Le devis précise le périmètre, les délais indicatifs et les conditions d'intervention avant tout démarrage.",
        points: [
          "Devis détaillé remis avant les travaux",
          "Délais indicatifs communiqués",
          "Interlocuteur unique pendant le chantier",
          "Remise des ouvrages et vérification avec le client"
        ]
      }
    ],
    highlights: [
      "Visite préalable du site",
      "Devis clair avant démarrage",
      "Suivi pendant les travaux",
      "Intervention adaptée aux contraintes du site"
    ]
  },
  immobilier: {
    slug: "immobilier",
    title: "Immobilier",
    eyebrow: "Immobilier",
    lead: "Location ou achat : nous vous accompagnons dans la recherche et les démarches, de la première visite à la finalisation.",
    intro:
      "Trouver un logement ou un bien à acheter demande du temps et de la rigueur. Nous vous aidons à cadrer votre recherche, à organiser les visites et à comprendre les étapes administratives.",
    image: "/images/services/immobilier.jpg",
    blocks: [
      {
        title: "Location",
        text: "Nous vous accompagnons dans la recherche d'un logement correspondant à votre budget et à vos critères.",
        points: [
          "Étude de votre budget et de vos critères",
          "Sélection de biens correspondants",
          "Organisation des visites",
          "Accompagnement pour la constitution du dossier"
        ]
      },
      {
        title: "Achat",
        text: "De la recherche à la signature, nous vous aidons à y voir clair dans les étapes d'un achat.",
        points: [
          "Recherche selon votre projet",
          "Vérification des documents du bien",
          "Mise en relation avec les intervenants",
          "Suivi jusqu'à la finalisation"
        ]
      },
      {
        title: "Zones et accompagnement",
        text: "Nous intervenons principalement à Douala et Yaoundé, avec la possibilité d'étendre la recherche selon votre projet.",
        points: [
          "Douala et environs",
          "Yaoundé et environs",
          "Accompagnement à distance si nécessaire",
          "Coordination avec nos autres services"
        ]
      }
    ],
    highlights: [
      "Recherche cadrée selon votre budget",
      "Visites organisées",
      "Documents expliqués avant signature",
      "Aucune promesse de transaction"
    ]
  },
  "auto-ecole": {
    slug: "auto-ecole",
    title: "Auto-école",
    eyebrow: "Auto-école",
    lead: "Une formation structurée pour apprendre à conduire et préparer le passage du permis en toute confiance.",
    intro:
      "Notre auto-école accompagne les apprenants de la première leçon jusqu'à l'examen. Le programme est adapté à votre rythme, avec un suivi régulier de vos progrès.",
    image: "/images/services/auto-ecole.jpg",
    blocks: [
      {
        title: "Formation",
        text: "La formation combine apprentissage théorique et mise en pratique progressive.",
        points: [
          "Code de la route et règles de circulation",
          "Conduite progressive en circulation",
          "Manœuvres et stationnement",
          "Préparation de l'examen pratique"
        ]
      },
      {
        title: "Véhicule et encadrement",
        text: "Les leçons se déroulent dans un véhicule adapté et avec un accompagnement personnalisé.",
        points: [
          "Véhicule d'apprentissage entretenu",
          "Moniteur présent à chaque séance",
          "Créneaux définis selon vos disponibilités",
          "Retour constructif après chaque leçon"
        ]
      },
      {
        title: "Déroulement et tarifs",
        text: "Les modalités de la formation sont expliquées avant l'inscription et le tarif est communiqué sur demande.",
        points: [
          "Inscription après échange sur votre situation",
          "Programme et nombre de séances précisés",
          "Tarif communiqué sur demande",
          "Accompagnement jusqu'au passage du permis"
        ]
      }
    ],
    highlights: [
      "Programme adapté à votre rythme",
      "Suivi des progrès à chaque séance",
      "Tarif communiqué sur demande",
      "Préparation à l'examen pratique"
    ]
  }
};

export const visaSlugs = ["visa-etudes", "visa-travail", "visa-visiteur"] as const;
