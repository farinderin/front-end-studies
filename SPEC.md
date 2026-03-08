# Specification — Framework Selector App

> Application Astro de synthese et d'aide au choix de framework frontend.
> Source : notebook NotebookLM `front-end-studies-2025-2026`.

---

## 1. Objectif

Permettre a un developpeur d'identifier rapidement le framework frontend le plus adapte a son projet via :

- un **wizard de decision interactif** (questions contextuelles)
- des **fiches comparatives** detaillees par framework
- une **matrice de comparaison** visuelle avec benchmarks chiffres
- des **demos vivantes** de composants identiques implementes dans chaque framework (Islands Architecture)

---

## 2. Architecture technique

| Choix | Justification |
|-------|--------------|
| **Astro 5** | Islands Architecture : zero JS par defaut, SEO parfait, peut embarquer des composants React/Vue/Svelte sur la meme page |
| **TypeScript** | Standard pro, >77% du code frontend type en 2025 |
| **Tailwind CSS 4** | Utilitaire, adapte a un site de documentation/contenu |
| **Deploiement** | Vercel Edge / Cloudflare Workers (adapter Astro) |

### Patterns de rendu utilises

- **SSG** (Static Site Generation) pour les fiches frameworks et la matrice
- **Islands** pour le wizard interactif et les demos de composants
- **Zero JS** pour toutes les pages statiques (meilleures performances Core Web Vitals)

---

## 3. Structure des pages

```
/                          → Landing page + acces rapide wizard
/compare                   → Matrice comparative complete
/frameworks/react          → Fiche React
/frameworks/angular        → Fiche Angular
/frameworks/vue            → Fiche Vue
/frameworks/svelte         → Fiche Svelte
/frameworks/astro          → Fiche Astro
/wizard                    → Wizard de decision interactif
/demos                     → Demos composants multi-framework
```

---

## 4. Contenu par fiche framework

Chaque page `/frameworks/[slug]` contient les sections suivantes.

### 4.1 En-tete

- Nom + version courante (ex. React 19+, Angular 21, Vue 3.6, Svelte 5, Astro 5)
- Badge de rendu principal (SPA / SSR / SSG / Islands)
- Score de satisfaction developpeur (source : State of JS 2025)

### 4.2 Cas d'utilisation ideaux

| Type de projet | Adapte ? |
|----------------|----------|
| SPA complexe / dashboard | ✅ / ⚠️ / ❌ |
| Application enterprise | ... |
| Site contenu / SEO | ... |
| Prototype rapide | ... |
| App mobile cross-platform | ... |
| Visualisation de donnees | ... |
| App temps reel | ... |
| PWA | ... |

### 4.3 Points forts / Points faibles

**Points forts** (liste)
**Points faibles** (liste)

### 4.4 Benchmarks chiffres

| Metrique | Valeur |
|----------|--------|
| Bundle size (starter) | — |
| Time to Interactive (TTI) | — |
| Throughput serveur (RPS) | — |
| Adoption developpeurs | — |
| Taux de satisfaction | — |

#### Donnees de reference issues du notebook

| Framework | Bundle starter | TTI | RPS serveur | Adoption | Satisfaction |
|-----------|---------------|-----|-------------|----------|--------------|
| React 19 | 32–40 KB | 350 ms | 850 (Next.js) | 91% | — |
| Angular 21 | 110–130 KB | — | — | — | — |
| Vue 3.6 | 18–22 KB | 300 ms | — | 51% | 93.4% interet |
| Svelte 5 | <10 KB | 200 ms | 1 200 | — | 62% admiration |
| Astro 5 | 0 KB (static) | meilleur | — | — | 5/5 SSG |

### 4.5 Patterns architecturaux supportes

Badges visuels : `SSR` `SSG` `SPA` `ISR` `PPR` `Islands` `PWA` `Edge` `Micro-frontends`

### 4.6 Meta-framework associe

- React → Next.js 16 (PPR, Server Components, Vercel AI SDK)
- Angular → Angular Universal
- Vue → Nuxt 4
- Svelte → SvelteKit
- Astro → Astro (natif)

### 4.7 Filtre AI-First (nouveaute 2026)

Indicateur : compatibilite avec les outils de developpement assiste par IA.

- **React** : avantage "prime to training" — 4x plus de donnees d'entrainement, generation de code plus precise par Copilot/Claude/Cursor
- **Next.js** : integration native Vercel AI SDK, streaming de reponses IA
- **Autres** : compatibles mais moins couverts par les LLMs

---

## 5. Wizard de decision interactif

Composant Island (React ou Svelte) integre dans Astro.

### Flux de questions

```
Q1. Quel est le type principal de votre projet ?
    → [a] Site de contenu / blog / documentation / SEO
    → [b] Application avec beaucoup d'etat / dashboard / SaaS
    → [c] Application enterprise large echelle
    → [d] Prototype rapide / MVP

Q2. La performance mobile et la taille de bundle sont-elles critiques ?
    → [a] Oui, reseau lent ou appareil bas de gamme
    → [b] Non, public cible sur desktop haut de gamme

Q3. Avez-vous besoin d'une application mobile cross-platform ?
    → [a] Oui, iOS/Android dans la roadmap
    → [b] Non, web uniquement

Q4. Quelle est la taille et l'experience de votre equipe ?
    → [a] Equipe large, recrutement frequent
    → [b] Petite equipe, developpeurs juniors
    → [c] Equipe experiente, priorite a la qualite technique

Q5. Utilisez-vous intensivement des assistants IA (Copilot, Cursor, Claude) ?
    → [a] Oui, c'est central dans notre workflow
    → [b] Non ou marginalement

Q6. Votre app necessite-t-elle des fonctionnalites temps reel ?
    → [a] Oui (chat, live data, streaming)
    → [b] Non
```

### Matrice de recommandation

| Profil detecte | Recommandation | Raison principale |
|----------------|---------------|-------------------|
| SEO + contenu | **Astro** | Zero JS, Islands, meilleurs Core Web Vitals |
| Dashboard + etat complexe + AI | **Next.js / React** | Ecosystem, Vercel AI SDK, training data |
| Dashboard + performance + petite equipe | **SvelteKit** | 200ms TTI, 1200 RPS, Runes intuitifs |
| Enterprise + equipe large | **Angular** | Structure, DI, Signals, maintenabilite |
| Prototype + junior | **Vue** | Courbe d'apprentissage minimale, <10 KB |
| Cross-platform mobile | **React / React Native** | Stack unifie web + mobile |

---

## 6. Matrice comparative (`/compare`)

Tableau interactif (Island) permettant de filtrer/trier par critere.

### Criteres couverts

- Type de projet adapte
- Pattern de rendu
- Taille de bundle
- Performance (TTI, RPS)
- Courbe d'apprentissage
- Taille de l'ecosysteme
- Support mobile natif
- Compatibilite AI-first
- Cible de deploiement (Edge, Serverless, traditionnel)
- Meta-framework

---

## 7. Section Demos vivantes (`/demos`)

Illustration concrete de l'Islands Architecture d'Astro.

### Principe

Une meme fonctionnalite implementee en parallele dans plusieurs frameworks, tous embarques sur la meme page Astro via `client:load`.

### Demos proposees

1. **Compteur interactif** — React / Vue / Svelte (composant le plus simple possible)
2. **Formulaire avec validation** — React Hook Form vs Vue reactive vs Svelte stores
3. **Fetch de donnees avec loading state** — comparaison de la syntaxe et du bundle resultant
4. **Composant de navigation** — performance de rendu mesurable en DevTools

### Affichage

Pour chaque demo :
- Rendu visuel du composant (island hydrate)
- Onglet "Code source" avec syntax highlighting
- Badge bundle size mesure
- Badge TTI mesure

---

## 8. Navigation et UX

- **Header** : logo + liens `/compare`, `/wizard`, `/demos`, liens fiches frameworks
- **Landing** : resume de la matrice + CTA vers wizard
- **Wizard** : stepper progress bar, retour possible, resultat avec explication detaillee + lien vers fiche framework
- **Mode sombre** : systeme (prefers-color-scheme)
- **Responsive** : mobile-first

---

## 9. Performance cible

| Metrique | Cible |
|----------|-------|
| Lighthouse Performance | ≥ 95 |
| LCP | < 1.2 s |
| INP | < 200 ms |
| CLS | < 0.1 |
| JS total (pages statiques) | 0 KB |
| JS total (pages avec Islands) | < 30 KB |

---

## 10. Structure de projet Astro

```
front-end-studies/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/
    │   ├── Header.astro
    │   ├── FrameworkCard.astro
    │   ├── CompareTable.astro
    │   ├── wizard/
    │   │   └── Wizard.tsx          ← Island React
    │   └── demos/
    │       ├── Counter.react.tsx   ← Island React
    │       ├── Counter.vue         ← Island Vue
    │       └── Counter.svelte      ← Island Svelte
    ├── data/
    │   └── frameworks.ts           ← donnees centralisees (benchmarks, use cases)
    └── pages/
        ├── index.astro
        ├── compare.astro
        ├── wizard.astro
        ├── demos.astro
        └── frameworks/
            ├── react.astro
            ├── angular.astro
            ├── vue.astro
            ├── svelte.astro
            └── astro.astro
```

---

## 11. Dependances

```json
{
  "dependencies": {
    "astro": "^5.x",
    "@astrojs/react": "^4.x",
    "@astrojs/vue": "^4.x",
    "@astrojs/svelte": "^5.x",
    "@astrojs/tailwind": "^5.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "vue": "^3.6.x",
    "svelte": "^5.x",
    "tailwindcss": "^4.x",
    "typescript": "^5.x"
  }
}
```

---

## 12. Etapes d'implementation

1. **Init projet Astro** avec integrations React + Vue + Svelte + Tailwind
2. **Modeliser `src/data/frameworks.ts`** — source de verite pour tous les benchmarks et use cases
3. **Pages statiques** — fiches frameworks + matrice (SSG pur, zero JS)
4. **Island Wizard** — composant React avec logique de decision
5. **Island Demos** — composants counter/form dans les 3 frameworks
6. **Page `/compare`** — tableau filtrable (Island legere)
7. **Optimisation** — audit Lighthouse, ajustements bundle
8. **Deploiement** — adapter Vercel ou Cloudflare

---

*Source des donnees : notebook NotebookLM `front-end-studies-2025-2026` — ecosysteme web 2025-2026.*
