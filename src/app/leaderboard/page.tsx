'use client';

import { useState } from 'react';

type SortKey = 'rank' | 'casi' | 'awr' | 'injection' | 'leakage' | 'overall';

const models = [
  { rank: 1, name: 'Claude 4 Sonnet', provider: 'Anthropic', casi: 95.1, awr: 93.8, injection: 97.2, leakage: 94.5, overall: 95.2, trend: '+2.1', badge: 'gold' },
  { rank: 2, name: 'GPT-5', provider: 'OpenAI', casi: 93.4, awr: 91.2, injection: 95.8, leakage: 92.1, overall: 93.1, trend: '+4.3', badge: 'gold' },
  { rank: 3, name: 'GPT-5 Nano', provider: 'OpenAI', casi: 91.8, awr: 90.5, injection: 94.1, leakage: 90.8, overall: 91.8, trend: '+1.8', badge: 'gold' },
  { rank: 4, name: 'Gemini 2.5 Pro', provider: 'Google', casi: 90.2, awr: 88.7, injection: 92.4, leakage: 89.3, overall: 90.2, trend: '+3.1', badge: 'silver' },
  { rank: 5, name: 'Claude 3.5 Opus', provider: 'Anthropic', casi: 89.6, awr: 91.3, injection: 91.8, leakage: 88.2, overall: 90.2, trend: '+0.5', badge: 'silver' },
  { rank: 6, name: 'Llama 4', provider: 'Meta', casi: 87.3, awr: 85.1, injection: 88.9, leakage: 86.4, overall: 86.9, trend: '+5.2', badge: 'silver' },
  { rank: 7, name: 'DeepSeek V3', provider: 'DeepSeek', casi: 85.1, awr: 82.4, injection: 86.7, leakage: 84.9, overall: 84.8, trend: '+2.7', badge: 'bronze' },
  { rank: 8, name: 'Mistral Large 3', provider: 'Mistral', casi: 84.2, awr: 81.8, injection: 85.3, leakage: 83.1, overall: 83.6, trend: '+1.4', badge: 'bronze' },
  { rank: 9, name: 'Kimi K2', provider: 'Moonshot', casi: 82.7, awr: 79.5, injection: 83.9, leakage: 81.2, overall: 81.8, trend: '+3.9', badge: 'bronze' },
  { rank: 10, name: 'Qwen 3.5', provider: 'Alibaba', casi: 80.4, awr: 77.8, injection: 82.1, leakage: 79.5, overall: 79.9, trend: '+2.1', badge: 'bronze' },
  { rank: 11, name: 'GPT-4 Turbo', provider: 'OpenAI', casi: 78.9, awr: 76.2, injection: 80.5, leakage: 77.8, overall: 78.4, trend: '-1.2', badge: '' },
  { rank: 12, name: 'Command R+', provider: 'Cohere', casi: 76.3, awr: 73.9, injection: 78.1, leakage: 75.4, overall: 75.9, trend: '+0.8', badge: '' },
];

const attackVectors = [
  { name: 'Direct Prompt Injection', tests: 2847, desc: 'Adversarial prompts designed to override system instructions' },
  { name: 'Indirect Prompt Injection', tests: 1923, desc: 'Hidden instructions in external data sources like documents or web pages' },
  { name: 'Jailbreak Attacks', tests: 3156, desc: 'Techniques to bypass safety filters and content policies' },
  { name: 'FlipAttack (Homoglyph)', tests: 892, desc: 'Unicode homoglyph substitution to evade text-based filters' },
  { name: 'Multi-Turn Manipulation', tests: 1247, desc: 'Gradual context manipulation across conversation turns' },
  { name: 'Data Exfiltration', tests: 1583, desc: 'Attempts to extract training data, PII, or system prompts' },
  { name: 'Tool Misuse', tests: 734, desc: 'Coercing models into misusing available tools or APIs' },
  { name: 'Agentic Workflow Exploit', tests: 561, desc: 'Multi-step autonomous agent manipulation scenarios' },
];

export default function LeaderboardPage() {
  const [sortKey, setSortKey] = useState<SortKey>('rank');
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const sorted = [...models].sort((a, b) => {
    if (sortKey === 'rank') return a.rank - b.rank;
    return (b[sortKey] as number) - (a[sortKey] as number);
  });

  const badgeColor = (badge: string) => {
    if (badge === 'gold') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    if (badge === 'silver') return 'bg-gray-400/20 text-gray-300 border-gray-400/30';
    if (badge === 'bronze') return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    return 'bg-muted/30 text-muted-foreground border-border';
  };

  const scoreColor = (score: number) => {
    if (score >= 90) return 'text-safety-400';
    if (score >= 80) return 'text-brand-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-threat-400';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-2xl">🏆</div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI Model Security Leaderboard</h1>
              <p className="text-muted-foreground">SOAI Security Index — Independent Model Security Rankings</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Models are scored using automated adversarial testing across multiple attack vectors.
            The SOAI Security Index (SSI) measures resilience to prompt injection, data exfiltration,
            jailbreaks, and agentic manipulation. Updated weekly.
          </p>
        </div>

        {/* Methodology Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Models Tested', value: '12' },
            { label: 'Attack Vectors', value: '8' },
            { label: 'Total Tests Run', value: '12,943' },
            { label: 'Last Updated', value: 'Feb 12, 2026' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-400">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Score Definitions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { name: 'SSI Score', desc: 'SOAI Security Index — Overall security posture combining all metrics', color: 'brand' },
            { name: 'Injection Resistance', desc: 'Resilience to prompt injection and jailbreak attacks', color: 'safety' },
            { name: 'Data Leakage', desc: 'Protection against PII extraction and training data exposure', color: 'yellow' },
            { name: 'Agentic Resistance', desc: 'Robustness under autonomous multi-step agent scenarios', color: 'threat' },
          ].map((def) => (
            <div key={def.name} className="bg-card border border-border rounded-xl p-4">
              <div className={`text-sm font-semibold mb-1 text-${def.color}-400`}>{def.name}</div>
              <p className="text-xs text-muted-foreground">{def.desc}</p>
            </div>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="mb-10">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/30">
                  <tr>
                    {[
                      { key: 'rank' as SortKey, label: '#' },
                      { key: 'rank' as SortKey, label: 'Model' },
                      { key: 'overall' as SortKey, label: 'SSI Score' },
                      { key: 'casi' as SortKey, label: 'CASI' },
                      { key: 'injection' as SortKey, label: 'Injection' },
                      { key: 'leakage' as SortKey, label: 'Leakage' },
                      { key: 'awr' as SortKey, label: 'AWR' },
                      { key: 'rank' as SortKey, label: 'Trend' },
                    ].map((col, i) => (
                      <th
                        key={`${col.key}-${i}`}
                        onClick={() => col.key !== 'rank' || i === 0 ? setSortKey(col.key) : null}
                        className={`text-left p-3 font-medium text-muted-foreground ${i > 1 ? 'cursor-pointer hover:text-foreground' : ''}`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((m) => (
                    <tr
                      key={m.name}
                      onClick={() => setSelectedModel(selectedModel === m.name ? null : m.name)}
                      className="border-t border-border hover:bg-muted/10 transition-colors cursor-pointer"
                    >
                      <td className="p-3 font-mono text-xs">
                        <span className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold ${badgeColor(m.badge)}`}>
                          {m.rank}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">{m.name}</div>
                        <div className="text-xs text-muted-foreground">{m.provider}</div>
                      </td>
                      <td className={`p-3 font-bold font-mono ${scoreColor(m.overall)}`}>{m.overall}</td>
                      <td className={`p-3 font-mono text-xs ${scoreColor(m.casi)}`}>{m.casi}</td>
                      <td className={`p-3 font-mono text-xs ${scoreColor(m.injection)}`}>{m.injection}</td>
                      <td className={`p-3 font-mono text-xs ${scoreColor(m.leakage)}`}>{m.leakage}</td>
                      <td className={`p-3 font-mono text-xs ${scoreColor(m.awr)}`}>{m.awr}</td>
                      <td className="p-3">
                        <span className={`text-xs font-mono ${m.trend.startsWith('+') ? 'text-safety-400' : 'text-threat-400'}`}>
                          {m.trend}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Attack Vectors Tested */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Attack Vectors Tested</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {attackVectors.map((av) => (
              <div key={av.name} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{av.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{av.desc}</p>
                <div className="text-lg font-bold text-brand-400">{av.tests.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">tests executed</div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Scoring Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2 text-brand-400">Automated Red-Teaming</h3>
              <p className="text-xs text-muted-foreground">
                Each model is subjected to thousands of automated adversarial attacks across all
                vector categories. Tests are regenerated weekly to prevent overfitting to known patterns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-safety-400">Multi-Dimensional Scoring</h3>
              <p className="text-xs text-muted-foreground">
                Scores reflect both direct attack resistance and behavioral analysis under stress.
                The SSI composite weighs injection resistance (30%), data leakage (25%), agentic resistance (25%),
                and general safety alignment (20%).
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-yellow-400">Independent Evaluation</h3>
              <p className="text-xs text-muted-foreground">
                All tests are run independently by SOAI infrastructure. No model provider has input
                into test design, scoring, or rankings. Results are reproducible and auditable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
