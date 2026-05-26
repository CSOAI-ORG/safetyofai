'use client';

import { useState } from 'react';
import {
  Share2,
  Users,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Minus,
  Plus,
  TrendingUp,
  Link2,
  BadgePercent,
} from 'lucide-react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="font-medium text-white pr-4">{question}</span>
        {open ? (
          <Minus className="w-5 h-5 text-white/50 flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-white/50 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-white/60 text-sm leading-relaxed pr-8">{answer}</div>
      )}
    </div>
  );
}

const faqs = [
  {
    q: 'When do I get paid?',
    a: 'Commissions are paid monthly, via bank transfer or PayPal. Payouts are processed on the 15th of each month for the previous month\'s earned commissions.',
  },
  {
    q: 'Is there a minimum payout?',
    a: 'Yes, the minimum payout threshold is £100. Commissions below this amount will roll over to the next month until the threshold is reached.',
  },
  {
    q: 'Can I refer my own company?',
    a: 'Yes, you can refer your own company to SafetyOf.AI, but self-referrals are not commissionable. The referral program is designed for bringing in new external customers.',
  },
  {
    q: 'How long does the referral cookie last?',
    a: 'The referral cookie lasts 90 days. If a referred user signs up and subscribes within 90 days of clicking your referral link, you receive the commission.',
  },
];

export default function ReferralPage() {
  const [signupLoading, setSignupLoading] = useState(false);

  return (
    <div className="bg-[#09090b] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 backdrop-blur-sm">
              <BadgePercent className="w-4 h-4 text-cyan-400" />
              <span className="text-white/70">Referral Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Share SafetyOf.AI.
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Earn 20% Commission.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              Refer companies to EU AI Act compliance. Earn 20% of their first-year revenue.
            </p>

            <a
              href="#signup"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Join the Referral Program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              Three Steps to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Earning
              </span>
            </h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-16 left-[calc(33.33%-8px)] w-[calc(33.33%+16px)] h-px">
              <div className="w-full h-full bg-gradient-to-r from-blue-500/50 to-cyan-500/50 animate-pulse" />
            </div>
            <div className="hidden md:block absolute top-16 left-[calc(66.66%-8px)] w-[calc(33.33%+16px)] h-px">
              <div className="w-full h-full bg-gradient-to-r from-cyan-500/50 to-blue-500/50 animate-pulse" />
            </div>

            {[
              {
                step: '01',
                icon: Link2,
                title: 'Sign Up',
                desc: 'Create your referral account and get your unique referral link in seconds.',
              },
              {
                step: '02',
                icon: Share2,
                title: 'Share',
                desc: 'Send your link to companies that need AI compliance. We track everything automatically.',
              },
              {
                step: '03',
                icon: DollarSign,
                title: 'Earn',
                desc: 'Earn 20% of first-year revenue for each company that subscribes through your link.',
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <span className="text-xs font-mono text-blue-400 tracking-wider">
                  STEP {item.step}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Commission Tiers ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Commission Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Earn More as You{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Grow
              </span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Your commission rate increases with every successful referral.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                tier: 'Starter',
                referrals: '1–5 referrals',
                rate: '20%',
                icon: Users,
                highlighted: false,
                perks: ['20% first-year commission', '90-day referral cookie', 'Monthly payouts', 'Real-time dashboard'],
              },
              {
                tier: 'Growth',
                referrals: '6–20 referrals',
                rate: '25%',
                icon: TrendingUp,
                highlighted: true,
                perks: ['25% first-year commission', '90-day referral cookie', 'Priority payouts', 'Co-branded assets'],
              },
              {
                tier: 'Champion',
                referrals: '21+ referrals',
                rate: '30%',
                icon: BadgePercent,
                highlighted: false,
                perks: ['30% first-year commission', 'Dedicated partner manager', 'Custom landing pages', 'Exclusive events access'],
              },
            ].map((tier) => (
              <div
                key={tier.tier}
                className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gradient-to-b from-blue-600/10 to-cyan-500/5 border-2 border-blue-500/30 shadow-lg shadow-blue-500/10'
                    : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/10'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <tier.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{tier.tier}</h3>
                    <p className="text-xs text-white/30">{tier.referrals}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {tier.rate}
                  </span>
                  <span className="text-white/30 text-sm ml-1">commission</span>
                </div>
                <ul className="space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Example Earnings ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Example Earnings
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              What You Could{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Earn
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                label: '1 Pro Subscriber',
                calc: '£99/mo × 12 months',
                commission: '£238',
                color: 'blue',
              },
              {
                label: '1 Enterprise Subscriber',
                calc: '£499/mo × 12 months',
                commission: '£1,198',
                color: 'cyan',
              },
              {
                label: '1 Audit',
                calc: '£5,000 one-time',
                commission: '£1,000',
                color: 'blue',
              },
              {
                label: '5 Audits + 10 Pro',
                calc: 'Combined first-year',
                commission: '£7,190',
                color: 'cyan',
                featured: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-6 backdrop-blur-sm text-center ${
                  (item as any).featured
                    ? 'bg-gradient-to-b from-blue-600/10 to-cyan-500/5 border-2 border-blue-500/30'
                    : 'bg-white/[0.03] border border-white/[0.06]'
                }`}
              >
                <p className="text-sm font-medium text-white/70 mb-1">{item.label}</p>
                <p className="text-xs text-white/30 mb-4">{item.calc}</p>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  {item.commission}
                </span>
                <p className="text-xs text-white/40 mt-1">commission</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              Common Questions
            </h2>
          </div>

          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] px-6 sm:px-8 backdrop-blur-sm">
            {faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="signup" className="relative py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600/10 via-[#09090b] to-cyan-500/10 border border-white/[0.06] p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Ready to Start{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Earning?
                </span>
              </h2>
              <p className="text-white/40 text-lg mb-8 max-w-lg mx-auto">
                Join hundreds of partners earning commissions by referring companies to EU AI Act compliance.
              </p>
              <a
                href="https://partners.safetyof.ai/signup"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Join the Referral Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
