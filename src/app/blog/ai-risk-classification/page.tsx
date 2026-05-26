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
  ArrowRight,
  Calendar,
  BookOpen,
  BadgeAlert,
  Building2,
  Brain,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Classify Your AI System Under the EU AI Act | SafetyOf.AI',
  description:
    'Complete guide to EU AI Act risk classification. Learn the difference between prohibited, high-risk, limited, and minimal risk AI systems with real examples for every Annex III category.',
  keywords: [
    'EU AI Act risk classification',
    'AI risk categories',
    'high-risk AI systems',
    'Annex III AI Act',
    'prohibited AI practices',
    'AI system classification',
    'EU AI Act compliance',
  ],
  openGraph: {
    title: 'How to Classify Your AI System Under the EU AI Act',
    description:
      'Prohibited, high-risk, limited, minimal — real examples for every Annex III category and a practical classification framework.',
    url: 'https://safetyof.ai/blog/ai-risk-classification',
    siteName: 'SafetyOf.AI',
    type: 'article',
    publishedTime: '2026-05-15T00:00:00Z',
    authors: ['SafetyOf.AI'],
    images: [
      {
        url: 'https://safetyof.ai/og-blog-risk-classification.png',
        width: 1200,
        height: 630,
        alt: 'EU AI Act Risk Classification Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Classify Your AI System Under the EU AI Act',
    description:
      'Prohibited, high-risk, limited, minimal — real examples for every Annex III category.',
    images: ['https://safetyof.ai/og-blog-risk-classification.png'],
  },
};

const tocItems = [
  { id: 'why-classification-matters', label: 'Why Classification Matters' },
  { id: 'four-tiers', label: 'The Four Risk Tiers' },
  { id: 'prohibited', label: 'Unacceptable Risk (Prohibited)' },
  { id: 'high-risk', label: 'High Risk — Annex III Categories' },
  { id: 'limited', label: 'Limited Risk' },
  { id: 'minimal', label: 'Minimal Risk' },
  { id: 'classification-process', label: 'How to Classify Your System' },
  { id: 'common-mistakes', label: 'Common Classification Mistakes' },
  { id: 'faq', label: 'FAQ' },
];

const faqItems = [
  {
    question: 'How do I know if my AI system is high-risk?',
    answer:
      'Check if your AI system falls into any of the eight Annex III categories: biometric identification, critical infrastructure, education, employment, essential services, law enforcement, migration, or administration of justice. If it does, and no exception applies, it is high-risk. Also check if it is a safety component of a regulated product (Annex I).',
  },
  {
    question: 'Can a high-risk AI system be reclassified as limited risk?',
    answer:
      'Yes. Article 6(3) provides an exception: if the AI system does not pose a significant risk of harm to health, safety, or fundamental rights, and does not perform profiling of natural persons, it may be excluded from high-risk classification. This exception is narrow and must be documented.',
  },
  {
    question: 'What happens if I misclassify my AI system?',
    answer:
      'Misclassification can lead to severe penalties. If you classify a high-risk system as minimal risk, you skip mandatory requirements (risk management, data governance, conformity assessment). This constitutes non-compliance, punishable by fines up to €15,000,000 or 3% of global annual turnover.',
  },
  {
    question: 'Do I need to classify every AI system in my organisation?',
    answer:
      'Yes. You should maintain a complete inventory of all AI systems and classify each one. This is the foundational step of EU AI Act compliance. Even minimal-risk systems benefit from documentation as a best practice.',
  },
  {
    question: 'Are generative AI models (LLMs) automatically high-risk?',
    answer:
      'No. General-purpose AI models (including LLMs) are not automatically high-risk. They fall under a separate regime (Articles 51–56) with their own transparency and documentation obligations. However, if an LLM is integrated into a high-risk application (e.g., employment screening), the resulting system may be high-risk.',
  },
];

const DEADLINE = new Date('2026-08-02T00:00:00Z');
const NOW = new Date();
const DAYS_LEFT = Math.max(0, Math.ceil((DEADLINE.getTime() - NOW.getTime()) / (1000 * 60 * 60 * 24)));

export default function AIRiskClassification() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Classify Your AI System Under the EU AI Act',
    description:
      'Complete guide to EU AI Act risk classification with real examples for every Annex III category.',
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
    url: 'https://safetyof.ai/blog/ai-risk-classification',
    mainEntityOfPage: 'https://safetyof.ai/blog/ai-risk-classification',
    keywords: [
      'EU AI Act risk classification',
      'high-risk AI',
      'Annex III',
      'prohibited AI',
      'AI system classification',
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
              Published 15 May 2026 &middot; 14 min read
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              {DAYS_LEFT} days until high-risk obligations apply
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">How to Classify Your</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                AI System Under the EU AI Act
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              A complete guide to EU AI Act risk classification — prohibited, high-risk, limited, and minimal — with real-world examples for every Annex III category and a practical framework for your organisation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/scanner"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
              >
                <Zap className="w-5 h-5" />
                Classify Your System Free
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#annex-iii"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors"
              >
                <Scale className="w-5 h-5" />
                View Annex III Categories
              </a>
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

      {/* Why Classification Matters */}
      <section id="why-classification-matters" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Why Classification Matters</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Risk classification is the <strong className="text-foreground">foundational step</strong> of EU AI Act compliance. Every obligation in the regulation — from prohibited practices to transparency requirements to conformity assessments — depends on how your AI system is classified. Get classification wrong, and you either over-comply (wasting resources) or under-comply (risking penalties up to €35 million).
            </p>
            <p>
              The EU AI Act uses a <strong className="text-foreground">risk-based pyramid</strong> with four tiers. The higher the risk, the more obligations apply. This is not a self-certification exercise you can skip — national market surveillance authorities will verify your classification, and misclassification that leads to harm will be treated as a compliance failure.
            </p>
            <p>
              Correct classification also determines whether you need a conformity assessment, whether you must register in the EU database, whether human oversight is mandatory, and what technical documentation you must prepare. It is the decision that shapes your entire compliance programme.
            </p>
          </div>
        </div>
      </section>

      {/* Four Risk Tiers */}
      <section id="four-tiers" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Four Risk Tiers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { tier: 'Unacceptable', color: 'red', icon: BadgeAlert, desc: 'Banned outright' },
              { tier: 'High Risk', color: 'yellow', icon: AlertTriangle, desc: 'Strict requirements' },
              { tier: 'Limited', color: 'blue', icon: Eye, desc: 'Transparency rules' },
              { tier: 'Minimal', color: 'green', icon: CheckCircle2, desc: 'No obligations' },
            ].map((t) => (
              <div
                key={t.tier}
                className={`rounded-xl border p-4 text-center ${
                  t.color === 'red'
                    ? 'border-red-500/30 bg-red-500/5'
                    : t.color === 'yellow'
                    ? 'border-yellow-500/30 bg-yellow-500/5'
                    : t.color === 'blue'
                    ? 'border-brand-500/30 bg-brand-500/5'
                    : 'border-safety-500/30 bg-safety-500/5'
                }`}
              >
                <t.icon
                  className={`w-6 h-6 mx-auto mb-2 ${
                    t.color === 'red'
                      ? 'text-red-400'
                      : t.color === 'yellow'
                      ? 'text-yellow-400'
                      : t.color === 'blue'
                      ? 'text-brand-400'
                      : 'text-safety-400'
                  }`}
                />
                <p className="font-semibold text-sm">{t.tier}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unacceptable Risk */}
      <section id="prohibited" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <BadgeAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Unacceptable Risk — Prohibited AI Practices</h2>
              <p className="text-sm text-muted-foreground mt-1">Article 5 — Effective since 2 February 2025</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            AI systems posing an unacceptable risk to fundamental rights are <strong className="text-foreground">banned outright</strong>. These prohibitions have been in effect since 2 February 2025. There is no grace period, no transition arrangement, and no conformity assessment pathway — these systems simply cannot be placed on the EU market.
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'Social Scoring',
                article: 'Article 5(1)(c)',
                description:
                  'AI systems for evaluating or classifying natural persons based on their social behaviour or personal characteristics over a period, leading to detrimental or unfavourable treatment. Example: A government system that assigns citizens a trustworthiness score based on their purchasing habits, social connections, and online activity, then uses the score to deny public services.',
                realExample: 'China\'s Social Credit System would be prohibited under this provision if deployed in the EU.',
              },
              {
                title: 'Manipulation of Vulnerable Groups',
                article: 'Article 5(1)(b)',
                description:
                  'AI systems that deploy subliminal, manipulative, or deceptive techniques to distort behaviour in a way that causes or is reasonably likely to cause harm. Applies particularly when targeting vulnerable groups including children, elderly persons, persons with disabilities, or persons in economic distress.',
                realExample: 'An AI-powered gambling app that uses personalised psychological manipulation to exploit persons with gambling addiction.',
              },
              {
                title: 'Real-Time Remote Biometric Identification in Public Spaces',
                article: 'Article 5(1)(d)',
                description:
                  'AI systems for real-time remote biometric identification in publicly accessible spaces for law enforcement purposes. Limited exceptions exist for specific serious crimes, with prior judicial or administrative authorisation.',
                realExample: 'Live facial recognition surveillance cameras scanning crowds at a train station to identify wanted persons.',
              },
              {
                title: 'Emotion Recognition in Workplaces & Schools',
                article: 'Article 5(1)(f)',
                description:
                  'AI systems for emotion recognition in the workplace and in educational institutions, except for medical or safety reasons. This prohibits monitoring employee mood, engagement, or stress through AI analysis of facial expressions, voice patterns, or physiological signals.',
                realExample: 'A call centre using AI to monitor employee emotions during customer calls and flagging workers who appear "unhappy."',
              },
              {
                title: 'Untargeted Facial Image Scraping',
                article: 'Article 5(1)(e)',
                description:
                  'AI systems that create or expand facial recognition databases through untargeted scraping of facial images from the internet or CCTV footage. This prohibits mass collection of biometric data without the knowledge or consent of the persons concerned.',
                realExample: 'A company that scrapes billions of social media photos to build a commercial facial recognition database.',
              },
              {
                title: 'Predictive Policing Based on Profiling',
                article: 'Article 5(1)(a)',
                description:
                  'AI systems for predictive policing that profile natural persons to assess the risk of them committing a criminal offence, solely based on profiling or personality traits. This prohibits AI systems that predict criminality from demographic or behavioural data.',
                realExample: 'A system that flags individuals as likely criminals based on their neighbourhood, age, and social media activity.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-red-400">{item.article}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                <div className="rounded-lg bg-background border border-border p-3">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Real-world example:</strong> {item.realExample}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Risk — Annex III */}
      <section id="high-risk" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">High Risk — All 8 Annex III Categories</h2>
              <p className="text-sm text-muted-foreground mt-1">Articles 6(2), 6(3), and Annex III</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            High-risk AI systems are subject to the most comprehensive set of requirements in the EU AI Act. They must undergo conformity assessments, maintain risk management systems, implement data governance, enable human oversight, and register in the EU database. Here are all eight Annex III categories with real-world examples.
          </p>

          <div id="annex-iii" className="space-y-6">
            {[
              {
                category: '1',
                title: 'Biometric Identification & Categorisation',
                scope: 'AI systems for biometric identification, biometric categorisation based on sensitive attributes, and emotion recognition (outside prohibited contexts).',
                examples: [
                  'Facial recognition access control systems in workplaces',
                  'AI-powered passport verification at border crossings',
                  'Voice-based identity verification for banking',
                  'Emotion recognition for market research (not workplaces)',
                  'Biometric categorisation inferring political opinions or sexual orientation',
                ],
                exceptions: 'Biometric systems used purely for cybersecurity or physical access control may qualify for the Article 6(3) exception if they pose no significant risk.',
              },
              {
                category: '2',
                title: 'Critical Infrastructure Management',
                scope: 'AI systems used as safety components in the management and operation of critical digital infrastructure, road traffic, and supply of water, gas, heating, and electricity.',
                examples: [
                  'AI-controlled smart grid load balancing systems',
                  'Autonomous traffic management systems',
                  'AI-based predictive maintenance for power plants',
                  'Water treatment facility monitoring and control',
                  'Gas pipeline pressure monitoring AI',
                ],
                exceptions: 'Systems covered by EU product safety legislation (Annex I) may be classified under Article 6(1) instead.',
              },
              {
                category: '3',
                title: 'Education & Vocational Training',
                scope: 'AI systems for determining access to educational institutions, assessing learning outcomes, and monitoring student behaviour during tests.',
                examples: [
                  'AI-based university admission screening tools',
                  'Automated essay grading systems',
                  'Proctoring software that monitors students during exams',
                  'Adaptive learning platforms that determine course placement',
                  'Vocational aptitude assessment tools',
                ],
                exceptions: 'AI systems for purely educational purposes that do not directly determine access or outcomes (e.g., educational games) are not high-risk.',
              },
              {
                category: '4',
                title: 'Employment, Workers Management & Self-Employment',
                scope: 'AI systems used for recruitment, CV screening, making employment decisions, task allocation, and monitoring worker performance.',
                examples: [
                  'AI-powered CV screening and candidate ranking',
                  'Automated interview analysis (video, text, voice)',
                  'AI-based employee performance evaluation',
                  'Workforce scheduling and task allocation algorithms',
                  'AI systems for monitoring employee productivity',
                ],
                exceptions: 'Systems that perform purely administrative, preparatory, or logistical tasks without materially affecting employment decisions may qualify for exceptions.',
              },
              {
                category: '5',
                title: 'Access to Essential Services',
                scope: 'AI systems for evaluating creditworthiness, pricing insurance, dispatching emergency services, and determining access to public benefits.',
                examples: [
                  'AI-based credit scoring for loan applications',
                  'Automated insurance risk pricing and underwriting',
                  'AI-powered social benefits eligibility assessment',
                  'Emergency services dispatch prioritisation',
                  'Tenant screening and rental application evaluation',
                ],
                exceptions: 'AI systems used for detecting fraud in financial services (not creditworthiness assessment) are typically not classified under this category.',
              },
              {
                category: '6',
                title: 'Law Enforcement',
                scope: 'AI systems used by or on behalf of law enforcement for profiling, evidence evaluation, crime prediction, and polygraph-like tools.',
                examples: [
                  'AI-based evidence reliability assessment',
                  'Predictive policing systems (not individually targeted)',
                  'AI-powered risk assessment for recidivism',
                  'Deepfake detection tools used in investigations',
                  'Automated analysis of CCTV footage for investigations',
                ],
                exceptions: 'Systems used for purely ancillary administrative tasks are excluded.',
              },
              {
                category: '7',
                title: 'Migration, Asylum & Border Control',
                scope: 'AI systems used for border control, assessing asylum applications, detecting security risks, and verifying travel documents.',
                examples: [
                  'AI-based asylum application risk assessment',
                  'Automated document verification at borders',
                  'AI systems for detecting forged travel documents',
                  'Risk profiling of travellers for security screening',
                  'AI-powered migration trend analysis tools',
                ],
                exceptions: 'Systems used for verification of authenticating travel documents are included; purely administrative tools are excluded.',
              },
              {
                category: '8',
                title: 'Administration of Justice & Democratic Processes',
                scope: 'AI systems used by judicial authorities for researching and interpreting facts and law, and AI systems for influencing election outcomes or voting behaviour.',
                examples: [
                  'AI-powered legal research and case law analysis',
                  'AI systems assisting judges in sentencing decisions',
                  'AI tools for political micro-targeting during elections',
                  'Automated voter registration and verification',
                  'AI-based legislative impact assessment',
                ],
                exceptions: 'AI systems used for purely preparatory or administrative tasks by judicial bodies are excluded.',
              },
            ].map((cat) => (
              <div key={cat.category} className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-yellow-400">ANNEX III, CATEGORY {cat.category}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cat.scope}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Real-World Examples</h4>
                  <div className="space-y-1">
                    {cat.examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-background border border-border p-3">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Exception:</strong> {cat.exceptions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Risk */}
      <section id="limited" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Limited Risk — Transparency Obligations</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Limited-risk AI systems are not subject to the comprehensive requirements of high-risk systems, but they do carry specific <strong className="text-foreground">transparency obligations</strong> under Article 50 (effective 2 August 2026).
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Users,
                title: 'Chatbots & Virtual Assistants',
                desc: 'Any AI system that interacts directly with persons must disclose that it is an AI system. This includes customer service bots, AI assistants, conversational AI, and voice-activated systems.',
                obligation: 'Article 50(2): Disclose AI interaction at first contact',
              },
              {
                icon: Eye,
                title: 'Deepfake Generators',
                desc: 'AI systems that generate or manipulate image, audio, or video to resemble real persons, objects, or events must disclose the synthetic nature of the content.',
                obligation: 'Article 50(3): Label deepfake content clearly',
              },
              {
                icon: Brain,
                title: 'Emotion Recognition Systems',
                desc: 'AI systems that recognise emotions (outside prohibited contexts like workplaces) must inform affected persons that they are subject to emotion recognition.',
                obligation: 'Article 50 transparency: Notify affected persons',
              },
              {
                icon: BookOpen,
                title: 'AI-Generated Content',
                desc: 'Systems that generate text, images, audio, or video must mark outputs as AI-generated in a machine-readable format. Published content in the public interest must also be disclosed.',
                obligation: 'Article 50(1) & (4): Mark content + disclose published text',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-card border border-border p-6">
                <item.icon className="w-5 h-5 text-brand-400 mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.desc}</p>
                <div className="text-xs font-medium px-3 py-1.5 rounded-lg bg-brand-500/10 text-brand-400 inline-block">
                  {item.obligation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Risk */}
      <section id="minimal" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Minimal Risk — No Mandatory Obligations</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            The vast majority of AI systems fall into the minimal risk category. These systems pose little to no risk to fundamental rights or safety and are subject to <strong className="text-foreground">no mandatory obligations</strong> under the EU AI Act. However, voluntary codes of conduct are encouraged.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'AI Video Games', desc: 'Game AI, NPC behaviour, procedural generation' },
              { title: 'Spam Filters', desc: 'Email spam detection, content filtering' },
              { title: 'Inventory Systems', desc: 'AI-powered stock management, demand forecasting' },
              { title: 'Recommendation Engines', desc: 'Content, product, and media recommendations (non-sensitive)' },
              { title: 'Spell Checkers', desc: 'AI-powered writing assistance and grammar correction' },
              { title: 'Route Optimisation', desc: 'Navigation, logistics, and delivery route planning' },
              { title: 'Image Enhancement', desc: 'Photo editing, upscaling, noise reduction' },
              { title: 'Search Engines', desc: 'AI-powered search and information retrieval' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-background border border-safety-500/20 p-4 text-center">
                <CheckCircle2 className="w-5 h-5 text-safety-400 mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classification Process */}
      <section id="classification-process" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">How to Classify Your System</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Follow this decision tree to classify any AI system under the EU AI Act:
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Check Article 5 (Prohibited)',
                description:
                  'First, determine if your AI system falls under any of the six prohibited categories. If it does, it cannot be placed on the EU market. There is no compliance pathway — you must redesign or abandon the system.',
              },
              {
                step: '02',
                title: 'Check Annex I (Regulated Products)',
                description:
                  'Determine if your AI system is a safety component of a product covered by EU harmonisation legislation (medical devices, machinery, vehicles, toys, lifts, etc.). If yes, and the system requires a third-party conformity assessment under that legislation, it is high-risk under Article 6(1).',
              },
              {
                step: '03',
                title: 'Check Annex III (Eight Categories)',
                description:
                  'Map your AI system\'s intended purpose against the eight Annex III categories. If the intended purpose matches one or more categories, it is presumed high-risk under Article 6(2).',
              },
              {
                step: '04',
                title: 'Evaluate Article 6(3) Exception',
                description:
                  'If classified as high-risk under Annex III, check if the Article 6(3) exception applies. The system may be excluded if it does not pose a significant risk of harm to health, safety, or fundamental rights, and does not perform profiling.',
              },
              {
                step: '05',
                title: 'Check Article 50 (Limited Risk)',
                description:
                  'If the system is not prohibited or high-risk, check whether it triggers Article 50 transparency obligations. Does it generate content? Interact with users? Perform emotion recognition? If yes, transparency obligations apply.',
              },
              {
                step: '06',
                title: 'Default to Minimal Risk',
                description:
                  'If none of the above categories apply, your system is minimal risk. No mandatory obligations apply, but consider adopting voluntary codes of conduct and maintaining documentation as best practice.',
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
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="common-mistakes" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Common Classification Mistakes</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                mistake: 'Assuming generative AI is automatically high-risk',
                reality: 'LLMs and foundation models have their own regime under Articles 51–56 (GPAI). They are not automatically high-risk. However, integrating a GPAI model into a high-risk application (e.g., using GPT-4 for employment screening) makes the resulting system high-risk.',
              },
              {
                mistake: 'Classifying by technology, not intended purpose',
                reality: 'Risk classification depends on the intended purpose of the AI system, not the underlying technology. A computer vision system for medical diagnosis is high-risk (Annex III, Category 3). The same technology for counting objects in a warehouse is minimal risk.',
              },
              {
                mistake: 'Ignoring the Article 6(3) exception',
                reality: 'Not all systems in Annex III categories are automatically high-risk. The Article 6(3) exception allows exclusion if the system does not pose a significant risk of harm. This exception is narrow but real — document your reasoning if you rely on it.',
              },
              {
                mistake: 'Forgetting Annex I systems',
                reality: 'AI systems that are safety components of regulated products (medical devices, machinery, vehicles) are high-risk under Article 6(1), even if they do not fall under any Annex III category. Many organisations overlook this pathway.',
              },
              {
                mistake: 'Confusing deployer and provider obligations',
                reality: 'Classification obligations differ for providers and deployers. The provider classifies the system at design time. The deployer must verify the classification and ensure they use the system within its intended purpose.',
              },
            ].map((item) => (
              <div key={item.mistake} className="rounded-xl bg-background border border-border p-6">
                <h3 className="font-semibold text-red-400 mb-2">Mistake: {item.mistake}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Reality:</strong> {item.reality}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-background border border-brand-500/20 p-6 mt-8">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-400 mb-1">Automated Risk Classification</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  SafetyOf.AI&apos;s compliance scanner automatically classifies your AI systems against all EU AI Act risk tiers — checking Article 5, Annex I, Annex III, and Article 6(3) exceptions in one scan.
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
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border font-semibold text-sm hover:border-brand-500/30 transition-colors"
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
      <section id="faq" className="py-16 border-t border-border">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Classify Your AI Systems <span className="text-brand-400">in Minutes</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            SafetyOf.AI&apos;s compliance scanner automatically maps your AI systems to the correct EU AI Act risk tier. Free for up to 3 scans per day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
            >
              <Shield className="w-5 h-5" />
              Book Full Classification Audit
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
