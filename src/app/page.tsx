'use client';

import { Shield, Scan, Brain, Globe, Lock, Zap, Users, Activity, ChevronRight, CheckCircle2, AlertTriangle, Eye, Radio } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              CSOAI Security Layer — Live
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="text-foreground">The AI Safety</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Shield You Need
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Multi-AI consensus verification powered by 33 independent agents. Detect deepfakes, scan threats, verify content — all in real-time. The security layer for the Council for the Safety of AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/dashboard" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25">
                <Shield className="w-5 h-5" />
                Launch Dashboard
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="/scanner" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors">
                <Scan className="w-5 h-5" />
                Try Free Scan
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-safety-500" /> 3 free scans/day</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-safety-500" /> No credit card</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-safety-500" /> 4 AI models</span>
            </div>
          </div>

          {/* Live Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'AI Agents Online', value: '33/33', icon: Brain },
              { label: 'Threats Blocked', value: '2.4M+', icon: AlertTriangle },
              { label: 'Content Verified', value: '12M+', icon: Eye },
              { label: 'Uptime', value: '99.99%', icon: Activity },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <stat.icon className="w-5 h-5 text-brand-400 mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What SOAI Replaces — No More AI Dome */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              One Security Layer.{' '}
              <span className="text-brand-400">No More Fragmented Tools.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SafetyOf.AI replaces siloed AI safety tools with a unified security layer built directly into the CSOAI governance stack. Byzantine fault-tolerant by design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'Multi-AI Consensus Engine',
                description: 'Every query verified by 4-33 independent AI models simultaneously. Majority voting with confidence weighting ensures no single point of failure.',
                features: ['OpenAI GPT-4', 'Anthropic Claude', 'Google Gemini', 'Deepseek V3'],
                accent: 'brand',
              },
              {
                icon: Globe,
                title: 'Real-Time Threat Intelligence',
                description: 'Aggregated feeds from PhishTank, URLhaus, OpenPhish, and AlienVault OTX. 24-hour cache with live updates covering millions of known threats.',
                features: ['URL Scanning', 'Phishing Detection', 'Malware Feeds', 'Domain Analysis'],
                accent: 'safety',
              },
              {
                icon: Shield,
                title: 'Byzantine Council Integration',
                description: 'Powered by CSOAI\'s 33-agent Byzantine Council across 6 continents. Every safety decision is fault-tolerant and geographically distributed.',
                features: ['33 AI Agents', '6 Continents', '3 Architecture Families', '99.99% Uptime'],
                accent: 'brand',
              },
            ].map((card) => (
              <div key={card.title} className="group relative rounded-2xl bg-card border border-border p-8 hover:border-brand-500/30 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.accent === 'brand' ? 'bg-brand-500/10 text-brand-400' : 'bg-safety-500/10 text-safety-400'}`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{card.description}</p>
                <div className="space-y-2">
                  {card.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-safety-500 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How SafetyOf.AI{' '}
              <span className="text-safety-400">Protects You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Submit', desc: 'Text, URL, image, audio, or video', icon: Zap },
              { step: '02', title: 'Distribute', desc: 'Query sent to 4-33 AI models simultaneously', icon: Globe },
              { step: '03', title: 'Analyze', desc: 'Each model independently assesses the content', icon: Brain },
              { step: '04', title: 'Consensus', desc: 'Byzantine voting determines the verdict', icon: Users },
              { step: '05', title: 'Protect', desc: 'Real-time result with confidence score', icon: Shield },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-brand-400">STEP {item.step}</span>
                <h4 className="font-semibold mt-1 mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Complete Security{' '}
              <span className="text-brand-400">For the AI Era</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Eye, title: 'Deepfake Detection', desc: 'AI-generated image, video, and audio detection with multi-model consensus verification.' },
              { icon: Scan, title: 'URL Scanner', desc: 'Real-time scanning against 4 threat intelligence databases plus multi-AI analysis.' },
              { icon: Lock, title: 'Content Verification', desc: 'Determine if text was AI-generated with confidence scoring from multiple models.' },
              { icon: AlertTriangle, title: 'Phishing Protection', desc: 'Instant detection of phishing attempts using community databases and AI analysis.' },
              { icon: Activity, title: 'Security Dashboard', desc: 'Real-time monitoring, threat feeds, security score, and scan history in one view.' },
              { icon: Users, title: 'Community Reputation', desc: 'Report threats, earn reputation points, and contribute to collective AI safety.' },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl bg-card border border-border p-6 hover:border-brand-500/20 transition-colors">
                <feature.icon className="w-5 h-5 text-brand-400 mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSOAI Stack Integration */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">CSOAI Stack Integration</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
                Built Into the{' '}
                <span className="text-brand-400">Governance Stack</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                SafetyOf.AI isn&apos;t a standalone tool — it&apos;s the security layer woven directly into the CSOAI governance framework. Every compliance check, every analyst review, every certification is backed by multi-AI consensus verification.
              </p>
              <div className="space-y-4">
                {[
                  'CASA intelligence layer ingests AI telemetry from 40+ nation sources',
                  'Research-aligned assessment: ASIMOV-style ethical, SABER-style red-team, AIQ-style guarantees',
                  'DARB-aligned certification with multi-signature Ed25519, IPFS, blockchain anchoring',
                  'Zero-trust architecture with cell-level security',
                  'Responsible AI principles aligned with NATO PRU framework',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-safety-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-background border border-border p-6 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-safety-500 animate-pulse" />
                  <span className="text-sm font-mono text-safety-400">CSOAI Stack — All Systems Operational</span>
                </div>
                {[
                  { name: 'CASA', role: 'Intelligence & Analytics', status: 'Active' },
                  { name: 'SOAI + POAI', role: 'Certification Platform', status: 'Active' },
                  { name: 'AI3 Council', role: '33 Assessment Agents', status: 'Online' },
                  { name: 'DSRB Pipeline', role: '40-Nation Distribution', status: 'Active' },
                  { name: 'CSOAI Platform', role: 'Governance & Licensing', status: 'Active' },
                  { name: 'CEASAI Training', role: '20-Week Analyst Cert', status: 'Active' },
                ].map((svc) => (
                  <div key={svc.name} className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-card border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-safety-500" />
                      <div>
                        <p className="text-sm font-medium">{svc.name}</p>
                        <p className="text-xs text-muted-foreground">{svc.role}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-safety-400">{svc.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Protecting Your AI Ecosystem
          </h2>
          <p className="text-muted-foreground mb-8">
            3 free scans per day. No credit card required. Upgrade to Pro for unlimited access.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/dashboard" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity">
              Get Started Free
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border font-semibold hover:bg-accent transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
