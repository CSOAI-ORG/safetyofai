import type { Metadata } from 'next';
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronDown,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Calendar,
  BookOpen,
  FileText,
  Lock,
  Cpu,
  Fingerprint,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Article 50 Watermarking: What You Need to Know Before August 2026 | SafetyOf.AI',
  description:
    'Complete guide to EU AI Act Article 50 watermarking requirements. Synthetic content marking, machine-readable watermarks, C2PA, and implementation approaches before the August 2026 deadline.',
  keywords: [
    'EU AI Act Article 50 watermarking',
    'AI content watermarking',
    'synthetic content marking',
    'C2PA standard',
    'machine-readable watermarks',
    'deepfake labelling',
    'AI transparency requirements',
  ],
  openGraph: {
    title: 'Article 50 Watermarking: What You Need to Know Before August 2026',
    description:
      'Synthetic content marking, machine-readable watermarks, C2PA, and implementation approaches for EU AI Act Article 50 compliance.',
    url: 'https://safetyof.ai/blog/article-50-watermarking',
    siteName: 'SafetyOf.AI',
    type: 'article',
    publishedTime: '2026-05-15T00:00:00Z',
    authors: ['SafetyOf.AI'],
    images: [
      {
        url: 'https://safetyof.ai/og-blog-watermarking.png',
        width: 1200,
        height: 630,
        alt: 'Article 50 Watermarking — EU AI Act Compliance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Article 50 Watermarking: What You Need to Know Before August 2026',
    description:
      'Synthetic content marking, machine-readable watermarks, C2PA, and implementation approaches.',
    images: ['https://safetyof.ai/og-blog-watermarking.png'],
  },
};

const tocItems = [
  { id: 'what-is-article-50', label: 'What Is Article 50?' },
  { id: 'who-must-comply', label: 'Who Must Comply?' },
  { id: 'four-obligations', label: 'The Four Core Obligations' },
  { id: 'watermarking-approaches', label: 'Watermarking Approaches' },
  { id: 'c2pa', label: 'C2PA & Content Credentials' },
  { id: 'implementation', label: 'Implementation Guide' },
  { id: 'exceptions', label: 'Exceptions & Edge Cases' },
  { id: 'timeline', label: 'Timeline & Next Steps' },
  { id: 'faq', label: 'FAQ' },
];

const faqItems = [
  {
    question: 'What does Article 50 of the EU AI Act require?',
    answer:
      'Article 50 requires four things: (1) AI-generated content must be marked in a machine-readable format; (2) chatbots must disclose they are AI; (3) deepfakes must be labelled; (4) AI-generated text published in the public interest must be disclosed as AI-generated.',
  },
  {
    question: 'What is a machine-readable watermark?',
    answer:
      'A machine-readable watermark is an embedded signal in AI-generated content — invisible to humans but detectable by algorithms. It can be embedded in pixel data (images), frequency domains (audio), token distributions (text), or metadata fields. The watermark must be robust enough to survive common transformations.',
  },
  {
    question: 'Is C2PA required by Article 50?',
    answer:
      'The EU AI Act does not mandate a specific watermarking standard. However, C2PA (Coalition for Content Provenance and Authenticity) is widely regarded as the leading standard for content provenance. The European Commission may recommend specific standards through implementing acts.',
  },
  {
    question: 'When do Article 50 obligations apply?',
    answer:
      'Article 50 transparency obligations apply from 2 August 2026. All providers and deployers of AI systems that generate or manipulate content must comply by this date.',
  },
  {
    question: 'What are the penalties for non-compliance with Article 50?',
    answer:
      'Non-compliance with Article 50 falls under the general penalty framework in Article 99. Fines can reach up to €15,000,000 or 3% of global annual turnover for non-compliance with obligations other than prohibited practices.',
  },
  {
    question: 'Does Article 50 apply to open-source AI models?',
    answer:
      'Open-source models may have some exemptions under the Act, but providers of open-source models that are placed on the market or put into service must still comply with applicable transparency obligations. The specific treatment depends on whether the model qualifies for the open-source exemption under Article 53.',
  },
];

const DEADLINE = new Date('2026-08-02T00:00:00Z');
const NOW = new Date();
const DAYS_LEFT = Math.max(0, Math.ceil((DEADLINE.getTime() - NOW.getTime()) / (1000 * 60 * 60 * 24)));

export default function Article50Watermarking() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Article 50 Watermarking: What You Need to Know Before August 2026',
    description:
      'Complete guide to EU AI Act Article 50 watermarking requirements. Synthetic content marking, machine-readable watermarks, C2PA, and implementation approaches.',
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
    url: 'https://safetyof.ai/blog/article-50-watermarking',
    mainEntityOfPage: 'https://safetyof.ai/blog/article-50-watermarking',
    keywords: [
      'EU AI Act Article 50 watermarking',
      'AI content watermarking',
      'C2PA',
      'synthetic content marking',
      'machine-readable watermarks',
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
              Published 15 May 2026 &middot; 12 min read
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              {DAYS_LEFT} days until Article 50 deadline
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">Article 50</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Watermarking Guide
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Everything you need to know about EU AI Act Article 50 watermarking requirements — synthetic content marking, machine-readable watermarks, C2PA, and implementation approaches before the August 2026 deadline.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/scanner"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
              >
                <Zap className="w-5 h-5" />
                Check Your Compliance
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#watermarking-approaches"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors"
              >
                <Eye className="w-5 h-5" />
                View Approaches
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

      {/* What Is Article 50 */}
      <section id="what-is-article-50" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">What Is Article 50?</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Article 50 of the EU AI Act establishes <strong className="text-foreground">transparency obligations</strong> for providers and deployers of certain AI systems. Unlike the technical requirements for high-risk systems (Chapter III), Article 50 focuses on ensuring that natural persons are informed when they interact with AI or consume AI-generated content.
            </p>
            <p>
              The article addresses a fundamental concern in the age of generative AI: the ability to distinguish between human-created and machine-generated content. As AI-generated text, images, audio, and video become increasingly indistinguishable from authentic content, Article 50 creates a legal framework for mandatory disclosure and marking.
            </p>
            <p>
              These obligations apply from <strong className="text-foreground">2 August 2026</strong> — making them part of the largest wave of EU AI Act enforcement alongside high-risk system requirements. Organisations that generate, manipulate, or deploy AI-generated content must have compliant marking and disclosure systems in place before this date.
            </p>
            <p>
              The watermarking and marking requirements under Article 50 are designed to be <strong className="text-foreground">technology-neutral</strong>. The Act does not prescribe a specific watermarking technology or standard, instead requiring that outputs be marked &ldquo;in a machine-readable format&rdquo; and be &ldquo;detectable as artificially generated or manipulated.&rdquo; This gives providers flexibility but also creates ambiguity about what constitutes sufficient compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Who Must Comply */}
      <section id="who-must-comply" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Who Must Comply?</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Article 50 creates obligations for both providers and deployers, depending on which paragraph applies:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Cpu,
                title: 'AI Providers (§1)',
                desc: 'Providers of AI systems that generate or manipulate text, audio, image, or video content must ensure outputs are marked in a machine-readable format. This includes LLM providers, image generator companies, voice synthesis platforms, and video generation tools.',
              },
              {
                icon: Globe,
                title: 'AI Deployers (§2–4)',
                desc: 'Deployers who use AI systems for direct interaction (chatbots), deepfake generation, or AI-generated text published in the public interest must make disclosures to affected persons. The disclosure must be clear, timely, and appropriate.',
              },
              {
                icon: FileText,
                title: 'Content Platforms',
                desc: 'Platforms that distribute AI-generated content may bear indirect obligations. While not explicitly named in Article 50, platform operators must ensure their systems can detect and display machine-readable marks from AI providers.',
              },
              {
                icon: Lock,
                title: 'Enterprise Users',
                desc: 'Enterprises using AI-generated content in marketing, customer communications, or public disclosures must ensure transparency obligations are met. Internal AI tools that produce external-facing content fall within scope.',
              },
            ].map((entity) => (
              <div key={entity.title} className="rounded-xl bg-background border border-border p-6">
                <entity.icon className="w-5 h-5 text-brand-400 mb-3" />
                <h3 className="font-semibold mb-2">{entity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{entity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Core Obligations */}
      <section id="four-obligations" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Four Core Obligations</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                article: 'Article 50(1)',
                title: 'Machine-Readable Content Marking',
                description:
                  'Providers of AI systems that generate or manipulate text, audio, image, or video content — including deepfakes — must ensure outputs are marked in a machine-readable format and are detectable as artificially generated or manipulated.',
                key_points: [
                  'Applies to all modalities: text, audio, image, video',
                  'Must be machine-readable (not just visible labels)',
                  'Must be detectable as AI-generated',
                  'Covers both generation and manipulation',
                  'Provider bears responsibility, not the deployer',
                ],
                color: 'brand',
              },
              {
                article: 'Article 50(2)',
                title: 'Chatbot & AI Interaction Disclosure',
                description:
                  'Deployers of AI systems that interact directly with natural persons must inform those persons that they are interacting with an AI system. The disclosure must be made in a clear and distinguishable manner at the latest at the first interaction.',
                key_points: [
                  'Applies to chatbots, virtual assistants, conversational AI',
                  'Disclosure must be at or before first interaction',
                  'Must be clear and distinguishable',
                  'Deployer (not provider) bears responsibility',
                  'Applies to voice, text, and multi-modal interactions',
                ],
                color: 'safety',
              },
              {
                article: 'Article 50(3)',
                title: 'Deepfake Labelling',
                description:
                  'Deployers of AI systems that generate or manipulate image, audio, or video content that appreciably resembles existing persons, objects, places, or events must disclose that the content has been artificially generated or manipulated.',
                key_points: [
                  'Applies when content resembles real persons, objects, or events',
                  'Disclosure must be clear, timely, and visible',
                  'Typically through labels, watermarks, or metadata',
                  'Deployer bears responsibility',
                  'Covers voice cloning, face swaps, scene manipulation',
                ],
                color: 'yellow',
              },
              {
                article: 'Article 50(4)',
                title: 'AI-Generated Text Disclosure',
                description:
                  'Deployers of AI systems that generate or manipulate text published to inform the public on matters of public interest must disclose that the text was artificially generated or manipulated.',
                key_points: [
                  'Applies to text published in the public interest',
                  'Covers news, public communications, policy documents',
                  'Deployer bears responsibility',
                  'Must be disclosed at or before the point of publication',
                  'Does not apply to private or internal AI-generated text',
                ],
                color: 'brand',
              },
            ].map((obligation) => (
              <div
                key={obligation.article}
                className={`rounded-xl border p-6 ${
                  obligation.color === 'brand'
                    ? 'border-brand-500/30 bg-brand-500/5'
                    : obligation.color === 'safety'
                    ? 'border-safety-500/30 bg-safety-500/5'
                    : 'border-yellow-500/30 bg-yellow-500/5'
                }`}
              >
                <span className="text-xs font-mono text-brand-400">{obligation.article}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{obligation.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {obligation.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-1">
                  {obligation.key_points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-safety-500 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watermarking Approaches */}
      <section id="watermarking-approaches" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Fingerprint className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Watermarking Approaches</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            The EU AI Act is technology-neutral — it does not mandate a specific watermarking standard. However, the requirement for &ldquo;machine-readable&rdquo; marking narrows the field to approaches that can be reliably detected by automated systems. Here are the main technical approaches:
          </p>

          <div className="space-y-6">
            <div className="rounded-xl bg-background border border-border p-6">
              <h3 className="text-lg font-semibold mb-3">Text Watermarking</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Text watermarking embeds statistical signals into generated text, typically by biasing token selection during generation. The watermark is invisible to human readers but detectable by algorithms that know the embedding pattern.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { method: 'Token Distribution Biasing', desc: 'Alters the probability distribution of next-token selection to embed a statistical signal. Used by approaches like the Scott-Aaronson method (OpenAI).' },
                  { method: 'Synonym Substitution', desc: 'Replaces specific words with synonyms in a pattern that encodes a watermark signal. Less robust but easier to implement.' },
                  { method: 'Syntactic Pattern Embedding', desc: 'Modifies sentence structure, punctuation, or formatting in a systematic pattern. Can be fragile against paraphrasing.' },
                  { method: 'Zero-Width Character Insertion', desc: 'Inserts invisible Unicode characters (zero-width joiners, spaces) that encode metadata. Simple but easily stripped by text processing.' },
                ].map((m) => (
                  <div key={m.method} className="rounded-lg bg-card border border-border p-4">
                    <h4 className="text-sm font-semibold mb-1">{m.method}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-background border border-border p-6">
              <h3 className="text-lg font-semibold mb-3">Image & Video Watermarking</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Image and video watermarking embeds signals in the pixel data, frequency domain, or metadata. Modern approaches are designed to survive common transformations like compression, cropping, and screenshots.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { method: 'Frequency Domain Embedding', desc: 'Embeds watermark in the DCT or wavelet coefficients of the image. Robust against compression and moderate transformations.' },
                  { method: 'Pixel-Level Perturbation', desc: 'Adds imperceptible noise patterns to pixel values. Can be made robust against common attacks with careful calibration.' },
                  { method: 'Metadata / EXIF Tagging', desc: 'Stores provenance information in EXIF, IPTC, or XMP metadata fields. Simple to implement but easily stripped by platforms.' },
                  { method: 'Neural Network Watermarking', desc: 'Uses trained encoder-decoder networks to embed and extract watermarks. Can achieve high capacity and robustness simultaneously.' },
                ].map((m) => (
                  <div key={m.method} className="rounded-lg bg-card border border-border p-4">
                    <h4 className="text-sm font-semibold mb-1">{m.method}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-background border border-border p-6">
              <h3 className="text-lg font-semibold mb-3">Audio Watermarking</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Audio watermarking embeds signals in the time domain, frequency domain, or perceptual model of audio content. Critical for voice cloning and AI-generated music compliance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { method: 'Spread Spectrum', desc: 'Distributes watermark energy across the frequency spectrum. Robust against compression, filtering, and moderate noise addition.' },
                  { method: 'Echo Hiding', desc: 'Embeds information as controlled echoes in the audio signal. Imperceptible to human listeners when properly calibrated.' },
                  { method: 'Phase Coding', desc: 'Modifies the phase spectrum of audio segments to encode watermark data. Robust against many signal processing operations.' },
                ].map((m) => (
                  <div key={m.method} className="rounded-lg bg-card border border-border p-4">
                    <h4 className="text-sm font-semibold mb-1">{m.method}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C2PA */}
      <section id="c2pa" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">C2PA & Content Credentials</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The <strong className="text-foreground">Coalition for Content Provenance and Authenticity (C2PA)</strong> is the most widely adopted open standard for content provenance. While Article 50 does not mandate any specific standard, C2PA has emerged as the de facto approach for compliance due to broad industry adoption and alignment with the regulation&apos;s requirements.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">What Is C2PA?</h3>
            <p>
              C2PA is a technical standard that enables content creators and platforms to attach cryptographically signed provenance data to digital content. Each &ldquo;Content Credential&rdquo; contains a tamper-evident record of how content was created, modified, and distributed — including whether AI tools were involved.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">How C2PA Supports Article 50 Compliance</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Machine-Readable by Design',
                  desc: 'C2PA manifests are embedded in content files using standard formats (JPEG, PNG, MP4, PDF). Detection is automatic and does not require visual inspection.',
                },
                {
                  title: 'Cryptographic Integrity',
                  desc: 'Each Content Credential is digitally signed. Any tampering with the content or its provenance data is detectable, ensuring the watermark cannot be forged.',
                },
                {
                  title: 'AI Tool Identification',
                  desc: 'C2PA can record which AI tools were used to generate or modify content, when, and with what parameters — directly supporting Article 50\'s disclosure requirements.',
                },
                {
                  title: 'Industry Adoption',
                  desc: 'Adobe, Microsoft, Google, OpenAI, Meta, and others have adopted C2PA. Camera manufacturers like Leica and Sony embed C2PA at the hardware level.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-card border border-border p-5">
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Limitations of C2PA</h3>
            <p className="text-sm">
              C2PA has limitations that organisations should consider. Metadata-based watermarks can be stripped by platforms or file conversions. Not all content types are equally supported. Detection requires tools that understand the C2PA standard. And C2PA alone may not satisfy Article 50(1) for all modalities — particularly text, where content-level watermarking approaches may also be needed.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section id="implementation" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Implementation Guide</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            A practical roadmap for implementing Article 50 watermarking compliance before the August 2026 deadline:
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Audit Your AI Content Generation Stack',
                description:
                  'Identify all AI systems that generate or manipulate text, audio, image, or video content. Map each system to its Article 50 obligation (§1 provider marking, §2 interaction disclosure, §3 deepfake labelling, §4 text disclosure).',
              },
              {
                step: '02',
                title: 'Select Watermarking Technologies',
                description:
                  'Choose watermarking approaches appropriate for each modality. For images and video, consider C2PA plus frequency-domain watermarks. For text, implement token-level statistical watermarks. For audio, use spread spectrum or echo hiding.',
              },
              {
                step: '03',
                title: 'Implement Provider-Side Marking (§1)',
                description:
                  'For AI systems you provide, embed machine-readable watermarks at the generation layer. This means modifying your model inference pipeline to inject watermarks during content generation, not as a post-processing step.',
              },
              {
                step: '04',
                title: 'Build Deployer Disclosure Mechanisms (§2–4)',
                description:
                  'For AI systems you deploy, implement clear and timely disclosures. For chatbots, add disclosure at the first interaction. For deepfakes, add visible labels. For published AI text, add byline disclosure.',
              },
              {
                step: '05',
                title: 'Implement Detection & Verification',
                description:
                  'Build or integrate detection tools that can verify watermarks in your generated content. This serves as both a compliance verification mechanism and a quality assurance tool.',
              },
              {
                step: '06',
                title: 'Document & Audit',
                description:
                  'Document your watermarking implementation, including which technologies are used for each system, how they meet the machine-readable requirement, and how detection and verification are performed.',
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

          <div className="rounded-xl bg-background border border-brand-500/20 p-6 mt-8">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-400 mb-1">Automate Article 50 Compliance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  SafetyOf.AI&apos;s compliance scanner automatically checks your AI systems against Article 50 requirements — verifying watermarking implementation, disclosure mechanisms, and content marking completeness.
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

      {/* Exceptions */}
      <section id="exceptions" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Exceptions & Edge Cases</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Article 50 includes specific exceptions that organisations should understand:
            </p>

            <div className="grid gap-4">
              {[
                {
                  title: 'Law Enforcement Exception',
                  description:
                    'Article 50 obligations do not apply where the AI system is authorised by law to detect, prevent, investigate, or prosecute criminal offences, subject to appropriate safeguards.',
                },
                {
                  title: 'Artistic & Creative Works',
                  description:
                    'Obligations do not apply where the content is part of an artistic, creative, satirical, fictional, or analogous work, provided appropriate safeguards are in place. This protects creative expression while maintaining transparency.',
                },
                {
                  title: 'Internal & Non-Public Content',
                  description:
                    'Article 50(4) only applies to text published to inform the public on matters of public interest. Internal AI-generated reports, private communications, and non-public content are not covered by this specific paragraph.',
                },
              ].map((exception) => (
                <div key={exception.title} className="rounded-xl bg-card border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">{exception.title}</h3>
                  <p className="text-sm leading-relaxed">{exception.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Timeline & Next Steps</h2>
          </div>

          <div className="rounded-xl bg-background border border-red-500/30 p-6 mb-6 glow-threat">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Deadline: 2 August 2026</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All Article 50 obligations take effect on 2 August 2026 — {DAYS_LEFT} days from today. Organisations must have compliant watermarking and disclosure systems in place by this date.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { phase: 'Now', action: 'Audit AI content generation stack. Identify all systems in scope for Article 50.' },
              { phase: 'Q2 2026', action: 'Select and pilot watermarking technologies. Begin implementation for highest-traffic systems.' },
              { phase: 'Q3 2026', action: 'Complete implementation across all systems. Deploy detection and verification tooling.' },
              { phase: '2 August 2026', action: 'All Article 50 obligations effective. Full compliance required.' },
              { phase: 'Ongoing', action: 'Monitor evolving guidance from the EU AI Office. Update watermarking as standards mature.' },
            ].map((item) => (
              <div key={item.phase} className="flex items-start gap-4 py-3">
                <span className="text-xs font-mono text-brand-400 w-20 flex-shrink-0">{item.phase}</span>
                <span className="text-sm text-muted-foreground">{item.action}</span>
              </div>
            ))}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <Clock className="w-3.5 h-3.5" />
            {DAYS_LEFT} days until Article 50 deadline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Verify Your <span className="text-brand-400">Article 50 Compliance</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            SafetyOf.AI automatically checks your AI systems against all four Article 50 obligations. Our compliance scanner verifies watermarking implementation, disclosure mechanisms, and content marking completeness.
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
