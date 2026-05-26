'use client'

import { useEffect, useState } from 'react'
import { ChevronRight, Minus, Plus } from 'lucide-react'

const COUNTDOWN_TARGET = new Date('2026-08-02T00:00:00Z').getTime()

function useCountdown(target: number) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calc() {
      const diff = Math.max(0, target - Date.now())
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
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
  )
}

export function CountdownSection() {
  const countdown = useCountdown(COUNTDOWN_TARGET)

  return (
    <section id="countdown" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600/10 via-[#09090b] to-cyan-500/10 border border-white/[0.06] p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
          <div className="relative text-center">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              EU AI Act Enforcement
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-2">
              Compliance Deadline Approaching
            </h2>
            <p className="text-white/40 text-sm mb-10">
              August 2, 2026 — High-risk AI systems must be fully compliant
            </p>

            <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto mb-10">
              {[
                { value: countdown.days, label: 'Days' },
                { value: countdown.hours, label: 'Hours' },
                { value: countdown.minutes, label: 'Minutes' },
                { value: countdown.seconds, label: 'Seconds' },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 sm:p-5 backdrop-blur-sm"
                >
                  <span className="block text-2xl sm:text-4xl font-bold font-mono bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/30 uppercase tracking-wider">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Start Your Compliance Scan
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="relative py-24 border-t border-white/5">
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
  )
}