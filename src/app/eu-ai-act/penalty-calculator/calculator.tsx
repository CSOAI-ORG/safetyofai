'use client';

import { useState, useMemo } from 'react';
import {
  Scale,
  AlertTriangle,
  ArrowRight,
  Calculator,
  ChevronDown,
  Building2,
  Shield,
  Zap,
  TrendingUp,
  Info,
  CheckCircle2,
  BadgeAlert,
  FileText,
} from 'lucide-react';

type ViolationType = 'prohibited' | 'high-risk' | 'misleading';
type CompanySize = 'startup' | 'sme' | 'large';

interface ViolationConfig {
  label: string;
  percentage: number;
  fixedAmount: number;
  article: string;
  description: string;
  examples: string[];
  color: string;
}

const VIOLATIONS: Record<ViolationType, ViolationConfig> = {
  prohibited: {
    label: 'Prohibited AI Practices (Article 5)',
    percentage: 7,
    fixedAmount: 35_000_000,
    article: 'Article 99(3)',
    description: 'Deploying AI systems classified as posing unacceptable risk — social scoring, manipulation of vulnerable persons, unauthorised real-time biometric identification.',
    examples: ['Social scoring systems', 'Manipulation of vulnerable groups', 'Unauthorised real-time biometric ID', 'Emotion recognition in workplaces'],
    color: 'red',
  },
  'high-risk': {
    label: 'High-Risk / Transparency Violations',
    percentage: 3,
    fixedAmount: 15_000_000,
    article: 'Article 99(4)',
    description: 'Non-compliance with high-risk AI system requirements or Article 50 transparency obligations — risk management, data governance, human oversight, watermarking.',
    examples: ['Missing conformity assessment', 'Inadequate data governance', 'No human oversight mechanism', 'Failure to watermark AI content'],
    color: 'yellow',
  },
  misleading: {
    label: 'Misleading Information to Authorities',
    percentage: 1,
    fixedAmount: 7_500_000,
    article: 'Article 99(5)',
    description: 'Supplying incorrect, incomplete, or misleading information to notified bodies or national competent authorities.',
    examples: ['False conformity declarations', 'Incomplete technical documentation', 'Misleading incident reports'],
    color: 'blue',
  },
};

const SIZE_MULTIPLIERS: Record<CompanySize, { label: string; multiplier: number; description: string }> = {
  startup: { label: 'Startup (< €2M revenue, < 50 employees)', multiplier: 0.3, description: 'SME/startup proportionate cap applies — lower of percentage or fixed amount' },
  sme: { label: 'SME (< €50M revenue, < 250 employees)', multiplier: 0.6, description: 'SME proportionate cap applies — lower of percentage or fixed amount' },
  large: { label: 'Large Enterprise (≥ €50M revenue)', multiplier: 1.0, description: 'Full penalty exposure — whichever is higher applies' },
};

function formatEUR(amount: number): string {
  if (amount >= 1_000_000_000) return `€${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000) return `€${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000) return `€${(amount / 1_000).toFixed(0)}K`;
  return `€${amount.toFixed(0)}`;
}

function formatEURFull(amount: number): string {
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
}

export default function PenaltyCalculator() {
  const [turnover, setTurnover] = useState<string>('');
  const [violationType, setViolationType] = useState<ViolationType>('prohibited');
  const [companySize, setCompanySize] = useState<CompanySize>('large');
  const [aiSystemsCount, setAiSystemsCount] = useState<string>('1');
  const [priorViolations, setPriorViolations] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const turnoverNum = parseFloat(turnover.replace(/[^0-9.]/g, '')) || 0;
  const systemsNum = parseInt(aiSystemsCount) || 1;

  const results = useMemo(() => {
    if (!showResults || turnoverNum <= 0) return null;

    const config = VIOLATIONS[violationType];
    const sizeConfig = SIZE_MULTIPLIERS[companySize];

    const percentageAmount = turnoverNum * (config.percentage / 100);
    const fixedAmount = config.fixedAmount;

    let maxPenalty: number;
    let calculationMethod: string;

    if (companySize === 'startup' || companySize === 'sme') {
      // SME/startup cap: lower of percentage or fixed amount
      maxPenalty = Math.min(percentageAmount, fixedAmount);
      calculationMethod = 'SME cap applied — lower of percentage or fixed amount';
    } else {
      // Large enterprise: whichever is higher
      maxPenalty = Math.max(percentageAmount, fixedAmount);
      calculationMethod = 'Full penalty — whichever is higher applies';
    }

    // Risk-adjusted estimate
    let riskMultiplier = sizeConfig.multiplier;
    if (priorViolations) riskMultiplier *= 1.5;
    if (systemsNum >= 6) riskMultiplier *= 1.5;
    else if (systemsNum >= 2) riskMultiplier *= 1.0 + (systemsNum - 1) * 0.1;

    riskMultiplier = Math.min(riskMultiplier, 1.5);
    const riskAdjusted = maxPenalty * riskMultiplier;

    const auditCost = 5000;
    const auditMultiplier = Math.round(maxPenalty / auditCost);

    return {
      percentageAmount,
      fixedAmount,
      maxPenalty,
      calculationMethod,
      riskAdjusted,
      riskMultiplier,
      auditCost,
      auditMultiplier,
      config,
      sizeConfig,
    };
  }, [showResults, turnoverNum, violationType, companySize, systemsNum, priorViolations]);

  const handleCalculate = () => {
    if (turnoverNum > 0) setShowResults(true);
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <a href="/eu-ai-act" className="inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300 mb-6 transition-colors">
              <ChevronDown className="w-4 h-4 -rotate-90" />
              Back to EU AI Act Guide
            </a>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
              <Scale className="w-3.5 h-3.5" />
              Article 99 Penalty Framework
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">EU AI Act</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Penalty Calculator
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Calculate your potential non-compliance penalties under Regulation (EU) 2024/1689. Fines up to <strong className="text-foreground">€35M or 7% of global revenue</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
              {[
                { value: '7%', label: 'Max of Turnover' },
                { value: '€35M', label: 'Max Fixed Fine' },
                { value: 'Art. 99', label: 'Legal Basis' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-red-400">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Calculate Your Exposure</h2>
                <p className="text-sm text-muted-foreground">Enter your company details below</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Annual Global Turnover */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Annual Global Turnover (EUR)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">€</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={turnover}
                    onChange={(e) => { setTurnover(e.target.value); setShowResults(false); }}
                    placeholder="e.g. 50,000,000"
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">
                  Total worldwide annual turnover for the preceding financial year (Article 99(1))
                </p>
              </div>

              {/* Violation Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Violation Type</label>
                <div className="space-y-3">
                  {(Object.entries(VIOLATIONS) as [ViolationType, ViolationConfig][]).map(([key, config]) => (
                    <button
                      key={key}
                      onClick={() => { setViolationType(key); setShowResults(false); }}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        violationType === key
                          ? config.color === 'red'
                            ? 'border-red-500/50 bg-red-500/10'
                            : config.color === 'yellow'
                            ? 'border-yellow-500/50 bg-yellow-500/10'
                            : 'border-brand-500/50 bg-brand-500/10'
                          : 'border-border bg-background hover:border-brand-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{config.label}</span>
                        <span className={`text-sm font-mono font-bold ${
                          config.color === 'red' ? 'text-red-400' :
                          config.color === 'yellow' ? 'text-yellow-400' :
                          'text-brand-400'
                        }`}>
                          {config.percentage}% / {formatEUR(config.fixedAmount)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{config.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium mb-2">Company Size</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {(Object.entries(SIZE_MULTIPLIERS) as [CompanySize, typeof SIZE_MULTIPLIERS[CompanySize]][]).map(([key, config]) => (
                    <button
                      key={key}
                      onClick={() => { setCompanySize(key); setShowResults(false); }}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        companySize === key
                          ? 'border-brand-500/50 bg-brand-500/10'
                          : 'border-border bg-background hover:border-brand-500/30'
                      }`}
                    >
                      <Building2 className={`w-4 h-4 mb-2 ${companySize === key ? 'text-brand-400' : 'text-muted-foreground'}`} />
                      <span className="text-sm font-medium block">{config.label.split('(')[0].trim()}</span>
                      <span className="text-xs text-muted-foreground">({config.label.split('(')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of AI Systems */}
              <div>
                <label className="block text-sm font-medium mb-2">Number of AI Systems Affected</label>
                <input
                  type="number"
                  min="1"
                  value={aiSystemsCount}
                  onChange={(e) => { setAiSystemsCount(e.target.value); setShowResults(false); }}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all"
                />
              </div>

              {/* Prior Violations */}
              <div>
                <label className="block text-sm font-medium mb-2">Prior EU AI Act Violations</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: false, label: 'No', icon: CheckCircle2, color: 'safety' },
                    { value: true, label: 'Yes', icon: BadgeAlert, color: 'red' },
                  ].map((opt) => (
                    <button
                      key={String(opt.value)}
                      onClick={() => { setPriorViolations(opt.value); setShowResults(false); }}
                      className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                        priorViolations === opt.value
                          ? opt.value
                            ? 'border-red-500/50 bg-red-500/10'
                            : 'border-safety-500/50 bg-safety-500/10'
                          : 'border-border bg-background hover:border-brand-500/30'
                      }`}
                    >
                      <opt.icon className={`w-4 h-4 ${
                        priorViolations === opt.value
                          ? opt.value ? 'text-red-400' : 'text-safety-400'
                          : 'text-muted-foreground'
                      }`} />
                      <span className="text-sm font-medium">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                disabled={turnoverNum <= 0}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Zap className="w-5 h-5" />
                Calculate Maximum Penalty
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      {results && (
        <>
          {/* Main Result */}
          <section className="py-16 bg-card border-t border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Maximum Penalty Exposure
                </div>

                <div className="text-6xl sm:text-7xl font-black text-red-400 mb-4">
                  {formatEUR(results.maxPenalty)}
                </div>

                <p className="text-lg text-muted-foreground mb-2">{results.calculationMethod}</p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500/10 border border-brand-500/20 text-sm mt-4">
                  <Shield className="w-4 h-4 text-brand-400" />
                  <span className="text-brand-300">
                    Your 48-hour compliance audit: <strong className="text-foreground">£5,000</strong>
                    {' '}vs potential fine: <strong className="text-red-400">{formatEUR(results.maxPenalty)}</strong>
                    {' '}— that&apos;s <strong className="text-foreground">{results.auditMultiplier.toLocaleString()}x</strong> the audit cost
                  </span>
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl bg-background border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-brand-400" />
                    <h3 className="font-semibold text-sm">Percentage-Based Fine</h3>
                  </div>
                  <div className="text-3xl font-bold text-brand-400 mb-1">
                    {formatEUR(results.percentageAmount)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {results.config.percentage}% of {formatEUR(turnoverNum)} global turnover
                  </p>
                  <div className="mt-3 text-xs font-mono text-brand-400 bg-brand-500/10 px-3 py-1.5 rounded-lg inline-block">
                    {results.config.article}
                  </div>
                </div>

                <div className="rounded-xl bg-background border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="w-4 h-4 text-brand-400" />
                    <h3 className="font-semibold text-sm">Fixed Amount Alternative</h3>
                  </div>
                  <div className="text-3xl font-bold text-brand-400 mb-1">
                    {formatEUR(results.fixedAmount)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Statutory maximum fixed fine for this violation tier
                  </p>
                  <div className="mt-3 text-xs font-mono text-brand-400 bg-brand-500/10 px-3 py-1.5 rounded-lg inline-block">
                    {results.config.article}
                  </div>
                </div>
              </div>

              {/* Calculation Breakdown */}
              <div className="rounded-xl bg-background border border-border p-6 mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-400" />
                  Calculation Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Violation type</span>
                    <span className="text-sm font-medium">{results.config.label}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Annual global turnover</span>
                    <span className="text-sm font-mono">{formatEURFull(turnoverNum)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Percentage-based ({results.config.percentage}%)</span>
                    <span className="text-sm font-mono">{formatEURFull(results.percentageAmount)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Fixed amount alternative</span>
                    <span className="text-sm font-mono">{formatEURFull(results.fixedAmount)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Company size</span>
                    <span className="text-sm">{SIZE_MULTIPLIERS[companySize].label.split('(')[0].trim()}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">SME/startup cap</span>
                    <span className={`text-sm font-medium ${companySize !== 'large' ? 'text-safety-400' : 'text-muted-foreground'}`}>
                      {companySize !== 'large' ? 'Applied (lower of two)' : 'Not applicable'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">AI systems affected</span>
                    <span className="text-sm font-mono">{systemsNum}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Prior violations</span>
                    <span className={`text-sm font-medium ${priorViolations ? 'text-red-400' : 'text-safety-400'}`}>
                      {priorViolations ? 'Yes — 1.5x multiplier' : 'None'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-semibold">Maximum statutory penalty</span>
                    <span className="text-sm font-bold text-red-400 font-mono">{formatEURFull(results.maxPenalty)}</span>
                  </div>
                </div>
              </div>

              {/* Risk-Adjusted Estimate */}
              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-400 mb-2">Risk-Adjusted Estimate</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Based on your company size ({SIZE_MULTIPLIERS[companySize].label.split('(')[0].trim().toLowerCase()}), 
                      {priorViolations ? ' prior violations,' : ' no prior violations,'} 
                      and {systemsNum} AI system{systemsNum > 1 ? 's' : ''} affected, 
                      the estimated enforcement probability adjusts the maximum penalty:
                    </p>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">
                      {formatEUR(results.riskAdjusted)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Risk multiplier: {results.riskMultiplier.toFixed(2)}x — This is an estimate based on typical enforcement patterns, not a legal prediction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Article References */}
              <div className="rounded-xl bg-background border border-border p-6 mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Info className="w-4 h-4 text-brand-400" />
                  Legal References
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Article 99(3) — Prohibited Practices:</strong> Fines up to €35,000,000 or 7% of total worldwide annual turnover for the preceding financial year, whichever is higher. Applies to violations of Article 5 (prohibited AI practices).
                  </p>
                  <p>
                    <strong className="text-foreground">Article 99(4) — High-Risk & Transparency:</strong> Fines up to €15,000,000 or 3% of total worldwide annual turnover, whichever is higher. Applies to non-compliance with Articles 8–15 (high-risk requirements) and Article 50 (transparency obligations).
                  </p>
                  <p>
                    <strong className="text-foreground">Article 99(5) — Misleading Information:</strong> Fines up to €7,500,000 or 1% of total worldwide annual turnover, whichever is higher. Applies to supplying incorrect information to notified bodies or national competent authorities.
                  </p>
                  <p>
                    <strong className="text-foreground">Article 99(6) — SME Proportionality:</strong> When calculating fines for SMEs and startups, the applicable cap shall be whichever of the following is lower: the percentage of turnover or the fixed amount. This ensures proportionate enforcement.
                  </p>
                  <p className="text-xs italic">
                    Note: These calculations are for informational purposes only and do not constitute legal advice. Actual penalties depend on the specific circumstances of the violation, cooperation with authorities, and the enforcement approach of the relevant national competent authority.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl bg-card border border-brand-500/20 p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">
                  Avoid a <span className="text-red-400">{formatEUR(results.maxPenalty)}</span> Fine
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
                  A SafetyOf.AI compliance audit costs just <strong className="text-foreground">£5,000</strong> and delivers a full gap analysis in 48 hours. 
                  That&apos;s <strong className="text-foreground">{results.auditMultiplier.toLocaleString()}x less</strong> than your potential penalty exposure.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
                  >
                    <Shield className="w-5 h-5" />
                    Book Your £5,000 Audit
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/eu-ai-act"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border font-semibold hover:bg-accent transition-colors"
                  >
                    Full EU AI Act Guide
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Penalty Tier Reference (always shown) */}
      {!showResults && (
        <section className="py-16 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Article 99 <span className="text-brand-400">Penalty Tiers</span>
            </h2>

            <div className="space-y-4 mb-12">
              {[
                {
                  violation: 'Prohibited AI Practices (Article 5)',
                  fine: '€35M or 7%',
                  article: 'Article 99(3)',
                  description: 'Deploying AI systems classified as posing unacceptable risk.',
                  color: 'red',
                },
                {
                  violation: 'High-Risk & Transparency Violations',
                  fine: '€15M or 3%',
                  article: 'Article 99(4)',
                  description: 'Non-compliance with high-risk system requirements or Article 50 transparency obligations.',
                  color: 'yellow',
                },
                {
                  violation: 'Misleading Information to Authorities',
                  fine: '€7.5M or 1%',
                  article: 'Article 99(5)',
                  description: 'Supplying incorrect or misleading information to notified bodies or national authorities.',
                  color: 'blue',
                },
              ].map((tier) => (
                <div key={tier.violation} className={`rounded-xl border p-6 ${
                  tier.color === 'red' ? 'border-red-500/30 bg-red-500/5' :
                  tier.color === 'yellow' ? 'border-yellow-500/30 bg-yellow-500/5' :
                  'border-brand-500/30 bg-brand-500/5'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-semibold">{tier.violation}</h3>
                      <span className="text-xs font-mono text-brand-400">{tier.article}</span>
                    </div>
                    <span className={`text-xl font-bold ${
                      tier.color === 'red' ? 'text-red-400' :
                      tier.color === 'yellow' ? 'text-yellow-400' :
                      'text-brand-400'
                    }`}>
                      {tier.fine}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">
                Enter your details above to calculate your specific penalty exposure under each tier.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Penalty Calculator <span className="text-brand-400">FAQ</span>
          </h2>

          <div className="space-y-3">
            {[
              {
                question: 'How are EU AI Act fines calculated?',
                answer: 'Under Article 99, fines are calculated as either a percentage of total worldwide annual turnover for the preceding financial year or a fixed amount, whichever is higher (or for SMEs, whichever is lower). The percentage varies by violation type: 7% for prohibited practices, 3% for high-risk/transparency violations, and 1% for misleading information.',
              },
              {
                question: 'What is the SME/startup cap?',
                answer: 'Article 99(6) provides proportionate treatment for SMEs and startups. For these entities, the fine cap is the lower of the percentage-based amount or the fixed amount — rather than the higher of the two. This ensures penalties are proportionate to the company\'s size and resources.',
              },
              {
                question: 'When do these penalties apply?',
                answer: 'The EU AI Act entered into force on 1 August 2024, with obligations phased in through August 2027. Enforcement of penalties follows each phase: prohibited practices (Feb 2025), GPAI obligations (Aug 2025), high-risk and transparency (Aug 2026), and Annex I systems (Aug 2027).',
              },
              {
                question: 'Can I reduce my penalty exposure?',
                answer: 'Yes. Article 99 considers mitigating factors including: the nature, gravity, and duration of the violation; whether the provider/deployer took corrective action; degree of cooperation with authorities; and whether the violation was intentional or negligent. Proactive compliance significantly reduces penalty risk.',
              },
              {
                question: 'How does this compare to GDPR fines?',
                answer: 'EU AI Act fines can be higher than GDPR fines in absolute terms. GDPR caps at €20M or 4% of turnover (Article 83). The EU AI Act reaches €35M or 7% for prohibited practices — making it potentially the most severe technology regulation penalty framework globally.',
              },
            ].map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      {!showResults && (
        <section className="py-20 border-t border-border">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Don&apos;t Risk a <span className="text-red-400">€35M Fine</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              SafetyOf.AI provides end-to-end EU AI Act compliance tooling — automated risk classification, gap analysis, and continuous monitoring. Our 48-hour audit identifies all compliance gaps for just £5,000.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
              >
                <Shield className="w-5 h-5" />
                Book Compliance Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/eu-ai-act"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border font-semibold hover:bg-accent transition-colors"
              >
                Full EU AI Act Guide
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function FaqItem({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-accent/50 transition-colors"
      >
        <span className="font-medium pr-4">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}
