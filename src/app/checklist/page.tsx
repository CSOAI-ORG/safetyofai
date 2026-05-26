import type { Metadata } from 'next';
import { ComplianceChecklistClient } from './checklist-client';

export const metadata: Metadata = {
  title: 'EU AI Act Compliance Checklist — SafetyOf.AI',
  description: 'Complete EU AI Act compliance checklist. Track your readiness across risk classification, transparency obligations, governance requirements, and more.',
  openGraph: {
    title: 'EU AI Act Compliance Checklist — SafetyOf.AI',
    description: 'Track your EU AI Act compliance readiness with our comprehensive checklist. Covers risk classification, transparency, governance.',
  },
};

export default function ChecklistPage() {
  return <ComplianceChecklistClient />;
}
