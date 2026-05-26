'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Clock,
  ShieldAlert,
  BookOpen,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Search,
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'How does the compliance scan work?',
    answer:
      'We use 218 MCP servers to analyse your AI system against regulatory frameworks including the EU AI Act, DORA, NIS2, ISO 42001, and GDPR. Our automated scanner performs gap analysis across data governance, model risk, transparency requirements, and human oversight obligations — delivering a comprehensive report within 48 hours.',
  },
  {
    question: 'What\'s included in the £499 scan?',
    answer:
      'The full compliance scan includes a detailed gap analysis report, AI risk classification under the EU AI Act, a prioritised remediation roadmap with actionable steps, and a cryptographic HMAC attestation you can share with regulators and auditors to demonstrate compliance progress.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'We offer a 14-day refund for all subscription plans (Pro and Enterprise). Completed compliance audits and one-off scans are non-refundable once the report has been delivered, as the work is performed upfront by our MCP server infrastructure.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We use UK and EU data centres exclusively, are fully GDPR compliant, and maintain ISO 27001 certification. Your code and model data are never used for training or shared with third parties.',
  },
  {
    question: 'Can I use this for SOC 2 / ISO 27001?',
    answer:
      'Yes. Our MCP servers cover multiple compliance frameworks simultaneously. While our primary focus is EU AI Act compliance, our scans map findings to SOC 2, ISO 27001, NIST AI RMF, and other standards, helping you consolidate compliance efforts across frameworks.',
  },
  {
    question: 'How do I install the MCP servers?',
    answer:
      'Run `npx meok-setup --pack governance` in your project directory. This installs all 218 compliance-focused MCP servers and configures them to work with your existing development environment. Full installation guides are available in our documentation.',
  },
  {
    question: 'What if the scan finds no issues?',
    answer:
      'We offer a 100% money-back guarantee. If our compliance scan identifies no actionable gaps in your AI system, we\'ll refund the full scan fee. This is our confidence in the thoroughness of our 218-server analysis pipeline.',
  },
  {
    question: 'Do you offer enterprise support?',
    answer:
      'Yes. Our Enterprise tier includes a dedicated compliance officer, custom MCP server development, priority support with a 4-hour response SLA, white-labelling options, and multi-tenant deployment. Contact hello@safetyof.ai for a tailored proposal.',
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: (typeof FAQ_ITEMS)[number]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-accent/50 transition-colors"
      >
        <span className="font-medium text-sm pr-4">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Support</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          How Can We <span className="text-brand-400">Help</span>?
        </h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Find answers to common questions or reach out to our compliance support team.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search frequently asked questions..."
          className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50"
        />
      </div>

      {/* FAQ */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-brand-400" />
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-2">
          {filteredFAQs.map((item, i) => {
            const originalIndex = FAQ_ITEMS.indexOf(item);
            return (
              <FAQItem
                key={originalIndex}
                item={item}
                isOpen={openIndex === originalIndex}
                onToggle={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
              />
            );
          })}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">No matching questions found.</p>
              <p className="text-muted-foreground/60 text-xs mt-1">Try a different search term or contact us directly.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-brand-400" />
          <h2 className="text-xl font-semibold">Contact Support</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* General Support */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-brand-400" />
              </div>
              <div>
                <div className="text-sm font-medium">General Support</div>
                <a href="mailto:hello@safetyof.ai" className="text-xs text-brand-400 hover:underline font-mono">
                  hello@safetyof.ai
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Questions about compliance, billing, or platform features.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>Typically responds within 24 hours</span>
            </div>
          </div>

          {/* Security */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <div className="text-sm font-medium">Security Issues</div>
                <a href="mailto:security@safetyof.ai" className="text-xs text-red-400 hover:underline font-mono">
                  security@safetyof.ai
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Report vulnerabilities, security incidents, or data concerns.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>Acknowledged within 2 hours</span>
            </div>
          </div>
        </div>

        {/* Response Times */}
        <div className="mt-4 rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-medium mb-3">Response Time by Plan</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">Free</div>
              <div className="text-xs text-muted-foreground">48h response</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-brand-400">Pro</div>
              <div className="text-xs text-muted-foreground">&lt; 24h response</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-emerald-400">Enterprise</div>
              <div className="text-xs text-muted-foreground">&lt; 4h response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Link */}
      <section>
        <div className="rounded-2xl border border-border bg-card p-6 text-center">
          <BookOpen className="w-8 h-8 text-brand-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-2">Documentation</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
            Explore our comprehensive guides, API references, and compliance framework documentation.
          </p>
          <a
            href="/docs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-brand text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Browse Documentation
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
