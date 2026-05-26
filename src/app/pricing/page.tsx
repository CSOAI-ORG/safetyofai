import type { Metadata } from 'next';
import { JsonLd, faqSchema } from '@/components/json-ld';
import { PricingPageClient } from './pricing-client';

export const metadata: Metadata = {
  title: 'Pricing — SafetyOf.AI',
  description: 'Simple, transparent pricing for EU AI Act compliance. Start free, upgrade to Pro at $99/mo, or Enterprise at $499/mo.',
  openGraph: {
    title: 'Pricing — SafetyOf.AI',
    description: 'EU AI Act compliance pricing. Free tier available. Pro at $99/mo. Enterprise at $499/mo. 48-hour compliance audits.',
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={faqSchema([
          {
            question: 'What is included in the Free tier?',
            answer: 'The Free tier includes 1 regulatory tracker, 3 basic MCP tools, 1 A2A agent, and community support. Perfect for AI startups testing compliance requirements.',
          },
          {
            question: 'How does the Pro tier differ from Enterprise?',
            answer: 'Pro ($99/mo) includes all 12+ MCP tools, full EU AI Act/NIST RMF tracking, 5 A2A agents, unlimited scans, and audit-ready reports. Enterprise ($499/mo) adds custom regulatory feeds, ACP enterprise integration, white-labeling, dedicated CSO, and custom MCP development.',
          },
          {
            question: 'Can I switch plans at any time?',
            answer: 'Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately. Downgrades apply at the start of the next billing cycle.',
          },
          {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit and debit cards via Stripe. Enterprise customers can also pay by invoice for annual commitments.',
          },
        ])}
        id="faq-schema"
      />
      <PricingPageClient />
    </>
  );
}
