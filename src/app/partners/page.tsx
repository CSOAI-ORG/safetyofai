'use client';

import {
  Handshake,
  ArrowRight,
  CheckCircle2,
  Scale,
  Settings,
  Code2,
  Building2,
  Cloud,
  ShieldCheck,
  Users,
  Globe,
  Headphones,
  BarChart3,
} from 'lucide-react';

const partnerTypes = [
  {
    icon: Users,
    title: 'Referral Partner',
    desc: 'Refer clients to SafetyOf.AI and earn commission on every successful subscription.',
    features: [
      '20–30% revenue share',
      '90-day referral cookie',
      'Co-branded marketing assets',
      'Partner dashboard with real-time tracking',
    ],
  },
  {
    icon: Settings,
    title: 'Reseller Partner',
    desc: 'White-label our compliance tools and set your own pricing for your client base.',
    features: [
      'White-label dashboard',
      'Set your own pricing',
      'Custom branding and domain',
      'Volume-based revenue share',
    ],
  },
  {
    icon: Code2,
    title: 'Technology Partner',
    desc: 'Integrate our MCP servers and compliance APIs into your platform or service offering.',
    features: [
      'Full API access',
      'MCP server integration support',
      'Joint product development',
      'Technical enablement program',
    ],
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: '20–30% Revenue Share',
    desc: 'Competitive commission structure that rewards growth.',
  },
  {
    icon: Settings,
    title: 'White-Label Dashboard',
    desc: 'Offer compliance tools under your own brand identity.',
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    desc: 'Dedicated partner support with guaranteed SLAs.',
  },
  {
    icon: Globe,
    title: 'Co-Marketing Opportunities',
    desc: 'Joint webinars, case studies, and event sponsorships.',
  },
  {
    icon: ShieldCheck,
    title: 'Partner Portal Access',
    desc: 'Deal registration, lead management, and training resources.',
  },
];

const idealPartners = [
  {
    icon: Scale,
    title: 'Law Firms',
    desc: 'Firms with AI and compliance practices advising clients on EU AI Act readiness.',
  },
  {
    icon: Building2,
    title: 'GRC Consultancies',
    desc: 'Governance, risk, and compliance firms expanding into AI regulation.',
  },
  {
    icon: Settings,
    title: 'Managed Service Providers',
    desc: 'MSPs and MSSPs looking to add AI compliance to their service portfolio.',
  },
  {
    icon: Cloud,
    title: 'Cloud Providers',
    desc: 'AWS, Azure, and GCP partners serving regulated industries.',
  },
];

export default function PartnersPage() {
  return (
    <div className="bg-[#09090b] text-white min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 backdrop-blur-sm">
              <Handshake className="w-4 h-4 text-cyan-400" />
              <span className="text-white/70">Partner Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Partner with{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                SafetyOf.AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              White-label compliance tools for your clients. Earn revenue while helping organizations meet EU AI Act requirements.
            </p>

            <a
              href="#apply"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Apply to Become a Partner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Partner Types ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Partnership Models
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Partnership Path
              </span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Three ways to partner with us, each designed for different business models.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerTypes.map((type, i) => (
              <div
                key={type.title}
                className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${
                  i === 1
                    ? 'bg-gradient-to-b from-blue-600/10 to-cyan-500/5 border-2 border-blue-500/30 shadow-lg shadow-blue-500/10'
                    : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/10'
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                  <type.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{type.desc}</p>
                <ul className="space-y-3">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Why Partner with{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                SafetyOf.AI
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ideal Partners ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Ideal Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Who We{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Work With
              </span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              We partner with organizations that serve clients navigating AI regulation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {idealPartners.map((partner) => (
              <div
                key={partner.title}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <partner.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{partner.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{partner.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="apply" className="relative py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600/10 via-[#09090b] to-cyan-500/10 border border-white/[0.06] p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Ready to{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Partner?
                </span>
              </h2>
              <p className="text-white/40 text-lg mb-8 max-w-lg mx-auto">
                Join our partner network and help shape the future of AI compliance while growing your business.
              </p>
              <a
                href="https://partners.safetyof.ai/apply"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Apply to Become a Partner
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
