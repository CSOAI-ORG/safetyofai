import type { Metadata } from 'next';
import { Shield, ArrowRight, Building2, Clock, TrendingUp, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies — SafetyOf.AI',
  description:
    'See how organisations across fintech, HR-tech, and health-tech achieved EU AI Act compliance with SafetyOf.AI. Real results in 48 hours.',
  openGraph: {
    title: 'Case Studies — SafetyOf.AI',
    description:
      'See how organisations achieved EU AI Act compliance with SafetyOf.AI. Real results in 48 hours.',
    url: 'https://safetyof.ai/case-studies',
    siteName: 'SafetyOf.AI',
    type: 'website',
  },
};

const caseStudies = [
  {
    slug: 'clearpath-lending',
    company: 'ClearPath Lending',
    industry: 'Fintech',
    location: 'United Kingdom',
    headline: 'How a UK Fintech Achieved EU AI Act Compliance in 48 Hours',
    summary:
      'ClearPath Lending needed to classify their AI credit scoring system under the EU AI Act before the August 2 deadline. SafetyOf.AI delivered a full Article 6 classification, Annex IV documentation, and HMAC-signed attestation in 48 hours — for £5,000 instead of the £60,000 quoted by a Big 4 consultancy.',
    quote:
      'SafetyOf.AI delivered what our Big 4 consultancy quoted £60K for — in 48 hours, for £5K.',
    quoteAuthor: 'CTO, ClearPath Lending',
    metrics: [
      { label: 'Time to Compliance', value: '48 hours' },
      { label: 'Cost Savings', value: '£55,000' },
      { label: 'MCP Servers Used', value: '218' },
    ],
    color: 'blue',
  },
  {
    slug: 'talentflow',
    company: 'TalentFlow GmbH',
    industry: 'HR-Tech',
    location: 'Germany',
    headline: 'From Zero to Compliant: A German HR-Tech Startup\'s Journey',
    summary:
      'TalentFlow\'s CV-screening AI was classified as high-risk under Annex III. Starting from a free compliance scan, they progressed through a Pro subscription to a full audit — identifying 12 compliance gaps and remediating them in 2 weeks to pass their conformity assessment.',
    quote: 'The MCP servers gave us a compliance roadmap our lawyers couldn\'t.',
    quoteAuthor: 'Head of Product, TalentFlow GmbH',
    metrics: [
      { label: 'Compliance Gaps Found', value: '12' },
      { label: 'Remediation Time', value: '2 weeks' },
      { label: 'Conformity Assessment', value: 'Passed' },
    ],
    color: 'green',
  },
  {
    slug: 'medai-health',
    company: 'MedAI Health',
    industry: 'Health-Tech',
    location: 'United Kingdom',
    headline: 'Continuous Compliance: How a Health-Tech Company Monitors 50 AI Models',
    summary:
      'MedAI Health operates 50 AI models across diagnostics, triage, and patient communication. With SafetyOf.AI\'s Enterprise tier, they moved from annual compliance panic to continuous monitoring with real-time compliance drift detection and automated Article 50 watermarking.',
    quote:
      'We went from annual compliance panic to continuous compliance confidence.',
    quoteAuthor: 'Chief Medical Officer, MedAI Health',
    metrics: [
      { label: 'AI Models Monitored', value: '50' },
      { label: 'Compliance Drift Detection', value: 'Real-time' },
      { label: 'Frameworks Covered', value: '5' },
    ],
    color: 'purple',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium mb-8">
              <Shield className="w-3.5 h-3.5" />
              Customer Success Stories
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">Proven Results.</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Real Compliance.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              See how organisations across fintech, HR-tech, and health-tech achieved
              EU AI Act compliance with SafetyOf.AI.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <a
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block rounded-2xl bg-card border border-border hover:border-brand-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left: Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            cs.color === 'blue'
                              ? 'bg-brand-500/10 text-brand-400'
                              : cs.color === 'green'
                              ? 'bg-safety-500/10 text-safety-400'
                              : 'bg-purple-500/10 text-purple-400'
                          }`}
                        >
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{cs.company}</p>
                          <p className="text-xs text-muted-foreground">
                            {cs.industry} &middot; {cs.location}
                          </p>
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-brand-400 transition-colors">
                        {cs.headline}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {cs.summary}
                      </p>

                      <div className="flex items-start gap-3 rounded-xl bg-background border border-border p-5">
                        <Quote className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm italic text-foreground leading-relaxed">
                            &ldquo;{cs.quote}&rdquo;
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">&mdash; {cs.quoteAuthor}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Metrics */}
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="space-y-4">
                        {cs.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl bg-background border border-border p-4"
                          >
                            <p className="text-2xl font-bold text-brand-400">{m.value}</p>
                            <p className="text-xs text-muted-foreground">{m.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-400 group-hover:gap-3 transition-all">
                        Read full case study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to write your own{' '}
            <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
              success story?
            </span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with a free compliance scan. No credit card required. Results in seconds.
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
              Book Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
