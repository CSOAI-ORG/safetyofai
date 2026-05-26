import type { Metadata } from 'next';
import {
  Shield,
  ArrowRight,
  Building2,
  Clock,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Quote,
  Zap,
  Heart,
  Eye,
  Server,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'MedAI Health — Continuous Compliance for 50 AI Models | SafetyOf.AI',
  description:
    'How a UK health-tech company monitors 50 AI models for continuous EU AI Act compliance with SafetyOf.AI Enterprise.',
  openGraph: {
    title: 'MedAI Health — Continuous Compliance for 50 AI Models',
    description:
      'How MedAI Health monitors 50 AI models across diagnostics, triage, and patient communication with SafetyOf.AI Enterprise.',
    url: 'https://safetyof.ai/case-studies/medai-health',
    siteName: 'SafetyOf.AI',
    type: 'article',
  },
};

export default function MedAIHealthCaseStudy() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Continuous Compliance: How a Health-Tech Company Monitors 50 AI Models',
            description:
              'MedAI Health monitors 50 AI models for continuous EU AI Act compliance with SafetyOf.AI Enterprise, achieving real-time drift detection and automated Article 50 watermarking.',
            author: { '@type': 'Organization', name: 'SafetyOf.AI', url: 'https://safetyof.ai' },
            publisher: { '@type': 'Organization', name: 'SafetyOf.AI', url: 'https://safetyof.ai' },
            datePublished: '2026-05-15',
            url: 'https://safetyof.ai/case-studies/medai-health',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[128px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            &larr; All Case Studies
          </a>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="font-semibold text-lg">MedAI Health</p>
              <p className="text-sm text-muted-foreground">Health-Tech &middot; United Kingdom</p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Continuous Compliance:{' '}
            <span className="bg-gradient-to-r from-purple-400 to-brand-400 bg-clip-text text-transparent">
              Monitoring 50 AI Models
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            MedAI Health operates 50 AI models across diagnostics, triage, and patient communication.
            With SafetyOf.AI Enterprise, they achieved continuous compliance confidence.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-lg mt-10">
            {[
              { value: '50', label: 'AI Models Monitored' },
              { value: 'Real-time', label: 'Drift Detection' },
              { value: '5', label: 'Frameworks Covered' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-3">About the Company</h2>
              <h3 className="text-2xl font-bold mb-4">MedAI Health</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  MedAI Health is a UK-based health-tech company that develops and deploys AI systems
                  across the healthcare spectrum. Their platform powers diagnostic assistance, patient
                  triage, treatment recommendations, and patient communication for 30 NHS trusts and
                  private healthcare providers.
                </p>
                <p>
                  With 50 active AI models in production — ranging from high-risk diagnostic systems
                  to limited-risk patient chatbots — MedAI faces one of the most complex compliance
                  landscapes in the health-tech sector.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <h4 className="font-semibold mb-4">Company Snapshot</h4>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Industry', value: 'Health-Tech / AI Diagnostics' },
                  { label: 'Location', value: 'Cambridge, United Kingdom' },
                  { label: 'Founded', value: '2019' },
                  { label: 'AI Systems', value: '50 models (high-risk & limited-risk)' },
                  { label: 'Clients', value: '30 NHS trusts + private providers' },
                  { label: 'Regulatory Exposure', value: 'EU AI Act, MHRA, GDPR, DORA' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Challenge</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              MedAI Health had achieved initial compliance for their flagship diagnostic model in 2025,
              but as the company scaled to 50 models, their annual compliance approach became untenable.
              Every August brought a &ldquo;compliance panic&rdquo; — a frantic month of manual audits, documentation
              updates, and evidence gathering.
            </p>
            <p>The core challenges were:</p>
            <ul className="space-y-2 ml-4">
              {[
                '50 AI models with different risk classifications across Annex III categories',
                'Models in constant evolution — retraining on new data every 2-4 weeks',
                'Manual compliance checks could not keep pace with model updates',
                'Compliance drift: models that were compliant at audit time would drift out of spec between audits',
                'Article 50 watermarking requirements for patient-facing chatbots and AI-generated reports',
                'Multiple overlapping frameworks: EU AI Act, MHRA (UK medical devices), GDPR, DORA',
                'Annual audit cost exceeding £200,000 with external consultants',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              The &ldquo;annual compliance panic&rdquo; model was unsustainable. MedAI needed continuous monitoring
              that could keep pace with their rapid model iteration cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Solution</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            MedAI selected SafetyOf.AI&apos;s Enterprise tier (£499/mo) for its continuous monitoring
            capabilities, multi-framework coverage, and dedicated compliance engineer support.
            Here&apos;s how the platform transformed their compliance operations:
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Enterprise MCP Fleet Deployment',
                description:
                  'SafetyOf.AI deployed a dedicated fleet of MCP servers integrated with MedAI\'s ML pipeline. Each of the 50 models was connected via automated discovery, enabling continuous evidence collection from training runs, validation datasets, model registries, and deployment endpoints.',
                icon: Server,
              },
              {
                step: '02',
                title: 'Multi-Framework Compliance Mapping',
                description:
                  'The platform\'s multi-framework engine mapped controls across EU AI Act, MHRA medical device regulations, GDPR Article 22, and DORA. Overlapping requirements were automatically cross-referenced, eliminating duplicate compliance work. A single control update propagated across all applicable frameworks.',
                icon: Globe,
              },
              {
                step: '03',
                title: 'Real-Time Compliance Drift Detection',
                description:
                  'MCP servers continuously monitor each model\'s performance metrics, data distributions, and output characteristics. When a model retrain introduces drift that could affect compliance — such as changes in demographic performance parity — the platform triggers an alert within minutes, not months.',
                icon: Activity,
              },
              {
                step: '04',
                title: 'Automated Article 50 Watermarking',
                description:
                  'For patient-facing chatbots and AI-generated clinical reports, SafetyOf.AI implemented automated Article 50 watermarking. Every AI-generated output is marked in a machine-readable format, with disclosure mechanisms for chatbot interactions — fully compliant with Article 50(1)-(4).',
                icon: Eye,
              },
              {
                step: '05',
                title: 'Continuous Attestation & Audit Trail',
                description:
                  'Instead of annual point-in-time attestations, MedAI now has continuous HMAC-SHA256 signed compliance evidence. Every model update, every drift alert, every remediation action is cryptographically logged. When auditors request evidence, MedAI can produce a complete, tamper-evident compliance history in minutes.',
                icon: Shield,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-mono text-purple-400">STEP {item.step}</span>
                  <h3 className="text-lg font-semibold mb-2 mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Results</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { metric: '50', label: 'AI models under continuous monitoring', icon: Server },
              { metric: 'Real-time', label: 'Compliance drift detection (minutes, not months)', icon: Activity },
              { metric: '5', label: 'Frameworks mapped with zero duplicate work', icon: Globe },
              { metric: '£499/mo', label: 'Platform cost (vs £200K+ annual consulting)', icon: TrendingUp },
              { metric: '100%', label: 'Article 50 watermarking coverage', icon: Eye },
              { metric: 'Minutes', label: 'Time to produce audit evidence', icon: Clock },
            ].map((r) => (
              <div key={r.label} className="rounded-xl bg-background border border-border p-5">
                <r.icon className="w-5 h-5 text-purple-400 mb-3" />
                <p className="text-2xl font-bold text-purple-400">{r.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The transformation was immediate. Within the first month, the platform detected 3 compliance
              drift incidents — model retrains that introduced performance disparities across demographic
              groups — that would have gone unnoticed under the annual audit approach.
            </p>
            <p>
              The multi-framework mapping eliminated an estimated 400 hours of duplicate compliance work
              per year. Controls that applied to both the EU AI Act and MHRA requirements were
              automatically cross-referenced, so a single evidence update satisfied both frameworks.
            </p>
            <p>
              Article 50 watermarking was deployed across all 12 patient-facing models in a single
              configuration step. Every AI-generated output — from triage recommendations to patient
              communication summaries — is now automatically marked and disclosed in compliance with
              Article 50(1)-(4).
            </p>
            <p>
              The annual cost dropped from £200,000+ in external consulting fees to £6,000/year for the
              SafetyOf.AI Enterprise subscription — a <strong className="text-foreground">97% reduction</strong> in compliance costs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-br from-purple-500/10 via-card to-brand-500/5 border border-purple-500/20 p-8 sm:p-12">
            <Quote className="w-10 h-10 text-purple-400/30 mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-bold leading-relaxed mb-6">
              We went from annual compliance panic to continuous compliance confidence.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-purple-400">MA</span>
              </div>
              <div>
                <p className="font-semibold">Chief Medical Officer, MedAI Health</p>
                <p className="text-sm text-muted-foreground">Cambridge, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Move from annual panic to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-brand-400 bg-clip-text text-transparent">
              continuous confidence
            </span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Enterprise monitoring for complex AI estates. Book a demo to see it in action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
            >
              Start Free Scan
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border font-semibold hover:bg-accent transition-colors"
            >
              Book Enterprise Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
