'use client';

import { useState } from 'react';
import {
  Shield,
  Building2,
  Cpu,
  Globe,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ClipboardCheck,
  Users,
  Zap,
  ChevronRight,
} from 'lucide-react';

const INDUSTRIES = [
  'Financial Services',
  'Healthcare',
  'HR / Recruitment',
  'Legal',
  'Education',
  'Government',
  'Other',
] as const;

const USE_CASES = [
  'Credit Scoring',
  'Fraud Detection',
  'Customer Service',
  'Content Generation',
  'Diagnostics',
  'Hiring',
  'Other',
] as const;

const REGIONS = ['EU', 'UK', 'US', 'Global'] as const;

interface OnboardingData {
  companyName: string;
  systemName: string;
  industry: string;
  useCase: string;
  region: string;
}

interface RiskAssessment {
  riskLevel: 'high' | 'limited' | 'minimal';
  regulations: string[];
  urgency: 'immediate' | 'soon' | 'planned';
  deadlineLabel: string;
  article: string;
}

const ROADMAP_STEPS = [
  {
    step: 1,
    title: 'Risk Classification',
    description: 'Classify your AI system under EU AI Act Annex III categories',
    icon: Shield,
  },
  {
    step: 2,
    title: 'Risk Management',
    description: 'Implement risk management system per Article 9',
    icon: AlertTriangle,
  },
  {
    step: 3,
    title: 'Technical Documentation',
    description: 'Prepare documentation per Article 11 and Annex IV',
    icon: FileText,
  },
  {
    step: 4,
    title: 'Conformity Assessment',
    description: 'Complete conformity assessment per Article 43',
    icon: ClipboardCheck,
  },
  {
    step: 5,
    title: 'Registration',
    description: 'Register in EU database per Article 49',
    icon: Users,
  },
];

function classifyRisk(data: OnboardingData): RiskAssessment {
  const highRiskIndustries = ['Financial Services', 'Healthcare', 'Government'];
  const highRiskUseCases = ['Credit Scoring', 'Diagnostics', 'Hiring'];

  const isHighRisk =
    highRiskIndustries.includes(data.industry) || highRiskUseCases.includes(data.useCase);

  if (isHighRisk) {
    const regulations =
      data.region === 'EU' || data.region === 'Global'
        ? ['EU AI Act', 'GDPR', 'ISO 42001']
        : data.region === 'UK'
          ? ['UK AI Regulation', 'UK GDPR', 'ISO 42001']
          : ['NIST AI RMF', 'SOC 2', 'ISO 42001'];

    if (data.industry === 'Financial Services') {
      regulations.push('DORA');
    }

    return {
      riskLevel: 'high',
      regulations,
      urgency: 'immediate',
      deadlineLabel: 'Aug 2, 2026',
      article: 'Article 6',
    };
  }

  const limitedRiskUseCases = ['Customer Service', 'Content Generation', 'Fraud Detection'];
  const isLimitedRisk =
    limitedRiskUseCases.includes(data.useCase) || !highRiskIndustries.includes(data.industry);

  if (isLimitedRisk) {
    return {
      riskLevel: 'limited',
      regulations:
        data.region === 'EU' || data.region === 'Global'
          ? ['EU AI Act (Transparency)', 'GDPR']
          : ['NIST AI RMF'],
      urgency: 'soon',
      deadlineLabel: 'Aug 2, 2027',
      article: 'Article 50',
    };
  }

  return {
    riskLevel: 'minimal',
    regulations: ['Voluntary Codes of Conduct'],
    urgency: 'planned',
    deadlineLabel: 'No strict deadline',
    article: 'Article 4',
  };
}

const riskStyles = {
  high: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    badge: 'bg-red-500/20 text-red-300',
    glow: 'glow-threat',
  },
  limited: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-300',
    glow: '',
  },
  minimal: {
    bg: 'bg-safety-500/10',
    border: 'border-safety-500/30',
    text: 'text-safety-400',
    badge: 'bg-safety-500/20 text-safety-300',
    glow: 'glow-safety',
  },
};

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    companyName: '',
    systemName: '',
    industry: '',
    useCase: '',
    region: 'EU',
  });
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null);

  const updateField = <K extends keyof OnboardingData>(key: K, value: OnboardingData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step === 2) {
      const result = classifyRisk(data);
      setAssessment(result);
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const canProceedStep1 =
    data.companyName.trim() && data.systemName.trim() && data.industry && data.useCase && data.region;

  const currentStepIndex = assessment
    ? assessment.riskLevel === 'high'
      ? 0
      : assessment.riskLevel === 'limited'
        ? 1
        : 2
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'SafetyOf.AI Onboarding',
            description: '3-step AI compliance onboarding wizard for EU AI Act risk classification',
            url: 'https://safetyof.ai/onboarding',
            applicationCategory: 'BusinessApplication',
          }),
        }}
      />

      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step > s
                      ? 'bg-safety-500 text-white'
                      : step === s
                        ? 'gradient-brand text-white glow-brand'
                        : 'bg-card border border-border text-muted-foreground'
                  }`}
                >
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                <span
                  className={`text-xs font-medium hidden sm:block ${
                    step >= s ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {s === 1 ? 'Your AI System' : s === 2 ? 'Compliance Snapshot' : 'Roadmap'}
                </span>
              </div>
              {s < 3 && (
                <div className={`w-16 sm:w-24 h-0.5 ${step > s ? 'bg-safety-500' : 'bg-border'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Tell us about your AI system */}
      {step === 1 && (
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-brand-400" />
              <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Step 1</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Tell us about your <span className="text-brand-400">AI system</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We&apos;ll use this to classify your risk level and identify applicable regulations.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={data.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">AI System Name</label>
                <div className="relative">
                  <Cpu className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={data.systemName}
                    onChange={(e) => updateField('systemName', e.target.value)}
                    placeholder="RiskEngine v2"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Industry</label>
                <select
                  value={data.industry}
                  onChange={(e) => updateField('industry', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none"
                >
                  <option value="">Select industry...</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Use Case</label>
                <select
                  value={data.useCase}
                  onChange={(e) => updateField('useCase', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none"
                >
                  <option value="">Select use case...</option>
                  {USE_CASES.map((uc) => (
                    <option key={uc} value={uc}>
                      {uc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Deployment Region</label>
              <div className="grid grid-cols-4 gap-3">
                {REGIONS.map((r) => (
                  <button
                    key={r}
                    onClick={() => updateField('region', r)}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      data.region === r
                        ? 'bg-brand-500/10 text-brand-400 border border-brand-500/30'
                        : 'bg-background border border-border text-muted-foreground hover:border-brand-500/20'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!canProceedStep1}
              className="px-8 py-3 rounded-xl gradient-brand text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Your compliance snapshot */}
      {step === 2 && (
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-brand-400" />
              <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Step 2</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Your <span className="text-brand-400">compliance snapshot</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Based on your inputs, here&apos;s a preliminary risk assessment powered by our MCP analysis engine.
            </p>
          </div>

          {(() => {
            const result = classifyRisk(data);
            const styles = riskStyles[result.riskLevel];
            return (
              <div className="space-y-6">
                {/* Risk Classification Card */}
                <div
                  className={`rounded-2xl ${styles.bg} border ${styles.border} p-8 ${styles.glow}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">
                        Risk Classification
                      </span>
                      <h2 className={`text-3xl font-bold ${styles.text}`}>
                        {result.riskLevel.toUpperCase()}-RISK
                      </h2>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${styles.badge}`}>
                      {result.riskLevel === 'high' ? 'Art. 6' : result.riskLevel === 'limited' ? 'Art. 50' : 'Art. 4'}
                    </span>
                  </div>

                  <div className="rounded-xl bg-background/50 border border-border p-4 mb-6">
                    <p className="text-sm leading-relaxed">
                      Your AI system <strong className="text-foreground">{data.systemName || '(unnamed)'}</strong> in{' '}
                      <strong className="text-foreground">{data.industry}</strong> for{' '}
                      <strong className="text-foreground">{data.useCase}</strong> is likely{' '}
                      <strong className={styles.text}>[{result.riskLevel.toUpperCase()}-RISK]</strong> under EU AI Act{' '}
                      {result.article}.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="rounded-xl bg-background/50 border border-border p-4">
                      <span className="text-xs text-muted-foreground block mb-1">Urgency</span>
                      <span className={`text-lg font-bold capitalize ${styles.text}`}>{result.urgency}</span>
                    </div>
                    <div className="rounded-xl bg-background/50 border border-border p-4">
                      <span className="text-xs text-muted-foreground block mb-1">Compliance Deadline</span>
                      <span className="text-lg font-bold">{result.deadlineLabel}</span>
                    </div>
                    <div className="rounded-xl bg-background/50 border border-border p-4">
                      <span className="text-xs text-muted-foreground block mb-1">Applicable Regulations</span>
                      <span className="text-lg font-bold">{result.regulations.length}</span>
                    </div>
                  </div>
                </div>

                {/* Applicable Regulations */}
                <div className="rounded-2xl bg-card border border-border p-6">
                  <h3 className="font-semibold mb-4">Applicable Regulations</h3>
                  <div className="space-y-3">
                    {result.regulations.map((reg) => (
                      <div
                        key={reg}
                        className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{reg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="px-6 py-3 rounded-xl bg-card border border-border font-semibold flex items-center gap-2 hover:border-brand-500/30 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-xl gradient-brand text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Roadmap
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Your compliance roadmap */}
      {step === 3 && assessment && (
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-brand-400" />
              <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Step 3</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Your <span className="text-brand-400">compliance roadmap</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A 5-step path to full compliance. Your current position is highlighted based on the assessment.
            </p>
          </div>

          {/* Roadmap Timeline */}
          <div className="space-y-4">
            {ROADMAP_STEPS.map((roadmapStep, i) => {
              const isCurrent = i === currentStepIndex;
              const isComplete = i < currentStepIndex;
              const Icon = roadmapStep.icon;

              return (
                <div key={roadmapStep.step} className="flex gap-4">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isComplete
                          ? 'bg-safety-500 text-white'
                          : isCurrent
                            ? 'gradient-brand text-white glow-brand'
                            : 'bg-card border border-border text-muted-foreground'
                      }`}
                    >
                      {isComplete ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    {i < ROADMAP_STEPS.length - 1 && (
                      <div className={`w-0.5 flex-1 min-h-[2rem] ${isComplete ? 'bg-safety-500' : 'bg-border'}`} />
                    )}
                  </div>

                  {/* Step content */}
                  <div
                    className={`flex-1 rounded-xl p-5 mb-2 transition-all ${
                      isCurrent
                        ? 'bg-brand-500/10 border border-brand-500/30'
                        : 'bg-card border border-border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono text-muted-foreground">
                          Step {roadmapStep.step}
                        </span>
                        <h3
                          className={`font-semibold ${isCurrent ? 'text-brand-400' : isComplete ? 'text-safety-400' : ''}`}
                        >
                          {roadmapStep.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{roadmapStep.description}</p>
                      </div>
                      {isCurrent && (
                        <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-medium">
                          Current
                        </span>
                      )}
                      {isComplete && (
                        <span className="px-3 py-1 rounded-full bg-safety-500/20 text-safety-300 text-xs font-medium">
                          Done
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="rounded-2xl gradient-hero p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start your full compliance scan</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Get a comprehensive audit with technical documentation, risk management framework, and conformity
              assessment preparation — powered by our 218 MCP server network.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-700 font-bold text-lg hover:bg-white/90 transition-colors"
              >
                <Zap className="w-5 h-5" />
                Start Full Scan — £499
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Try Free Scanner
              </a>
            </div>
          </div>

          {/* Back button */}
          <div className="flex justify-start">
            <button
              onClick={handleBack}
              className="px-6 py-3 rounded-xl bg-card border border-border font-semibold flex items-center gap-2 hover:border-brand-500/30 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
