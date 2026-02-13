'use client';

import { useState } from 'react';

const assessmentDomains = [
  { id: 'safety', name: 'Safety Evaluation', icon: '🛡️', metrics: 847, status: 'active', description: 'Behavioral safety testing across ethical scenario spectrums' },
  { id: 'robustness', name: 'Robustness Testing', icon: '🔒', metrics: 1203, status: 'active', description: 'Adversarial red-teaming and vulnerability analysis using SABER-aligned methodology' },
  { id: 'compliance', name: 'Compliance Verification', icon: '📋', metrics: 592, status: 'active', description: 'Responsible AI principles, DARB-aligned standards, EU AI Act, NIST framework compliance' },
  { id: 'bias', name: 'Bias Analysis', icon: '⚖️', metrics: 431, status: 'active', description: 'Demographic parity, equalized odds, fairness metrics' },
  { id: 'explainability', name: 'Explainability', icon: '🔍', metrics: 318, status: 'active', description: 'SHAP, LIME, attention visualization, rule extraction' },
  { id: 'capability', name: 'Capability Assurance', icon: '📊', metrics: 756, status: 'active', description: 'Mathematical foundations and quantified guarantees (AIQ-aligned methodology)' },
];

const ontologyLayers = [
  {
    name: 'Semantic Layer',
    color: 'brand',
    items: ['AI System Entities', 'Safety Properties', 'Assessment Artifacts', 'Relationship Definitions'],
  },
  {
    name: 'Kinetic Layer',
    color: 'safety',
    items: ['Assessment Actions', 'Remediation Functions', 'Governance Operations', 'Workflow Triggers'],
  },
  {
    name: 'Dynamic Layer',
    color: 'threat',
    items: ['Real-time Access Controls', 'Purpose-based Access', 'Classification Controls', 'Context Policies'],
  },
];

const recentAssessments = [
  { id: 'CASA-2026-00147', system: 'NavigationAI v3.2', status: 'APPROVED', score: 94.2, date: '2026-02-12', nation: 'US' },
  { id: 'CASA-2026-00146', system: 'MedicalDiag v1.8', status: 'CONDITIONAL', score: 87.6, date: '2026-02-11', nation: 'UK' },
  { id: 'CASA-2026-00145', system: 'TargetRecog v2.1', status: 'UNDER REVIEW', score: 0, date: '2026-02-10', nation: 'FR' },
  { id: 'CASA-2026-00144', system: 'ChatAssist v4.0', status: 'APPROVED', score: 96.1, date: '2026-02-09', nation: 'DE' },
  { id: 'CASA-2026-00143', system: 'AutoPilot v5.3', status: 'CONDITIONAL', score: 82.3, date: '2026-02-08', nation: 'JP' },
];

export default function CASAPage() {
  const [activeDomain, setActiveDomain] = useState('safety');

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-2xl">🏛️</div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">CASA</h1>
              <p className="text-muted-foreground">Council AI Safety Assessments — Intelligence &amp; Analytics Layer</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Inspired by enterprise intelligence platforms, CASA ingests AI telemetry from heterogeneous sources,
            maintains a dynamic ontology for AI governance, and provides the intelligence foundation
            for the entire SOAI certification pipeline.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {[
            { label: 'Systems Assessed', value: '1,247' },
            { label: 'Active Assessments', value: '38' },
            { label: 'Ontology Entities', value: '47,832' },
            { label: 'Data Sources', value: '156' },
            { label: 'Nations Connected', value: '40+' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-400">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Assessment Domains */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Assessment Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assessmentDomains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`text-left p-5 rounded-xl border transition-all ${
                  activeDomain === domain.id
                    ? 'border-brand-500 bg-brand-500/10 ring-1 ring-brand-500/30'
                    : 'border-border bg-card hover:border-brand-500/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{domain.icon}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-safety-500/20 text-safety-400">
                    {domain.status}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{domain.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{domain.description}</p>
                <div className="text-sm text-brand-400 font-medium">{domain.metrics.toLocaleString()} metrics indexed</div>
              </button>
            ))}
          </div>
        </div>

        {/* Three-Layer Ontology */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Dynamic Ontology-Based Data Model</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Three-layer ontology specifically designed for AI governance, providing semantic understanding,
            kinetic action capability, and dynamic security enforcement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ontologyLayers.map((layer) => (
              <div key={layer.name} className="bg-card border border-border rounded-xl p-6">
                <h3 className={`font-semibold mb-4 text-${layer.color}-400`}>{layer.name}</h3>
                <div className="space-y-2">
                  {layer.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${layer.color}-400`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Integration Pipeline */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Data Integration Pipeline</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              {[
                { step: 'Ingest', desc: 'AI telemetry, benchmarks, incident reports' },
                { step: 'Transform', desc: 'Ontology mapping, entity resolution' },
                { step: 'Analyze', desc: 'Pattern detection, cross-reference' },
                { step: 'Store', desc: 'Cell-level security, provenance tracking' },
                { step: 'Distribute', desc: '40-nation certified access' },
              ].map((phase, i) => (
                <div key={phase.step} className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-sm mx-auto mb-1">
                      {i + 1}
                    </div>
                    <div className="font-semibold text-foreground">{phase.step}</div>
                    <div className="text-xs text-muted-foreground max-w-[140px]">{phase.desc}</div>
                  </div>
                  {i < 4 && <div className="hidden md:block text-muted-foreground">→</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Assessments */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Assessments</h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-3 font-medium text-muted-foreground">ID</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">System</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Nation</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Score</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentAssessments.map((a) => (
                  <tr key={a.id} className="border-t border-border hover:bg-muted/10 transition-colors">
                    <td className="p-3 font-mono text-xs text-brand-400">{a.id}</td>
                    <td className="p-3 font-medium">{a.system}</td>
                    <td className="p-3">{a.nation}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        a.status === 'APPROVED' ? 'bg-safety-500/20 text-safety-400' :
                        a.status === 'CONDITIONAL' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-brand-500/20 text-brand-400'
                      }`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="p-3">{a.score > 0 ? `${a.score}%` : '—'}</td>
                    <td className="p-3 text-muted-foreground">{a.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
