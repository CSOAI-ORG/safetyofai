import type { Metadata } from 'next';
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronDown,
  Scale,
  Users,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Calendar,
  BookOpen,
  BadgeAlert,
  Building2,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Complete EU AI Act Compliance Guide (2026) | SafetyOf.AI',
  description:
    'Everything you need to know about EU AI Act compliance in 2026. Risk classification, key deadlines, penalties up to €35M, Article 50 obligations, and a step-by-step compliance roadmap.',
  keywords: [
    'EU AI Act compliance guide',
    'EU AI Act 2026',
    'AI regulation compliance',
    'high-risk AI systems',
    'Article 50 watermarking',
    'EU AI Act penalties',
    'AI risk classification',
    'conformity assessment',
  ],
  openGraph: {
    title: 'The Complete EU AI Act Compliance Guide (2026)',
    description:
      'Risk classification, key deadlines, penalties up to €35M, Article 50 obligations, and a step-by-step compliance roadmap for the EU AI Act.',
    url: 'https://safetyof.ai/blog/eu-ai-act-complete-guide',
    siteName: 'SafetyOf.AI',
    type: 'article',
    publishedTime: '2026-05-15T00:00:00Z',
    authors: ['SafetyOf.AI'],
    images: [
      {
        url: 'https://safetyof.ai/og-blog-eu-ai-act.png',
        width: 1200,
        height: 630,
        alt: 'The Complete EU AI Act Compliance Guide (2026)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete EU AI Act Compliance Guide (2026)',
    description:
      'Risk classification, key deadlines, penalties up to €35M, and a step-by-step compliance roadmap.',
    images: ['https://safetyof.ai/og-blog-eu-ai-act.png'],
  },
};

const faqItems = [
  {
    question: 'What is the EU AI Act?',
    answer:
      'The EU AI Act (Regulation (EU) 2024/1689) is the world\'s first comprehensive legal framework for artificial intelligence. Adopted by the European Parliament on 13 March 2024 and published in the Official Journal on 12 July 2024, it establishes harmonised rules for placing AI systems on the EU market. It entered into force on 1 August 2024.',
  },
  {
    question: 'Who does the EU AI Act apply to?',
    answer:
      'The Act applies to providers placing AI systems on the EU market, deployers established in the EU, importers, distributors, product manufacturers integrating AI, and authorised representatives of non-EU providers. It has extraterritorial reach — any provider whose AI system outputs are used in the EU must comply.',
  },
  {
    question: 'When does the EU AI Act come into full effect?',
    answer:
      'The Act applies in phases. Prohibited practices (Article 5) from 2 February 2025. GPAI obligations from 2 August 2025. Most provisions — including high-risk requirements and Article 50 transparency — from 2 August 2026. Annex I systems from 2 August 2027.',
  },
  {
    question: 'What are the EU AI Act penalties?',
    answer:
      'Violations of prohibited practices: up to €35,000,000 or 7% of global annual turnover. Non-compliance with high-risk obligations: up to €15,000,000 or 3%. Incorrect information to authorities: up to €7,500,000 or 1%. SMEs benefit from proportionate caps.',
  },
  {
    question: 'What is a high-risk AI system?',
    answer:
      'High-risk AI systems are defined in Article 6 and listed in Annex III. They include AI used in biometric identification, critical infrastructure, education, employment, essential services, law enforcement, migration, and administration of justice.',
  },
  {
    question: 'What does Article 50 require?',
    answer:
      'Article 50 requires AI-generated content to be marked in a machine-readable format, chatbots to disclose they are AI, deepfakes to be labelled, and AI-generated text published in the public interest to be disclosed. Applies from 2 August 2026.',
  },
  {
    question: 'How do I classify my AI system\'s risk level?',
    answer:
      'The EU AI Act uses four tiers: Unacceptable (prohibited under Article 5), High-risk (Annex III categories), Limited (transparency obligations), and Minimal (voluntary codes). Classification depends on intended purpose, affected domain, and potential impact on fundamental rights.',
  },
  {
    question: 'Do small businesses need to comply with the EU AI Act?',
    answer:
      'Yes, but the Act provides proportionate treatment for SMEs and startups. Penalty caps are lower, conformity assessment fees are reduced, and the EU AI Office provides sandboxes and support programmes. However, all prohibited practices apply regardless of company size.',
  },
  {
    question: 'How can SafetyOf.AI help with EU AI Act compliance?',
    answer:
      'SafetyOf.AI provides automated risk classification scanning, Article 50 transparency verification, high-risk system conformity assessment workflows, continuous monitoring with 12+ MCP tools, and 48-hour gap analysis audits. Start with a free compliance scan at safetyof.ai/scanner.',
  },
];

const tocItems = [
  { id: 'what-is', label: 'What Is the EU AI Act?' },
  { id: 'who-affected', label: 'Who Does It Affect?' },
  { id: 'deadlines', label: 'Key Deadlines' },
  { id: 'risk-classification', label: 'Risk Classification' },
  { id: 'high-risk-obligations', label: 'High-Risk Obligations' },
  { id: 'article-50', label: 'Article 50 Transparency' },
  { id: 'gpai', label: 'General-Purpose AI Rules' },
  { id: 'penalties', label: 'Penalties' },
  { id: 'how-to-comply', label: 'How to Comply' },
  { id: 'faq', label: 'FAQ' },
];

const DEADLINE = new Date('2026-08-02T00:00:00Z');
const NOW = new Date();
const DAYS_LEFT = Math.max(0, Math.ceil((DEADLINE.getTime() - NOW.getTime()) / (1000 * 60 * 60 * 24)));

export default function EUAIActCompleteGuide() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Complete EU AI Act Compliance Guide (2026)',
    description:
      'Everything you need to know about EU AI Act compliance in 2026. Risk classification, key deadlines, penalties, Article 50 obligations, and a step-by-step compliance roadmap.',
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
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    url: 'https://safetyof.ai/blog/eu-ai-act-complete-guide',
    mainEntityOfPage: 'https://safetyof.ai/blog/eu-ai-act-complete-guide',
    keywords: [
      'EU AI Act compliance guide',
      'EU AI Act 2026',
      'AI regulation',
      'high-risk AI',
      'conformity assessment',
      'Article 50',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium mb-6">
              <Calendar className="w-3.5 h-3.5" />
              Published 15 May 2026 &middot; 18 min read
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              {DAYS_LEFT} days until the August 2026 deadline
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">The Complete</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                EU AI Act Compliance Guide
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Everything you need to know about Regulation (EU) 2024/1689 — from risk classification and key deadlines to penalties, Article 50 obligations, and a practical step-by-step compliance roadmap for 2026.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/scanner"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
              >
                <Zap className="w-5 h-5" />
                Free Compliance Scan
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

            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mt-12">
              {[
                { value: Math.floor(DAYS_LEFT / 30), label: 'Months Left' },
                { value: DAYS_LEFT, label: 'Days Left' },
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
                <span className="text-xs font-mono text-brand-500 w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
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

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The EU AI Act — formally <strong className="text-foreground">Regulation (EU) 2024/1689</strong> — is the world&apos;s first comprehensive legal framework governing artificial intelligence. Adopted by the European Parliament on 13 March 2024 and published in the Official Journal of the European Union on 12 July 2024, it entered into force on <strong className="text-foreground">1 August 2024</strong>.
            </p>
            <p>
              The regulation establishes a risk-based approach to AI governance, categorising AI systems into four tiers: unacceptable risk (prohibited), high risk (heavily regulated), limited risk (transparency obligations), and minimal risk (voluntary codes of conduct). It introduces mandatory requirements for high-risk AI systems including data governance, transparency, human oversight, accuracy, and robustness.
            </p>
            <p>
              Unlike voluntary frameworks or industry standards, the EU AI Act is directly applicable in all 27 EU Member States and carries significant enforcement teeth — penalties of up to <strong className="text-foreground">€35 million or 7% of global annual turnover</strong>. It also has extraterritorial reach, meaning organisations outside the EU must comply if their AI systems affect EU residents.
            </p>
            <p>
              The Act works alongside existing EU legislation including the GDPR (data protection), the Product Liability Directive, the Machinery Regulation, and sector-specific legislation. For AI providers and deployers, it creates a new compliance imperative that intersects with cybersecurity, data governance, and risk management.
            </p>
            <p>
              The regulation covers the entire AI value chain: providers who develop AI systems, deployers who use them in professional capacities, importers and distributors who bring AI systems to the EU market, and product manufacturers who integrate AI into regulated products. Each role carries specific obligations and liabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Who Does It Affect */}
      <section id="who-affected" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Who Does It Affect?</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            The EU AI Act has broad extraterritorial reach. It applies to any organisation whose AI systems are placed on the EU market or whose AI outputs affect persons in the EU, regardless of where the provider is established. If your AI system touches EU residents in any way, you are in scope.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Building2,
                title: 'AI Providers',
                desc: 'Any entity that develops or places an AI system on the EU market, including companies outside the EU whose systems are used within the EU. Providers bear the heaviest compliance burden.',
              },
              {
                icon: Users,
                title: 'AI Deployers',
                desc: 'Organisations using AI systems under their authority in a professional capacity, established or located in the EU. Deployers must ensure they use AI systems in accordance with instructions and monitor for risks.',
              },
              {
                icon: Globe,
                title: 'Importers & Distributors',
                desc: 'Entities importing AI systems from third countries into the EU or making them available on the EU market. They must verify that the provider has completed conformity assessments.',
              },
              {
                icon: FileText,
                title: 'Authorised Representatives',
                desc: 'Non-EU providers must appoint an authorised representative established in the EU before placing their AI system on the market. The representative acts on the provider\'s behalf for regulatory matters.',
              },
            ].map((entity) => (
              <div key={entity.title} className="rounded-xl bg-background border border-border p-6">
                <entity.icon className="w-5 h-5 text-brand-400 mb-3" />
                <h3 className="font-semibold mb-2">{entity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{entity.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-background border border-brand-500/20 p-6 mt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-400 mb-1">Extraterritorial Application</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Even if your company is based in the US, UK, or Asia, the EU AI Act applies if your AI system&apos;s outputs are used in the EU. This mirrors the GDPR&apos;s extraterritorial approach. A SaaS platform with EU users, a model whose outputs reach EU consumers, or a deployment that affects EU citizens — all are in scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deadlines */}
      <section id="deadlines" className="py-16 border-t border-border">
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
                description: 'The EU AI Act officially enters into force. The phased implementation period begins.',
                status: 'past',
                article: 'Article 113',
              },
              {
                date: '2 February 2025',
                title: 'Prohibited AI Practices Ban',
                description: 'AI systems posing unacceptable risk are banned outright — social scoring, manipulation of vulnerable groups, real-time biometric identification in public spaces (with narrow exceptions).',
                status: 'past',
                article: 'Article 5',
              },
              {
                date: '2 August 2025',
                title: 'General-Purpose AI (GPAI) Obligations',
                description: 'Providers of GPAI models must comply with transparency requirements, technical documentation, copyright policies, and training data summaries. Models with systemic risk face additional evaluation obligations.',
                status: 'past',
                article: 'Articles 51–56',
              },
              {
                date: '2 August 2026',
                title: 'High-Risk Systems & Article 50 Transparency',
                description: 'The majority of provisions apply. High-risk AI systems must meet all Chapter III requirements. Article 50 transparency obligations take effect — watermarking, deepfake disclosure, chatbot identification. EU database registration becomes mandatory.',
                status: 'upcoming',
                article: 'Articles 6, 50',
              },
              {
                date: '2 August 2027',
                title: 'Annex I High-Risk Systems',
                description: 'AI systems that are safety components of products covered by EU harmonisation legislation (Annex I) must fully comply. Includes AI in medical devices, machinery, vehicles, and toys.',
                status: 'future',
                article: 'Article 6(1)',
              },
            ].map((deadline) => (
              <div
                key={deadline.title}
                className={`rounded-xl border p-6 ${
                  deadline.status === 'past'
                    ? 'bg-card border-border opacity-70'
                    : deadline.status === 'upcoming'
                    ? 'bg-card border-red-500/30 glow-threat'
                    : 'bg-card border-border'
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
                        {deadline.status === 'past'
                          ? 'EFFECTIVE'
                          : deadline.status === 'upcoming'
                          ? `${DAYS_LEFT} DAYS LEFT`
                          : 'UPCOMING'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{deadline.title}</h3>
                    <p className="text-sm text-muted-foreground">{deadline.date}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {deadline.description}
                    </p>
                  </div>
                </div>
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
                  'Real-time remote biometric identification in public spaces',
                  'Emotion recognition in workplaces and educational institutions',
                  'Untargeted scraping of facial images for recognition databases',
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
                  'Access to essential services (credit scoring, insurance)',
                  'Law enforcement, migration, and border control',
                  'Administration of justice and democratic processes',
                ],
                obligation: 'Conformity assessment, data governance, transparency, human oversight, EU database registration',
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
              <div
                key={tier.risk}
                className={`rounded-xl border p-6 ${
                  tier.color === 'red'
                    ? 'border-red-500/30 bg-red-500/5'
                    : tier.color === 'yellow'
                    ? 'border-yellow-500/30 bg-yellow-500/5'
                    : tier.color === 'blue'
                    ? 'border-brand-500/30 bg-brand-500/5'
                    : 'border-safety-500/30 bg-safety-500/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      tier.color === 'red'
                        ? 'bg-red-500/10 text-red-400'
                        : tier.color === 'yellow'
                        ? 'bg-yellow-500/10 text-yellow-400'
                        : tier.color === 'blue'
                        ? 'bg-brand-500/10 text-brand-400'
                        : 'bg-safety-500/10 text-safety-400'
                    }`}
                  >
                    <tier.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{tier.risk}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                    <div className="space-y-1 mb-3">
                      {tier.examples.map((ex) => (
                        <div
                          key={ex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              tier.color === 'red'
                                ? 'bg-red-400'
                                : tier.color === 'yellow'
                                ? 'bg-yellow-400'
                                : tier.color === 'blue'
                                ? 'bg-brand-400'
                                : 'bg-safety-400'
                            }`}
                          />
                          {ex}
                        </div>
                      ))}
                    </div>
                    <div
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg inline-block ${
                        tier.color === 'red'
                          ? 'bg-red-500/10 text-red-400'
                          : tier.color === 'yellow'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : tier.color === 'blue'
                          ? 'bg-brand-500/10 text-brand-400'
                          : 'bg-safety-500/10 text-safety-400'
                      }`}
                    >
                      {tier.obligation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/blog/ai-risk-classification"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium text-sm transition-colors"
            >
              Read our detailed risk classification guide
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* High-Risk Obligations */}
      <section id="high-risk-obligations" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">High-Risk AI System Obligations</h2>
              <p className="text-sm text-muted-foreground mt-1">Chapter III, Section 2</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Providers of high-risk AI systems face the most comprehensive set of obligations. These requirements must be met before the system is placed on the EU market and maintained throughout its lifecycle.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                article: 'Art. 8–9',
                title: 'Risk Management System',
                desc: 'Establish, implement, document, and maintain a risk management system throughout the AI system\'s lifecycle. Identify and analyse known and reasonably foreseeable risks.',
              },
              {
                article: 'Art. 10',
                title: 'Data & Data Governance',
                desc: 'Training, validation, and testing datasets must meet quality criteria — relevant, representative, free of errors, and complete. Appropriate data governance practices required.',
              },
              {
                article: 'Art. 11',
                title: 'Technical Documentation',
                desc: 'Prepare technical documentation before placing the system on the market. Must demonstrate compliance with Chapter III requirements. Available to authorities upon request.',
              },
              {
                article: 'Art. 12',
                title: 'Record-Keeping (Logs)',
                desc: 'AI systems must automatically record events during operation. Logs must enable traceability of the system\'s functioning throughout its lifecycle.',
              },
              {
                article: 'Art. 13',
                title: 'Transparency & Instructions',
                desc: 'Systems must allow deployers to interpret outputs. Instructions must include intended purpose, performance level, known risks, human oversight measures, and maintenance requirements.',
              },
              {
                article: 'Art. 14',
                title: 'Human Oversight',
                desc: 'Must be designed to allow effective oversight by natural persons — including the ability to understand system capabilities, detect automation bias, and intervene or override.',
              },
              {
                article: 'Art. 15',
                title: 'Accuracy, Robustness & Cybersecurity',
                desc: 'Systems must achieve appropriate levels of accuracy, robustness, and cybersecurity as declared in the instructions. Must be resilient to errors, faults, and adversarial exploitation.',
              },
              {
                article: 'Art. 16–22',
                title: 'Quality Management & Post-Market Monitoring',
                desc: 'Providers must establish quality management and post-market monitoring systems. Includes conformity assessment procedures, corrective actions, and incident reporting.',
              },
            ].map((obligation) => (
              <div key={obligation.title} className="rounded-xl bg-card border border-border p-6">
                <span className="text-xs font-mono text-brand-400">{obligation.article}</span>
                <h3 className="font-semibold mt-2 mb-2">{obligation.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{obligation.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article 50 */}
      <section id="article-50" className="py-16 bg-card border-t border-border">
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

          <div className="rounded-xl bg-background border border-brand-500/20 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-400 mb-1">Key Deadline</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Article 50 transparency obligations apply from <strong className="text-foreground">2 August 2026</strong>. All providers and deployers must ensure AI-generated content is marked, chatbots disclose their nature, deepfakes are labelled, and AI-generated text in the public interest is disclosed.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: 'AI-Generated Content Marking',
                article: 'Article 50(1)',
                description:
                  'Providers of AI systems that generate or manipulate text, audio, image, or video content must ensure outputs are marked in a machine-readable format and are detectable as artificially generated. This covers LLMs, image generators, voice cloning tools, and video synthesis systems.',
              },
              {
                title: 'Interaction Disclosure',
                article: 'Article 50(2)',
                description:
                  'Deployers of AI systems that interact directly with persons — chatbots, virtual assistants, conversational AI — must inform users they are interacting with an AI system. Disclosure must be clear and made at the latest at the first interaction.',
              },
              {
                title: 'Deepfake Disclosure',
                article: 'Article 50(3)',
                description:
                  'Deployers of AI systems that generate or manipulate image, audio, or video content that appreciably resembles existing persons, objects, or events must disclose that the content has been artificially generated or manipulated. The disclosure must be clear, timely, and visible.',
              },
              {
                title: 'AI-Generated Text Disclosure',
                article: 'Article 50(4)',
                description:
                  'Deployers of AI systems that generate or manipulate text published to inform the public on matters of public interest must disclose that the text was artificially generated. This applies to news articles, public communications, and similar content.',
              },
            ].map((req) => (
              <div key={req.title} className="rounded-xl bg-background border border-border p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-brand-400">{req.article}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{req.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/blog/article-50-watermarking"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium text-sm transition-colors"
            >
              Read our full Article 50 watermarking guide
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* GPAI */}
      <section id="gpai" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">General-Purpose AI (GPAI) Rules</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              General-purpose AI models — including large language models, foundation models, and multi-modal systems — face specific obligations under Articles 51–56. These rules apply from <strong className="text-foreground">2 August 2025</strong>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Standard GPAI Obligations</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                'Maintain and make available technical documentation',
                'Provide information and documentation to downstream providers',
                'Establish a copyright compliance policy',
                'Publish a sufficiently detailed training content summary',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Systemic Risk GPAI (Above 10²⁵ FLOPs)</h3>
            <p className="text-sm">
              GPAI models presenting systemic risk — defined as models with training compute exceeding 10²⁵ FLOPs — face additional obligations including model evaluations, adversarial testing (red teaming), tracking and reporting of serious incidents, and cybersecurity protections for the model and its infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section id="penalties" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Penalties & Enforcement</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Article 99 establishes a tiered penalty framework designed to be comparable to GDPR enforcement — and in some cases, even more severe.
          </p>

          <div className="space-y-4">
            {[
              {
                violation: 'Prohibited AI Practices (Article 5)',
                fine: '€35,000,000 or 7% of global annual turnover',
                description:
                  'Deploying AI systems classified as posing unacceptable risk — social scoring, manipulation of vulnerable persons, unauthorised real-time biometric identification.',
                color: 'red',
              },
              {
                violation: 'Non-Compliance with High-Risk Obligations',
                fine: '€15,000,000 or 3% of global annual turnover',
                description:
                  'Failing to meet requirements for high-risk AI systems: risk management, data governance, technical documentation, transparency, human oversight.',
                color: 'yellow',
              },
              {
                violation: 'Incorrect Information to Authorities',
                fine: '€7,500,000 or 1% of global annual turnover',
                description:
                  'Supplying incorrect, incomplete, or misleading information to notified bodies or national competent authorities.',
                color: 'blue',
              },
            ].map((penalty) => (
              <div
                key={penalty.violation}
                className={`rounded-xl border p-6 ${
                  penalty.color === 'red'
                    ? 'border-red-500/30 bg-red-500/5'
                    : penalty.color === 'yellow'
                    ? 'border-yellow-500/30 bg-yellow-500/5'
                    : 'border-brand-500/30 bg-brand-500/5'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <h3 className="font-semibold">{penalty.violation}</h3>
                  <span
                    className={`text-lg font-bold ${
                      penalty.color === 'red'
                        ? 'text-red-400'
                        : penalty.color === 'yellow'
                        ? 'text-yellow-400'
                        : 'text-brand-400'
                    }`}
                  >
                    {penalty.fine}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{penalty.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="/blog/eu-ai-act-penalties"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium text-sm transition-colors"
            >
              Read our full penalty breakdown
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* How to Comply */}
      <section id="how-to-comply" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">How to Comply — Step by Step</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Achieving EU AI Act compliance requires a structured approach. Here is a practical 10-step framework to guide your organisation from assessment to ongoing compliance.
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'AI System Inventory & Classification',
                description:
                  'Catalogue all AI systems your organisation develops, deploys, or distributes. Classify each system against the EU AI Act risk tiers. Check Annex III for high-risk classifications and Article 5 for prohibited categories.',
              },
              {
                step: '02',
                title: 'Gap Analysis Against Requirements',
                description:
                  'For each high-risk and limited-risk system, assess your current state against Chapter III requirements. Identify gaps in risk management, data governance, transparency, human oversight, and technical documentation.',
              },
              {
                step: '03',
                title: 'Implement Risk Management System',
                description:
                  'Establish a continuous risk management system per Article 9. Identify, analyse, and mitigate risks throughout the AI system lifecycle. Include testing protocols, bias assessments, and adversarial robustness evaluations.',
              },
              {
                step: '04',
                title: 'Establish Data Governance',
                description:
                  'Implement data governance practices per Article 10. Ensure training, validation, and testing datasets are relevant, representative, free of errors, and complete. Address bias detection and mitigation.',
              },
              {
                step: '05',
                title: 'Prepare Technical Documentation',
                description:
                  'Create comprehensive technical documentation per Article 11 and Annex IV. Cover system design, development methodology, validation results, performance metrics, and compliance evidence.',
              },
              {
                step: '06',
                title: 'Implement Article 50 Transparency',
                description:
                  'Ensure AI-generated content is watermarked or marked in a machine-readable format. Implement chatbot disclosure mechanisms. Add deepfake labels and metadata. These obligations apply from 2 August 2026.',
              },
              {
                step: '07',
                title: 'Enable Human Oversight',
                description:
                  'Design human oversight mechanisms per Article 14. Ensure operators can understand outputs, detect automation bias, and intervene or halt the system when necessary.',
              },
              {
                step: '08',
                title: 'Conduct Conformity Assessment',
                description:
                  'Perform the appropriate conformity assessment per Article 43. For Annex III systems, internal assessments may suffice. For Annex I systems, a notified body is required.',
              },
              {
                step: '09',
                title: 'Register in EU Database',
                description:
                  'Register high-risk AI systems in the EU database before placing them on the market (Article 49). Include information about the provider, system purpose, risk classification, and conformity assessment results.',
              },
              {
                step: '10',
                title: 'Establish Ongoing Monitoring',
                description:
                  'Implement post-market monitoring per Article 72. Monitor system performance, report serious incidents per Article 73, and maintain compliance throughout the lifecycle.',
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
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-card border border-brand-500/20 p-6 mt-8">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-400 mb-1">Accelerate Compliance with SafetyOf.AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our platform automates steps 1–6 with 12+ MCP tools, AI-powered risk classification, Article 50 verification, and continuous monitoring. Get a 48-hour gap analysis that maps your systems against every EU AI Act requirement.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Book Compliance Audit
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/scanner"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-background border border-border font-semibold text-sm hover:border-brand-500/30 transition-colors"
                  >
                    Free Compliance Scan
                  </a>
                </div>
              </div>
            </div>
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
              <details key={i} className="border border-border rounded-xl overflow-hidden group">
                <summary className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-accent/50 transition-colors cursor-pointer list-none">
                  <span className="font-medium pr-4">{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </div>
              </details>
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
            Start Your <span className="text-brand-400">EU AI Act Compliance</span> Today
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
              href="/scanner"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border font-semibold hover:bg-accent transition-colors"
            >
              <Zap className="w-5 h-5" />
              Try Our Free Compliance Scanner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
