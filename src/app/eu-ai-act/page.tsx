'use client';

import { useState } from 'react';
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronDown,
  FileText,
  Scale,
  Users,
  Brain,
  Eye,
  Lock,
  Zap,
  Globe,
  ArrowRight,
  Calendar,
  BookOpen,
  BadgeAlert,
  Building2,
} from 'lucide-react';

const DEADLINE = new Date('2026-08-02T00:00:00Z');
const NOW = new Date();
const DAYS_LEFT = Math.max(0, Math.ceil((DEADLINE.getTime() - NOW.getTime()) / (1000 * 60 * 60 * 24)));

const faqItems = [
  {
    question: 'What is the EU AI Act?',
    answer:
      'The EU AI Act (Regulation (EU) 2024/1689) is the world\'s first comprehensive legal framework for artificial intelligence. Adopted by the European Parliament on 13 March 2024 and published in the Official Journal on 12 July 2024, it establishes harmonised rules for the placing on the market, putting into service, and use of AI systems in the European Union. It entered into force on 1 August 2024.',
  },
  {
    question: 'When does the EU AI Act come into effect?',
    answer:
      'The EU AI Act entered into force on 1 August 2024, but obligations apply in phases. Prohibited AI practices (Article 5) apply from 2 February 2025. General-purpose AI model obligations apply from 2 August 2025. Most provisions — including high-risk system requirements (Chapter III) and transparency obligations (Article 50) — apply from 2 August 2026. Remaining provisions for Annex I high-risk systems apply from 2 August 2027.',
  },
  {
    question: 'Who does the EU AI Act apply to?',
    answer:
      'The Act applies to: (1) providers placing AI systems on the EU market or putting them into service, regardless of where they are established; (2) deployers of AI systems established or located in the EU; (3) importers and distributors of AI systems; (4) product manufacturers integrating AI into products covered by EU harmonisation legislation; and (5) authorised representatives of non-EU providers. It also has extraterritorial reach — any provider whose AI system outputs are used in the EU must comply.',
  },
  {
    question: 'What are the penalties for non-compliance?',
    answer:
      'Penalties under Article 99 are severe: violations of prohibited AI practices carry fines up to €35,000,000 or 7% of total worldwide annual turnover (whichever is higher). Non-compliance with other obligations can result in fines up to €15,000,000 or 3% of turnover. Supplying incorrect or misleading information to authorities can result in fines up to €7,500,000 or 1% of turnover. SMEs and startups benefit from proportionate caps.',
  },
  {
    question: 'What is a high-risk AI system under the EU AI Act?',
    answer:
      'High-risk AI systems are defined in Article 6 and listed in Annex III. They include AI used in: biometric identification and categorisation; management and operation of critical infrastructure; education and vocational training; employment, workers management, and access to self-employment; access to essential private and public services; law enforcement; migration, asylum, and border control management; and administration of justice and democratic processes. Systems must also undergo a conformity assessment before being placed on the market.',
  },
  {
    question: 'What is Article 50 of the EU AI Act?',
    answer:
      'Article 50 establishes transparency obligations that apply from 2 August 2026. It requires providers and deployers to: (1) ensure AI-generated content (text, audio, image, video) is marked as artificially generated or manipulated; (2) disclose when individuals are interacting with an AI system rather than a human; (3) clearly inform users when content is AI-generated, particularly for deepfakes; (4) label AI-generated or manipulated text published to inform the public on matters of public interest. See our dedicated [Article 50 guide](/eu-ai-act/article-50) for full details.',
  },
  {
    question: 'Do I need a conformity assessment for my AI system?',
    answer:
      'If your AI system is classified as high-risk under Article 6 (either through Annex III classification or as a safety component of regulated products), a conformity assessment is mandatory before placing it on the market. The assessment verifies compliance with requirements in Chapter III, Section 2 — including data governance, transparency, human oversight, accuracy, and robustness. Assessments can be internal (for Annex III systems) or require a notified body (for Annex I systems).',
  },
  {
    question: 'What is the EU AI Act\'s risk classification system?',
    answer:
      'The Act uses a four-tier risk pyramid: (1) Unacceptable risk — prohibited outright (e.g., social scoring, real-time biometric identification in public spaces with exceptions); (2) High risk — subject to strict requirements including conformity assessments, data governance, and human oversight; (3) Limited risk — subject to transparency obligations (e.g., chatbots must disclose their nature); (4) Minimal risk — no specific obligations, voluntary codes of conduct encouraged.',
  },
  {
    question: 'How does the EU AI Act affect general-purpose AI (GPAI) models?',
    answer:
      'General-purpose AI model providers must: maintain technical documentation; provide information and documentation to downstream providers; establish a copyright compliance policy; publish a sufficiently detailed training content summary. GPAI models presenting systemic risk (training compute exceeding 10^25 FLOPs) face additional obligations including model evaluations, adversarial testing, incident tracking, and cybersecurity protections. These obligations apply from 2 August 2025.',
  },
  {
    question: 'How can SafetyOf.AI help with EU AI Act compliance?',
    answer:
      'SafetyOf.AI provides end-to-end EU AI Act compliance tooling: automated risk classification scanning, Article 50 transparency verification, high-risk system conformity assessment workflows, continuous monitoring with 12+ MCP tools, and A2A agent-coordinated gap analysis. Our 48-hour compliance audit identifies gaps against all EU AI Act requirements. Start with a free compliance scan or book a full audit at safetyof.ai/pricing.',
  },
];

const tocItems = [
  { id: 'what-is', label: 'What Is the EU AI Act?' },
  { id: 'deadlines', label: 'Key Deadlines' },
  { id: 'who-is-affected', label: 'Who Is Affected?' },
  { id: 'risk-classification', label: 'Risk Classification' },
  { id: 'article-50', label: 'Article 50 Transparency' },
  { id: 'high-risk', label: 'High-Risk Obligations' },
  { id: 'penalties', label: 'Penalties' },
  { id: 'how-to-comply', label: 'How to Comply' },
  { id: 'self-assessment', label: 'Free Self-Assessment' },
  { id: 'faq', label: 'FAQ' },
];

const selfAssessmentQuestions = [
  {
    id: 'system-type',
    question: 'What type of AI system do you deploy?',
    options: [
      { label: 'Generative AI (LLMs, image/audio generation)', risk: 3 },
      { label: 'Biometric identification or categorisation', risk: 4 },
      { label: 'Decision support (employment, credit, education)', risk: 4 },
      { label: 'Chatbot or virtual assistant', risk: 2 },
      { label: 'Recommendation system', risk: 1 },
      { label: 'Computer vision / object detection', risk: 2 },
      { label: 'Other / Not sure', risk: 2 },
    ],
  },
  {
    id: 'eu-users',
    question: 'Do any users or affected persons reside in the EU?',
    options: [
      { label: 'Yes, primarily EU-based', risk: 3 },
      { label: 'Yes, some EU users', risk: 2 },
      { label: 'No EU users', risk: 0 },
      { label: 'Unsure', risk: 2 },
    ],
  },
  {
    id: 'data-processing',
    question: 'What data does your AI system process?',
    options: [
      { label: 'Special category data (health, biometric, political opinions)', risk: 4 },
      { label: 'Personal data (names, emails, identifiers)', risk: 3 },
      { label: 'Publicly available data only', risk: 1 },
      { label: 'No personal data', risk: 0 },
    ],
  },
  {
    id: 'transparency',
    question: 'What transparency measures are currently in place?',
    options: [
      { label: 'None', risk: 4 },
      { label: 'Basic privacy policy only', risk: 3 },
      { label: 'AI disclosure + watermarking for generated content', risk: 1 },
      { label: 'Full Article 50 compliance implemented', risk: 0 },
    ],
  },
  {
    id: 'human-oversight',
    question: 'Is there human oversight of AI decisions?',
    options: [
      { label: 'Fully automated with no human review', risk: 4 },
      { label: 'Human-in-the-loop for critical decisions', risk: 2 },
      { label: 'Human-on-the-loop with monitoring', risk: 1 },
      { label: 'Full human oversight with override capability', risk: 0 },
    ],
  },
  {
    id: 'documentation',
    question: 'Do you maintain technical documentation for your AI system?',
    options: [
      { label: 'No documentation', risk: 4 },
      { label: 'Basic README / internal docs', risk: 3 },
      { label: 'Detailed technical docs but no conformity assessment', risk: 2 },
      { label: 'Full technical documentation + conformity assessment', risk: 0 },
    ],
  },
];

function FaqItem({ item, index }: { item: (typeof faqItems)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-accent/50 transition-colors"
      >
        <span className="font-medium pr-4">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

function SelfAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [complete, setComplete] = useState(false);

  const currentQ = selfAssessmentQuestions[step];

  const handleAnswer = (questionId: string, risk: number) => {
    const newAnswers = { ...answers, [questionId]: risk };
    setAnswers(newAnswers);

    if (step < selfAssessmentQuestions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setComplete(true), 300);
    }
  };

  const totalRisk = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxRisk = selfAssessmentQuestions.reduce(
    (a, q) => a + Math.max(...q.options.map((o) => o.risk)),
    0
  );
  const score = Math.max(0, Math.round(((maxRisk - totalRisk) / maxRisk) * 100));

  const getRiskLevel = () => {
    if (score >= 80) return { label: 'Low Risk', color: 'text-safety-400', bg: 'bg-safety-500/20', advice: 'Your AI system appears to be in a lower risk category. Continue monitoring and maintain current compliance posture.' };
    if (score >= 50) return { label: 'Moderate Risk', color: 'text-yellow-400', bg: 'bg-yellow-500/20', advice: 'Your AI system has moderate compliance gaps. We recommend a detailed gap analysis to address transparency and documentation requirements.' };
    return { label: 'High Risk — Action Required', color: 'text-red-400', bg: 'bg-red-500/20', advice: 'Your AI system has significant compliance gaps that require immediate attention. Book an urgent compliance audit to avoid potential penalties.' };
  };

  if (complete) {
    const risk = getRiskLevel();
    return (
      <div className="rounded-2xl bg-card border border-border p-8">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${risk.bg} ${risk.color} text-sm font-medium mb-4`}>
            <BadgeAlert className="w-4 h-4" />
            {risk.label}
          </div>
          <div className="text-5xl font-bold text-brand-400 mb-2">{score}/100</div>
          <p className="text-muted-foreground">Compliance Readiness Score</p>
        </div>

        <div className="w-full bg-background rounded-full h-3 mb-6">
          <div
            className={`h-3 rounded-full ${score >= 80 ? 'bg-safety-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${score}%` }}
          />
        </div>

        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{risk.advice}</p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {selfAssessmentQuestions.map((q) => (
            <div key={q.id} className="flex items-center justify-between py-2 px-3 rounded-lg bg-background border border-border">
              <span className="text-xs text-muted-foreground truncate mr-2">{q.question.replace('?', '')}</span>
              <span className={`text-xs font-mono flex-shrink-0 ${(answers[q.id] ?? 0) <= 1 ? 'text-safety-400' : (answers[q.id] ?? 0) <= 2 ? 'text-yellow-400' : 'text-red-400'}`}>
                {(answers[q.id] ?? 0) <= 1 ? 'PASS' : (answers[q.id] ?? 0) <= 2 ? 'WARN' : 'GAP'}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/pricing" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity">
            Book Full Audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => { setStep(0); setAnswers({}); setComplete(false); }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-background border border-border font-semibold hover:border-brand-500/30 transition-colors"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-card border border-border p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-mono text-brand-400">
          Question {step + 1} of {selfAssessmentQuestions.length}
        </span>
        <div className="flex gap-1">
          {selfAssessmentQuestions.map((_, i) => (
            <div key={i} className={`w-8 h-1 rounded-full ${i <= step ? 'bg-brand-500' : 'bg-muted'}`} />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-6">{currentQ.question}</h3>

      <div className="space-y-3">
        {currentQ.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => handleAnswer(currentQ.id, opt.risk)}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              answers[currentQ.id] === opt.risk
                ? 'border-brand-500 bg-brand-500/10'
                : 'border-border bg-background hover:border-brand-500/30'
            }`}
          >
            <span className="text-sm">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function EUAIActGuide() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'EU AI Act Compliance Guide 2026 — Everything You Need to Know',
    description:
      'Complete guide to EU AI Act compliance covering risk classification, Article 50 transparency obligations, high-risk system requirements, penalties, and step-by-step compliance guidance.',
    author: {
      '@type': 'Organization',
      name: 'SafetyOf.AI',
      url: 'https://safetyof.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SafetyOf.AI',
      url: 'https://safetyof.ai',
    },
    datePublished: '2026-05-14',
    dateModified: '2026-05-14',
    url: 'https://safetyof.ai/eu-ai-act',
    mainEntityOfPage: 'https://safetyof.ai/eu-ai-act',
    keywords: [
      'EU AI Act',
      'AI compliance',
      'Article 50',
      'high-risk AI',
      'conformity assessment',
      'AI regulation',
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="relative">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* LLM-readable context */}
      <script
        type="text/llms.txt"
        dangerouslySetInnerHTML={{
          __html: `EU AI Act Compliance Guide by SafetyOf.AI. Regulation (EU) 2024/1689. Key dates: Article 5 prohibited practices from 2 Feb 2025, GPAI obligations from 2 Aug 2025, Article 50 transparency & high-risk obligations from 2 Aug 2026, Annex I systems from 2 Aug 2027. Penalties: up to EUR 35M or 7% turnover. SafetyOf.AI offers automated compliance scanning, gap analysis, and continuous monitoring. Book audit: safetyof.ai/pricing`,
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              {DAYS_LEFT} days until Article 50 deadline — 2 August 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">EU AI Act</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Compliance Guide
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Everything you need to know about Regulation (EU) 2024/1689. Risk classification, Article 50 transparency, high-risk system obligations, penalties up to €35M, and how to comply before the August 2026 deadline.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#self-assessment"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
              >
                <Zap className="w-5 h-5" />
                Free Self-Assessment
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#deadlines"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors"
              >
                <Calendar className="w-5 h-5" />
                View Deadlines
              </a>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mt-12">
              {[
                { value: Math.floor(DAYS_LEFT / 30), label: 'Months' },
                { value: DAYS_LEFT, label: 'Days' },
                { value: '€35M', label: 'Max Penalty' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-brand-400">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-mono text-brand-400 uppercase tracking-wider mb-4">On This Page</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              >
                <span className="text-xs font-mono text-brand-500 w-6">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What Is the EU AI Act */}
      <section id="what-is" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">What Is the EU AI Act?</h2>
          </div>

          <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The EU AI Act — formally <strong className="text-foreground">Regulation (EU) 2024/1689</strong> — is the world&apos;s first comprehensive legal framework governing artificial intelligence. Adopted by the European Parliament on 13 March 2024 and published in the Official Journal of the European Union on 12 July 2024, it entered into force on <strong className="text-foreground">1 August 2024</strong>.
            </p>
            <p>
              The regulation establishes a risk-based approach to AI governance, categorising AI systems into four tiers: unacceptable risk (prohibited), high risk (heavily regulated), limited risk (transparency obligations), and minimal risk (voluntary codes of conduct). It introduces mandatory requirements for high-risk AI systems including data governance, transparency, human oversight, accuracy, and robustness.
            </p>
            <p>
              Unlike voluntary frameworks or industry standards, the EU AI Act is directly applicable in all EU Member States and carries significant enforcement teeth — penalties of up to <strong className="text-foreground">€35 million or 7% of global annual turnover</strong>. It also has extraterritorial reach, meaning organisations outside the EU must comply if their AI systems affect EU residents.
            </p>
            <p>
              The Act works alongside existing EU legislation including the GDPR (data protection), the Product Liability Directive, the Machinery Regulation, and sector-specific legislation. For AI providers and deployers, it creates a new compliance imperative that intersects with cybersecurity, data governance, and risk management.
            </p>
          </div>
        </div>
      </section>

      {/* Key Deadlines */}
      <section id="deadlines" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Key Deadlines</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                date: '1 August 2024',
                title: 'Entry into Force',
                description: 'The EU AI Act officially enters into force. The 24-month phased implementation period begins.',
                status: 'past',
                article: 'Article 113',
              },
              {
                date: '2 February 2025',
                title: 'Prohibited AI Practices Ban',
                description: 'AI systems posing unacceptable risk are banned outright — including social scoring, manipulation of vulnerable groups, and real-time biometric identification in public spaces (with limited law enforcement exceptions).',
                status: 'past',
                article: 'Article 5',
              },
              {
                date: '2 August 2025',
                title: 'General-Purpose AI (GPAI) Obligations',
                description: 'Providers of general-purpose AI models must comply with transparency requirements, technical documentation, copyright policies, and training data summaries. GPAI models with systemic risk face additional evaluation and adversarial testing obligations.',
                status: 'past',
                article: 'Articles 51–56',
              },
              {
                date: '2 August 2026',
                title: 'High-Risk Systems & Transparency Obligations',
                description: 'The majority of the Act\'s provisions apply. High-risk AI systems listed in Annex III must meet all Chapter III requirements. Article 50 transparency obligations take effect — including watermarking, deepfake disclosure, and chatbot identification. Registration in the EU database becomes mandatory.',
                status: 'upcoming',
                article: 'Articles 6, 50',
              },
              {
                date: '2 August 2027',
                title: 'Annex I High-Risk Systems',
                description: 'AI systems that are safety components of products covered by EU harmonisation legislation (Annex I) must fully comply. This includes AI in medical devices, machinery, vehicles, and toys.',
                status: 'future',
                article: 'Article 6(1)',
              },
            ].map((deadline) => (
              <div
                key={deadline.title}
                className={`rounded-xl border p-6 ${
                  deadline.status === 'past'
                    ? 'bg-background border-border opacity-70'
                    : deadline.status === 'upcoming'
                    ? 'bg-background border-red-500/30 glow-threat'
                    : 'bg-background border-border'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      deadline.status === 'past'
                        ? 'bg-safety-500/10 text-safety-400'
                        : deadline.status === 'upcoming'
                        ? 'bg-red-500/10 text-red-400'
                        : 'bg-brand-500/10 text-brand-400'
                    }`}
                  >
                    {deadline.status === 'past' ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : deadline.status === 'upcoming' ? (
                      <AlertTriangle className="w-6 h-6" />
                    ) : (
                      <Clock className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-brand-400">{deadline.article}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          deadline.status === 'past'
                            ? 'bg-safety-500/20 text-safety-400'
                            : deadline.status === 'upcoming'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-brand-500/20 text-brand-400'
                        }`}
                      >
                        {deadline.status === 'past' ? 'EFFECTIVE' : deadline.status === 'upcoming' ? `${DAYS_LEFT} DAYS LEFT` : 'UPCOMING'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{deadline.title}</h3>
                    <p className="text-sm text-muted-foreground">{deadline.date}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{deadline.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is Affected */}
      <section id="who-is-affected" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Who Is Affected?</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            The EU AI Act has broad extraterritorial reach. It applies to any organisation whose AI systems are placed on the EU market or whose AI outputs affect persons in the EU, regardless of where the provider is established.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Building2,
                title: 'AI Providers',
                desc: 'Any entity that develops or places an AI system on the EU market, including companies outside the EU whose systems are used within the EU.',
              },
              {
                icon: Users,
                title: 'AI Deployers',
                desc: 'Organisations using AI systems under their authority in a professional capacity, established or located in the EU.',
              },
              {
                icon: Globe,
                title: 'Importers & Distributors',
                desc: 'Entities importing AI systems from third countries into the EU or making them available on the EU market.',
              },
              {
                icon: FileText,
                title: 'Authorised Representatives',
                desc: 'Non-EU providers must appoint an authorised representative established in the EU before placing their AI system on the market.',
              },
            ].map((entity) => (
              <div key={entity.title} className="rounded-xl bg-card border border-border p-6">
                <entity.icon className="w-5 h-5 text-brand-400 mb-3" />
                <h3 className="font-semibold mb-2">{entity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{entity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Classification */}
      <section id="risk-classification" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Risk Classification System</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            The EU AI Act uses a pyramid-based risk classification system (Articles 5–15). Each tier carries different regulatory obligations. Correctly classifying your AI system is the critical first step toward compliance.
          </p>

          <div className="space-y-4">
            {[
              {
                risk: 'Unacceptable Risk',
                color: 'red',
                icon: BadgeAlert,
                description: 'AI systems posing an unacceptable risk to fundamental rights are prohibited outright under Article 5.',
                examples: [
                  'Social scoring by governments',
                  'Manipulation of vulnerable groups (children, disabled persons)',
                  'Real-time remote biometric identification in public spaces (with narrow law enforcement exceptions)',
                  'Emotion recognition in workplaces and educational institutions',
                  'Untargeted scraping of facial images for facial recognition databases',
                ],
                obligation: 'BANNED — Cannot be placed on the EU market',
              },
              {
                risk: 'High Risk',
                color: 'yellow',
                icon: AlertTriangle,
                description: 'AI systems listed in Annex III that pose significant risks to health, safety, or fundamental rights. Subject to the most stringent requirements under Chapter III.',
                examples: [
                  'Biometric identification and categorisation',
                  'Critical infrastructure management (energy, transport)',
                  'Education and vocational training access',
                  'Employment, recruitment, and worker management',
                  'Access to essential services (credit scoring, insurance, social benefits)',
                  'Law enforcement, migration, and border control',
                  'Administration of justice and democratic processes',
                ],
                obligation: 'Conformity assessment, data governance, transparency, human oversight, registration in EU database',
              },
              {
                risk: 'Limited Risk',
                color: 'blue',
                icon: Eye,
                description: 'AI systems with specific transparency obligations. Users must be informed they are interacting with or consuming content from an AI system.',
                examples: [
                  'Chatbots and virtual assistants',
                  'Deepfake generators',
                  'Emotion recognition systems',
                  'AI-generated content (text, image, audio, video)',
                ],
                obligation: 'Transparency obligations under Article 50 — disclosure, labelling, watermarking',
              },
              {
                risk: 'Minimal Risk',
                color: 'green',
                icon: CheckCircle2,
                description: 'AI systems posing minimal or no risk to citizens\' rights or safety. No mandatory obligations, but voluntary codes of conduct are encouraged.',
                examples: [
                  'AI-powered video games',
                  'Spam filters',
                  'Inventory management systems',
                  'Recommendation engines (non-sensitive)',
                ],
                obligation: 'No mandatory requirements — voluntary codes of conduct encouraged',
              },
            ].map((tier) => (
              <div key={tier.risk} className={`rounded-xl border p-6 ${
                tier.color === 'red' ? 'border-red-500/30 bg-red-500/5' :
                tier.color === 'yellow' ? 'border-yellow-500/30 bg-yellow-500/5' :
                tier.color === 'blue' ? 'border-brand-500/30 bg-brand-500/5' :
                'border-safety-500/30 bg-safety-500/5'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    tier.color === 'red' ? 'bg-red-500/10 text-red-400' :
                    tier.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-400' :
                    tier.color === 'blue' ? 'bg-brand-500/10 text-brand-400' :
                    'bg-safety-500/10 text-safety-400'
                  }`}>
                    <tier.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{tier.risk}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                    <div className="space-y-1 mb-3">
                      {tier.examples.map((ex) => (
                        <div key={ex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            tier.color === 'red' ? 'bg-red-400' :
                            tier.color === 'yellow' ? 'bg-yellow-400' :
                            tier.color === 'blue' ? 'bg-brand-400' :
                            'bg-safety-400'
                          }`} />
                          {ex}
                        </div>
                      ))}
                    </div>
                    <div className={`text-xs font-medium px-3 py-1.5 rounded-lg inline-block ${
                      tier.color === 'red' ? 'bg-red-500/10 text-red-400' :
                      tier.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-400' :
                      tier.color === 'blue' ? 'bg-brand-500/10 text-brand-400' :
                      'bg-safety-500/10 text-safety-400'
                    }`}>
                      {tier.obligation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article 50 */}
      <section id="article-50" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Article 50 — Transparency Obligations</h2>
              <p className="text-sm text-muted-foreground mt-1">Effective: 2 August 2026</p>
            </div>
          </div>

          <div className="rounded-xl bg-card border border-brand-500/20 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-400 mb-1">Key Deadline</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Article 50 transparency obligations apply from <strong className="text-foreground">2 August 2026</strong>. All providers and deployers of certain AI systems must comply. This includes obligations around AI-generated content marking, deepfake disclosure, and chatbot identification.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Article 50 of the EU AI Act establishes transparency obligations for providers and deployers of certain AI systems. These requirements ensure that natural persons are informed when they are interacting with AI systems or consuming AI-generated content.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Core Requirements</h3>

            <div className="grid gap-4">
              {[
                {
                  title: 'AI-Generated Content Marking',
                  article: 'Article 50(1)',
                  description: 'Providers of AI systems that generate or manipulate text, audio, image, or video content (including deepfakes) must ensure the outputs are marked in a machine-readable format and are detectable as artificially generated or manipulated. This applies to systems like large language models, image generators, voice cloning tools, and video synthesis systems.',
                },
                {
                  title: 'Interaction Disclosure',
                  article: 'Article 50(2)',
                  description: 'Deployers of AI systems that interact directly with natural persons — such as chatbots, virtual assistants, and conversational AI — must inform those persons that they are interacting with an AI system. The disclosure must be made in a clear and distinguishable manner at the latest at the first interaction or at the point of initial engagement.',
                },
                {
                  title: 'Deepfake Disclosure',
                  article: 'Article 50(3)',
                  description: 'Deployers of AI systems that generate or manipulate image, audio, or video content that appreciably resembles existing persons, objects, places, or events (deepfakes) must disclose that the content has been artificially generated or manipulated. The disclosure must be clear, timely, and visible — typically through labels, watermarks, or metadata.',
                },
                {
                  title: 'AI-Generated Text Disclosure',
                  article: 'Article 50(4)',
                  description: 'Deployers of AI systems that generate or manipulate text which is published with the purpose of informing the public on matters of public interest must disclose that the text was artificially generated or manipulated. This applies to news articles, public communications, and similar content where the source and authenticity matter for public discourse.',
                },
              ].map((req) => (
                <div key={req.title} className="rounded-xl bg-card border border-border p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-brand-400">{req.article}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{req.title}</h4>
                  <p className="text-sm leading-relaxed">{req.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Exceptions</h3>
            <p className="text-sm">
              Article 50 obligations do not apply where the AI system is authorised by law to detect, prevent, investigate, or prosecute criminal offences, subject to appropriate safeguards. They also do not apply where the content is part of an artistic, creative, satirical, fictional, or analogous work, provided appropriate safeguards are in place.
            </p>

            <div className="mt-6">
              <a
                href="/eu-ai-act/article-50"
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium text-sm transition-colors"
              >
                Read our full Article 50 compliance guide
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* High-Risk System Obligations */}
      <section id="high-risk" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">High-Risk AI System Obligations</h2>
              <p className="text-sm text-muted-foreground mt-1">Chapter III, Section 2 — Requirements for High-Risk Systems</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Providers of high-risk AI systems face the most comprehensive set of obligations. These requirements must be met before the system is placed on the EU market and maintained throughout its lifecycle. Below are the key obligations from Articles 8–15.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                article: 'Art. 8–9',
                title: 'Risk Management System',
                desc: 'Establish, implement, document, and maintain a risk management system throughout the AI system\'s lifecycle. Identify and analyse known and reasonably foreseeable risks. Adopt appropriate risk management measures.',
              },
              {
                article: 'Art. 10',
                title: 'Data & Data Governance',
                desc: 'Training, validation, and testing data sets must meet quality criteria. Data must be relevant, representative, free of errors, and complete. Appropriate data governance and management practices must be in place.',
              },
              {
                article: 'Art. 11',
                title: 'Technical Documentation',
                desc: 'Prepare technical documentation before placing the system on the market. It must be kept up to date and demonstrate compliance with Chapter III requirements. Must be made available to national competent authorities upon request.',
              },
              {
                article: 'Art. 12',
                title: 'Record-Keeping (Logs)',
                desc: 'AI systems must automatically record events (logs) during operation. Logs must enable traceability of the system\'s functioning throughout its lifecycle. Automatic logging must be proportional to the intended purpose.',
              },
              {
                article: 'Art. 13',
                title: 'Transparency & Instructions',
                desc: 'Systems must be designed to allow deployers to interpret outputs and use them appropriately. Instructions must include: intended purpose, performance level, known risks, human oversight measures, expected lifetime, and maintenance requirements.',
              },
              {
                article: 'Art. 14',
                title: 'Human Oversight',
                desc: 'High-risk AI systems must be designed to allow effective oversight by natural persons. This includes the ability to understand system capabilities, remain aware of automation bias, and intervene or override the system\'s decisions.',
              },
              {
                article: 'Art. 15',
                title: 'Accuracy, Robustness & Cybersecurity',
                desc: 'Systems must achieve appropriate levels of accuracy, robustness, and cybersecurity as declared in the instructions of use. They must be resilient to errors, faults, and attempts by third parties to exploit vulnerabilities.',
              },
              {
                article: 'Art. 16–22',
                title: 'Quality Management & Post-Market Monitoring',
                desc: 'Providers must establish a quality management system and post-market monitoring system. This includes documented procedures for conformity assessment, corrective actions, incident reporting, and communication with authorities.',
              },
            ].map((obligation) => (
              <div key={obligation.title} className="rounded-xl bg-background border border-border p-6">
                <span className="text-xs font-mono text-brand-400">{obligation.article}</span>
                <h3 className="font-semibold mt-2 mb-2">{obligation.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{obligation.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section id="penalties" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Penalties & Enforcement</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Article 99 establishes a tiered penalty framework. Each EU Member State must lay down rules on effective, proportionate, and dissuasive penalties. Fines are designed to be comparable to GDPR enforcement — and in some cases, even more severe.
          </p>

          <div className="space-y-4">
            {[
              {
                violation: 'Prohibited AI Practices (Article 5)',
                fine: '€35,000,000 or 7% of global annual turnover',
                description: 'Deploying AI systems classified as posing unacceptable risk — including social scoring, manipulation of vulnerable persons, and unauthorised real-time biometric identification.',
                color: 'red',
              },
              {
                violation: 'Non-Compliance with High-Risk Obligations',
                fine: '€15,000,000 or 3% of global annual turnover',
                description: 'Failing to meet requirements for high-risk AI systems: risk management, data governance, technical documentation, transparency, human oversight, accuracy, and robustness.',
                color: 'yellow',
              },
              {
                violation: 'Incorrect Information to Authorities',
                fine: '€7,500,000 or 1% of global annual turnover',
                description: 'Supplying incorrect, incomplete, or misleading information to notified bodies or national competent authorities during conformity assessments or market surveillance.',
                color: 'blue',
              },
            ].map((penalty) => (
              <div key={penalty.violation} className={`rounded-xl border p-6 ${
                penalty.color === 'red' ? 'border-red-500/30 bg-red-500/5' :
                penalty.color === 'yellow' ? 'border-yellow-500/30 bg-yellow-500/5' :
                'border-brand-500/30 bg-brand-500/5'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <h3 className="font-semibold">{penalty.violation}</h3>
                  <span className={`text-lg font-bold ${
                    penalty.color === 'red' ? 'text-red-400' :
                    penalty.color === 'yellow' ? 'text-yellow-400' :
                    'text-brand-400'
                  }`}>
                    {penalty.fine}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{penalty.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-card border border-border p-6 mt-6">
            <h3 className="font-semibold mb-3">Additional Enforcement Provisions</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                <span>SMEs and startups benefit from proportionate caps — fines are calculated as a percentage of turnover with lower absolute maximums.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                <span>National market surveillance authorities have the power to require corrective measures, restrict or withdraw AI systems from the market, and mandate recalls.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                <span>The EU AI Office oversees general-purpose AI model compliance and can conduct evaluations, request documentation, and investigate systemic risks.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                <span>Complaints can be filed by any natural or legal person affected by an AI system. Authorities must handle complaints and inform complainants of outcomes.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Comply */}
      <section id="how-to-comply" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">How to Comply — Step by Step</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Achieving EU AI Act compliance requires a structured approach. Below is a practical step-by-step framework to guide your organisation from assessment to ongoing compliance.
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'AI System Inventory & Classification',
                description: 'Catalogue all AI systems your organisation develops, deploys, or distributes. Classify each system against the EU AI Act risk tiers (prohibited, high-risk, limited, minimal). Check Annex III for high-risk classifications and Article 5 for prohibited categories.',
                actions: ['Create a complete AI system register', 'Map each system to the correct risk tier', 'Identify systems under Annex III and Annex I', 'Document the intended purpose and affected persons'],
              },
              {
                step: '02',
                title: 'Gap Analysis Against Requirements',
                description: 'For each high-risk and limited-risk system, assess your current state against the specific requirements in Chapter III. Identify gaps in risk management, data governance, transparency, human oversight, and technical documentation.',
                actions: ['Assess risk management system maturity', 'Review data governance practices against Article 10', 'Evaluate technical documentation completeness', 'Test transparency and disclosure mechanisms'],
              },
              {
                step: '03',
                title: 'Implement Risk Management System',
                description: 'Establish a continuous risk management system per Article 9. This must identify, analyse, and mitigate risks throughout the AI system lifecycle. Include testing protocols, bias assessments, and adversarial robustness evaluations.',
                actions: ['Define risk acceptance criteria', 'Implement continuous risk monitoring', 'Document risk mitigation measures', 'Establish incident response procedures'],
              },
              {
                step: '04',
                title: 'Establish Data Governance',
                description: 'Implement data governance practices per Article 10. Ensure training, validation, and testing datasets are relevant, representative, free of errors, and complete. Address bias detection and mitigation in datasets.',
                actions: ['Audit training data for quality and bias', 'Implement data lineage tracking', 'Establish data validation pipelines', 'Document data provenance and processing'],
              },
              {
                step: '05',
                title: 'Prepare Technical Documentation',
                description: 'Create comprehensive technical documentation per Article 11 and Annex IV. This must cover system design, development methodology, validation results, performance metrics, and compliance evidence.',
                actions: ['Document system architecture and design choices', 'Record training methodology and hyperparameters', 'Include validation and testing results', 'Maintain version-controlled documentation'],
              },
              {
                step: '06',
                title: 'Implement Transparency Measures (Article 50)',
                description: 'Ensure AI-generated content is watermarked or marked in a machine-readable format. Implement chatbot disclosure mechanisms. Add deepfake labels and metadata to manipulated content. These obligations apply from 2 August 2026.',
                actions: ['Implement content watermarking/marking', 'Add chatbot interaction disclosure', 'Deploy deepfake labelling', 'Create user-facing transparency notices'],
              },
              {
                step: '07',
                title: 'Enable Human Oversight',
                description: 'Design human oversight mechanisms per Article 14. Ensure operators can understand system outputs, detect automation bias, and intervene or halt the system when necessary. Implement kill switches and override capabilities.',
                actions: ['Design human-in-the-loop workflows', 'Implement system override capabilities', 'Create operator training programmes', 'Test intervention mechanisms'],
              },
              {
                step: '08',
                title: 'Conduct Conformity Assessment',
                description: 'Perform the appropriate conformity assessment per Article 43. For Annex III high-risk systems, internal assessments may suffice. For Annex I systems, a notified body assessment is required. Document the assessment and prepare the declaration of conformity.',
                actions: ['Select the correct assessment procedure', 'Execute conformity assessment per Annex IV', 'Prepare EU declaration of conformity', 'Apply CE marking where applicable'],
              },
              {
                step: '09',
                title: 'Register in EU Database',
                description: 'Register high-risk AI systems in the EU database before placing them on the market (Article 49). The registration includes information about the provider, system purpose, risk classification, and conformity assessment results.',
                actions: ['Register at the EU AI database portal', 'Provide required system information', 'Maintain registration with updates', 'Monitor database for compliance notices'],
              },
              {
                step: '10',
                title: 'Establish Ongoing Monitoring & Reporting',
                description: 'Implement post-market monitoring per Article 72. Monitor system performance, report serious incidents per Article 73, and maintain compliance throughout the system lifecycle. Stay updated on guidance from the EU AI Office.',
                actions: ['Deploy post-market monitoring systems', 'Establish incident reporting procedures', 'Schedule regular compliance reviews', 'Subscribe to EU AI Office updates'],
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center text-sm font-mono font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pb-6 border-b border-border last:border-0">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                  <div className="grid sm:grid-cols-2 gap-1">
                    {item.actions.map((action) => (
                      <div key={action} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-safety-500 flex-shrink-0" />
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Assessment */}
      <section id="self-assessment" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-500/10 border border-safety-500/20 text-safety-400 text-sm font-medium mb-6">
              <Zap className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              EU AI Act <span className="text-brand-400">Self-Assessment</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answer 6 quick questions to assess your AI system&apos;s compliance readiness. Get an instant risk score with actionable recommendations.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SelfAssessment />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-brand-400">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Common questions about EU AI Act compliance, timelines, and requirements.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <Clock className="w-3.5 h-3.5" />
            {DAYS_LEFT} days until the August 2026 deadline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Don&apos;t Wait — Start Your <span className="text-brand-400">EU AI Act Compliance</span> Today
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            SafetyOf.AI provides automated compliance scanning, gap analysis, and continuous monitoring across all EU AI Act requirements. 48-hour audit turnaround. Results backed by 12+ MCP tools and A2A agent coordination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
            >
              <Shield className="w-5 h-5" />
              Book Compliance Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/compliance"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border font-semibold hover:bg-accent transition-colors"
            >
              <Zap className="w-5 h-5" />
              Free Compliance Scan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
