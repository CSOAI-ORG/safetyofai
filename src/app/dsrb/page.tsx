'use client';

import { useState } from 'react';

const regions = [
  {
    name: 'North America',
    nations: ['United States', 'Canada'],
    clusters: 2,
    certifications: 847,
    status: 'operational',
  },
  {
    name: 'Europe',
    nations: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Belgium', 'Netherlands', 'Poland', 'Norway', 'Denmark', 'Czech Republic', 'Romania', 'Portugal', 'Greece', 'Hungary'],
    clusters: 5,
    certifications: 1203,
    status: 'operational',
  },
  {
    name: 'Asia-Pacific',
    nations: ['Japan', 'South Korea', 'Australia', 'New Zealand', 'Singapore'],
    clusters: 3,
    certifications: 489,
    status: 'operational',
  },
  {
    name: 'Emerging Partners',
    nations: ['India', 'Brazil', 'UAE', 'Israel', 'Colombia', 'Philippines', 'Thailand', 'Malaysia'],
    clusters: 2,
    certifications: 156,
    status: 'deploying',
  },
];

const certificationChannels = [
  { name: 'Development', description: 'Ongoing evaluation results from active assessments', items: 234, color: 'brand' },
  { name: 'Staging', description: 'Pre-release certification summaries awaiting review', items: 47, color: 'yellow' },
  { name: 'Production', description: 'Approved certifications deployed to nations', items: 1891, color: 'safety' },
  { name: 'Long-Term Support', description: 'Stable certifications for legacy AI systems', items: 312, color: 'muted' },
];

const complianceFrameworks = [
  { name: 'DARB (NATO-aligned)', nations: 31, compliance: 94 },
  { name: 'NIST AI RMF', nations: 5, compliance: 97 },
  { name: 'EU AI Act', nations: 27, compliance: 89 },
  { name: 'ISO/IEC 42001', nations: 40, compliance: 91 },
  { name: 'FedRAMP', nations: 2, compliance: 98 },
  { name: 'JSP 936 (UK)', nations: 1, compliance: 96 },
];

export default function DSRBPage() {
  const [activeRegion, setActiveRegion] = useState('Europe');

  const selectedRegion = regions.find(r => r.name === activeRegion);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-2xl">🌍</div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">DSRB Pipeline</h1>
              <p className="text-muted-foreground">Defence Safety Review Board — 40-Nation Certification Distribution</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Designed for global-scale deployment of AI safety certifications
            across 40+ nations with compliance-aware change management, decentralized distribution,
            and sovereignty-preserving synchronization.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {[
            { label: 'Connected Nations', value: '40+' },
            { label: 'Active Certifications', value: '2,695' },
            { label: 'Regional Clusters', value: '12' },
            { label: 'Compliance Rate', value: '93.4%' },
            { label: 'Air-Gapped Nodes', value: '8' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-400">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certification Release Channels */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Certification Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationChannels.map((ch) => (
              <div key={ch.name} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full bg-${ch.color}-400`} />
                  <h3 className="font-semibold text-sm">{ch.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{ch.description}</p>
                <div className="text-2xl font-bold text-foreground">{ch.items.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Regional Distribution</h2>
          <div className="flex gap-2 mb-4">
            {regions.map((r) => (
              <button
                key={r.name}
                onClick={() => setActiveRegion(r.name)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                  activeRegion === r.name
                    ? 'bg-brand-500 text-white'
                    : 'bg-muted/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
          {selectedRegion && (
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{selectedRegion.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedRegion.status === 'operational'
                    ? 'bg-safety-500/20 text-safety-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {selectedRegion.status.toUpperCase()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-400">{selectedRegion.nations.length}</div>
                  <div className="text-xs text-muted-foreground">Nations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-safety-400">{selectedRegion.clusters}</div>
                  <div className="text-xs text-muted-foreground">Clusters</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{selectedRegion.certifications.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedRegion.nations.map((n) => (
                  <span key={n} className="text-xs bg-muted/30 px-2 py-1 rounded-md text-muted-foreground">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Compliance Framework Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceFrameworks.map((fw) => (
              <div key={fw.name} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-sm">{fw.name}</h3>
                  <span className="text-xs text-muted-foreground">{fw.nations} nations</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full ${fw.compliance >= 95 ? 'bg-safety-500' : fw.compliance >= 90 ? 'bg-brand-500' : 'bg-yellow-500'}`}
                    style={{ width: `${fw.compliance}%` }}
                  />
                </div>
                <div className="text-right text-sm font-medium">{fw.compliance}% compliant</div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Architecture */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Deployment Architecture</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2 text-brand-400">Multi-Cloud</h3>
                <div className="space-y-1 text-muted-foreground text-xs">
                  <div>AWS (US, Europe)</div>
                  <div>Azure (European partners)</div>
                  <div>GCP (Asia-Pacific)</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-safety-400">Classified Networks</h3>
                <div className="space-y-1 text-muted-foreground text-xs">
                  <div>IL3 — Controlled Unclassified</div>
                  <div>IL5 — Higher Sensitivity</div>
                  <div>IL6 — Secret / Classified</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-yellow-400">Air-Gapped</h3>
                <div className="space-y-1 text-muted-foreground text-xs">
                  <div>Disconnected operation capable</div>
                  <div>Cached certification rules</div>
                  <div>Periodic sync when connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
