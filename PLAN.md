# Plan de réalisation — Site vitrine AZ Solution SARL

Stack : **Next.js 16 (App Router, TypeScript)** · **Sanity** (CMS/admin, phase ultérieure) · **FR uniquement** (v1) · CSS sur mesure (léger, mobile-first).

Ce document décrit les phases, les tâches et les critères d'acceptation. Il sert de référence entre les sessions.

---

## Phase 0 — Cadrage & socle technique
**Objectif :** disposer d'une base de code propre, versionnée et exécutable.

- [ ] Projet Next.js (TypeScript, App Router) initialisé.
- [ ] Structure de dossiers : `src/app`, `src/components`, `src/config`, `src/content`, `public`.
- [ ] Config centralisée du site (`src/config/site.ts`) : nom, coordonnées, WhatsApp, réseaux — **valeurs provisoires marquées à remplacer**.
- [ ] `.gitignore`, README minimal.
- [ ] `npm run dev` et `npm run build` opérationnels.

**Acceptation :** le projet démarre et compile sans erreur.

---

## Phase 1 — Charte & layout global
**Objectif :** identité visuelle et navigation communes à toutes les pages.

- [ ] Design tokens CSS (couleurs, typographie, espacements, rayons, ombres).
- [ ] Charte provisoire cohérente (le client fournira logo/couleurs/polices ; tout est centralisé pour remplacement rapide).
- [ ] Header : logo texte, menu fixe, navigation mobile (menu burger accessible), CTA « Prendre contact ».
- [ ] Footer : coordonnées, plan du site, mentions, réseaux.
- [ ] Bouton WhatsApp flottant visible sur toutes les pages (message prérempli).
- [ ] Composants de base : boutons, cartes, conteneur, section.

**Acceptation :** header/footer/WhatsApp fonctionnels sur mobile, tablette, desktop.

---

## Phase 2 — Page d'accueil (LIVRAISON EN COURS)
**Objectif :** présenter AZ Solution et orienter vers le bon service.

Sections (cf. CDC §4) :
- [ ] Hero : accroche + sous-titre + CTA principal (contact) + CTA secondaire (services).
- [ ] Mise en avant AZ Solution Travel Agency (offre phare : immigration/voyage).
- [ ] Blocs des 6 services (Immigration, Cours de langues, Placement, Puits & aménagement, Immobilier, Auto-école) avec liens.
- [ ] Processus en 5 étapes.
- [ ] 2 à 3 témoignages (données provisoires).
- [ ] Atouts de l'entreprise.
- [ ] Bandeau CTA contact (en attendant le formulaire de la Phase 5 : e-mail + WhatsApp).

**Acceptation :** page responsive, lisible, rapide, sans lien mort ; métadonnées SEO de base ; le CTA prépare l'arrivée du formulaire.

---

## Phase 3 — Pages services
- [ ] Immigration : vue d'ensemble, visas long/court séjour, étapes, services associés.
- [ ] Sous-pages : Visa études, Visa travail, Visa visiteur & court séjour.
- [ ] Cours de langues : langues, niveaux, tests préparés, horaires, tarifs.
- [ ] Placement de personnel : volet entreprises, volet candidats, secteurs, méthode.
- [ ] Puits et aménagement : types de travaux, réalisations, méthode, devis.
- [ ] Immobilier : location/achat, services, étapes, zones.
- [ ] Auto-école : formation, véhicule, déroulement, tarifs.

**Acceptation :** chaque page a un CTA dédié et des métadonnées propres.

---

## Phase 4 — Pages institutionnelles & conversion
- [ ] À propos (histoire depuis 2022, fondateur, équipe, traitement de dossier).
- [ ] Témoignages (affichage en cartes, filtre par service).
- [ ] Contact (formulaire, coordonnées, horaires, plan, réseaux).
- [ ] Mentions légales & politique de confidentialité.

**Acceptation :** parcours de contact complet et lisible.

---

## Phase 5 — Formulaires & anti-spam
**Objectif :** chaque demande devient une fiche d'évaluation exploitable par le service commercial.

- [ ] Formulaire de contact avec **service souhaité obligatoire** (les 6 services de `src/content/home.ts`) : nom, téléphone, e-mail, service, message.
  - Ce champ sert à **l'évaluation/qualification de la demande** et au routage interne : aucune demande sans service.
- [ ] Envoi de la demande **par e-mail au service commercial AZ** (adresse exacte à fournir par le client).
- [ ] **Notification de la même demande vers les différents numéros WhatsApp d'AZ** (message prérempli incluant les détails de la demande).
- [ ] Accusé de réception au visiteur.
- [ ] Protection anti-spam (honeypot + Turnstile + rate-limit).
- [ ] Formulaires dédiés : inscription cours, candidature placement, devis puits.
- [ ] Validation serveur + messages d'erreur clairs.

**Acceptation :** envoi fiable vers l'e-mail commercial **et** tous les numéros WhatsApp ; chaque demande indique le service ; aucune donnée sensible demandée.

---

## Phase 6 — Sanity (CMS & admin)
- [ ] Schémas : service, témoignage (statut brouillon/publié), galerie, tarif, paramètres du site, équipe, FAQ.
- [ ] Studio admin pour édition des textes, tarifs et témoignages.
- [ ] Dépôt de témoignage visiteur → modération avant publication.
- [ ] Aperçu/ISR et images via CDN Sanity.

**Acceptation :** le client édite le contenu sans développeur.

---

## Phase 7 — SEO, analytics, performance, accessibilité
- [ ] Métadonnées par page, `sitemap.xml`, `robots.txt`.
- [ ] JSON-LD `LocalBusiness`/`Organization`, Open Graph.
- [ ] Analytics respectueux (Plausible) + événements clics WhatsApp/formulaires.
- [ ] Bandeau cookies si nécessaire.
- [ ] Optimisation images, Core Web Vitals, socle accessibilité (contrastes, alt, clavier).

**Acceptation :** scores Lighthouse corrects, indexation prête.

---

## Phase 8 — Recette & mise en ligne
- [ ] Recette client (5 jours ouvrés), corrections.
- [ ] Mise en ligne sur l'hébergement/domaine existants du client.
- [ ] Formation à l'administration + documentation d'utilisation.
- [ ] Sauvegardes planifiées (export Sanity + dépôt Git).
- [ ] Garantie 1 mois (correction de bogues).

---

## Dépendances & points bloquants
- Textes, photos, témoignages signés et informations légales **à fournir par le client** (chemin critique).
- Décisions en attente : tarifs affichés ou non, périmètre RDV/témoignages/galerie, **plateforme de déploiement**.
- Contrainte déploiement : Next.js 16 sans `output: 'export'` → runtime **Node.js 20+** requis (formulaire → e-mail/WhatsApp, Turnstile, rate-limit, ISR Sanity). À vérifier : l'hébergement existant du client accepte-t-il Node.js/Docker ? Sinon, redirection du domaine vers Vercel/Netlify.
- Le client a déjà : domaine, hébergement, e-mail de réception (adresse exacte à communiquer).
- **À fournir impérativement par le client :** l'adresse e-mail exacte du **service commercial** et la **liste complète des numéros WhatsApp** devant recevoir les demandes (Numéros actuellement provisoires dans `src/config/site.ts`).

## Conventions
- Commits : `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`.
- Mobile-first, pages légères, aucune promesse de résultat (mentions légales).
- Le formulaire de contact est la source de l'évaluation : le **service demandé** est toujours renseigné et transmis (e-mail + WhatsApp).
- Architecture multi-pages (Phases 3 & 4) : chaque service et page institutionnelle a sa propre route, pas seulement des ancres.
