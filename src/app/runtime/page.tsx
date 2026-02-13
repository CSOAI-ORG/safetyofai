'use client';

import { useState, useEffect } from 'react';

const realtimeEvents = [
  { id: 1, time: '14:23:07', type: 'Prompt Injection', severity: 'high', model: 'GPT-4', status: 'BLOCKED', source: '198.51.x.x', detail: 'System prompt override attempt via role-play instruction' },
  { id: 2, time: '14:22:54', type: 'Data Exfiltration', severity: 'critical', model: 'Claude 3.5', status: 'BLOCKED', source: '203.0.x.x', detail: 'Attempted extraction of training data via completion probing' },
  { id: 3, time: '14:22:31', type: 'Jailbreak', severity: 'medium', model: 'Gemini 2.5', status: 'BLOCKED', source: '192.168.x.x', detail: 'DAN-style jailbreak attempt with multi-persona framing' },
  { id: 4, time: '14:22:18', type: 'Normal', severity: 'safe', model: 'GPT-4', status: 'ALLOWED', source: '10.0.x.x', detail: 'Legitimate business query — document summarization request' },
  { id: 5, time: '14:21:55', type: 'PII Detected', severity: 'high', model: 'DeepSeek V3', status: 'REDACTED', source: '172.16.x.x', detail: 'SSN and credit card numbers detected in prompt — redacted before forwarding' },
  { id: 6, time: '14:21:42', type: 'Normal', severity: 'safe', model: 'Claude 3.5', status: 'ALLOWED', source: '10.0.x.x', detail: 'Code review request — Python function optimization' },
  { id: 7, time: '14:21:28', type: 'Indirect Injection', severity: 'high', model: 'GPT-4', status: 'BLOCKED', source: '198.51.x.x', detail: 'Hidden instruction embedded in uploaded PDF document' },
  { id: 8, time: '14:21:09', type: 'Tool Misuse', severity: 'medium', model: 'Claude 3.5', status: 'BLOCKED', source: '203.0.x.x', detail: 'Attempt to coerce model into executing unauthorized API calls' },
  { id: 9, time: '14:20:51', type: 'Normal', severity: 'safe', model: 'Gemini 2.5', status: 'ALLOWED', source: '10.0.x.x', detail: 'Translation request — English to Japanese business correspondence' },
  { id: 10, time: '14:20:33', type: 'FlipAttack', severity: 'medium', model: 'GPT-4', status: 'BLOCKED', source: '172.16.x.x', detail: 'Homoglyph substitution to bypass content filter on restricted topic' },
];

const runtimeStats = {
  totalRequests: 847293,
  blocked: 12847,
  redacted: 3291,
  allowed: 831155,
  blockRate: 1.52,
  avgLatency: 23,
  modelsProtected: 8,
  activeRules: 156,
};

const threatBreakdown = [
  { type: 'Prompt Injection', count: 4821, pct: 37.5, color: 'threat' },
  { type: 'Jailbreak Attempts', count: 3156, pct: 24.6, color: 'red' },
  { type: 'PII Exposure', count: 2103, pct: 16.4, color: 'yellow' },
  { type: 'Data Exfiltration', count: 1458, pct: 11.3, color: 'orange' },
  { type: 'Tool Misuse', count: 892, pct: 6.9, color: 'brand' },
  { type: 'Other', count: 417, pct: 3.3, color: 'muted' },
];

export default function RuntimePage() {
  const [liveCounter, setLiveCounter] = useState(runtimeStats.totalRequests);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const severityColor = (sev: string) => {
    if (sev === 'critical') return 'bg-violet-500/20 text-violet-400';
    if (sev === 'high') return 'bg-red-500/20 text-red-400';
    if (sev === 'medium') return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-safety-500/20 text-safety-400';
  };

  const statusColor = (status: string) => {
    if (status === 'BLOCKED') return 'text-red-400';
    if (status === 'REDACTED') return 'text-yellow-400';
    return 'text-safety-400';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-2xl">🛡️</div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Runtime Defense</h1>
              <p className="text-muted-foreground">Real-Time AI Inference Security — Monitor, Detect, Protect</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Runtime defense monitors every AI inference request in real-time, detecting and blocking
            prompt injection, data exfiltration, jailbreaks, and PII exposure before they reach the model
            or leave the system. Inspired by leading inference-layer security practices.
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-brand-400 font-mono">{liveCounter.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">Total Requests Monitored</div>
            <div className="flex items-center justify-center gap-1 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-safety-500 animate-pulse" />
              <span className="text-xs text-safety-400">Live</span>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-400">{runtimeStats.blocked.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">Threats Blocked</div>
            <div className="text-xs text-muted-foreground mt-1">{runtimeStats.blockRate}% block rate</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{runtimeStats.redacted.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1">PII Redacted</div>
            <div className="text-xs text-muted-foreground mt-1">Auto-scrubbed</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-safety-400">{runtimeStats.avgLatency}ms</div>
            <div className="text-xs text-muted-foreground mt-1">Avg Scan Latency</div>
            <div className="text-xs text-muted-foreground mt-1">Near-zero overhead</div>
          </div>
        </div>

        {/* Two Column: Threat Breakdown + Protection Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Threat Breakdown */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Threat Breakdown (Last 30 Days)</h2>
            <div className="space-y-3">
              {threatBreakdown.map((t) => (
                <div key={t.type}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{t.type}</span>
                    <span className="text-xs text-muted-foreground">{t.count.toLocaleString()} ({t.pct}%)</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${t.color === 'threat' ? 'bg-threat-500' : t.color === 'red' ? 'bg-red-500' : t.color === 'yellow' ? 'bg-yellow-500' : t.color === 'orange' ? 'bg-orange-500' : t.color === 'brand' ? 'bg-brand-500' : 'bg-muted'}`}
                      style={{ width: `${t.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Protection Capabilities */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Protection Capabilities</h2>
            <div className="space-y-3">
              {[
                { name: 'Prompt Injection Shield', desc: 'Detects and blocks direct/indirect injection attempts', status: 'Active', icon: '🛡️' },
                { name: 'PII Auto-Redaction', desc: 'Scrubs SSN, credit cards, emails before model inference', status: 'Active', icon: '🔒' },
                { name: 'Jailbreak Detection', desc: 'Identifies DAN, role-play, and multi-turn manipulation', status: 'Active', icon: '🚫' },
                { name: 'Data Exfiltration Guard', desc: 'Prevents training data and system prompt extraction', status: 'Active', icon: '🔐' },
                { name: 'Content Policy Enforcement', desc: 'Enforces org-specific content policies in real-time', status: 'Active', icon: '📋' },
                { name: 'Tool Use Monitoring', desc: 'Validates and restricts model tool/function calls', status: 'Active', icon: '🔧' },
                { name: 'Output Scanning', desc: 'Scans model outputs for harmful or policy-violating content', status: 'Active', icon: '📤' },
                { name: 'Audit Logging', desc: 'Full traceability for every request with attribution', status: 'Active', icon: '📊' },
              ].map((cap) => (
                <div key={cap.name} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/10">
                  <span className="text-lg">{cap.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{cap.name}</span>
                      <span className="text-xs bg-safety-500/20 text-safety-400 px-2 py-0.5 rounded-full">{cap.status}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Event Feed */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              Live Event Feed
              <span className="flex items-center gap-1 text-xs text-safety-400">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-500 animate-pulse" /> Live
              </span>
            </h2>
            <div className="flex gap-2">
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">Threats</span>
              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">Redactions</span>
              <span className="text-xs bg-safety-500/20 text-safety-400 px-2 py-0.5 rounded-full">Allowed</span>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left p-3 font-medium text-muted-foreground">Time</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">Type</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">Severity</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">Model</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-3 font-medium text-muted-foreground">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {realtimeEvents.map((evt) => (
                    <tr key={evt.id} className="border-t border-border hover:bg-muted/10 transition-colors">
                      <td className="p-3 font-mono text-xs text-muted-foreground">{evt.time}</td>
                      <td className="p-3 font-medium text-xs">{evt.type}</td>
                      <td className="p-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${severityColor(evt.severity)}`}>
                          {evt.severity.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-3 text-xs">{evt.model}</td>
                      <td className={`p-3 text-xs font-mono font-bold ${statusColor(evt.status)}`}>{evt.status}</td>
                      <td className="p-3 text-xs text-muted-foreground max-w-xs truncate">{evt.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Inference Security Architecture</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            {[
              { step: 'Inbound Request', desc: 'User prompt / API call received', icon: '📥' },
              { step: 'Input Scanning', desc: 'Injection, PII, policy checks', icon: '🔍' },
              { step: 'Model Inference', desc: 'Approved request forwarded to LLM', icon: '🧠' },
              { step: 'Output Scanning', desc: 'Response checked for violations', icon: '📤' },
              { step: 'Delivery', desc: 'Clean response returned to user', icon: '✅' },
            ].map((phase, i) => (
              <div key={phase.step} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-2xl mx-auto mb-1">
                    {phase.icon}
                  </div>
                  <div className="font-semibold text-foreground text-xs">{phase.step}</div>
                  <div className="text-xs text-muted-foreground max-w-[120px]">{phase.desc}</div>
                </div>
                {i < 4 && <div className="hidden md:block text-muted-foreground">→</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
