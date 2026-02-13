'use client';

import { useState } from 'react';

type ProgramTab = 'asimov' | 'saber' | 'aiq';

const saberVulnClasses = [
  {
    category: 'Robustness Failures',
    items: ['Adversarial Examples', 'Distribution Shift', 'Edge Cases', 'Cascading Failures'],
  },
  {
    category: 'Security Failures',
    items: ['Backdoored Models', 'Data Poisoning', 'Model Stealing', 'Prompt Injection'],
  },
  {
    category: 'Physical Failures',
    items: ['Sensor Spoofing', 'Environmental Factors', 'Timing Attacks', 'Hardware Faults'],
  },
];

export default function ProgramsPage() {
  const [tab, setTab] = useState<ProgramTab>('asimov');

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-2xl">🔬</div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Safety Programs</h1>
              <p className="text-muted-foreground">AI Safety Assessment Methodology — Aligned with Leading Research Frameworks</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            SOAI&apos;s assessment pipeline is aligned with methodologies from leading AI safety research programs:
            ASIMOV-style ethical evaluation, SABER-style adversarial red-teaming, and AIQ-style
            mathematical capability guarantees.
          </p>
        </div>

        {/* Pipeline Overview */}
        <div className="bg-card border border-border rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold mb-4">Safety Assessment Pipeline</h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            {[
              { name: 'ASIMOV', desc: 'Ethical Scenario Testing', icon: '⚖️', color: 'brand' },
              { name: 'SABER', desc: 'Adversarial Red-Teaming', icon: '🗡️', color: 'threat' },
              { name: 'AIQ', desc: 'Quantified Evaluation', icon: '📐', color: 'safety' },
              { name: 'Synthesis', desc: 'Multi-Dimensional Results', icon: '🧩', color: 'yellow' },
              { name: 'Certification', desc: 'DARB-Aligned Decision', icon: '🏅', color: 'brand' },
            ].map((step, i) => (
              <div key={step.name} className="flex items-center gap-3">
                <div className="text-center">
                  <div className={`w-14 h-14 rounded-xl bg-${step.color}-500/20 flex items-center justify-center text-2xl mb-1 mx-auto`}>
                    {step.icon}
                  </div>
                  <div className="text-sm font-semibold">{step.name}</div>
                  <div className="text-xs text-muted-foreground">{step.desc}</div>
                </div>
                {i < 4 && <div className="hidden md:block text-muted-foreground text-xl">→</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Program Tabs */}
        <div className="flex gap-1 mb-8 bg-muted/30 rounded-lg p-1 w-fit">
          {([
            { id: 'asimov' as ProgramTab, label: 'ASIMOV', sub: 'Ethical Benchmarking' },
            { id: 'saber' as ProgramTab, label: 'SABER', sub: 'Red-Teaming' },
            { id: 'aiq' as ProgramTab, label: 'AIQ', sub: 'Capability Guarantees' },
          ]).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 text-sm rounded-md font-medium transition-colors ${
                tab === t.id ? 'bg-brand-500 text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'asimov' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">ASIMOV-Aligned — Ethical Benchmarking Framework</h2>
              <p className="text-sm text-muted-foreground">
                Inspired by the DARPA ASIMOV program methodology. Quantitative benchmarks for evaluating
                ethical difficulty of AI system use cases. Three evaluation frameworks adapted for SOAI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { name: 'RESPECT Framework', desc: 'LLM-guided generative modeling for ethical scenario generation. Rapid testing of scenario variations with sensitivity analysis.', metric: 'Ethical Sensitivity Score' },
                { name: 'GEARS System', desc: 'Knowledge graph approach encoding decision context, commander intent, ethical values, and measurable outcomes.', metric: 'Difficulty Rating' },
                { name: 'Formal Decomposition', desc: 'Military values decomposed into observable behaviors, measurable properties, and environmental conditions.', metric: 'Compliance Index' },
              ].map((fw) => (
                <div key={fw.name} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-2">{fw.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{fw.desc}</p>
                  <div className="text-xs text-brand-400 font-medium">Primary metric: {fw.metric}</div>
                </div>
              ))}
            </div>

            {/* ASIMOV Metrics */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">ASIMOV Metrics in SOAI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Ethical Sensitivity Score', desc: 'How performance degrades with scenario difficulty (0-100)', value: '87/100' },
                  { name: 'Difficulty Range Coverage', desc: 'Percentage of scenario spectrum tested', value: '94%' },
                  { name: 'Edge Case Identification', desc: 'Specific failure parameters detected', value: '23 found' },
                  { name: 'Decomposition Fidelity', desc: 'How well formal decomposition matches values', value: '91%' },
                ].map((m) => (
                  <div key={m.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/10">
                    <div>
                      <div className="text-sm font-medium">{m.name}</div>
                      <div className="text-xs text-muted-foreground">{m.desc}</div>
                    </div>
                    <div className="text-lg font-bold text-brand-400">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'saber' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">SABER-Aligned — Adversarial Red-Teaming Framework</h2>
              <p className="text-sm text-muted-foreground">
                Inspired by the DARPA SABER program methodology. Comprehensive AI red-teaming framework
                with four-phase methodology from baseline through remediation verification.
              </p>
            </div>

            {/* Red Team Phases */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { phase: 'Phase 1', name: 'Baseline Assessment', desc: 'Performance metrics, standard evaluation, behavior profiling' },
                { phase: 'Phase 2', name: 'Adversarial Exploration', desc: 'Physical, AI, cyber attacks, electronic warfare' },
                { phase: 'Phase 3', name: 'Vulnerability Validation', desc: 'Reproduce findings, exploit difficulty, root causes' },
                { phase: 'Phase 4', name: 'Remediation Verification', desc: 'Fix validation, regression testing, side-channel checks' },
              ].map((p) => (
                <div key={p.phase} className="bg-card border border-border rounded-xl p-5">
                  <div className="text-xs text-brand-400 font-medium mb-1">{p.phase}</div>
                  <h3 className="font-semibold text-sm mb-2">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Vulnerability Classes */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Vulnerability Classification Taxonomy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {saberVulnClasses.map((vc) => (
                  <div key={vc.category} className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-semibold text-sm mb-3 text-threat-400">{vc.category}</h4>
                    <div className="space-y-2">
                      {vc.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-threat-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remediation Flow */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Remediation Workflow</h3>
              <div className="space-y-3 text-sm">
                {[
                  { step: 'Vulnerability Discovered', desc: 'Record in CASA with severity, reproducer, root cause' },
                  { step: 'Developer Notification', desc: 'Automated alert with fix recommendations' },
                  { step: 'AI3 Re-Test', desc: 'Red-Team agents execute original + variations' },
                  { step: 'Results Classified', desc: 'Fixed / Mitigated / Partially Fixed / Masked' },
                  { step: 'Certification Updated', desc: 'Reflect remediation status in DARB certificate' },
                ].map((s, i) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-threat-500/20 flex items-center justify-center text-xs font-bold text-threat-400 flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-medium">{s.step}</div>
                      <div className="text-xs text-muted-foreground">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'aiq' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">AIQ-Aligned — Quantified Evaluation Framework</h2>
              <p className="text-sm text-muted-foreground">
                Inspired by the DARPA AIQ program methodology. Mathematical foundations for guaranteeing
                AI capabilities. Two technical areas: TA1 (mathematical guarantees) and TA2 (evaluation at scale).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* TA1 */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-1 text-brand-400">TA1: Mathematical Foundations</h3>
                <p className="text-xs text-muted-foreground mb-4">Pure/applied mathematicians, theoretical CS, statisticians</p>
                <div className="space-y-3">
                  {[
                    { name: 'Formal Verification', desc: 'Prove input-output behavior bounds, safety properties' },
                    { name: 'Uncertainty Quantification', desc: 'Bayesian posteriors, frequentist CIs, distribution-free guarantees' },
                    { name: 'Complexity Theory', desc: 'What can/cannot be efficiently verified' },
                    { name: 'Game Theory', desc: 'Attacker-defender dynamics, optimal test strategies' },
                  ].map((r) => (
                    <div key={r.name} className="p-3 rounded-lg bg-muted/10">
                      <div className="text-sm font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TA2 */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-1 text-safety-400">TA2: Model Evaluation at Scale</h3>
                <p className="text-xs text-muted-foreground mb-4">Computational, cognitive, behavioral scientists</p>
                <div className="space-y-3">
                  {[
                    { name: 'Accuracy & Reliability', desc: 'Generalization, robustness, confidence calibration' },
                    { name: 'Safety & Alignment', desc: 'Constraint adherence, harmful output avoidance' },
                    { name: 'Interpretability', desc: 'SHAP, attention, counterfactual explanations' },
                    { name: 'Fairness & Bias', desc: 'Demographic parity, equalized odds, mitigation' },
                  ].map((d) => (
                    <div key={d.name} className="p-3 rounded-lg bg-muted/10">
                      <div className="text-sm font-medium">{d.name}</div>
                      <div className="text-xs text-muted-foreground">{d.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sample Guarantees */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Sample Quantified Guarantees</h3>
              <div className="space-y-3 font-mono text-xs">
                {[
                  '✓ System achieves 94.2% ± 2.1% accuracy on ImageNet (95% CI)',
                  '✓ Adversarial robustness > 0.031 (L∞ norm, proven)',
                  '✓ Fairness: demographic parity Δ < 0.05 across genders',
                  '⚠ Caveat: evaluation on RGB images only, no IR testing',
                  '✓ Confidence calibration ECE = 0.024 (well-calibrated)',
                ].map((g, i) => (
                  <div key={i} className={`p-2 rounded ${g.startsWith('⚠') ? 'bg-yellow-500/10 text-yellow-400' : 'bg-safety-500/10 text-safety-400'}`}>
                    {g}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
