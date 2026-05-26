import type { Metadata } from 'next';
import {
  Shield,
  ArrowRight,
  Building2,
  Clock,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Quote,
  Zap,
  Scan,
  Target,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'TalentFlow GmbH — From Zero to Compliant | SafetyOf.AI',
  description:
    'How a German HR-tech startup identified 12 compliance gaps in their CV-screening AI and achieved EU AI Act conformity in 2 weeks.',
  openGraph: {
    title: 'TalentFlow GmbH — From Zero to Compliant',
    description:
      'How a German HR-tech startup went from zero compliance to passing their conformity assessment in 2 weeks.',
    url: 'https://safetyof.ai/case-studies/talentflow',
    siteName: 'SafetyOf.AI',
    type: 'article',
  },
};

export default function TalentFlowCaseStudy() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'From Zero to Compliant: A German HR-Tech Startup\'s Journey',
            description:
              'TalentFlow GmbH identified 12 compliance gaps in their CV-screening AI and achieved EU AI Act conformity in 2 weeks with SafetyOf.AI.',
            author: { '@type': 'Organization', name: 'SafetyOf.AI', url: 'https://safetyof.ai' },
            publisher: { '@type': 'Organization', name: 'SafetyOf.AI', url: 'https://safetyof.ai' },
            datePublished: '2026-05-15',
            url: 'https://safetyof.ai/case-studies/talentflow',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-safety-500/10 rounded-full blur-[128px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            &larr; All Case Studies
          </a>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-safety-500/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-safety-400" />
            </div>
            <div>
              <p className="font-semibold text-lg">TalentFlow GmbH</p>
              <p className="text-sm text-muted-foreground">HR-Tech &middot; Germany</p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            From Zero to Compliant:{' '}
            <span className="bg-gradient-to-r from-safety-400 to-brand-400 bg-clip-text text-transparent">
              A German HR-Tech Startup&apos;s Journey
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            TalentFlow&apos;s CV-screening AI was classified as high-risk under Annex III. Starting from a
            free scan, they identified 12 gaps and passed their conformity assessment in 2 weeks.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-lg mt-10">
            {[
              { value: '12', label: 'Gaps Identified' },
              { value: '2 weeks', label: 'Remediation' },
              { value: 'Passed', label: 'Conformity Assessment' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-safety-400">{stat.value}</p>
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
              <h2 className="text-sm font-mono text-safety-400 uppercase tracking-wider mb-3">About the Company</h2>
              <h3 className="text-2xl font-bold mb-4">TalentFlow GmbH</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  TalentFlow GmbH is a Berlin-based HR-tech startup that provides AI-powered CV screening
                  and candidate matching for mid-market employers across the DACH region. Their platform
                  processes over 50,000 applications per month for 120 enterprise clients.
                </p>
                <p>
                  Their core AI system uses natural language processing and machine learning to evaluate
                  CVs, score candidates against job requirements, and recommend shortlists to hiring managers.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <h4 className="font-semibold mb-4">Company Snapshot</h4>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Industry', value: 'HR-Tech / Recruitment' },
                  { label: 'Location', value: 'Berlin, Germany' },
                  { label: 'Founded', value: '2023' },
                  { label: 'AI Systems', value: 'CV screening & matching (high-risk)' },
                  { label: 'Monthly Applications', value: '50,000+' },
                  { label: 'Regulatory Exposure', value: 'EU AI Act, GDPR, AGG' },
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
              As a startup with limited compliance resources, TalentFlow had been focused on product
              development and growth. When their legal counsel reviewed the EU AI Act in early 2026,
              the reality hit hard: their CV-screening AI was{' '}
              <strong className="text-foreground">unequivocally high-risk under Annex III, Category 4
              (Employment, Workers Management, and Access to Self-Employment)</strong>.
            </p>
            <p>
              The startup had no existing compliance infrastructure — no risk management system, no
              technical documentation per Annex IV, no data governance framework, and no human oversight
              mechanisms. They were starting from zero.
            </p>
            <p>The specific challenges were:</p>
            <ul className="space-y-2 ml-4">
              {[
                'No formal AI system inventory or risk classification',
                'Training data provenance and bias documentation was absent',
                'No risk management system as required by Article 9',
                'Candidate-facing transparency disclosures were missing',
                'Human oversight mechanisms were informal and undocumented',
                'Limited budget — typical consulting fees exceeded their annual compliance budget',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Solution</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            TalentFlow started with SafetyOf.AI&apos;s free tier — 3 compliance scans per day with a basic
            risk score. Within minutes, they had their first data point. Here&apos;s the journey:
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Free Compliance Scan (Day 1)',
                description:
                  'TalentFlow ran their first free scan on a Monday morning. Within 60 seconds, the platform confirmed high-risk classification under Annex III Category 4 and provided a basic compliance score of 23/100 — indicating significant gaps.',
                icon: Scan,
              },
              {
                step: '02',
                title: 'Pro Subscription & Deep Scan (Day 1-3)',
                description:
                  'Convinced by the initial results, TalentFlow upgraded to Pro (£99/mo) for unlimited scans and full audit reports. The deep scan ran 42 compliance checks across Articles 9-15 and generated a detailed gap analysis with remediation guidance.',
                icon: Target,
              },
              {
                step: '03',
                title: 'Gap Identification (Day 3-5)',
                description:
                  'The full audit identified 12 specific compliance gaps: 3 critical (risk management, data governance, transparency), 5 major (documentation, logging, human oversight, accuracy metrics, bias testing), and 4 minor (formatting, metadata, registration prep, incident response).',
                icon: FileText,
              },
              {
                step: '04',
                title: 'Remediation Sprint (Week 1-2)',
                description:
                  'Using SafetyOf.AI\'s remediation roadmap and MCP tool templates, TalentFlow\'s engineering team addressed all 12 gaps in a focused 2-week sprint. The platform provided implementation templates for risk management documentation, data governance policies, and human oversight procedures.',
                icon: Users,
              },
              {
                step: '05',
                title: 'Conformity Assessment (Week 2)',
                description:
                  'With all gaps remediated, TalentFlow ran a final compliance scan achieving a score of 94/100. They used the SafetyOf.AI-generated Annex IV documentation and HMAC-signed attestations as evidence for their internal conformity assessment, which they passed.',
                icon: CheckCircle2,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-mono text-safety-400">STEP {item.step}</span>
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
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Results</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { metric: '12', label: 'Compliance gaps identified and remediated', icon: Target },
              { metric: '2 weeks', label: 'From first scan to conformity assessment pass', icon: Clock },
              { metric: '23 → 94', label: 'Compliance score improvement (out of 100)', icon: TrendingUp },
              { metric: '£99/mo', label: 'Total platform cost (Pro subscription)', icon: Shield },
              { metric: 'Passed', label: 'Internal conformity assessment', icon: CheckCircle2 },
              { metric: 'Annex III Cat. 4', label: 'Full classification completed', icon: FileText },
            ].map((r) => (
              <div key={r.label} className="rounded-xl bg-background border border-border p-5">
                <r.icon className="w-5 h-5 text-safety-400 mb-3" />
                <p className="text-2xl font-bold text-safety-400">{r.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              TalentFlow went from zero compliance infrastructure to passing their conformity assessment
              in just 2 weeks — a timeline that would have been impossible with traditional consulting
              approaches.
            </p>
            <p>
              The MCP servers provided automated evidence collection that made the remediation process
              significantly faster. Rather than manually documenting each control, the engineering team
              could focus on implementing fixes while SafetyOf.AI handled the compliance documentation.
            </p>
            <p>
              The total cost of compliance — £99/month Pro subscription plus 2 weeks of engineering
              time — was a fraction of the €30,000-50,000 that compliance consultancies quoted for
              similar HR-tech companies.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-br from-safety-500/10 via-card to-brand-500/5 border border-safety-500/20 p-8 sm:p-12">
            <Quote className="w-10 h-10 text-safety-400/30 mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-bold leading-relaxed mb-6">
              The MCP servers gave us a compliance roadmap our lawyers couldn&apos;t.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-safety-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-safety-400">TF</span>
              </div>
              <div>
                <p className="font-semibold">Head of Product, TalentFlow GmbH</p>
                <p className="text-sm text-muted-foreground">Berlin, Germany</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start your compliance journey{' '}
            <span className="bg-gradient-to-r from-safety-400 to-brand-400 bg-clip-text text-transparent">
              with a free scan
            </span>
          </h2>
          <p className="text-muted-foreground mb-8">
            No credit card required. 3 scans per day. Results in seconds.
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
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
