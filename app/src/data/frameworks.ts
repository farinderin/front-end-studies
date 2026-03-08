export type RenderPattern = 'SPA' | 'SSR' | 'SSG' | 'ISR' | 'PPR' | 'Islands' | 'PWA' | 'Edge' | 'Micro-frontends';

export interface Framework {
  id: string;
  name: string;
  version: string;
  metaFramework: string;
  color: string;
  icon: string;
  tagline: string;
  idealFor: string[];
  notIdealFor: string[];
  strengths: string[];
  weaknesses: string[];
  renderPatterns: RenderPattern[];
  benchmarks: {
    bundleStarter: string;
    tti: string;
    rps: string;
    adoption: string;
    satisfaction: string;
  };
  aiFirst: {
    score: number; // 1-5
    notes: string;
  };
  learningCurve: 'facile' | 'moderee' | 'difficile';
  ecosystem: 'petit' | 'moyen' | 'grand' | 'tres-grand';
  mobileCrossplatform: boolean;
}

export const frameworks: Framework[] = [
  {
    id: 'react',
    name: 'React',
    version: '19+',
    metaFramework: 'Next.js 16',
    color: '#61DAFB',
    icon: '⚛️',
    tagline: 'La bibliotheque UI la plus adoptee au monde',
    idealFor: [
      'SPA complexes avec etat riche',
      'Applications enterprise large echelle',
      'Produits AI-first (streaming, chat)',
      'Cross-platform avec React Native',
      'Equipes large qui recrutent vite',
    ],
    notIdealFor: [
      'Sites statiques/contenu pur (surcharge inutile)',
      'Equipes junior cherchant une courbe douce',
      'Projets avec contraintes de bundle extreme',
    ],
    strengths: [
      'Ecosysteme imbattable — la plupart des libs UI/chart/animation sont React-first',
      'Plus grand vivier de talents (82% des devs ont utilise React)',
      'Avantage "prime to training" : 4x plus de donnees d\'entrainement pour les IA',
      'React Compiler automatise la memoisation (-25 a -40% re-renders)',
      'Server Components reduisent le render initial de 2.4s a 0.8s',
      'Integration Vercel AI SDK — premier choix pour les apps AI',
    ],
    weaknesses: [
      '"Complexity tax" : hooks et tableaux de dependances verbose',
      'Runtime lourd vs frameworks compiles',
      'Courbe d\'apprentissage moderee a difficile',
    ],
    renderPatterns: ['SPA', 'SSR', 'SSG', 'ISR', 'PPR', 'Edge'],
    benchmarks: {
      bundleStarter: '32–40 KB',
      tti: '350 ms',
      rps: '850 (Next.js)',
      adoption: '91%',
      satisfaction: '—',
    },
    aiFirst: {
      score: 5,
      notes: '4x plus de donnees d\'entrainement vs concurrents. Vercel AI SDK natif. Vercel v0 genere du React par defaut.',
    },
    learningCurve: 'moderee',
    ecosystem: 'tres-grand',
    mobileCrossplatform: true,
  },
  {
    id: 'angular',
    name: 'Angular',
    version: '21',
    metaFramework: 'Angular Universal',
    color: '#DD0031',
    icon: '🔺',
    tagline: 'Le framework enterprise batteries-included',
    idealFor: [
      'Applications enterprise massives (banque, sante, gouvernement)',
      'Equipes large necessitant structure et conventions strictes',
      'Projets long-terme avec maintenabilite prioritaire',
      'Apps avec routing complexe et formulaires avances',
    ],
    notIdealFor: [
      'Prototypes rapides',
      'Petites equipes junior',
      'Sites contenu/SEO pur',
      'Projets avec contraintes de bundle',
    ],
    strengths: [
      'Approche "batteries-included" : routing, forms, DI integres',
      'TypeScript-first par conception',
      'Architecture predictible et imposee — ideal pour grandes equipes',
      'Signals + architecture zoneless : +20 a +30% de perf runtime',
      'SSR : +42% amelioration LCP',
    ],
    weaknesses: [
      'Courbe d\'apprentissage tres difficile (RxJS, decorateurs, DI)',
      'Boilerplate verbeux',
      'Bundles les plus lourds des frameworks majeurs',
      'Sur-ingenierie pour petits projets',
    ],
    renderPatterns: ['SPA', 'SSR', 'PWA'],
    benchmarks: {
      bundleStarter: '110–130 KB',
      tti: '—',
      rps: '—',
      adoption: '—',
      satisfaction: '—',
    },
    aiFirst: {
      score: 2,
      notes: 'Moins couvert par les LLMs. Generation de code moins precise en raison de la complexite syntaxique.',
    },
    learningCurve: 'difficile',
    ecosystem: 'grand',
    mobileCrossplatform: false,
  },
  {
    id: 'vue',
    name: 'Vue',
    version: '3.6',
    metaFramework: 'Nuxt 4',
    color: '#42B883',
    icon: '💚',
    tagline: 'Le framework le plus accessible et flexible',
    idealFor: [
      'Prototypage rapide et MVP',
      'Applications petite a moyenne taille',
      'Onboarding de developpeurs junior ou HTML/CSS',
      'Equipes privilegiant la velocite de dev',
      'Projets avec design pixel-perfect',
    ],
    notIdealFor: [
      'Applications mobile cross-platform (Vue Native deprecie)',
      'Ecosysteme tres specialise (moins de libs tierces)',
      'Recrutement rapide a grande echelle',
    ],
    strengths: [
      'Syntaxe template la plus intuitive — proche de HTML standard',
      'Courbe d\'apprentissage la plus douce',
      'Vapor Mode (v3.6) : monte 100 000 composants en 100 ms',
      'Base version < 10 KB en v3.6',
      '93.4% d\'interet pour utilisation future',
    ],
    weaknesses: [
      'Ecosysteme tiers plus petit que React',
      'Pas de solution mobile native mature',
      'Moins de donnees d\'entrainement pour les IA',
    ],
    renderPatterns: ['SPA', 'SSR', 'SSG', 'PWA', 'Edge'],
    benchmarks: {
      bundleStarter: '18–22 KB',
      tti: '300 ms',
      rps: '—',
      adoption: '51%',
      satisfaction: '93.4% interet futur',
    },
    aiFirst: {
      score: 3,
      notes: 'Bonne couverture par les LLMs. Syntaxe simple facilite la generation automatique.',
    },
    learningCurve: 'facile',
    ecosystem: 'moyen',
    mobileCrossplatform: false,
  },
  {
    id: 'svelte',
    name: 'Svelte',
    version: '5',
    metaFramework: 'SvelteKit',
    color: '#FF3E00',
    icon: '🔥',
    tagline: 'Le compilateur-framework le plus rapide',
    idealFor: [
      'Apps performance-critiques sur mobile/reseau lent',
      'Visualisation de donnees et dashboards riches',
      'PWA et apps offline-first',
      'Petites equipes senior privilegiant la qualite',
      'Projets avec contraintes de bundle extreme',
    ],
    notIdealFor: [
      'Equipes devant recruter rapidement',
      'Ecosysteme tiers tres specialise',
      'Projets needing mobile cross-platform',
    ],
    strengths: [
      'Zero framework runtime — code compiles en vanilla JS',
      'Bundles < 10 KB en production gzippee',
      '1 200 RPS serveur vs 850 pour Next.js',
      'Runes (v5) : reactivity fine-grained la plus efficace',
      'TTI 200 ms — le plus rapide des frameworks',
      'Taux d\'admiration le plus haut : 62%',
    ],
    weaknesses: [
      'Ecosysteme et vivier de talents plus petits',
      'Support corporate moins etabli (Vercel) vs Meta/Google',
      'Moins de ressources de formation',
    ],
    renderPatterns: ['SPA', 'SSR', 'SSG', 'PWA', 'Edge'],
    benchmarks: {
      bundleStarter: '< 10 KB',
      tti: '200 ms',
      rps: '1 200',
      adoption: '—',
      satisfaction: '62% admiration',
    },
    aiFirst: {
      score: 3,
      notes: 'Couverture IA correcte. Syntaxe Runes recente — les LLMs peuvent generer du code Svelte 4 par erreur.',
    },
    learningCurve: 'facile',
    ecosystem: 'petit',
    mobileCrossplatform: false,
  },
  {
    id: 'astro',
    name: 'Astro',
    version: '5',
    metaFramework: 'Astro (natif)',
    color: '#FF5D01',
    icon: '🚀',
    tagline: 'Zero JS par defaut, Islands Architecture',
    idealFor: [
      'Sites de contenu (blog, documentation, marketing)',
      'SEO et Core Web Vitals prioritaires',
      'Portails multi-framework (mix React + Vue + Svelte)',
      'Sites avec peu d\'interactivite cote client',
      'Demos et comparaisons de frameworks',
    ],
    notIdealFor: [
      'Applications SaaS avec etat complexe et temps reel',
      'Dashboards hautement interactifs sans configuration extra',
      'Applications mobile',
    ],
    strengths: [
      'Islands Architecture : 0 KB JS par defaut',
      'Seul framework pouvant executer React, Vue et Svelte sur la meme page',
      'Meilleurs scores Core Web Vitals par design',
      'SSG expert rating : 5/5',
      'Ideal pour documentation et sites multi-framework',
    ],
    weaknesses: [
      'Non concu pour les apps hautement dynamiques',
      'Configuration extra necessaire pour du state complexe',
      'Ecosysteme plus jeune',
    ],
    renderPatterns: ['SSG', 'SSR', 'Islands', 'Edge'],
    benchmarks: {
      bundleStarter: '0 KB (static)',
      tti: 'Meilleur',
      rps: '—',
      adoption: '—',
      satisfaction: '5/5 SSG',
    },
    aiFirst: {
      score: 4,
      notes: 'Bonne couverture LLM. Syntaxe .astro intuitive. Compatible avec islands React/Vue/Svelte generes par IA.',
    },
    learningCurve: 'facile',
    ecosystem: 'moyen',
    mobileCrossplatform: false,
  },
];

export const frameworksById = Object.fromEntries(frameworks.map(f => [f.id, f]));
