import type { Metadata } from 'next';
import { Shield, Check, X, Clock, DollarSign, Server, Brain, ArrowRight, Zap, Globe, Scale, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SafetyOf.AI vs Drata — EU AI Act Compliance Comparison',
  description: 'Compare SafetyOf.AI and Drata for AI compliance. SafetyOf.AI covers EU AI Act, DORA, NIS2, and ISO 42001 with MCP servers and transparent pricing. Drata focuses on SOC 2 continuous monitoring.',
  keywords: ['SafetyOf.AI vs Drata', 'Drata alternative', 'EU AI Act compliance', 'Agentic Trust alternative', 'AI compliance platform', 'MCP compliance'],
  openGraph: {
    title: 'SafetyOf.AI vs Drata — EU AI Act Compliance Comparison',
    description: 'SafetyOf.AI: EU AI Act + DORA + NIS2 + ISO 42001, free tier, MCP servers. Drata: SOC 2 continuous monitoring, enterprise contracts only.',
    url: 'https://safetyof.ai/vs-drata',
    siteName: 'SafetyOf.AI',
    type: 'website',
    images: [
      {
        url: 'https://safetyof.ai/og-vs-drata.png',
        width: 1200,
        height: 630,
        alt: 'SafetyOf.AI vs Drata — EU AI Act Compliance Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafetyOf.AI vs Drata — EU AI Act Compliance',
    description: 'EU AI Act + DORA + NIS2 vs SOC 2 continuous monitoring. See why SafetyOf.AI wins for EU compliance.',
    images: ['https://safetyof.ai/og-vs-drata.png'],
  },
};

const COMPARISON_FEATURES = [
  {
    category: 'Regulatory Coverage',
    features: [
      { name: 'EU AI Act (Regulation 2024/1689)', soai: true, drata: false, note: 'SafetyOf.AI is purpose-built for EU AI Act' },
      { name: 'SOC 2 Type II', soai: false, drata: true, note: 'Drata excels at continuous SOC 2 monitoring' },
      { name: 'ISO 27001', soai: true, drata: true, note: 'Both support ISO 27001' },
      { name: 'DORA (Digital Operational Resilience Act)', soai: true, drata: false, note: 'EU financial sector regulation' },
      { name: 'NIS2 Directive', soai: true, drata: false, note: 'EU cybersecurity directive' },
      { name: 'ISO 42001 (AI Management System)', soai: true, drata: false, note: 'AI-specific management standard' },
      { name: 'GDPR', soai: true, drata: true, note: 'Both address GDPR requirements' },
    ],
  },
  {
    category: 'AI-Native Capabilities',
    features: [
      { name: 'MCP (Model Context Protocol) servers', soai: true, drata: false, note: '218 MCP servers for automated compliance' },
      { name: 'A2A agent coordination', soai: true, drata: false, note: 'Multi-agent compliance workflows' },
      { name: 'HMAC-signed attestations', soai: true, drata: false, note: 'Cryptographic compliance proofs' },
      { name: 'AI risk classification engine', soai: true, drata: false, note: 'Automated EU AI Act risk scoring' },
      { name: 'Agentic automation', soai: true, drata: true, note: 'Drata markets "Agentic Trust" for SOC 2' },
      { name: 'Continuous compliance monitoring', soai: true, drata: true, note: 'Both provide ongoing monitoring' },
    ],
  },
  {
    category: 'Access & Pricing',
    features: [
      { name: 'Free tier available', soai: true, drata: false, note: 'SafetyOf.AI: 3 scans/day, no credit card' },
      { name: 'Public pricing', soai: true, drata: false, note: 'SafetyOf.AI: £99/mo. Drata: enterprise quotes only' },
      { name: 'Self-service onboarding', soai: true, drata: false, note: 'No sales call required with SafetyOf.AI' },
      { name: 'Gap analysis in 48 hours', soai: true, drata: false, note: 'Fast turnaround vs weeks-long process' },
      { name: 'Audit-ready reports', soai: true, drata: true, note: 'Both generate compliance documentation' },
      { name: 'Evidence collection', soai: true, drata: true, note: 'Automated evidence gathering' },
    ],
  },
];

export default function VsDrataPage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'SafetyOf.AI vs Drata — EU AI Act Compliance Comparison',
            description: 'Compare SafetyOf.AI and Drata for EU AI Act compliance. SafetyOf.AI covers EU AI Act, DORA, NIS2, and ISO 42001 with MCP servers and transparent pricing.',
            url: 'https://safetyof.ai/vs-drata',
            mainEntity: {
              '@type': 'Product',
              name: 'SafetyOf.AI',
              description: 'EU AI Act, DORA, NIS2, and ISO 42001 compliance platform with MCP servers',
              url: 'https://safetyof.ai',
              brand: {
                '@type': 'Organization',
                name: 'SafetyOf.AI',
              },
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Free',
                  price: '0',
                  priceCurrency: 'GBP',
                  availability: 'https://schema.org/InStock',
                },
                {
                  '@type': 'Offer',
                  name: 'Pro',
                  price: '99',
                  priceCurrency: 'GBP',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '99',
                    priceCurrency: 'GBP',
                    billingDuration: 'P1M',
                  },
                  availability: 'https://schema.org/InStock',
                },
                {
                  '@type': 'Offer',
                  name: 'Enterprise',
                  price: '499',
                  priceCurrency: 'GBP',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '499',
                    priceCurrency: 'GBP',
                    billingDuration: 'P1M',
                  },
                  availability: 'https://schema.org/InStock',
                },
              ],
            },
            about: [
              {
                '@type': 'Product',
                name: 'Drata',
                description: 'Agentic Trust platform for SOC 2 continuous compliance monitoring',
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
              <Scale className="w-3.5 h-3.5" />
              Platform Comparison
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">SafetyOf.AI</span>
              <span className="text-muted-foreground mx-4">vs</span>
              <span className="text-foreground">Drata</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Drata&apos;s &quot;Agentic Trust&quot; is powerful for SOC 2 continuous monitoring — but it doesn&apos;t cover the <strong className="text-foreground">EU AI Act</strong>.
              SafetyOf.AI is built for EU AI Act, DORA, NIS2, and ISO 42001 with an open MCP ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25">
                <Shield className="w-5 h-5" />
                Start Free Compliance Scan
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/compliance" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors">
                View EU AI Act Coverage
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Box */}
      <section className="py-12 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-card border border-brand-500/20 p-8">
            <h2 className="text-xl font-bold mb-6 text-center">The Bottom Line</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-brand-400 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Choose SafetyOf.AI if you need:
                </h3>
                <ul className="space-y-2">
                  {[
                    'EU AI Act compliance (Regulation 2024/1689)',
                    'DORA compliance for financial services',
                    'NIS2 Directive coverage',
                    'ISO 42001 AI management system',
                    'MCP servers for AI-native compliance',
                    'Transparent pricing with a free tier',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Choose Drata if you need:
                </h3>
                <ul className="space-y-2">
                  {[
                    'Best-in-class SOC 2 continuous monitoring',
                    'Deep automated evidence collection for SOC 2',
                    'ISO 27001 with Drata\'s integration ecosystem',
                    'Enterprise-grade sales and onboarding',
                    'US compliance automation at scale',
                    'Large integration marketplace',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why SafetyOf.AI Covers <span className="text-brand-400">EU Compliance</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Drata&apos;s &quot;Agentic Trust&quot; is innovative for SOC 2, but EU AI Act requires a different approach entirely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Globe,
                title: 'EU AI Act + DORA + NIS2 + ISO 42001',
                description: 'SafetyOf.AI covers four EU frameworks that Drata doesn\'t: the EU AI Act (Regulation 2024/1689), DORA for financial services, NIS2 for cybersecurity, and ISO 42001 for AI management systems.',
                accent: 'brand',
              },
              {
                icon: Server,
                title: 'Open MCP Ecosystem',
                description: 'SafetyOf.AI provides 218 MCP (Model Context Protocol) servers for automated compliance workflows. Drata has no MCP ecosystem — its automation is internal and proprietary.',
                accent: 'safety',
              },
              {
                icon: DollarSign,
                title: 'Transparent Pricing, Free Tier',
                description: 'SafetyOf.AI starts at £0 (free tier) with transparent pricing up to £499/mo for enterprise. Drata requires enterprise contracts with no public pricing — you must go through sales.',
                accent: 'brand',
              },
              {
                icon: Brain,
                title: 'AI Risk Classification Engine',
                description: 'Automated risk classification per EU AI Act categories (unacceptable, high, limited, minimal). Drata\'s risk engine is designed for SOC 2 controls, not AI-specific regulatory risk.',
                accent: 'safety',
              },
              {
                icon: Activity,
                title: 'HMAC-Signed Attestations',
                description: 'Every compliance attestation is cryptographically signed with HMAC, providing tamper-proof evidence for regulators. Drata uses standard compliance reports without cryptographic verification.',
                accent: 'brand',
              },
              {
                icon: Clock,
                title: '48-Hour Gap Analysis',
                description: 'Get your EU AI Act gap analysis in 48 hours. Drata\'s onboarding process requires enterprise sales cycles and typically takes weeks to fully implement.',
                accent: 'safety',
              },
            ].map((card) => (
              <div key={card.title} className="group relative rounded-2xl bg-card border border-border p-8 hover:border-brand-500/30 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.accent === 'brand' ? 'bg-brand-500/10 text-brand-400' : 'bg-safety-500/10 text-safety-400'}`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Feature-by-Feature <span className="text-brand-400">Comparison</span>
            </h2>
            <p className="text-muted-foreground">
              A detailed look at how SafetyOf.AI and Drata compare across key capabilities.
            </p>
          </div>

          <div className="space-y-10">
            {COMPARISON_FEATURES.map((section) => (
              <div key={section.category}>
                <h3 className="text-lg font-semibold mb-4 text-brand-400">{section.category}</h3>
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="grid grid-cols-[1fr_120px_120px] bg-background border-b border-border">
                    <div className="px-5 py-3 text-sm font-medium text-muted-foreground">Feature</div>
                    <div className="px-5 py-3 text-sm font-medium text-brand-400 text-center">SafetyOf.AI</div>
                    <div className="px-5 py-3 text-sm font-medium text-muted-foreground text-center">Drata</div>
                  </div>
                  {section.features.map((feature, i) => (
                    <div
                      key={feature.name}
                      className={`grid grid-cols-[1fr_120px_120px] ${i < section.features.length - 1 ? 'border-b border-border' : ''} hover:bg-accent/50 transition-colors`}
                    >
                      <div className="px-5 py-3.5">
                        <p className="text-sm font-medium">{feature.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{feature.note}</p>
                      </div>
                      <div className="px-5 py-3.5 flex items-center justify-center">
                        {feature.soai ? (
                          <div className="w-7 h-7 rounded-full bg-safety-500/10 flex items-center justify-center">
                            <Check className="w-4 h-4 text-safety-500" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                            <X className="w-4 h-4 text-muted-foreground/40" />
                          </div>
                        )}
                      </div>
                      <div className="px-5 py-3.5 flex items-center justify-center">
                        {feature.drata ? (
                          <div className="w-7 h-7 rounded-full bg-safety-500/10 flex items-center justify-center">
                            <Check className="w-4 h-4 text-safety-500" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                            <X className="w-4 h-4 text-muted-foreground/40" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pricing <span className="text-brand-400">Comparison</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SafetyOf.AI</h3>
                  <p className="text-xs text-muted-foreground">EU AI Act + DORA + NIS2 + ISO 42001</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-brand-400">£0</span>
                  <span className="text-muted-foreground">— Free tier</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-brand-400">£99</span>
                  <span className="text-muted-foreground">/month — Pro</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-brand-400">£499</span>
                  <span className="text-muted-foreground">/month — Enterprise</span>
                </div>
              </div>
              <ul className="space-y-2 mb-8">
                {[
                  'Free tier: 3 scans/day, 3 MCP tools',
                  'No annual contract required',
                  'Self-service sign-up in minutes',
                  'Transparent pricing, no sales calls',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-safety-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/pricing" className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity">
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="rounded-2xl bg-card border border-border p-8 opacity-80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Drata</h3>
                  <p className="text-xs text-muted-foreground">SOC 2 continuous monitoring focused</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-muted-foreground">Custom</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  No public pricing. Enterprise contracts only, available through sales process. No self-service option or free tier.
                </p>
              </div>
              <ul className="space-y-2 mb-8">
                {[
                  'No public pricing available',
                  'Enterprise sales process required',
                  'No free tier',
                  'Annual contracts typical',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* "Agentic Trust" vs MCP */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              &quot;Agentic Trust&quot; vs <span className="text-brand-400">Open MCP Ecosystem</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Drata coined &quot;Agentic Trust&quot; for SOC 2 automation. SafetyOf.AI takes a different approach — an open MCP ecosystem that any AI agent can integrate with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-8">
              <h3 className="text-xl font-bold text-brand-400 mb-4 flex items-center gap-2">
                <Server className="w-5 h-5" />
                SafetyOf.AI: Open MCP Ecosystem
              </h3>
              <ul className="space-y-3">
                {[
                  '218 MCP servers for compliance automation',
                  'Open protocol — any AI agent can connect',
                  'Programmatic compliance workflows via API',
                  'A2A agent coordination for multi-step audits',
                  'Community-driven server development',
                  'Works with Claude, GPT, Gemini, and more',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="text-xl font-bold text-muted-foreground mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Drata: Proprietary Agentic Trust
              </h3>
              <ul className="space-y-3">
                {[
                  'Internal automation for SOC 2 evidence collection',
                  'Proprietary — locked to Drata\'s platform',
                  'No external MCP server ecosystem',
                  'Focused on SOC 2 and ISO 27001 controls',
                  'No EU AI Act-specific automation',
                  'Enterprise-only feature access',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose which */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              When to Choose <span className="text-brand-400">Which Platform</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-safety-500/20 bg-safety-500/5 p-8">
              <h3 className="text-xl font-bold text-safety-400 mb-4">Choose SafetyOf.AI when:</h3>
              <ul className="space-y-3">
                {[
                  'You deploy AI systems in the EU market',
                  'You need EU AI Act conformity assessments',
                  'You need DORA compliance (financial services)',
                  'You need NIS2 Directive coverage',
                  'You want ISO 42001 AI management certification',
                  'You want an open MCP ecosystem for AI agents',
                  'You want transparent pricing with a free tier',
                  'You need HMAC-signed cryptographic attestations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold text-muted-foreground mb-4">Choose Drata when:</h3>
              <ul className="space-y-3">
                {[
                  'Your primary need is SOC 2 continuous monitoring',
                  'You\'re a US-focused SaaS company',
                  'You want deep automated SOC 2 evidence collection',
                  'You need Drata\'s integration marketplace',
                  'You have enterprise budget for compliance tooling',
                  'EU AI Act is not relevant to your business',
                  'You value Drata\'s established SOC 2 track record',
                  'You don\'t need MCP or AI-native compliance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for <span className="text-brand-400">EU Compliance</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with a free compliance scan. Cover EU AI Act, DORA, NIS2, and ISO 42001. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity">
              Start Free Scan
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/compliance" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border font-semibold hover:bg-accent transition-colors">
              View Full Compliance Coverage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
