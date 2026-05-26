'use client';

import { useState, useRef } from 'react';
import {
  Shield,
  CheckCircle2,
  Circle,
  Download,
  Share2,
  Clock,
  FileText,
  ArrowRight,
  Printer,
  Twitter,
  Linkedin,
  Link2,
  Lock,
} from 'lucide-react';
import EmailCapture from '@/components/EmailCapture';

const CHECKLIST_ITEMS = [
  { category: 'Risk Classification', items: [
    'Classify all AI systems under Article 6 risk categories (prohibited, high-risk, limited, minimal)',
    'Document AI system purpose, intended use, and deployment context per Annex III',
    'Map AI systems to high-risk categories listed in Annex III, Section 1',
    'Assess whether any AI systems fall under prohibited practices (Article 5)',
    'Create and maintain an AI system inventory register',
  ]},
  { category: 'Risk Management (Art. 9)', items: [
    'Establish a continuous risk management system for each high-risk AI system',
    'Identify and analyse known and reasonably foreseeable risks',
    'Estimate and evaluate risks that may emerge when AI systems are used',
    'Adopt appropriate risk management measures',
    'Test AI systems to ensure they function as intended',
  ]},
  { category: 'Data Governance (Art. 10)', items: [
    'Implement training, validation, and testing data governance practices',
    'Ensure training data is relevant, representative, free of errors, and complete',
    'Examine data for possible biases and implement bias mitigation measures',
    'Identify data gaps or shortcomings and address them appropriately',
    'Implement appropriate data preprocessing and feature engineering practices',
  ]},
  { category: 'Technical Documentation (Art. 11)', items: [
    'Create Annex IV compliant technical documentation before market placement',
    'Document AI system development process including design choices and architecture',
    'Document testing methodologies, results, and performance metrics',
    'Document risk management measures and their implementation',
    'Ensure documentation is kept up-to-date throughout the AI system lifecycle',
  ]},
  { category: 'Record-Keeping (Art. 12)', items: [
    'Implement automatic logging capabilities for high-risk AI systems',
    'Ensure logs enable traceability of AI system functioning throughout its lifecycle',
    'Maintain logs for a period appropriate to the intended purpose (min. 6 months)',
    'Ensure logging capabilities are proportionate to the nature and risk of the AI system',
  ]},
  { category: 'Transparency (Art. 13)', items: [
    'Provide clear and adequate instructions for deployers',
    'Ensure AI system capabilities and limitations are clearly communicated',
    'Disclose known circumstances that may affect AI system performance',
    'Communicate the level of accuracy, robustness, and cybersecurity',
  ]},
  { category: 'Human Oversight (Art. 14)', items: [
    'Design AI systems to allow effective oversight by natural persons',
    'Implement human-in-the-loop mechanisms for high-risk decisions',
    'Enable human overseers to fully understand AI system capabilities and limitations',
    'Allow human overseers to override or interrupt AI system decisions',
  ]},
  { category: 'Accuracy, Robustness & Cybersecurity (Art. 15)', items: [
    'Achieve appropriate levels of accuracy for intended purpose',
    'Implement resilience against errors, faults, and inconsistencies',
    'Protect against unauthorised third-party manipulation and attacks',
    'Implement cybersecurity measures to prevent data poisoning and model evasion',
  ]},
  { category: 'Transparency Obligations (Art. 50)', items: [
    'Mark AI-generated content in machine-readable format',
    'Disclose AI interaction for chatbots at first contact',
    'Label deepfakes and AI-manipulated content',
    'Disclose AI-generated text published in the public interest',
  ]},
  { category: 'Conformity & Registration', items: [
    'Complete EU Declaration of Conformity (Art. 47)',
    'Register high-risk AI systems in EU database before market placement',
    'Affix CE marking to high-risk AI systems',
    'Appoint an authorised representative if provider is based outside EU',
  ]},
];

function ChecklistItem({
  text,
  checked,
  onToggle,
}: {
  text: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-start gap-3 py-2.5 px-3 rounded-lg hover:bg-white/[0.03] transition-colors text-left w-full group"
    >
      {checked ? (
        <CheckCircle2 className="w-[18px] h-[18px] text-safety-400 flex-shrink-0 mt-0.5" />
      ) : (
        <Circle className="w-[18px] h-[18px] text-muted-foreground/40 flex-shrink-0 mt-0.5 group-hover:text-brand-400 transition-colors" />
      )}
      <span className={`text-sm leading-relaxed ${checked ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
        {text}
      </span>
    </button>
  );
}

export function ComplianceChecklistClient() {
  const [unlocked, setUnlocked] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const contentRef = useRef<HTMLDivElement>(null);

  const totalItems = CHECKLIST_ITEMS.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = checkedItems.size;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  const toggleItem = (item: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://safetyof.ai/checklist');
  };

  const shareText = encodeURIComponent(
    'I just downloaded the EU AI Act Compliance Checklist from SafetyOf.AI — 35 items covering every requirement. Free: '
  );
  const shareUrl = encodeURIComponent('https://safetyof.ai/checklist');

  return (
    <div className="min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          header, footer, .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .checklist-print { break-inside: avoid; }
        }
      `}} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium mb-6">
              <FileText className="w-3.5 h-3.5" />
              Free Download
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              Deadline: August 2, 2026
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              <span className="text-foreground">Your EU AI Act</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Compliance Checklist
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
              {totalItems} items covering every article, annex, and requirement. Track your progress interactively.
            </p>

            {!unlocked && (
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                Enter your email to unlock the full checklist
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Email Gate or Checklist */}
      {!unlocked ? (
        <section className="py-12 border-t border-border">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <EmailCapture
              source="checklist"
              framework="eu-ai-act"
              headline="Unlock the Full Checklist"
              subtitle="35 items · Covers Articles 5-50 + Annexes III & IV"
            />

            {/* Preview */}
            <div className="mt-10 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10 pointer-events-none" />
              <div className="rounded-2xl bg-card border border-border p-6 opacity-50">
                <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-400" />
                  {CHECKLIST_ITEMS[0].category}
                </h3>
                <div className="space-y-1">
                  {CHECKLIST_ITEMS[0].items.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2 px-3">
                      <Circle className="w-4 h-4 text-muted-foreground/30 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground/50">{item}</span>
                    </div>
                  ))}
                  <div className="text-center py-4 text-xs text-muted-foreground/40">
                    + {totalItems - 3} more items...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-8 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress Bar */}
            <div className="rounded-2xl bg-card border border-border p-5 mb-8 no-print">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Compliance Progress</span>
                <span className="text-sm font-mono text-brand-400">{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-background overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #0066CC, #00B894)',
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {checkedCount} of {totalItems} items completed
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8 no-print">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                <Printer className="w-4 h-4" />
                Print / Save PDF
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                <Link2 className="w-4 h-4" />
                Copy Link
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Share on LinkedIn
              </a>
            </div>

            {/* Checklist Content */}
            <div ref={contentRef} className="space-y-6">
              {CHECKLIST_ITEMS.map((category) => (
                <div
                  key={category.category}
                  className="rounded-2xl bg-card border border-border overflow-hidden checklist-print"
                >
                  <div className="px-5 py-4 border-b border-border bg-white/[0.02]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold flex items-center gap-2">
                        <Shield className="w-4 h-4 text-brand-400" />
                        {category.category}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground">
                        {category.items.filter((i) => checkedItems.has(i)).length}/
                        {category.items.length}
                      </span>
                    </div>
                  </div>
                  <div className="p-2">
                    {category.items.map((item) => (
                      <ChecklistItem
                        key={item}
                        text={item}
                        checked={checkedItems.has(item)}
                        onToggle={() => toggleItem(item)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-500/10 to-safety-500/10 border border-brand-500/20 p-8 text-center no-print">
              <h3 className="text-xl font-bold mb-2">Need Help With Compliance?</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
                SafetyOf.AI automates this entire checklist. Our compliance scanner checks your AI systems
                against all {totalItems} requirements in minutes, not months.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Start Free Compliance Scan
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border font-semibold text-sm hover:bg-accent transition-colors"
                >
                  Book £5,000 Audit
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
