'use client';

import { useState } from 'react';
import {
  Eye,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronRight,
  ArrowRight,
  FileText,
  Globe,
  Lock,
  BadgeAlert,
  Camera,
  Mic,
  Video,
  Type,
} from 'lucide-react';

const faqItems = [
  {
    question: 'What is Article 50 of the EU AI Act?',
    answer: 'Article 50 establishes transparency obligations for providers and deployers of certain AI systems. It requires that AI-generated content be marked, that users be informed when interacting with AI, and that deepfakes and AI-generated text published for public interest be clearly disclosed. These obligations apply from 2 August 2026.',
  },
  {
    question: 'Which AI systems are affected by Article 50?',
    answer: 'Article 50 applies to: (1) AI systems that generate or manipulate text, audio, image, or video content — including large language models, image generators, voice synthesis tools, and video generators; (2) AI systems that interact directly with natural persons, such as chatbots and virtual assistants; (3) emotion recognition systems; and (4) biometric categorisation systems.',
  },
  {
    question: 'What does "machine-readable marking" mean under Article 50?',
    answer: 'Machine-readable marking means that AI-generated content must include metadata, watermarks, or other technical markers that allow automated detection of AI origin. This could include C2PA metadata, invisible watermarks embedded in images/audio, or structured metadata fields in text outputs. The standard must be interoperable and verifiable.',
  },
  {
    question: 'Are there exceptions to Article 50 obligations?',
    answer: 'Yes. Article 50 does not apply where: (1) the AI system is authorised by law for detecting, preventing, investigating, or prosecuting criminal offences, subject to appropriate safeguards; (2) the content is part of an artistic, creative, satirical, fictional, or analogous work or programme, provided appropriate safeguards are in place; or (3) the content undergoes editorial control before publication.',
  },
  {
    question: 'How do Article 50 obligations differ for providers vs deployers?',
    answer: 'Providers (developers) are responsible for ensuring the AI system can produce machine-readable markings on generated content (Article 50(1)). Deployers (users) are responsible for: disclosing AI interaction (Article 50(2)), labelling deepfakes (Article 50(3)), and disclosing AI-generated text published for public interest (Article 50(4)). Both share compliance responsibility.',
  },
  {
    question: 'What penalties apply for Article 50 non-compliance?',
    answer: 'Violations of transparency obligations fall under Article 99(4), which carries fines up to €15,000,000 or 3% of total worldwide annual turnover for the preceding financial year, whichever is higher. For SMEs and startups, proportionate caps apply.',
  },
];

export default function Article50Guide() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Article 50 EU AI Act — Transparency Obligations Compliance Guide',
    description:
      'Deep-dive guide to Article 50 of the EU AI Act. Covers watermarking, deepfake disclosure, chatbot identification, AI-generated content marking, and compliance requirements effective 2 August 2026.',
    author: { '@type': 'Organization', name: 'SafetyOf.AI', url: 'https://safetyof.ai' },
    publisher: { '@type': 'Organization', name: 'SafetyOf.AI', url: 'https://safetyof.ai' },
    datePublished: '2026-05-14',
    dateModified: '2026-05-14',
    url: 'https://safetyof.ai/eu-ai-act/article-50',
    mainEntityOfPage: 'https://safetyof.ai/eu-ai-act/article-50',
    keywords: ['Article 50', 'EU AI Act', 'transparency', 'deepfake disclosure', 'watermarking', 'AI-generated content'],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <div className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-3xl">
            <a href="/eu-ai-act" className="inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300 mb-6 transition-colors">
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to EU AI Act Guide
            </a>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">
              <Eye className="w-3.5 h-3.5" />
              EU AI Act — Article 50
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Article 50: <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">Transparency Obligations</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A comprehensive guide to Article 50 of Regulation (EU) 2024/1689 — the EU AI Act&apos;s transparency framework for AI-generated content, deepfake disclosure, chatbot identification, and machine-readable content marking. Effective <strong className="text-foreground">2 August 2026</strong>.
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-400" /> Deadline: 2 August 2026</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-brand-400" /> Regulation (EU) 2024/1689</span>
            </div>
          </div>
        </div>
      </section>

      {/* Context Banner */}
      <section className="py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-card border border-brand-500/20 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-400 mb-1">Article 50 in Context</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Article 50 sits within <strong className="text-foreground">Title IV</strong> of the EU AI Act, which addresses transparency obligations. While Articles 50–52 cover general transparency, Article 50 specifically targets transparency for <em>certain AI systems</em> — those generating content, interacting with humans, or recognising emotions. It works alongside Article 13 (transparency for high-risk systems) and Article 52 (specific transparency for certain AI systems).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">The Four Pillars of Article 50</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Article 50 establishes four distinct but interconnected transparency obligations. Each targets a different aspect of AI-generated or AI-mediated content.
          </p>

          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="bg-brand-500/5 border-b border-border px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center text-sm font-mono font-bold">1</div>
                <div>
                  <h3 className="font-semibold">AI-Generated Content Marking</h3>
                  <span className="text-xs font-mono text-brand-400">Article 50(1)</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Providers of AI systems that generate or manipulate text, audio, image, or video content must ensure that the outputs of the AI system are <strong className="text-foreground">marked in a machine-readable format</strong> and are detectable as artificially generated or manipulated.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg bg-background border border-border p-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Type className="w-4 h-4 text-brand-400" />
                      Text Content
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      LLMs and text generators must embed metadata indicating AI origin. This includes structured metadata in HTML/PDF outputs and API response headers containing generation provenance.
                    </p>
                  </div>
                  <div className="rounded-lg bg-background border border-border p-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-brand-400" />
                      Image Content
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Image generators must embed invisible watermarks and C2PA-compatible metadata. The marking must survive format conversions and minor edits while remaining verifiable.
                    </p>
                  </div>
                  <div className="rounded-lg bg-background border border-border p-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Mic className="w-4 h-4 text-brand-400" />
                      Audio Content
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Voice synthesis and audio generation tools must embed watermarks or metadata identifying AI origin. This is critical for combating voice cloning fraud and disinformation.
                    </p>
                  </div>
                  <div className="rounded-lg bg-background border border-border p-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Video className="w-4 h-4 text-brand-400" />
                      Video Content
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Video generation and manipulation systems must apply frame-level and container-level metadata marking. Both synthetic video generation and deepfake manipulation are covered.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-safety-500/5 border border-safety-500/20 p-4">
                  <h4 className="text-sm font-semibold text-safety-400 mb-2">Technical Standards</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The EU AI Office is expected to develop codes of practice (per Article 56) specifying technical standards for machine-readable marking. Current industry standards include <strong className="text-foreground">C2PA (Coalition for Content Provenance and Authenticity)</strong>, <strong className="text-foreground">SynthID</strong>, and <strong className="text-foreground">IPTC metadata</strong>. Providers should adopt interoperable standards that allow downstream verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="bg-brand-500/5 border-b border-border px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center text-sm font-mono font-bold">2</div>
                <div>
                  <h3 className="font-semibold">AI Interaction Disclosure</h3>
                  <span className="text-xs font-mono text-brand-400">Article 50(2)</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deployers of AI systems that <strong className="text-foreground">interact directly with natural persons</strong> must inform those persons that they are interacting with an AI system. The disclosure must be made <strong className="text-foreground">in a clear and distinguishable manner</strong> at the latest at the time of the first interaction or initial engagement.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { icon: Globe, label: 'Chatbots', desc: 'Customer service chatbots, help desk bots, conversational AI interfaces' },
                    { icon: Mic, label: 'Voice Assistants', desc: 'Phone-based AI, voice bots, automated call systems' },
                    { icon: Eye, label: 'Virtual Agents', desc: 'AI avatars, virtual salespeople, automated advisory systems' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-background border border-border p-4 text-center">
                      <item.icon className="w-5 h-5 text-brand-400 mx-auto mb-2" />
                      <h4 className="text-sm font-semibold mb-1">{item.label}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-background border border-border p-4">
                  <h4 className="text-sm font-semibold mb-2">Implementation Requirements</h4>
                  <div className="space-y-2">
                    {[
                      'Disclosure must occur at or before the first interaction — not buried in terms of service',
                      'Must be clear and distinguishable — not hidden, ambiguous, or easily overlooked',
                      'Must identify the system as AI, not use euphemisms like "automated assistant"',
                      'Must be accessible to persons with disabilities (WCAG-compliant where applicable)',
                      'Continuous disclosure may be needed for ongoing interactions (not just initial)',
                    ].map((req) => (
                      <div key={req} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-safety-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="bg-brand-500/5 border-b border-border px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center text-sm font-mono font-bold">3</div>
                <div>
                  <h3 className="font-semibold">Deepfake Disclosure</h3>
                  <span className="text-xs font-mono text-brand-400">Article 50(3)</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deployers of AI systems that generate or manipulate image, audio, or video content that <strong className="text-foreground">appreciably resembles existing persons, objects, places, or events</strong> (deepfakes) must disclose that the content has been artificially generated or manipulated. The disclosure must be <strong className="text-foreground">clear, timely, and effectively visible</strong>.
                </p>
                <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-4">
                  <div className="flex items-start gap-3">
                    <BadgeAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-1">High Enforcement Priority</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Deepfake disclosure is expected to be a high-priority enforcement area given its impact on elections, public trust, and individual rights. Organisations deploying deepfake technology should prioritise compliance with this obligation and implement robust labelling workflows.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg bg-background border border-border p-4">
                    <h4 className="text-sm font-semibold mb-2">What Constitutes a Deepfake</h4>
                    <div className="space-y-1">
                      {[
                        'AI-generated images of real persons',
                        'Voice cloning of identifiable individuals',
                        'Face-swapping in video content',
                        'AI-generated scenes resembling real locations/events',
                        'Manipulated audio appearing to show real statements',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg bg-background border border-border p-4">
                    <h4 className="text-sm font-semibold mb-2">Disclosure Methods</h4>
                    <div className="space-y-1">
                      {[
                        'Visible label overlay (e.g., "AI-generated image")',
                        'Embedded metadata (C2PA, IPTC)',
                        'Invisible watermark (survives screenshots/compression)',
                        'Accompanying text disclosure',
                        'Platform-level labelling integration',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-safety-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="bg-brand-500/5 border-b border-border px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center text-sm font-mono font-bold">4</div>
                <div>
                  <h3 className="font-semibold">AI-Generated Text Disclosure</h3>
                  <span className="text-xs font-mono text-brand-400">Article 50(4)</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deployers of AI systems that generate or manipulate text which is <strong className="text-foreground">published with the purpose of informing the public on matters of public interest</strong> must disclose that the text was artificially generated or manipulated. This applies to news articles, reports, analyses, and similar content where authenticity matters for public discourse.
                </p>
                <div className="rounded-lg bg-background border border-border p-4">
                  <h4 className="text-sm font-semibold mb-2">Scope & Application</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p><strong className="text-foreground">Covered:</strong> AI-generated news articles, press releases, policy papers, public health communications, election-related content, financial analysis published publicly.</p>
                    <p><strong className="text-foreground">Not covered:</strong> Internal business documents, private communications, creative/fictional works (with safeguards), marketing copy (unless informing on public interest).</p>
                    <p><strong className="text-foreground">Key test:</strong> Is the text published to inform the public on matters of public interest? If yes, disclosure is required regardless of quality or intent.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptions */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Exceptions & Limitations</h2>

          <div className="space-y-4">
            <div className="rounded-xl bg-background border border-border p-6">
              <h3 className="font-semibold mb-3">Law Enforcement Exception</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Article 50 obligations do not apply where the AI system is authorised by law to detect, prevent, investigate, or prosecute criminal offences, <strong className="text-foreground">subject to appropriate safeguards</strong>. This exception is narrow and requires specific legal authorisation — it does not apply to general commercial or government use.
              </p>
            </div>
            <div className="rounded-xl bg-background border border-border p-6">
              <h3 className="font-semibold mb-3">Artistic & Creative Works Exception</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The obligations do not apply where the AI-generated content is part of an <strong className="text-foreground">artistic, creative, satirical, fictional, or analogous work or programme</strong>, provided appropriate safeguards are in place. This protects creative expression while requiring that safeguards prevent misuse for disinformation.
              </p>
            </div>
            <div className="rounded-xl bg-background border border-border p-6">
              <h3 className="font-semibold mb-3">Editorial Control Exception</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Where AI-generated text undergoes <strong className="text-foreground">editorial control</strong> by a natural or legal person before publication, the disclosure obligation under Article 50(4) does not apply. However, this does not exempt the provider from the machine-readable marking obligation under Article 50(1).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Checklist */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Article 50 Compliance Checklist</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Use this checklist to verify your organisation&apos;s readiness for Article 50 obligations.
          </p>

          <div className="space-y-3">
            {[
              { category: 'Content Marking (Art. 50(1))', items: ['AI-generated text includes machine-readable metadata', 'AI-generated images contain invisible watermarks + C2PA metadata', 'AI-generated audio contains perceptual watermarks', 'AI-generated video includes frame-level and container-level metadata', 'Watermarking survives common format conversions', 'Verification tools can detect and read the markings'] },
              { category: 'Interaction Disclosure (Art. 50(2))', items: ['All chatbots display clear "AI system" disclosure at first interaction', 'Voice assistants identify themselves as AI before conversation', 'Disclosure is clear, prominent, and not buried in ToS', 'Disclosure is accessible (screen reader compatible, multilingual)', 'Continuous disclosure mechanism for ongoing interactions'] },
              { category: 'Deepfake Disclosure (Art. 50(3))', items: ['All deepfake content carries visible label', 'Deepfake metadata is embedded in file', 'Label is clear: "AI-generated" or "Artificially manipulated"', 'Disclosure is timely — applied before distribution', 'Content remains labelled after sharing/reposting'] },
              { category: 'Text Disclosure (Art. 50(4))', items: ['AI-generated public interest articles carry disclosure', 'Disclosure is positioned prominently (not in footer)', 'Automated disclosure workflow integrated into CMS', 'Editorial exception only applied with documented review process'] },
            ].map((section) => (
              <div key={section.category} className="rounded-xl bg-card border border-border p-6">
                <h3 className="font-semibold mb-4">{section.category}</h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="rounded border-border bg-background text-brand-500 focus:ring-brand-500"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Penalties for Article 50 Non-Compliance</h2>

          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <h3 className="font-semibold">Transparency Obligation Violations</h3>
              <span className="text-2xl font-bold text-red-400">Up to €15M or 3%</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Violations of Article 50 transparency obligations are subject to penalties under Article 99(4): fines up to <strong className="text-foreground">€15,000,000 or 3% of total worldwide annual turnover</strong> for the preceding financial year, whichever is higher. For SMEs and startups, fines are proportionate with lower absolute caps.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'First Offence', desc: 'Warning + corrective order + compliance deadline', color: 'yellow' },
              { label: 'Continued Violation', desc: 'Fines up to €15M or 3% of global turnover', color: 'red' },
              { label: 'Market Action', desc: 'System restriction, withdrawal, or recall from EU market', color: 'red' },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl border p-5 ${
                item.color === 'red' ? 'border-red-500/20 bg-red-500/5' : 'border-yellow-500/20 bg-yellow-500/5'
              }`}>
                <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Article 50 <span className="text-brand-400">FAQ</span>
          </h2>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <Faq50Item key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Verify Your <span className="text-brand-400">Article 50 Compliance</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            SafetyOf.AI provides automated Article 50 compliance verification — checking content watermarking, disclosure mechanisms, and metadata integrity across all AI-generated outputs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Shield className="w-5 h-5" />
              Book Article 50 Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/eu-ai-act"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border font-semibold hover:bg-accent transition-colors"
            >
              Full EU AI Act Guide
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Faq50Item({ item }: { item: (typeof faqItems)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-accent/50 transition-colors"
      >
        <span className="font-medium pr-4">{item.question}</span>
        <svg className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}
