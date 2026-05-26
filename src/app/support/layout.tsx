import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — SafetyOf.AI',
  description:
    'Get help with SafetyOf.AI compliance platform. FAQs, documentation, and direct support for EU AI Act compliance questions.',
  openGraph: {
    title: 'Support — SafetyOf.AI',
    description: 'Get help with SafetyOf.AI compliance platform. FAQs, documentation, and direct support.',
    url: 'https://safetyof.ai/support',
    siteName: 'SafetyOf.AI',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Support — SafetyOf.AI',
    description: 'Get help with SafetyOf.AI compliance platform. FAQs, documentation, and direct support.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://safetyof.ai/support',
  },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
