import {
  Shield,
  Scan,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Clock,
  FileText,
  Server,
  Globe,
  CreditCard,
  ArrowRight,
} from 'lucide-react';
import { CountdownSection, FAQSection } from './HomeClient';

const faqs = [
  {
    q: 'What is the EU AI Act and who does it affect?',
    a: 'The EU AI Act is the world\'s first comprehensive AI regulation. It applies to any organization that develops, deploys, or uses AI systems within the EU market — including companies based outside the EU that serve EU customers. High-risk AI systems face the strictest requirements, including conformity assessments, risk management systems, and technical documentation.',
  },
  {
    q: 'How long does a compliance audit take?',
    a: 'Our initial gap analysis takes 48 hours from scan completion. You receive a detailed report identifying non-compliance areas, risk classifications under Article 6 and Annex III, and a prioritized remediation roadmap. Full audits with attestations typically complete within 2-4 weeks depending on system complexity.',
  },
  {
    q: 'What frameworks does SafetyOf.AI cover?',
    a: 'We cover the EU AI Act (all titles and annexes), DORA (Digital Operational Resilience Act for financial entities), NIS2 (Network and Information Security Directive), ISO 42001 (AI Management System), and GDPR Article 22 (automated decision-making). Our multi-framework engine maps controls across regulations to eliminate duplicate work.',
  },
  {
    q: 'What are HMAC-SHA256 signed attestations?',
    a: 'Every compliance report and audit artifact we generate is cryptographically signed using HMAC-SHA256. This creates a tamper-evident record that proves the integrity of your compliance evidence. Regulators and auditors can independently verify that documents haven\'t been altered after issuance.',
  },
  {
    q: 'What are MCP servers and how do they help with compliance?',
    a: 'MCP (Model Context Protocol) servers are standardized interfaces that connect AI systems to compliance tooling. Our 218 MCP servers automate evidence collection, policy enforcement, and monitoring across your AI stack. They continuously gather compliance data from your systems without manual intervention.',
  },
  {
    q: 'Can I try SafetyOf.AI before committing to a paid plan?',
    a: 'Yes. Our free tier includes 3 compliance scans per day with a basic risk score, no credit card required. You can run scans immediately and see results in seconds. Upgrade to Pro (£99/mo) for unlimited scans, full audit reports, and MCP tool access, or Enterprise (£499/mo) for complete audit trails and dedicated support.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#09090b] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SafetyOf.AI',
              url: 'https://safetyof.ai',
              logo: 'https://safetyof.ai/logo.png',
              description:
                'EU AI Act compliance platform. 48-hour audits, continuous monitoring, and cryptographic attestations.',
              sameAs: [
                'https://github.com/safetyofai',
                'https://linkedin.com/company/safetyofai',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'contact@safetyof.ai',
                url: 'https://safetyof.ai/contact',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'SafetyOf.AI Compliance Platform',
              description:
                '48-hour compliance audits, continuous monitoring, and cryptographic attestations for EU AI Act, DORA, NIS2, and ISO 42001.',
              brand: { '@type': 'Organization', name: 'SafetyOf.AI' },
              offers: [
                {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'GBP',
                  name: 'Free Tier',
                  description: '3 scans/day, basic risk score',
                },
                {
                  '@type': 'Offer',
                  price: '99',
                  priceCurrency: 'GBP',
                  name: 'Pro',
                  description: 'Unlimited scans, audit reports, MCP tools',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '99',
                    priceCurrency: 'GBP',
                    billingDuration: 'P1M',
                  },
                },
                {
                  '@type': 'Offer',
                  price: '499',
                  priceCurrency: 'GBP',
                  name: 'Enterprise',
                  description: 'Full audit trails, custom frameworks, dedicated support',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '499',
                    priceCurrency: 'GBP',
                    billingDuration: 'P1M',
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* ─── Hero ─── */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 sm:pt-32 sm:pb-40">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-white/70">
                EU AI Act Deadline:{' '}
                <span className="text-amber-400 font-semibold font-mono">August 2, 2026</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Prove Your AI Is Safe.
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Before Regulators Ask.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              48-hour compliance audits, continuous monitoring, and cryptographic attestations for
              EU AI Act, DORA, NIS2, and ISO 42001.{' '}
              <span className="text-white/80 font-medium">From £5,000.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/dashboard"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Scan className="w-5 h-5" />
                Start Free Scan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Book Audit
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-10 text-sm text-white/40">
              <span className="flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                218 MCP Servers
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                410 Articles Indexed
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                HMAC-SHA256 Signed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Social Proof ─── */}
      <section id="trust" className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/30 uppercase tracking-widest mb-8">
            The AI governance platform
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { stat: '273+', label: 'MCP Servers' },
              { stat: '25', label: '.ai Domains' },
              { stat: '9', label: 'Framework Coverage' },
              { stat: '48h', label: 'Audit Turnaround' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center h-20 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {item.stat}
                </span>
                <span className="text-xs text-white/30 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem Section ─── */}
      <section id="problem" className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
              The Compliance Gap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              The Cost of Non-Compliance{' '}
              <span className="text-red-400">Is Existential</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              The EU AI Act enforcement date is approaching. Organizations without compliant AI
              systems face severe penalties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CreditCard,
                stat: '€35M',
                title: 'Maximum fines for non-compliance',
                desc: 'Or 7% of global annual turnover — whichever is higher. The steepest regulatory penalty outside GDPR.',
                color: 'red',
              },
              {
                icon: Clock,
                stat: '80 days',
                title: 'Until the deadline',
                desc: 'August 2, 2026 marks the end of the transition period. High-risk AI systems must be compliant on day one.',
                color: 'amber',
              },
              {
                icon: AlertTriangle,
                stat: '6+ months',
                title: 'Manual audits take forever',
                desc: 'Traditional compliance consultancies charge £50k+ and deliver in 6-12 months. You don\'t have that time.',
                color: 'orange',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      card.color === 'red'
                        ? 'bg-red-500/10 text-red-400'
                        : card.color === 'amber'
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-orange-500/10 text-orange-400'
                    }`}
                  >
                    <card.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-2xl font-bold font-mono ${
                      card.color === 'red'
                        ? 'text-red-400'
                        : card.color === 'amber'
                          ? 'text-amber-400'
                          : 'text-orange-400'
                    }`}
                  >
                    {card.stat}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Solution: How It Works ─── */}
      <section id="how-it-works" className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              How SafetyOf.AI Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              From Scan to Attestation{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                in 48 Hours
              </span>
            </h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Connection lines (desktop only) */}
            <div className="hidden md:block absolute top-16 left-[calc(33.33%-8px)] w-[calc(33.33%+16px)] h-px">
              <div className="w-full h-full bg-gradient-to-r from-blue-500/50 to-cyan-500/50 animate-pulse" />
            </div>
            <div className="hidden md:block absolute top-16 left-[calc(66.66%-8px)] w-[calc(33.33%+16px)] h-px">
              <div className="w-full h-full bg-gradient-to-r from-cyan-500/50 to-blue-500/50 animate-pulse" />
            </div>

            {[
              {
                step: '01',
                icon: Scan,
                title: 'Scan',
                desc: 'Connect your AI systems via our MCP servers or upload documentation. We classify risk under Article 6 and Annex III automatically.',
              },
              {
                step: '02',
                icon: FileText,
                title: 'Audit',
                desc: 'Run a 42-point compliance check across Articles 9-15. Generate Annex IV documentation and identify every gap with remediation guidance.',
              },
              {
                step: '03',
                icon: Shield,
                title: 'Monitor',
                desc: 'Continuous compliance monitoring with HMAC-SHA256 signed attestations. Get alerted before drift becomes a violation.',
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <span className="text-xs font-mono text-blue-400 tracking-wider">
                  STEP {item.step}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section id="features" className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Stay Compliant
              </span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Purpose-built for the EU AI Act. Covers every article, every annex, every
              requirement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: AlertTriangle,
                title: 'AI Risk Classification',
                desc: 'Automated classification under Article 6 and Annex III. Identify whether your AI systems are prohibited, high-risk, limited, or minimal risk.',
                tag: 'Art. 6 / Annex III',
              },
              {
                icon: CheckCircle2,
                title: '42-Point Compliance Check',
                desc: 'Systematic verification across Articles 9-15 covering risk management, data governance, transparency, human oversight, and accuracy.',
                tag: 'Art. 9-15',
              },
              {
                icon: FileText,
                title: 'Annex IV Documentation',
                desc: 'Auto-generated technical documentation that meets Annex IV requirements. Purpose, design, testing data, and risk mitigations — all formatted for regulators.',
                tag: 'Annex IV',
              },
              {
                icon: Lock,
                title: 'HMAC-SHA256 Attestations',
                desc: 'Every compliance artifact is cryptographically signed. Tamper-evident records that regulators and auditors can independently verify.',
                tag: 'Cryptographic',
              },
              {
                icon: Server,
                title: '218 MCP Servers',
                desc: 'Automated compliance infrastructure connecting directly to your AI stack. Continuous evidence collection without manual intervention.',
                tag: 'Automation',
              },
              {
                icon: Globe,
                title: 'Multi-Framework Coverage',
                desc: 'EU AI Act, DORA, NIS2, ISO 42001, and GDPR — mapped and cross-referenced. One compliance engine, five frameworks, zero duplicate work.',
                tag: '5 Frameworks',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/60 bg-cyan-400/5 px-2 py-1 rounded-full">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Start Free.{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Scale When Ready.
              </span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              No credit card required for the free tier. Upgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '£0',
                period: '',
                desc: 'For individuals exploring AI compliance.',
                features: [
                  '3 compliance scans / day',
                  'Basic risk score',
                  'Article 6 classification',
                  'Community support',
                ],
                cta: 'Start Scanning',
                popular: false,
              },
              {
                name: 'Pro',
                price: '£99',
                period: '/mo',
                desc: 'For teams building compliant AI products.',
                features: [
                  'Unlimited compliance scans',
                  'Full audit reports (Art. 9-15)',
                  'Annex IV documentation generator',
                  '218 MCP server access',
                  'HMAC-SHA256 attestations',
                  'Priority support',
                ],
                cta: 'Start Free Trial',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '£499',
                period: '/mo',
                desc: 'For organizations with complex compliance needs.',
                features: [
                  'Everything in Pro',
                  'Full audit trails & evidence packs',
                  'Custom framework mapping',
                  'DORA + NIS2 + ISO 42001 + GDPR',
                  'Dedicated compliance engineer',
                  'SSO & RBAC',
                  'SLA-backed uptime',
                ],
                cta: 'Contact Sales',
                popular: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 backdrop-blur-sm ${
                  tier.popular
                    ? 'bg-gradient-to-b from-blue-600/10 to-cyan-500/5 border-2 border-blue-500/30 shadow-lg shadow-blue-500/10'
                    : 'bg-white/[0.03] border border-white/[0.06]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <p className="text-xs text-white/30 mt-1">{tier.desc}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-white/30 text-sm ml-1">{tier.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.name === 'Enterprise' ? '/contact' : '/dashboard'}
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountdownSection />

      <FAQSection faqs={faqs} />

      {/* ─── Final CTA ─── */}
      <section id="cta" className="relative py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to prove your
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              AI is safe?
            </span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto">
            3 free scans per day. No credit card required. Results in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/dashboard"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Start Free Scan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Book Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
