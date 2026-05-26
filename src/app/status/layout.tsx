import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status — SafetyOf.AI',
  description:
    'Real-time system status and uptime monitoring for SafetyOf.AI platform services, MCP servers, and compliance infrastructure.',
  openGraph: {
    title: 'System Status — SafetyOf.AI',
    description: 'Real-time system status and uptime monitoring for SafetyOf.AI platform services.',
    url: 'https://safetyof.ai/status',
    siteName: 'SafetyOf.AI',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'System Status — SafetyOf.AI',
    description: 'Real-time system status and uptime monitoring for SafetyOf.AI platform services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://safetyof.ai/status',
  },
};

export default function StatusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
