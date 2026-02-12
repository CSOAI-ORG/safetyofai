'use client';

import { CheckCircle2, ChevronRight, Shield, Zap, Building2, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Essential AI safety for everyone',
    icon: Shield,
    accent: 'border-border',
    buttonStyle: 'bg-card border border-border text-foreground hover:bg-accent',
    features: [
      '3 scans per day',
      '4 AI model consensus (GPT-4, Claude, Gemini, Deepseek)',
      'URL security scanning',
      'Text content verification',
      '30-day query history',
      'Community threat reporting',
      'Basic security dashboard',
    ],
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    description: 'Unlimited protection for power users',
    icon: Zap,
    accent: 'border-brand-500/50 ring-1 ring-brand-500/20',
    popular: true,
    buttonStyle: 'gradient-brand text-white hover:opacity-90',
    features: [
      'Unlimited scans',
      '4 AI model consensus',
      'Advanced URL scanner with threat intel',
      'Image & audio deepfake detection',
      '1-year query history',
      'Priority support',
      'Chrome extension access',
      'Mobile app access',
      'Advanced analytics',
      'Export reports (CSV, JSON, PDF)',
    ],
  },
  {
    name: 'Expert',
    price: '$29',
    period: '/month',
    description: 'Full Byzantine Council for professionals',
    icon: Crown,
    accent: 'border-violet-500/50',
    buttonStyle: 'bg-violet-600 text-white hover:bg-violet-700',
    features: [
      'Everything in Pro',
      '33 AI models (full Byzantine Council)',
      'Video deepfake detection',
      'Desktop app access',
      'Real-time threat alerts',
      'Custom scanning rules',
      'API access (1,000 calls/month)',
      '24/7 premium support',
      'Lifetime query history',
      'CSOAI compliance badge',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full stack integration for organizations',
    icon: Building2,
    accent: 'border-safety-500/50',
    buttonStyle: 'bg-safety-600 text-white hover:bg-safety-700',
    features: [
      'Everything in Expert',
      'Unlimited API access',
      'CSOAI governance integration',
      'Byzantine Council dedicated instance',
      'SSO / SAML authentication',
      'Team management & RBAC',
      'Custom AI model selection',
      'SIEM / webhook integrations',
      'Dedicated account manager',
      'SLA with 99.99% uptime',
      'White-label options',
      'EU AI Act compliance package',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Protection for{' '}
          <span className="text-brand-400">Every Scale</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          From individual users to global enterprises. Multi-AI consensus security at a fraction of the cost of fragmented tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative rounded-2xl bg-card border ${plan.accent} p-6 flex flex-col`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full gradient-brand text-white text-xs font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <plan.icon className="w-6 h-6 text-brand-400 mb-3" />
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </div>

            <div className="flex-1 space-y-3 mb-6">
              {plan.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${plan.buttonStyle}`}>
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-20 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'What is multi-AI consensus?', a: 'Instead of relying on a single AI model, SafetyOf.AI sends every query to multiple independent AI models simultaneously. They each analyze the content independently, and a Byzantine voting algorithm determines the final verdict. This makes the system far more reliable than any single AI.' },
            { q: 'How does SafetyOf.AI replace AI Dome?', a: 'SafetyOf.AI is built directly into the CSOAI governance stack as the unified security layer. Rather than using external, fragmented tools, SOAI provides multi-AI consensus, threat intelligence, Byzantine Council verification, and compliance checking in one integrated platform.' },
            { q: 'What AI models are used?', a: 'Free and Pro tiers use 4 models: OpenAI GPT-4, Anthropic Claude 3.5, Google Gemini 2.0, and Deepseek V3. Expert and Enterprise tiers have access to the full Byzantine Council of 33 agents across transformer, alternative, and symbolic architectures.' },
            { q: 'Is there a free trial?', a: 'The Free tier is permanent — 3 scans per day with 4 AI models, no credit card required. You can upgrade to Pro or Expert at any time for unlimited access.' },
          ].map((faq) => (
            <div key={faq.q} className="rounded-xl bg-card border border-border p-5">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
