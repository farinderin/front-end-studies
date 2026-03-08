import { useState } from 'react';

type Answer = string;

interface Question {
  id: string;
  text: string;
  options: { value: string; label: string; icon: string }[];
}

const questions: Question[] = [
  {
    id: 'projectType',
    text: 'Quel est le type principal de votre projet ?',
    options: [
      { value: 'content', label: 'Site de contenu / blog / documentation / SEO', icon: '📄' },
      { value: 'app', label: 'Application avec etat riche / dashboard / SaaS', icon: '⚙️' },
      { value: 'enterprise', label: 'Application enterprise large echelle', icon: '🏢' },
      { value: 'prototype', label: 'Prototype rapide / MVP', icon: '🚀' },
    ],
  },
  {
    id: 'performance',
    text: 'La performance mobile et la taille de bundle sont-elles critiques ?',
    options: [
      { value: 'yes', label: 'Oui, reseau lent ou appareil bas de gamme', icon: '📱' },
      { value: 'no', label: 'Non, public cible desktop haut de gamme', icon: '💻' },
    ],
  },
  {
    id: 'mobile',
    text: 'Avez-vous besoin d\'une application mobile cross-platform ?',
    options: [
      { value: 'yes', label: 'Oui, iOS/Android dans la roadmap', icon: '📲' },
      { value: 'no', label: 'Non, web uniquement', icon: '🌐' },
    ],
  },
  {
    id: 'team',
    text: 'Quelle est la situation de votre equipe ?',
    options: [
      { value: 'large', label: 'Grande equipe, recrutement frequent', icon: '👥' },
      { value: 'junior', label: 'Petite equipe avec developpeurs junior', icon: '🌱' },
      { value: 'senior', label: 'Equipe experiente, priorite qualite technique', icon: '🎯' },
    ],
  },
  {
    id: 'ai',
    text: 'Utilisez-vous intensivement des assistants IA (Copilot, Cursor, Claude) ?',
    options: [
      { value: 'yes', label: 'Oui, c\'est central dans notre workflow', icon: '🤖' },
      { value: 'no', label: 'Non ou marginalement', icon: '✏️' },
    ],
  },
  {
    id: 'realtime',
    text: 'Votre app necessite-t-elle des fonctionnalites temps reel ?',
    options: [
      { value: 'yes', label: 'Oui (chat, live data, streaming IA)', icon: '⚡' },
      { value: 'no', label: 'Non', icon: '📊' },
    ],
  },
];

interface Recommendation {
  framework: string;
  id: string;
  color: string;
  icon: string;
  reason: string;
  points: string[];
}

function getRecommendation(answers: Record<string, Answer>): Recommendation {
  const { projectType, performance, mobile, team, ai, realtime } = answers;

  if (mobile === 'yes') {
    return {
      framework: 'React / React Native',
      id: 'react',
      color: '#61DAFB',
      icon: '⚛️',
      reason: 'Seul framework offrant un stack unifie web + mobile cross-platform',
      points: [
        'React Native pour iOS et Android depuis la meme codebase',
        'Ecosysteme le plus mature et le plus large',
        'Next.js pour la partie web',
      ],
    };
  }

  if (projectType === 'content') {
    return {
      framework: 'Astro',
      id: 'astro',
      color: '#FF5D01',
      icon: '🚀',
      reason: 'Zero JS par defaut — meilleurs Core Web Vitals du marche',
      points: [
        '0 KB de JavaScript pour les pages statiques',
        'Islands Architecture pour les composants interactifs',
        'Peut integrer React, Vue et Svelte sur la meme page',
      ],
    };
  }

  if (projectType === 'enterprise') {
    return {
      framework: 'Angular',
      id: 'angular',
      color: '#DD0031',
      icon: '🔺',
      reason: 'Structure imposee et maintenabilite long terme pour grandes equipes',
      points: [
        'Batteries-included : routing, forms, DI integres',
        'TypeScript-first par conception',
        'Signals + zoneless : +20-30% perf runtime en v21',
      ],
    };
  }

  if (projectType === 'prototype' || team === 'junior') {
    return {
      framework: 'Vue',
      id: 'vue',
      color: '#42B883',
      icon: '💚',
      reason: 'Courbe d\'apprentissage la plus douce — velocite maximale pour debuter',
      points: [
        'Syntaxe template la plus proche du HTML standard',
        'Base < 10 KB en v3.6',
        '93.4% d\'interet pour utilisation future',
      ],
    };
  }

  if (performance === 'yes' && team === 'senior' && ai === 'no') {
    return {
      framework: 'SvelteKit',
      id: 'svelte',
      color: '#FF3E00',
      icon: '🔥',
      reason: 'Bundles les plus petits et throughput serveur record',
      points: [
        'TTI 200ms — le plus rapide des frameworks',
        '1 200 RPS vs 850 pour Next.js',
        'Bundles < 10 KB en production',
      ],
    };
  }

  if (ai === 'yes' || realtime === 'yes') {
    return {
      framework: 'React / Next.js',
      id: 'react',
      color: '#61DAFB',
      icon: '⚛️',
      reason: 'Premier choix pour le developpement AI-first et le temps reel',
      points: [
        '4x plus de donnees d\'entrainement — code IA plus precis',
        'Vercel AI SDK natif pour le streaming',
        'Ecosysteme AI le plus complet',
      ],
    };
  }

  if (team === 'large') {
    return {
      framework: 'React / Next.js',
      id: 'react',
      color: '#61DAFB',
      icon: '⚛️',
      reason: 'Plus grand vivier de talents — recrutement facilite',
      points: [
        '91% d\'adoption — standard de l\'industrie',
        'Partial Prerendering pour performances optimales',
        'React Compiler reduit les re-renders de 25-40%',
      ],
    };
  }

  // Default for app/SaaS
  return {
    framework: 'React / Next.js',
    id: 'react',
    color: '#61DAFB',
    icon: '⚛️',
    reason: 'Ecosysteme le plus mature pour les applications SaaS',
    points: [
      'Server Components reduisent le render initial de 2.4s a 0.8s',
      'Ecosysteme UI/chart/animation le plus riche',
      'Support enterprise et stabilite garantis',
    ],
  };
}

export default function Wizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [result, setResult] = useState<Recommendation | null>(null);

  const currentQuestion = questions[step];

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setResult(getRecommendation(newAnswers));
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  if (result) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">{result.icon}</div>
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Notre recommandation</div>
          <h2 className="text-3xl font-bold mb-3" style={{ color: result.color }}>
            {result.framework}
          </h2>
          <p className="text-gray-300 mb-6">{result.reason}</p>
          <ul className="text-left space-y-2 mb-8">
            {result.points.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-indigo-400 shrink-0">→</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 justify-center">
            <a
              href={`/frameworks/${result.id}`}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Voir la fiche complete
            </a>
            <button
              onClick={reset}
              className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Recommencer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex gap-1 mb-8">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < step ? 'bg-indigo-500' : i === step ? 'bg-indigo-400' : 'bg-gray-800'
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <div className="text-xs text-gray-500 mb-4">Question {step + 1} / {questions.length}</div>
        <h2 className="text-xl font-bold text-white mb-6">{currentQuestion.text}</h2>
        <div className="grid gap-3">
          {currentQuestion.options.map(opt => (
            <button
              key={opt.value}
              onClick={() => handleAnswer(opt.value)}
              className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-indigo-500 rounded-xl text-left transition-all"
            >
              <span className="text-2xl shrink-0">{opt.icon}</span>
              <span className="text-sm text-gray-200">{opt.label}</span>
            </button>
          ))}
        </div>
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Precedent
          </button>
        )}
      </div>
    </div>
  );
}
