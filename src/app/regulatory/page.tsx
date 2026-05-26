import type { Metadata } from 'next';
import { RegulatoryPageClient } from './regulatory-client';

export const metadata: Metadata = {
  title: 'EU AI Act Regulatory Deadlines — SafetyOf.AI',
  description: 'Track EU AI Act regulatory deadlines, cliff dates, and compliance milestones. Interactive calendar with real-time countdown to Article 50 enforcement.',
  openGraph: {
    title: 'EU AI Act Regulatory Deadlines — SafetyOf.AI',
    description: 'Interactive EU AI Act deadline tracker. Article 50 enforcement on August 2, 2026. Track all regulatory milestones.',
  },
};

export default function RegulatoryPage() {
  return <RegulatoryPageClient />;
}
