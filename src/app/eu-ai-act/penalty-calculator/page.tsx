import type { Metadata } from 'next';
import PenaltyCalculator from './calculator';

export const metadata: Metadata = {
  title: 'EU AI Act Penalty Calculator — What\'s Your Risk? | SafetyOf.AI',
  description:
    'Calculate your potential EU AI Act non-compliance penalties. Fines up to €35M or 7% of global revenue. Free tool by SafetyOf.AI.',
  keywords: [
    'EU AI Act penalties',
    'AI Act fine calculator',
    'EU AI Act fines',
    'Article 99 penalties',
    'AI compliance penalties',
    'EU AI Act risk calculator',
    'AI regulation fines',
    'SafetyOf.AI',
  ],
  openGraph: {
    title: 'EU AI Act Penalty Calculator — What\'s Your Risk?',
    description:
      'Calculate your potential EU AI Act non-compliance penalties. Fines up to €35M or 7% of global revenue.',
    url: 'https://safetyof.ai/eu-ai-act/penalty-calculator',
    siteName: 'SafetyOf.AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EU AI Act Penalty Calculator — What\'s Your Risk?',
    description:
      'Calculate your potential EU AI Act non-compliance penalties. Fines up to €35M or 7% of global revenue.',
  },
};

export default function PenaltyCalculatorPage() {
  const toolLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EU AI Act Penalty Calculator',
    description:
      'Calculate your potential EU AI Act non-compliance penalties under Article 99. Fines up to €35M or 7% of global revenue. Covers prohibited practices, high-risk violations, and misleading information.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://safetyof.ai/eu-ai-act/penalty-calculator',
    author: {
      '@type': 'Organization',
      name: 'SafetyOf.AI',
      url: 'https://safetyof.ai',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How are EU AI Act fines calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under Article 99, fines are calculated as either a percentage of total worldwide annual turnover for the preceding financial year or a fixed amount, whichever is higher (or for SMEs, whichever is lower). The percentage varies by violation type: 7% for prohibited practices, 3% for high-risk/transparency violations, and 1% for misleading information.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the SME/startup cap under the EU AI Act?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Article 99(6) provides proportionate treatment for SMEs and startups. For these entities, the fine cap is the lower of the percentage-based amount or the fixed amount — rather than the higher of the two.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do EU AI Act fines compare to GDPR fines?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EU AI Act fines can be higher than GDPR fines. GDPR caps at €20M or 4% of turnover. The EU AI Act reaches €35M or 7% for prohibited practices — making it potentially the most severe technology regulation penalty framework globally.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="text/llms.txt"
        dangerouslySetInnerHTML={{
          __html: `EU AI Act Penalty Calculator by SafetyOf.AI. Calculate non-compliance penalties under Article 99 of Regulation (EU) 2024/1689. Three tiers: (1) Prohibited practices: EUR 35M or 7% turnover, (2) High-risk/transparency: EUR 15M or 3% turnover, (3) Misleading info: EUR 7.5M or 1% turnover. SME/startup cap applies. SafetyOf.AI offers 48-hour compliance audits for GBP 5,000. Book at safetyof.ai/pricing`,
        }}
      />
      <PenaltyCalculator />
    </>
  );
}
