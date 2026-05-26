'use client';

import { useEffect, useState } from 'react';
import { Calendar, AlertTriangle, CheckCircle2, Clock, Bell, ExternalLink } from 'lucide-react';
import { GOVERNANCE_MCP_STACK } from '@/lib/mcp/governance-stack';

interface CliffDate {
  date: string;
  regulation: string;
  article: string;
  description: string;
  daysUntil: number;
}

export function RegulatoryPageClient() {
  const [cliffs, setCliffs] = useState<CliffDate[]>([
    { date: '2026-11-02', regulation: 'EU AI Act', article: 'Article 50', description: 'Watermarking & deepfake disclosure deadline', daysUntil: 181 },
    { date: '2026-08-02', regulation: 'EU AI Act', article: 'Article 53', description: 'High-risk AI system requirements', daysUntil: 89 },
    { date: '2027-05-02', regulation: 'EU AI Act', article: 'Article 16', description: 'Provider obligations & compliance', daysUntil: 362 },
    { date: '2026-12-31', regulation: 'DORA', article: 'ICT Risk', description: 'Financial entity ICT risk management', daysUntil: 240 },
    { date: '2026-09-15', regulation: 'GDPR', article: 'AI Processing', description: 'AI-specific data protection guidelines', daysUntil: 133 },
  ]);

  const activeTools = GOVERNANCE_MCP_STACK.filter((t) => t.status === 'active');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Regulatory Tracker</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Live Regulatory <span className="text-brand-400">Cliff Dates</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Powered by <code className="text-brand-300">regulatory-webhook-mcp</code> & <code className="text-brand-300">meok-omnibus-tracker-mcp</code>.
          Real-time updates from EU, US, and global AI governance bodies.
        </p>
      </div>

      {/* Cliff Dates Timeline */}
      <div className="grid gap-4 mb-12">
        {cliffs.map((cliff) => (
          <div key={cliff.article} className="rounded-xl bg-card border border-border p-6 hover:border-brand-500/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  cliff.daysUntil < 100 ? 'bg-red-500/10 text-red-400' : 'bg-brand-500/10 text-brand-400'
                }`}>
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-brand-400">{cliff.regulation}</span>
                    <span className="text-xs text-muted-foreground">{cliff.article}</span>
                  </div>
                  <h3 className="font-semibold">{cliff.description}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Deadline: {cliff.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  cliff.daysUntil < 100 ? 'bg-red-500/10 text-red-400' : 'bg-safety-500/10 text-safety-400'
                }`}>
                  {cliff.daysUntil} days left
                </span>
                <button className="p-2 rounded-lg bg-brand-500/10 text-brand-400 hover:bg-brand-500/20 transition-colors">
                  <Bell className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Integrated MCP Tools */}
      <div className="rounded-2xl bg-card border border-border p-8">
        <h2 className="text-xl font-semibold mb-6">MCP Tools Powering This Dashboard</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTools.map((tool) => (
            <div key={tool.name} className="rounded-lg bg-background border border-border p-4 hover:border-brand-500/20 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium">{tool.name.replace('-mcp', '')}</h3>
                <CheckCircle2 className="w-4 h-4 text-safety-500" />
              </div>
              <p className="text-xs text-muted-foreground mb-3">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brand-400">{tool.a2aAgent}</span>
                <a href={tool.repo} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-brand-400 transition-colors flex items-center gap-1">
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
