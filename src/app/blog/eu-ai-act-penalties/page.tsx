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
  Zap,
  ArrowRight,
  Calendar,
  BookOpen,
  BadgeAlert,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'EU AI Act Penalties: Up to €35M or 7% of Revenue | SafetyOf.AI',
  description:
    'Complete breakdown of EU AI Act penalties under Article 99. Fines up to €35 million or 7% of global turnover, SME caps, enforcement timeline, and how to protect your organisation.',
  keywords: [
    'EU AI Act penalties',
    'EU AI Act fines',
    'Article 99 penalties',
    'AI regulation enforcement',
    'EU AI Act compliance',
    'AI Act fine structure',
    'SME penalties EU AI Act',
  ],
  openGraph: {
    title: 'EU AI Act Penalties: Up to €35M or 7% of Revenue',
    description:
      'Article 99 breakdown, SME caps, enforcement timeline, and how to protect your organisation from EU AI Act fines.',
    url: 'https://safetyof.ai/blog/eu-ai-act-penalties',
    siteName: 'SafetyOf.AI',
    type: 'article',
    publishedTime: '2026-05-15T00:00:00Z',
    authors: ['SafetyOf.AI'],
    images: [
      {
        url: 'https://safetyof.ai/og-blog-penalties.png',
        width: 1200,
        height: 630,
        alt: 'EU AI Act Penalties — Up to €35M or 7% of Revenue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EU AI Act Penalties: Up to €35M or 7% of Revenue',
    description:
      'Article 99 breakdown, SME caps, enforcement timeline, and how to protect your organisation.',
    images: ['https://safetyof.ai/og-blog-penalties.png'],
  },
};

const tocItems = [
  { id: 'article-99', label: 'Article 99 Overview' },
  { id: 'fine-tiers', label: 'Three-Tier Fine Structure' },
  { id: 'sme-caps', label: 'SME & Startup Caps' },
  { id: 'enforcement', label: 'Enforcement Timeline' },
  { id: 'who-enforces', label: 'Who Enforces?' },
  { id: 'gdpr-comparison', label: 'Comparison with GDPR' },
  { id: 'how-to-protect', label: 'How to Protect Yourself' },
  { id: 'faq', label: 'FAQ' },
];

const faqItems = [
  {
    question: 'What is the maximum fine under the EU AI Act?',
    answer:
      'The maximum fine is €35,000,000 or 7% of total worldwide annual turnover in the preceding financial year, whichever is higher. This applies to violations of prohibited AI practices under Article 5.',
  },
  {
    question: 'Do SMEs face the same penalties as large companies?',
    answer:
      'No. Article 99(7) requires that penalties for SMEs and startups be proportionate. Fines are calculated as a percentage of turnover with lower absolute maximums. The exact SME caps are set by each Member State.',
  },
  {
    question: 'When do EU AI Act penalties start being enforced?',
    answer:
      'Enforcement phases align with the obligation timeline. Prohibited practice penalties apply from 2 February 2025. GPAI penalties from 2 August 2025. High-risk and Article 50 penalties from 2 August 2026. The full penalty regime applies from 2 August 2027.',
  },
  {
    question: 'How are EU AI Act fines calculated?',
    answer:
      'Fines are determined by national authorities considering: the nature, gravity, and duration of the infringement; the intentional or negligent character; actions taken to mitigate damage; the size of the offender; and any previous infringements.',
  },
  {
    question: 'Can I be fined for a system I deploy but didn\'t build?',
    answer:
      'Yes. Deployers have their own obligations under the EU AI Act. If you deploy a high-risk AI system without proper human oversight, without conducting a conformity assessment check, or without registering it, you can face penalties. However, the provider bears primary responsibility for system-level compliance.',
  },
];

const DEADLINE = new Date('2026-08-02T00:00:00Z');
const NOW = new Date();
const DAYS_LEFT = Math.max(0, Math.ceil((DEADLINE.getTime() - NOW.getTime()) / (1000 * 60 * 60 * 24)));

export default function EUAIActPenalties() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'EU AI Act Penalties: Up to €35M or 7% of Revenue — Here\'s What You Need to Know',
    description:
      'Complete breakdown of EU AI Act penalties under Article 99. Fines up to €35 million or 7% of global turnover, SME caps, enforcement timeline.',
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
    url: 'https://safetyof.ai/blog/eu-ai-act-penalties',
    mainEntityOfPage: 'https://safetyof.ai/blog/eu-ai-act-penalties',
    keywords: [
      'EU AI Act penalties',
      'Article 99',
      'AI regulation fines',
      'EU AI Act enforcement',
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
              Published 15 May 2026 &middot; 10 min read
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              Enforcement begins {DAYS_LEFT} days from now
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">EU AI Act</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                Penalties Up to €35M
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              The EU AI Act carries the world&apos;s most severe AI penalties — up to €35 million or 7% of global annual turnover. Here&apos;s the complete Article 99 breakdown, SME protections, enforcement timeline, and how to protect your organisation.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mt-12">
              {[
                { value: '€35M', label: 'Max Fine' },
                { value: '7%', label: 'Of Global Revenue' },
                { value: '3 Tiers', label: 'Penalty Levels' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-red-400">{stat.value}</p>
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

      {/* Article 99 Overview */}
      <section id="article-99" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Article 99 — Overview</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Article 99</strong> of the EU AI Act establishes the penalty framework that underpins the entire regulation. Each EU Member State must lay down rules on effective, proportionate, and dissuasive penalties applicable to infringements of the regulation, and take all measures necessary to ensure that they are implemented.
            </p>
            <p>
              The penalty structure is deliberately modelled on the GDPR framework — but with <strong className="text-foreground">significantly higher maximum fines</strong> for the most serious violations. While GDPR caps at €20 million or 4% of turnover, the EU AI Act reaches €35 million or 7% for prohibited practice violations.
            </p>
            <p>
              The fines are designed to be &ldquo;effective, proportionate, and dissuasive&rdquo; — a legal standard meaning they must be large enough to actually deter non-compliance, even for the world&apos;s largest technology companies. For a company with €10 billion in annual revenue, the maximum fine for prohibited practices would be <strong className="text-foreground">€700 million</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Tier Fine Structure */}
      <section id="fine-tiers" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Three-Tier Fine Structure</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Article 99 establishes three tiers of financial penalties, each corresponding to the severity of the violation:
          </p>

          <div className="space-y-6">
            {/* Tier 1 */}
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                    <BadgeAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Tier 1 — Prohibited Practices</h3>
                    <span className="text-xs font-mono text-red-400">Article 99(3)</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-400">€35M or 7%</p>
                  <p className="text-xs text-muted-foreground">of global annual turnover</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The most severe penalties apply to violations of <strong className="text-foreground">Article 5</strong> — deploying prohibited AI systems. This includes social scoring, manipulation of vulnerable groups, unauthorised real-time biometric identification, emotion recognition in workplaces, and untargeted facial image scraping.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Social scoring systems',
                  'Manipulation of vulnerable groups',
                  'Unauthorised real-time biometric ID',
                  'Emotion recognition (workplaces/schools)',
                  'Untargeted facial image scraping',
                  'Predictive policing via profiling',
                ].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 2 */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Tier 2 — High-Risk & GPAI Non-Compliance</h3>
                    <span className="text-xs font-mono text-yellow-400">Article 99(4)</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-yellow-400">€15M or 3%</p>
                  <p className="text-xs text-muted-foreground">of global annual turnover</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Non-compliance with obligations for high-risk AI systems (Chapter III), general-purpose AI models (Articles 51–56), and other provisions. This is the tier most organisations will face if they fail to meet their compliance obligations.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Missing risk management system',
                  'Inadequate data governance',
                  'No technical documentation',
                  'Failure to enable human oversight',
                  'GPAI transparency violations',
                  'No conformity assessment',
                  'Missing EU database registration',
                  'Article 50 transparency failures',
                ].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 3 */}
            <div className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Tier 3 — Misleading Information</h3>
                    <span className="text-xs font-mono text-brand-400">Article 99(5)</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-brand-400">€7.5M or 1%</p>
                  <p className="text-xs text-muted-foreground">of global annual turnover</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Supplying incorrect, incomplete, or misleading information to notified bodies, national competent authorities, or market surveillance authorities during conformity assessments, investigations, or registration procedures.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-background border border-border p-6 mt-6">
            <h3 className="font-semibold mb-3">How the &ldquo;Whichever Is Higher&rdquo; Rule Works</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              For each tier, the fine is the <strong className="text-foreground">higher</strong> of the fixed amount or the percentage of turnover. This means:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-card border border-border p-4">
                <p className="text-xs text-muted-foreground mb-1">Small company, €5M revenue</p>
                <p className="text-sm font-medium">Fine = €35M (fixed amount is higher)</p>
              </div>
              <div className="rounded-lg bg-card border border-border p-4">
                <p className="text-xs text-muted-foreground mb-1">Large company, €10B revenue</p>
                <p className="text-sm font-medium">Fine = €700M (7% of turnover is higher)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SME Caps */}
      <section id="sme-caps" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">SME & Startup Caps</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Article 99(7) provides important protections for small and medium-sized enterprises (SMEs) and startups. The regulation explicitly requires that penalties be <strong className="text-foreground">proportionate</strong> to the size of the offender, taking into account the economic viability and competitiveness of the undertaking.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-card border border-safety-500/20 p-6">
                <h3 className="font-semibold text-safety-400 mb-2">What Counts as an SME?</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    <span>Fewer than 250 employees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    <span>Annual turnover not exceeding €50M</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    <span>Total balance sheet not exceeding €43M</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-card border border-brand-500/20 p-6">
                <h3 className="font-semibold text-brand-400 mb-2">SME Protections</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    <span>Proportionate fine calculation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    <span>Lower absolute maximum caps</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    <span>Extended compliance timelines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    <span>Access to regulatory sandboxes</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm mt-4">
              The exact SME caps are determined by each EU Member State in their national implementing legislation. Organisations should check the specific rules in their jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Enforcement Timeline */}
      <section id="enforcement" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Enforcement Timeline</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                date: '2 February 2025',
                title: 'Prohibited Practices Enforcement',
                description: 'Fines up to €35M or 7% for deploying prohibited AI systems. National authorities begin enforcement of Article 5 bans.',
                status: 'active',
              },
              {
                date: '2 August 2025',
                title: 'GPAI Enforcement',
                description: 'Penalties for GPAI model providers who fail to meet transparency, documentation, and copyright obligations. The EU AI Office oversees compliance.',
                status: 'active',
              },
              {
                date: '2 August 2026',
                title: 'High-Risk & Transparency Enforcement',
                description: 'The majority of the penalty regime activates. High-risk system obligations, Article 50 transparency, and EU database registration all become enforceable. Fines up to €15M or 3% for non-compliance.',
                status: 'upcoming',
              },
              {
                date: '2 August 2027',
                title: 'Full Enforcement',
                description: 'All provisions enforceable, including Annex I systems. The complete penalty framework is operational across all EU Member States.',
                status: 'future',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border p-6 ${
                  item.status === 'active'
                    ? 'bg-background border-safety-500/30'
                    : item.status === 'upcoming'
                    ? 'bg-background border-red-500/30 glow-threat'
                    : 'bg-background border-border'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.status === 'active'
                        ? 'bg-safety-500/10 text-safety-400'
                        : item.status === 'upcoming'
                        ? 'bg-red-500/10 text-red-400'
                        : 'bg-brand-500/10 text-brand-400'
                    }`}
                  >
                    {item.status === 'active' ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : item.status === 'upcoming' ? (
                      <AlertTriangle className="w-6 h-6" />
                    ) : (
                      <Clock className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-brand-400">{item.date}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === 'active'
                            ? 'bg-safety-500/20 text-safety-400'
                            : item.status === 'upcoming'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-brand-500/20 text-brand-400'
                        }`}
                      >
                        {item.status === 'active'
                          ? 'ENFORCING'
                          : item.status === 'upcoming'
                          ? `${DAYS_LEFT} DAYS LEFT`
                          : 'UPCOMING'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Enforces */}
      <section id="who-enforces" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Who Enforces?</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'National Market Surveillance Authorities',
                desc: 'Each EU Member State designates one or more national authorities to enforce the AI Act. They can conduct investigations, require corrective measures, restrict or withdraw AI systems from the market, and impose fines.',
              },
              {
                title: 'EU AI Office',
                desc: 'The EU AI Office oversees general-purpose AI model compliance. It can conduct evaluations, request documentation, investigate systemic risks, and coordinate enforcement across Member States.',
              },
              {
                title: 'Notified Bodies',
                desc: 'For Annex I high-risk systems, notified bodies conduct conformity assessments. They do not impose fines but their assessments are prerequisites for market access.',
              },
              {
                title: 'Individual Complaints',
                desc: 'Any natural or legal person affected by an AI system can file a complaint with the relevant national authority. Authorities must handle complaints and inform complainants of outcomes.',
              },
            ].map((entity) => (
              <div key={entity.title} className="rounded-xl bg-card border border-border p-6">
                <h3 className="font-semibold mb-2">{entity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{entity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Comparison */}
      <section id="gdpr-comparison" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Comparison with GDPR</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Aspect</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand-400">GDPR</th>
                  <th className="text-left py-3 px-4 font-semibold text-red-400">EU AI Act</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Max Fine (Fixed)</td>
                  <td className="py-3 px-4">€20,000,000</td>
                  <td className="py-3 px-4">€35,000,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Max Fine (Revenue %)</td>
                  <td className="py-3 px-4">4% of global turnover</td>
                  <td className="py-3 px-4">7% of global turnover</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Scope</td>
                  <td className="py-3 px-4">Data protection</td>
                  <td className="py-3 px-4">AI systems & models</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Extraterritorial</td>
                  <td className="py-3 px-4">Yes</td>
                  <td className="py-3 px-4">Yes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">SME Protections</td>
                  <td className="py-3 px-4">Limited</td>
                  <td className="py-3 px-4">Proportionate caps</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Enforcement Body</td>
                  <td className="py-3 px-4">DPAs per Member State</td>
                  <td className="py-3 px-4">National authorities + EU AI Office</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Protect */}
      <section id="how-to-protect" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">How to Protect Yourself</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Complete an AI System Inventory',
                description: 'Catalogue every AI system your organisation develops, deploys, or distributes. You cannot comply with regulations you do not know apply to you.',
              },
              {
                step: '02',
                title: 'Classify Each System\'s Risk Level',
                description: 'Map each system to the correct EU AI Act risk tier. Prioritise high-risk and prohibited systems — these carry the heaviest penalties.',
              },
              {
                step: '03',
                title: 'Conduct a Gap Analysis',
                description: 'Assess your current state against the specific requirements for each risk tier. Identify gaps in risk management, documentation, transparency, and human oversight.',
              },
              {
                step: '04',
                title: 'Implement Compliance Measures',
                description: 'Close identified gaps systematically. Start with prohibited practice elimination, then high-risk system requirements, then Article 50 transparency.',
              },
              {
                step: '05',
                title: 'Document Everything',
                description: 'Maintain comprehensive records of your compliance efforts. Documentation is both a requirement and your best defence if investigated.',
              },
              {
                step: '06',
                title: 'Monitor Continuously',
                description: 'Compliance is not a one-time exercise. Implement continuous monitoring to detect drift, new risks, and evolving regulatory guidance.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center text-sm font-mono font-bold">
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
                <h3 className="font-semibold text-brand-400 mb-1">Reduce Penalty Risk with SafetyOf.AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our automated compliance platform identifies gaps before regulators do. 12+ MCP tools check your systems against every EU AI Act requirement. 48-hour audit turnaround.
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
            Penalties enforceable in {DAYS_LEFT} days
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Don&apos;t Risk <span className="text-red-400">€35M in Fines</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            SafetyOf.AI identifies compliance gaps before regulators do. Our automated scanner checks your AI systems against every EU AI Act requirement — in minutes, not months.
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
