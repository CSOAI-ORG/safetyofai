import type { Metadata } from 'next';
import { Shield, Check, X, Clock, DollarSign, Server, FileSignature, ArrowRight, Zap, Globe, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SafetyOf.AI vs Vanta — EU AI Act Compliance Comparison',
  description: 'Compare SafetyOf.AI and Vanta for AI compliance. SafetyOf.AI is EU AI Act native with MCP servers, HMAC attestations, and 48-hour turnaround. Vanta focuses on SOC 2/ISO 27001.',
  keywords: ['SafetyOf.AI vs Vanta', 'EU AI Act compliance', 'Vanta alternative', 'AI compliance platform', 'MCP compliance servers', 'HMAC attestations'],
  openGraph: {
    title: 'SafetyOf.AI vs Vanta — EU AI Act Compliance Comparison',
    description: 'SafetyOf.AI: EU AI Act native, £99/mo, 48-hour turnaround, MCP servers. Vanta: SOC 2 focused, $10K+/yr, weeks-long audits.',
    url: 'https://safetyof.ai/vs-vanta',
    siteName: 'SafetyOf.AI',
    type: 'website',
    images: [
      {
        url: 'https://safetyof.ai/og-vs-vanta.png',
        width: 1200,
        height: 630,
        alt: 'SafetyOf.AI vs Vanta — EU AI Act Compliance Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafetyOf.AI vs Vanta — EU AI Act Compliance',
    description: 'EU AI Act native compliance vs SOC 2 focused. See why SafetyOf.AI wins for EU AI Act.',
    images: ['https://safetyof.ai/og-vs-vanta.png'],
  },
};

const COMPARISON_FEATURES = [
  {
    category: 'Regulatory Focus',
    features: [
      { name: 'EU AI Act (Regulation 2024/1689)', soai: true, vanta: false, note: 'SafetyOf.AI is EU AI Act native' },
      { name: 'SOC 2 Type II', soai: false, vanta: true, note: 'Vanta excels at SOC 2' },
      { name: 'ISO 27001', soai: true, vanta: true, note: 'Both support ISO 27001' },
      { name: 'DORA (Digital Operational Resilience)', soai: true, vanta: false, note: 'EU financial regulation' },
      { name: 'NIS2 Directive', soai: true, vanta: false, note: 'EU cybersecurity directive' },
      { name: 'ISO 42001 (AI Management)', soai: true, vanta: false, note: 'AI-specific management standard' },
    ],
  },
  {
    category: 'Automation & Integration',
    features: [
      { name: 'MCP Servers for automated compliance', soai: true, vanta: false, note: '218 MCP servers for programmatic compliance' },
      { name: 'HMAC-signed attestations', soai: true, vanta: false, note: 'Cryptographic proof of compliance' },
      { name: 'A2A agent coordination', soai: true, vanta: false, note: 'Multi-agent compliance workflows' },
      { name: 'API integrations', soai: true, vanta: true, note: 'Both offer API access' },
      { name: 'Cloud provider integrations', soai: true, vanta: true, note: 'AWS, GCP, Azure support' },
      { name: 'Continuous monitoring', soai: true, vanta: true, note: 'Both provide ongoing monitoring' },
    ],
  },
  {
    category: 'Speed & Delivery',
    features: [
      { name: 'Gap analysis turnaround', soai: true, vanta: false, note: '48 hours vs weeks' },
      { name: 'Self-service onboarding', soai: true, vanta: false, note: 'No sales call required' },
      { name: 'Free tier available', soai: true, vanta: false, note: 'Start without commitment' },
      { name: 'Transparent pricing', soai: true, vanta: false, note: 'Public pricing, no quotes needed' },
      { name: 'Audit-ready reports', soai: true, vanta: true, note: 'Both generate compliance reports' },
      { name: 'Evidence collection', soai: true, vanta: true, note: 'Automated evidence gathering' },
    ],
  },
];

export default function VsVantaPage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'SafetyOf.AI vs Vanta — EU AI Act Compliance Comparison',
            description: 'Compare SafetyOf.AI and Vanta for EU AI Act compliance. SafetyOf.AI is EU AI Act native with MCP servers, HMAC attestations, and 48-hour turnaround.',
            url: 'https://safetyof.ai/vs-vanta',
            mainEntity: {
              '@type': 'Product',
              name: 'SafetyOf.AI',
              description: 'EU AI Act native compliance platform with MCP servers and HMAC attestations',
              url: 'https://safetyof.ai',
              brand: {
                '@type': 'Organization',
                name: 'SafetyOf.AI',
              },
              offers: {
                '@type': 'Offer',
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
            },
            about: [
              {
                '@type': 'Product',
                name: 'Vanta',
                description: 'SOC 2 and ISO 27001 compliance automation platform',
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
              <span className="text-foreground">Vanta</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Vanta is excellent for SOC 2 and ISO 27001 — but if you need <strong className="text-foreground">EU AI Act compliance</strong>,
              SafetyOf.AI is purpose-built for the regulation with MCP servers, HMAC attestations, and 48-hour turnaround.
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
                    'MCP servers for automated compliance workflows',
                    'HMAC-signed cryptographic attestations',
                    '48-hour gap analysis turnaround',
                    'Transparent pricing from £99/mo',
                    'DORA, NIS2, and ISO 42001 coverage',
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
                  Choose Vanta if you need:
                </h3>
                <ul className="space-y-2">
                  {[
                    'SOC 2 Type II certification (US compliance)',
                    'ISO 27001 with deep integration',
                    'Established enterprise sales process',
                    'Extensive third-party integration marketplace',
                    'US-focused compliance automation',
                    'Large existing customer community',
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
              Why SafetyOf.AI Wins for <span className="text-brand-400">EU AI Act</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vanta was built for US compliance frameworks. SafetyOf.AI was built from day one for the EU AI Act.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: DollarSign,
                title: '£99/mo vs $10K+/yr',
                description: 'SafetyOf.AI offers transparent pricing starting at £99/month. Vanta requires annual contracts typically starting at $10,000+/year, with pricing only available through sales calls.',
                accent: 'safety',
              },
              {
                icon: Server,
                title: '218 MCP Servers',
                description: 'SafetyOf.AI provides 218 MCP (Model Context Protocol) servers for automated compliance — enabling programmatic, AI-native compliance workflows. Vanta has no MCP ecosystem.',
                accent: 'brand',
              },
              {
                icon: FileSignature,
                title: 'HMAC-Signed Attestations',
                description: 'Every SafetyOf.AI compliance attestation is cryptographically signed with HMAC, providing tamper-proof evidence. Vanta uses standard PDF reports without cryptographic verification.',
                accent: 'safety',
              },
              {
                icon: Clock,
                title: '48-Hour Turnaround',
                description: 'SafetyOf.AI delivers gap analysis in 48 hours. Vanta implementations typically take weeks to months depending on organizational complexity and sales cycle.',
                accent: 'brand',
              },
              {
                icon: Globe,
                title: 'EU AI Act Native',
                description: 'Built specifically for Regulation 2024/1689, including risk classification, conformity assessments, and technical documentation requirements. Vanta added EU AI Act as a bolt-on.',
                accent: 'safety',
              },
              {
                icon: Zap,
                title: 'Free Tier Available',
                description: 'Start with SafetyOf.AI\'s free tier — 3 scans/day, basic MCP tools, no credit card required. Vanta requires enterprise contracts with no self-service option.',
                accent: 'brand',
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
              A detailed look at how SafetyOf.AI and Vanta compare across key capabilities.
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
                    <div className="px-5 py-3 text-sm font-medium text-muted-foreground text-center">Vanta</div>
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
                        {feature.vanta ? (
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
                  <p className="text-xs text-muted-foreground">EU AI Act native</p>
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
                  'No annual contract required',
                  'Self-service sign-up',
                  'Cancel anytime',
                  'Free tier with 3 MCP tools',
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
                  <h3 className="text-xl font-bold">Vanta</h3>
                  <p className="text-xs text-muted-foreground">SOC 2 / ISO 27001 focused</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-muted-foreground">$10K+</span>
                  <span className="text-muted-foreground">/year — starting</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pricing only available through sales calls. Annual contracts required. Enterprise-focused with no self-service option.
                </p>
              </div>
              <ul className="space-y-2 mb-8">
                {[
                  'Annual contract required',
                  'Sales call for pricing',
                  'No free tier available',
                  'No public pricing page',
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

      {/* When to choose which */}
      <section className="py-20 bg-card border-t border-border">
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
                  'You want MCP servers for automated compliance',
                  'You need HMAC-signed cryptographic attestations',
                  'You need fast 48-hour gap analysis',
                  'You want transparent, predictable pricing',
                  'You need DORA or NIS2 coverage',
                  'You\'re building AI-native compliance workflows',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold text-muted-foreground mb-4">Choose Vanta when:</h3>
              <ul className="space-y-3">
                {[
                  'Your primary need is SOC 2 Type II certification',
                  'You\'re a US-focused company',
                  'You need deep ISO 27001 integration',
                  'You want an established enterprise sales process',
                  'You need a large third-party integration marketplace',
                  'You already have Vanta and it covers your needs',
                  'You have budget for $10K+/year compliance tools',
                  'EU AI Act is not a priority for your business',
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
            Ready for <span className="text-brand-400">EU AI Act Compliance</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with a free compliance scan. No credit card required. Get your EU AI Act gap analysis in 48 hours.
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
