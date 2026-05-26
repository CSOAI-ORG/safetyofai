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
  Lock,
  Quote,
  Zap,
  Server,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ClearPath Lending — 48-Hour EU AI Act Compliance | SafetyOf.AI',
  description:
    'How a UK fintech achieved EU AI Act compliance for their AI credit scoring system in 48 hours, saving £55,000 compared to a Big 4 consultancy.',
  openGraph: {
    title: 'ClearPath Lending — 48-Hour EU AI Act Compliance',
    description:
      'How a UK fintech achieved EU AI Act compliance in 48 hours for £5,000 instead of £60,000.',
    url: 'https://safetyof.ai/case-studies/clearpath-lending',
    siteName: 'SafetyOf.AI',
    type: 'article',
  },
};

export default function ClearPathLendingCaseStudy() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How a UK Fintech Achieved EU AI Act Compliance in 48 Hours',
            description:
              'ClearPath Lending achieved full EU AI Act compliance for their AI credit scoring system in 48 hours using SafetyOf.AI.',
            author: { '@type': 'Organization', name: 'SafetyOf.AI', url: 'https://safetyof.ai' },
            publisher: { '@type': 'Organization', name: 'SafetyOf.AI', url: 'https://safetyof.ai' },
            datePublished: '2026-05-15',
            url: 'https://safetyof.ai/case-studies/clearpath-lending',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[128px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            &larr; All Case Studies
          </a>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <p className="font-semibold text-lg">ClearPath Lending</p>
              <p className="text-sm text-muted-foreground">Fintech &middot; United Kingdom</p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            How a UK Fintech Achieved{' '}
            <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
              EU AI Act Compliance in 48 Hours
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            ClearPath Lending needed to classify their AI credit scoring system under the EU AI Act
            before the August 2 deadline. SafetyOf.AI delivered full compliance in 48 hours.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-lg mt-10">
            {[
              { value: '48hrs', label: 'Time to Compliance' },
              { value: '£55K', label: 'Cost Savings' },
              { value: '218', label: 'MCP Servers' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-brand-400">{stat.value}</p>
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
              <h2 className="text-sm font-mono text-brand-400 uppercase tracking-wider mb-3">About the Company</h2>
              <h3 className="text-2xl font-bold mb-4">ClearPath Lending</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  ClearPath Lending is a UK-based fintech company that provides AI-powered credit scoring
                  and lending decisions for consumer and SME loans. Founded in 2021, they process over
                  15,000 loan applications per month using a proprietary machine learning model.
                </p>
                <p>
                  Their AI credit scoring system evaluates applicant risk based on traditional financial data
                  and alternative data sources, enabling faster and more inclusive lending decisions.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <h4 className="font-semibold mb-4">Company Snapshot</h4>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Industry', value: 'Fintech / Consumer Lending' },
                  { label: 'Location', value: 'London, United Kingdom' },
                  { label: 'Founded', value: '2021' },
                  { label: 'AI Systems', value: 'Credit scoring model (high-risk)' },
                  { label: 'Monthly Applications', value: '15,000+' },
                  { label: 'Regulatory Exposure', value: 'EU AI Act, FCA, GDPR' },
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
              In early 2026, ClearPath Lending&apos;s compliance team flagged a critical issue: their AI credit
              scoring system was almost certainly classified as <strong className="text-foreground">high-risk under Article 6 and Annex III</strong> of
              the EU AI Act. As a system used for determining access to essential financial services, it
              fell squarely within Category 5 (Access to Essential Services) of Annex III.
            </p>
            <p>
              The August 2, 2026 deadline was approaching fast. ClearPath needed to:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                'Formally classify the AI system under Article 6(2) and Annex III',
                'Complete Annex IV technical documentation',
                'Implement a risk management system per Article 9',
                'Establish data governance practices per Article 10',
                'Enable human oversight mechanisms per Article 14',
                'Prepare for a conformity assessment',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              ClearPath approached a Big 4 consultancy for help. The quote came back at{' '}
              <strong className="text-foreground">£60,000 with a 12-week timeline</strong>. With less than
              90 days until the deadline and a lean compliance team of two, this was both unaffordable
              and too slow.
            </p>
          </div>

          <div className="rounded-xl bg-background border border-red-500/20 p-6 mt-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Risk at Stake</h3>
                <p className="text-sm text-muted-foreground">
                  Non-compliance with high-risk AI system obligations carries penalties of up to{' '}
                  <strong className="text-foreground">€15,000,000 or 3% of global annual turnover</strong>.
                  For ClearPath, with £40M in annual revenue, this meant a potential fine of £1.2M+.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Solution</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            ClearPath discovered SafetyOf.AI through a LinkedIn post about the 48-hour compliance
            audit service. They booked an audit on a Monday morning. Here&apos;s what happened:
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'MCP Server Deployment (Hour 0-2)',
                description:
                  'SafetyOf.AI deployed 218 MCP servers to connect directly to ClearPath\'s AI infrastructure. The servers automatically discovered and catalogued the credit scoring model, its training data pipeline, decision endpoints, and logging systems.',
                icon: Server,
              },
              {
                step: '02',
                title: 'Automated Risk Classification (Hour 2-6)',
                description:
                  'The platform\'s Article 6 classification engine analysed the system\'s intended purpose, output usage, and affected domains. It confirmed high-risk classification under Annex III, Category 5 (access to essential services — creditworthiness evaluation).',
                icon: Shield,
              },
              {
                step: '03',
                title: '42-Point Compliance Check (Hour 6-24)',
                description:
                  'A systematic audit against Articles 9-15 covering risk management, data governance, technical documentation, record-keeping, transparency, human oversight, and accuracy/robustness. Each control was evaluated with evidence from the MCP servers.',
                icon: FileText,
              },
              {
                step: '04',
                title: 'Gap Report & Remediation Roadmap (Hour 24-36)',
                description:
                  'ClearPath received a detailed gap report identifying 8 non-compliance areas with prioritised remediation steps. Each gap included specific guidance mapped to the relevant EU AI Act article, with implementation templates.',
                icon: TrendingUp,
              },
              {
                step: '05',
                title: 'Annex IV Documentation & Attestation (Hour 36-48)',
                description:
                  'SafetyOf.AI auto-generated Annex IV technical documentation covering system purpose, design methodology, validation data, and risk mitigations. Every document was HMAC-SHA256 signed for tamper-evident verification by regulators.',
                icon: Lock,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-brand-400">STEP {item.step}</span>
                    <span className="text-xs font-mono text-muted-foreground">Hour {item.step === '01' ? '0-2' : item.step === '02' ? '2-6' : item.step === '03' ? '6-24' : item.step === '04' ? '24-36' : '36-48'}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
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
              { metric: '48 hours', label: 'Total time from scan to attestation', icon: Clock },
              { metric: '£5,000', label: 'Total cost (vs £60,000 Big 4 quote)', icon: TrendingUp },
              { metric: '218', label: 'MCP servers deployed automatically', icon: Server },
              { metric: 'Full', label: 'Article 6 classification completed', icon: Shield },
              { metric: 'Annex IV', label: 'Documentation auto-generated', icon: FileText },
              { metric: 'HMAC-SHA256', label: 'Cryptographically signed attestation', icon: Lock },
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
              ClearPath Lending received a complete compliance package including: formal Article 6(2)
              risk classification, Annex IV technical documentation, a prioritised remediation roadmap
              for 8 identified gaps, and HMAC-SHA256 signed attestations for every compliance artifact.
            </p>
            <p>
              The compliance team used the remediation roadmap to address the remaining gaps over the
              following 3 weeks, bringing the total compliance timeline to just under 1 month — compared
              to the 12 weeks quoted by the Big 4 consultancy.
            </p>
            <p>
              The HMAC-signed attestations provided ClearPath with tamper-evident compliance evidence
              that their regulators could independently verify, giving them confidence in the audit
              integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-br from-brand-500/10 via-card to-safety-500/5 border border-brand-500/20 p-8 sm:p-12">
            <Quote className="w-10 h-10 text-brand-400/30 mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-bold leading-relaxed mb-6">
              SafetyOf.AI delivered what our Big 4 consultancy quoted £60K for — in 48 hours, for £5K.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-brand-400">CL</span>
              </div>
              <div>
                <p className="font-semibold">CTO, ClearPath Lending</p>
                <p className="text-sm text-muted-foreground">London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get your AI system{' '}
            <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
              classified in 48 hours
            </span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with a free compliance scan. No credit card required.
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
