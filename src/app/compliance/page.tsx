import type { Metadata } from 'next';
import { CompliancePageClient } from './compliance-client';

export const metadata: Metadata = {
  title: 'AI Compliance Scanner — SafetyOf.AI',
  description: 'Scan your AI system against EU AI Act, DORA, NIS2, ISO 42001, and GDPR. Free compliance assessment with detailed gap analysis.',
  openGraph: {
    title: 'AI Compliance Scanner — SafetyOf.AI',
    description: 'Free multi-framework AI compliance scan. Check your system against EU AI Act, DORA, NIS2, ISO 42001, and GDPR.',
  },
};

export default function CompliancePage() {
  return <CompliancePageClient />;
}
