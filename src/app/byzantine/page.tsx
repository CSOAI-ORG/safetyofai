'use client';

import { useState, useEffect } from 'react';
import { Brain, Globe, Shield, Activity, CheckCircle2, Radio, Cpu, Network, Zap, Server } from 'lucide-react';

// Seeded PRNG for SSR/client hydration consistency
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

interface Agent {
  id: string;
  name: string;
  family: 'A' | 'B' | 'C';
  familyLabel: string;
  region: string;
  status: 'online' | 'offline' | 'degraded';
  uptime: number;
  lastVerification: string;
  verificationsToday: number;
  consensusAccuracy: number;
}

const AGENTS: Agent[] = [
  // Family A — Transformer Variants
  ...['GPT-4 Turbo', 'Claude 3.5 Sonnet', 'Gemini 2.0 Flash', 'Llama 3.1 70B', 'Mistral Large', 'Command R+', 'Deepseek V3', 'Qwen 2.5 72B', 'Yi-34B', 'Falcon 180B', 'DBRX Instruct'].map((name, i) => ({
    id: `A-${i + 1}`,
    name,
    family: 'A' as const,
    familyLabel: 'Transformer',
    region: ['US-East', 'US-West', 'EU-West', 'EU-Central', 'AP-Southeast', 'AP-Northeast', 'SA-East', 'AF-South', 'ME-Central', 'CA-Central', 'UK-South'][i],
    status: 'online' as const,
    uptime: 99.9 + seededRandom(i * 7 + 1) * 0.09,
    lastVerification: `${Math.floor(seededRandom(i * 7 + 2) * 10) + 1}s ago`,
    verificationsToday: Math.floor(seededRandom(i * 7 + 3) * 5000) + 1000,
    consensusAccuracy: 95 + seededRandom(i * 7 + 4) * 4.5,
  })),
  // Family B — Alternative Architectures
  ...['RNN-Safety', 'CNN-Visual', 'GNN-Network', 'Mamba-SSM', 'RWKV-7B', 'RetNet-13B', 'Hyena-7B', 'StripedHyena', 'Griffin-7B', 'xLSTM-Safety', 'KAN-Verify'].map((name, i) => ({
    id: `B-${i + 1}`,
    name,
    family: 'B' as const,
    familyLabel: 'Alternative',
    region: ['US-East', 'US-West', 'EU-West', 'EU-Central', 'AP-Southeast', 'AP-Northeast', 'SA-East', 'AF-South', 'ME-Central', 'CA-Central', 'UK-South'][i],
    status: (i === 7 ? 'degraded' : 'online') as 'online' | 'degraded',
    uptime: 99.5 + seededRandom(i * 7 + 1) * 0.4,
    lastVerification: `${Math.floor(seededRandom(i * 7 + 2) * 15) + 1}s ago`,
    verificationsToday: Math.floor(seededRandom(i * 7 + 3) * 3000) + 800,
    consensusAccuracy: 93 + seededRandom(i * 7 + 4) * 5,
  })),
  // Family C — Symbolic/Hybrid
  ...['ProverBot', 'LEAN-Safety', 'Symbolic-Logic-Engine', 'Neuro-Symbolic-7', 'Bayesian-Safety', 'Causal-AI', 'Knowledge-Graph-V', 'Rule-Engine-Pro', 'Constraint-Solver', 'Formal-Methods-AI', 'Hybrid-Reason'].map((name, i) => ({
    id: `C-${i + 1}`,
    name,
    family: 'C' as const,
    familyLabel: 'Symbolic',
    region: ['US-East', 'US-West', 'EU-West', 'EU-Central', 'AP-Southeast', 'AP-Northeast', 'SA-East', 'AF-South', 'ME-Central', 'CA-Central', 'UK-South'][i],
    status: 'online' as const,
    uptime: 99.7 + seededRandom(i * 7 + 1) * 0.25,
    lastVerification: `${Math.floor(seededRandom(i * 7 + 2) * 20) + 1}s ago`,
    verificationsToday: Math.floor(seededRandom(i * 7 + 3) * 2000) + 500,
    consensusAccuracy: 94 + seededRandom(i * 7 + 4) * 5,
  })),
];

export default function ByzantineCouncilPage() {
  const [selectedFamily, setSelectedFamily] = useState<'all' | 'A' | 'B' | 'C'>('all');
  const [totalVerifications, setTotalVerifications] = useState(1247832);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalVerifications((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filtered = selectedFamily === 'all' ? AGENTS : AGENTS.filter((a) => a.family === selectedFamily);
  const onlineCount = AGENTS.filter((a) => a.status === 'online').length;
  const degradedCount = AGENTS.filter((a) => a.status === 'degraded').length;

  const familyColors = { A: 'text-brand-400 bg-brand-500/10', B: 'text-safety-400 bg-safety-500/10', C: 'text-violet-400 bg-violet-500/10' };
  const statusColors = { online: 'bg-safety-500', offline: 'bg-red-500', degraded: 'bg-amber-500' };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="w-6 h-6 text-brand-400" />
            Byzantine Council
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            33 AI agents across 5 providers (OpenAI, Anthropic, Google, Kimi, DeepSeek) — 22/33 Byzantine consensus
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-safety-400 animate-pulse" />
          <span className="text-sm font-mono text-safety-400">{onlineCount}/33 Online</span>
        </div>
      </div>

      {/* Council Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Total Agents', value: '33', icon: Cpu, color: 'text-brand-400' },
          { label: 'Online', value: onlineCount.toString(), icon: CheckCircle2, color: 'text-safety-400' },
          { label: 'Degraded', value: degradedCount.toString(), icon: Activity, color: 'text-amber-400' },
          { label: 'Verifications Today', value: totalVerifications.toLocaleString(), icon: Shield, color: 'text-brand-400' },
          { label: 'Global Threat Level', value: 'LOW', icon: Globe, color: 'text-safety-400' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-card border border-border p-4">
            <stat.icon className={`w-4 h-4 ${stat.color} mb-2`} />
            <p className="text-xl font-bold font-mono">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Architecture Families */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { family: 'A', label: 'Guardian Group', desc: '11 agents — Safety, Security, Privacy analysis (OpenAI, Anthropic, Google)', icon: Zap },
          { family: 'B', label: 'Arbiter Group', desc: '11 agents — Fairness, Transparency, Accountability (Kimi, DeepSeek, alternative)', icon: Network },
          { family: 'C', label: 'Scribe Group', desc: '11 agents — Documentation, Compliance, Certification (symbolic/hybrid)', icon: Server },
        ].map((f) => (
          <div key={f.family} className="rounded-xl bg-card border border-border p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${familyColors[f.family as 'A' | 'B' | 'C']}`}>
                <f.icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold">{f.label}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
            <div className="mt-3 flex items-center gap-1">
              {AGENTS.filter((a) => a.family === f.family).map((a) => (
                <div key={a.id} className={`w-2 h-2 rounded-full ${statusColors[a.status]}`} title={`${a.name}: ${a.status}`} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4">
        {[
          { key: 'all', label: 'All Agents (33)' },
          { key: 'A', label: 'Family A (11)' },
          { key: 'B', label: 'Family B (11)' },
          { key: 'C', label: 'Family C (11)' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedFamily(tab.key as typeof selectedFamily)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFamily === tab.key
                ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Agent Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((agent) => (
          <div key={agent.id} className="rounded-lg bg-card border border-border p-4 hover:border-brand-500/20 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${statusColors[agent.status]}`} />
                <span className="text-sm font-medium">{agent.name}</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded ${familyColors[agent.family]}`}>
                {agent.familyLabel}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Region</p>
                <p className="font-mono">{agent.region}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Uptime</p>
                <p className="font-mono">{agent.uptime.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-muted-foreground">Verifications</p>
                <p className="font-mono">{agent.verificationsToday.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Accuracy</p>
                <p className="font-mono">{agent.consensusAccuracy.toFixed(1)}%</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Last check: {agent.lastVerification}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
