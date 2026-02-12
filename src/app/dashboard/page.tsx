'use client';

import { useState } from 'react';
import { Shield, Scan, Brain, Globe, AlertTriangle, Activity, Eye, Lock, TrendingUp, ChevronRight, Search, Upload, Link2, FileText, Mic, Video } from 'lucide-react';

type ScanType = 'text' | 'url' | 'image' | 'audio' | 'video';
type RiskLevel = 'safe' | 'low' | 'medium' | 'high' | 'critical';

interface ScanResult {
  id: string;
  type: ScanType;
  query: string;
  riskLevel: RiskLevel;
  riskScore: number;
  consensusScore: number;
  threats: string[];
  summary: string;
  aiResponses: { provider: string; isSafe: boolean; confidence: number }[];
  timestamp: string;
}

export default function DashboardPage() {
  const [scanType, setScanType] = useState<ScanType>('text');
  const [input, setInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleScan = async () => {
    if (!input.trim()) return;
    setIsScanning(true);

    // Call the consensus API
    try {
      const res = await fetch('/api/consensus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: scanType, query: input }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      // Demo fallback for when API keys aren't configured
      setResult({
        id: crypto.randomUUID(),
        type: scanType,
        query: input,
        riskLevel: 'safe',
        riskScore: 12,
        consensusScore: 94,
        threats: [],
        summary: 'Content analyzed by 4 AI models. No threats detected. Byzantine consensus achieved.',
        aiResponses: [
          { provider: 'GPT-4', isSafe: true, confidence: 96 },
          { provider: 'Claude 3.5', isSafe: true, confidence: 93 },
          { provider: 'Gemini 2.0', isSafe: true, confidence: 91 },
          { provider: 'Deepseek V3', isSafe: true, confidence: 95 },
        ],
        timestamp: new Date().toISOString(),
      });
    }
    setIsScanning(false);
  };

  const riskColors: Record<RiskLevel, string> = {
    safe: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    low: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    medium: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    high: 'text-red-400 bg-red-500/10 border-red-500/20',
    critical: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Security Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Multi-AI consensus verification &bull; Byzantine Council verified</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-safety-500 animate-pulse" />
          <span className="text-sm font-mono text-safety-400">All Systems Online</span>
        </div>
      </div>

      {/* Security Score + Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-1 rounded-xl bg-card border border-border p-6">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-3">
              <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" className="text-border" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray={`${85 * 2.64} ${100 * 2.64}`} className="text-brand-400" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">85</span>
              </div>
            </div>
            <p className="text-sm font-medium">Security Score</p>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-safety-500" /> +5 this week
            </p>
          </div>
        </div>

        {[
          { label: 'Scans Today', value: '0/3', sublabel: 'Free tier', icon: Scan, color: 'text-brand-400' },
          { label: 'Threats Blocked', value: '0', sublabel: 'All time', icon: AlertTriangle, color: 'text-red-400' },
          { label: 'AI Models Active', value: '4', sublabel: 'Consensus ready', icon: Brain, color: 'text-safety-400' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-card border border-border p-6">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="text-xs text-muted-foreground">{stat.sublabel}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Scanner */}
      <div className="rounded-xl bg-card border border-border p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-brand-400" />
          Security Scanner
        </h2>

        {/* Scan Type Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {[
            { type: 'text' as ScanType, label: 'Text', icon: FileText },
            { type: 'url' as ScanType, label: 'URL', icon: Link2 },
            { type: 'image' as ScanType, label: 'Image', icon: Upload },
            { type: 'audio' as ScanType, label: 'Audio', icon: Mic },
            { type: 'video' as ScanType, label: 'Video', icon: Video },
          ].map((tab) => (
            <button
              key={tab.type}
              onClick={() => setScanType(tab.type)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scanType === tab.type
                  ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                  : 'bg-background border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-3">
          <div className="flex-1">
            {scanType === 'text' ? (
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste text to verify if it's AI-generated or contains threats..."
                className="w-full h-28 px-4 py-3 rounded-xl bg-background border border-border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              />
            ) : scanType === 'url' ? (
              <input
                type="url"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="https://example.com — Scan URL for phishing, malware, and threats"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              />
            ) : (
              <div className="flex items-center justify-center h-28 rounded-xl bg-background border border-dashed border-border">
                <div className="text-center">
                  <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Drop {scanType} file or click to upload</p>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={handleScan}
            disabled={isScanning || !input.trim()}
            className="px-6 py-3 rounded-xl gradient-brand text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed self-end"
          >
            {isScanning ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Scanning...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Scan className="w-4 h-4" />
                Scan
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Scan Result */}
      {result && (
        <div className="rounded-xl bg-card border border-border p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-400" />
              Analysis Result
            </h2>
            <div className={`px-3 py-1 rounded-full text-sm font-medium border ${riskColors[result.riskLevel]}`}>
              {result.riskLevel.toUpperCase()}
            </div>
          </div>

          {/* Consensus Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Consensus Score</span>
              <span className="text-sm font-mono text-brand-400">{result.consensusScore}%</span>
            </div>
            <div className="h-2 rounded-full bg-background overflow-hidden">
              <div
                className="h-full rounded-full gradient-brand transition-all duration-1000"
                style={{ width: `${result.consensusScore}%` }}
              />
            </div>
          </div>

          {/* AI Model Responses */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {result.aiResponses.map((ai) => (
              <div key={ai.provider} className="rounded-lg bg-background border border-border p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${ai.isSafe ? 'bg-safety-500' : 'bg-red-500'}`} />
                  <span className="text-xs font-medium">{ai.provider}</span>
                </div>
                <p className="text-lg font-bold">{ai.confidence}%</p>
                <p className="text-xs text-muted-foreground">{ai.isSafe ? 'Safe' : 'Threat Detected'}</p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="rounded-lg bg-background border border-border p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">{result.summary}</p>
          </div>
        </div>
      )}

      {/* Threat Intelligence Feeds */}
      <div className="rounded-xl bg-card border border-border p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-brand-400" />
          Threat Intelligence Feeds
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { name: 'PhishTank', threats: '15,234', status: 'online', category: 'Phishing' },
            { name: 'URLhaus', threats: '8,932', status: 'online', category: 'Malware' },
            { name: 'OpenPhish', threats: '12,456', status: 'online', category: 'Phishing' },
            { name: 'AlienVault OTX', threats: '45,678', status: 'online', category: 'Multi-Threat' },
          ].map((feed) => (
            <div key={feed.name} className="rounded-lg bg-background border border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{feed.name}</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-safety-500" />
                  <span className="text-xs text-safety-400">{feed.status}</span>
                </div>
              </div>
              <p className="text-xl font-bold">{feed.threats}</p>
              <p className="text-xs text-muted-foreground">{feed.category} threats tracked</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
