'use client';

import { Shield, Brain, Globe, Users, Lock, Activity, CheckCircle2, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 glow-brand">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">About SafetyOf.AI</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The security layer for the Council for the Safety of AI. Built on Byzantine fault-tolerance,
          powered by multi-AI consensus, and designed to protect the entire AI ecosystem.
        </p>
      </div>

      {/* Mission */}
      <div className="rounded-2xl bg-card border border-border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          SafetyOf.AI exists to make AI safety accessible, affordable, and effective. We believe that protecting
          people from AI-generated threats — deepfakes, phishing, scams, and synthetic media — shouldn&apos;t
          require enterprise budgets or technical expertise.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          As the security layer of the CSOAI (Council for the Safety of AI), we provide the operational
          infrastructure that makes AI governance real. Every compliance check, every analyst review,
          every Byzantine Council verification flows through SafetyOf.AI.
        </p>
      </div>

      {/* CSOAI Stack Position */}
      <div className="rounded-2xl bg-card border border-border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Where SOAI Fits in the Stack</h2>
        <div className="space-y-3">
          {[
            { label: 'CSOAI Platform', desc: 'Governance, licensing, compliance', link: 'https://csoai.org', active: false },
            { label: 'SafetyOf.AI', desc: 'Security layer — multi-AI consensus, threat intel, Byzantine verification', link: '#', active: true },
            { label: 'CEASAI Training', desc: '20-week analyst certification program', link: '#', active: false },
            { label: 'Byzantine Council', desc: '33 independent AI agents, 6 continents, 3 architecture families', link: '#', active: false },
            { label: 'Prosperity Fund', desc: 'AI wealth-sharing with triggered UBI', link: '#', active: false },
            { label: 'Watchdog System', desc: 'Public oversight and transparency reporting', link: '#', active: false },
          ].map((item) => (
            <div key={item.label} className={`rounded-xl border p-4 flex items-center justify-between ${item.active ? 'bg-brand-500/5 border-brand-500/30' : 'bg-background border-border'}`}>
              <div className="flex items-center gap-3">
                {item.active ? (
                  <div className="w-3 h-3 rounded-full bg-brand-400 animate-pulse" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-muted" />
                )}
                <div>
                  <p className={`text-sm font-semibold ${item.active ? 'text-brand-400' : ''}`}>{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
              {item.active && <span className="text-xs font-mono text-brand-400">YOU ARE HERE</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Key Principles */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {[
          { icon: Brain, title: 'Multi-AI Consensus', desc: 'No single AI is the arbiter of truth. We query 4-33 independent models and use Byzantine voting to reach a fault-tolerant verdict.' },
          { icon: Globe, title: 'Geographic Distribution', desc: 'Our Byzantine Council spans 6 continents with agents in 11 regions, ensuring no single point of failure.' },
          { icon: Lock, title: 'Privacy First', desc: 'Your content is analyzed but never stored. Encrypted in transit, deleted after analysis. We can\'t see what you scan.' },
          { icon: Users, title: 'Maternal Covenant', desc: 'Following CSOAI\'s founding principle: AI should protect humans through care, not control. Safety through relationship, not restriction.' },
        ].map((p) => (
          <div key={p.title} className="rounded-xl bg-card border border-border p-6">
            <p.icon className="w-6 h-6 text-brand-400 mb-3" />
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center rounded-2xl bg-card border border-border p-10">
        <h2 className="text-2xl font-bold mb-3">Part of Something Bigger</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          SafetyOf.AI is one component of the CSOAI ecosystem — the world&apos;s first comprehensive
          AI safety governance framework with real enforcement power.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://csoai.org" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity">
            Visit CSOAI.org <ExternalLink className="w-4 h-4" />
          </a>
          <a href="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-semibold hover:bg-accent transition-colors">
            Try SafetyOf.AI Free
          </a>
        </div>
      </div>
    </div>
  );
}
