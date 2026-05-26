import type { Metadata } from 'next';
import { ScannerPageClient } from './scanner-client';

export const metadata: Metadata = {
  title: 'Free AI Safety Scanner — SafetyOf.AI',
  description: 'Scan any URL for AI threats, deepfakes, and manipulation attempts. Free multi-model consensus scanner with real-time results.',
  openGraph: {
    title: 'Free AI Safety Scanner — SafetyOf.AI',
    description: 'Scan any URL for AI-powered threats, deepfakes, and manipulation. Free multi-AI consensus analysis.',
  },
};

export default function ScannerPage() {
  return <ScannerPageClient />;
}
