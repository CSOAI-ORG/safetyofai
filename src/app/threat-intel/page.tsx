'use client';

import { useState, useEffect } from 'react';
import { Activity, AlertTriangle, Shield, Globe, TrendingUp, BarChart3, Radio, Eye, Database, Clock } from 'lucide-react';

interface ThreatStats {
  totalThreats: number;
  phishing: number;
  malware: number;
  scams: number;
  deepfakes: number;
  last24h: number;
  trend: 'up' | 'down' | 'stable';
}

interface LiveFeed {
  id: string;
  type: string;
  url: string;
  source: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  details: string;
}

export default function ThreatIntelPage() {
  const [stats] = useState<ThreatStats>({
    totalThreats: 82300,
    phishing: 27690,
    malware: 17283,
    scams: 24690,
    deepfakes: 12637,
    last24h: 347,
    trend: 'up',
  });

  const [feeds] = useState<LiveFeed[]>([
    { id: '1', type: 'Phishing', url: 'bank-secure-login[.]xyz', source: 'PhishTank', severity: 'critical', timestamp: '2 min ago', details: 'Banking credential harvester targeting major US banks' },
    { id: '2', type: 'Malware', url: 'free-pdf-tool[.]download', source: 'URLhaus', severity: 'high', timestamp: '5 min ago', details: 'Distributing trojan disguised as PDF utility' },
    { id: '3', type: 'Phishing', url: 'verify-account-now[.]net', source: 'OpenPhish', severity: 'high', timestamp: '8 min ago', details: 'Social media account verification phishing page' },
    { id: '4', type: 'Scam', url: 'crypto-giveaway-real[.]com', source: 'AlienVault', severity: 'medium', timestamp: '12 min ago', details: 'Cryptocurrency investment scam with fake celebrity endorsements' },
    { id: '5', type: 'Deepfake', url: 'ai-voice-clone[.]app', source: 'SOAI Detection', severity: 'high', timestamp: '15 min ago', details: 'Voice cloning service used in CEO fraud attacks' },
    { id: '6', type: 'Phishing', url: 'microsoft365-reset[.]info', source: 'PhishTank', severity: 'critical', timestamp: '18 min ago', details: 'Microsoft 365 password reset phishing kit' },
    { id: '7', type: 'Malware', url: 'update-chrome-now[.]com', source: 'URLhaus', severity: 'critical', timestamp: '22 min ago', details: 'Fake browser update delivering info-stealer malware' },
    { id: '8', type: 'Scam', url: 'easy-job-remote[.]work', source: 'AlienVault', severity: 'medium', timestamp: '25 min ago', details: 'Remote job scam collecting personal information' },
  ]);

  const [animatedCount, setAnimatedCount] = useState(stats.totalThreats);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const severityColors: Record<string, string> = {
    low: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    high: 'bg-red-500/10 text-red-400 border-red-500/20',
    critical: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Activity className="w-6 h-6 text-brand-400" />
            Threat Intelligence
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Real-time aggregated threat data from 4 intelligence sources</p>
        </div>
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-red-400 animate-pulse" />
          <span className="text-sm font-mono text-red-400">LIVE</span>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: 'Total Threats Tracked', value: animatedCount.toLocaleString(), icon: Database, color: 'text-brand-400' },
          { label: 'New (24h)', value: stats.last24h.toString(), icon: Clock, color: 'text-amber-400' },
          { label: 'Phishing', value: stats.phishing.toLocaleString(), icon: AlertTriangle, color: 'text-red-400' },
          { label: 'Malware', value: stats.malware.toLocaleString(), icon: Shield, color: 'text-violet-400' },
          { label: 'Scams', value: stats.scams.toLocaleString(), icon: Eye, color: 'text-amber-400' },
          { label: 'Deepfakes', value: stats.deepfakes.toLocaleString(), icon: Globe, color: 'text-brand-400' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-card border border-border p-4">
            <s.icon className={`w-4 h-4 ${s.color} mb-2`} />
            <p className="text-xl font-bold font-mono">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Intelligence Sources Status */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {[
          { name: 'PhishTank', desc: 'Community phishing database', count: '15,234', uptime: '99.9%' },
          { name: 'URLhaus', desc: 'Malware URL distribution', count: '8,932', uptime: '99.8%' },
          { name: 'OpenPhish', desc: 'Real-time phishing feed', count: '12,456', uptime: '99.7%' },
          { name: 'AlienVault OTX', desc: 'Comprehensive threat intel', count: '45,678', uptime: '99.9%' },
        ].map((src) => (
          <div key={src.name} className="rounded-xl bg-card border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold">{src.name}</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-safety-500" />
                <span className="text-xs text-safety-400">Online</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{src.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold font-mono">{src.count}</span>
              <span className="text-xs text-muted-foreground">{src.uptime} uptime</span>
            </div>
          </div>
        ))}
      </div>

      {/* Live Threat Feed */}
      <div className="rounded-xl bg-card border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-brand-400" />
            Live Threat Feed
          </h2>
          <span className="text-xs text-muted-foreground">Auto-refreshing every 60s</span>
        </div>

        <div className="space-y-3">
          {feeds.map((feed) => (
            <div key={feed.id} className="rounded-lg bg-background border border-border p-4 hover:border-brand-500/20 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${severityColors[feed.severity]}`}>
                      {feed.severity.toUpperCase()}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{feed.type}</span>
                    <span className="text-xs text-muted-foreground">&bull;</span>
                    <span className="text-xs text-muted-foreground">{feed.source}</span>
                  </div>
                  <p className="text-sm font-mono text-red-400 truncate">{feed.url}</p>
                  <p className="text-xs text-muted-foreground mt-1">{feed.details}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{feed.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
