import { Check, X, Zap, Building2, Crown, ArrowRight } from 'lucide-react';

const PRICING_TIERS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For AI startups and developers testing compliance',
    features: [
      { text: '1 regulatory tracker', included: true },
      { text: '3 basic MCP tools', included: true },
      { text: '1 A2A agent', included: true },
      { text: 'Community support', included: true },
      { text: 'All 12+ MCP tools', included: false },
      { text: 'Audit reports', included: false },
      { text: 'ACP enterprise integration', included: false },
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: 'per month',
    description: 'For mid-market AI companies needing full compliance',
    features: [
      { text: 'All 12+ MCP tools', included: true },
      { text: 'Full EU AI Act/NIST RMF tracking', included: true },
      { text: '5 A2A agents', included: true },
      { text: 'Email support', included: true },
      { text: 'Unlimited scans', included: true },
      { text: 'Audit-ready reports', included: true },
      { text: 'ACP enterprise integration', included: false },
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$499',
    period: 'per month',
    description: 'For regulated industries and sovereign AI projects',
    features: [
      { text: 'Custom regulatory feeds', included: true },
      { text: 'ACP enterprise integration', included: true },
      { text: 'White-labeling', included: true },
      { text: 'Dedicated CSO + A2A coordination', included: true },
      { text: 'SLA guarantee (99.9%)', included: true },
      { text: 'Multi-tenant support', included: true },
      { text: 'Custom MCP development', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Simple, <span className="text-brand-400">Transparent</span> Pricing
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Start free with 3 MCP tools. Upgrade to Pro for full EU AI Act compliance.
          Enterprise plans for regulated industries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-8 transition-all ${
              tier.highlighted
                ? 'border-brand-500 bg-brand-500/5 shadow-lg shadow-brand-500/10'
                : 'border-border bg-card hover:border-brand-500/30'
            }`}>
            {tier.highlighted && (
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-medium mb-4">
                <Zap className="w-3 h-3" />
                Most Popular
              </div>
            )}
            <div className="flex items-center gap-2 mb-4">
              {tier.name === 'Enterprise' ? (
                <Crown className="w-5 h-5 text-brand-400" />
              ) : tier.name === 'Pro' ? (
                <Building2 className="w-5 h-5 text-brand-400" />
              ) : (
                <Zap className="w-5 h-5 text-muted-foreground" />
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-muted-foreground ml-2">/{tier.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">{tier.description}</p>
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-opacity ${
                tier.highlighted
                  ? 'gradient-brand text-white hover:opacity-90'
                  : 'bg-background border border-border hover:border-brand-500/30'
              }`}>
              {tier.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Domain Portfolio CTA */}
      <div className="mt-16 rounded-2xl bg-card border border-border p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Governance Cluster Domains</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          This platform powers 9 .ai governance domains: safetyof.ai, councilof.ai, agisafe.ai, asisecurity.ai,
          biasdetectionof.ai, dataprivacyof.ai, ethicalgovernanceof.ai, transparencyof.ai, accountabilityof.ai
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            'safetyof.ai',
            'councilof.ai',
            'agisafe.ai',
            'asisecurity.ai',
            'biasdetectionof.ai',
            'dataprivacyof.ai',
            'ethicalgovernanceof.ai',
            'transparencyof.ai',
            'accountabilityof.ai',
          ].map((domain) => (
            <span key={domain} className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono">
              {domain}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
