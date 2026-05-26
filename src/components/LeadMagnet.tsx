'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, Mail, ArrowRight, Loader2, X, CheckCircle } from 'lucide-react';

interface LeadMagnetProps {
  source?: 'blog' | 'homepage';
  title?: string;
}

export default function LeadMagnet({
  source = 'blog',
  title = 'Download the EU AI Act Checklist',
}: LeadMagnetProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.5 && !dismissed) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setStatus('success');
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (dismissed) return null;

  return (
    <div
      ref={ref}
      className={`sticky top-24 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div
        className="relative rounded-2xl border border-white/[0.06] overflow-hidden backdrop-blur-sm"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 102, 204, 0.08) 0%, rgba(17, 24, 39, 0.95) 100%)',
          boxShadow: '0 0 40px rgba(0, 102, 204, 0.1)',
        }}
      >
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5 text-muted-foreground" />
        </button>

        <div className="p-6">
          <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
            <Download className="w-6 h-6 text-brand-400" />
          </div>

          <h3 className="text-base font-bold mb-2">{title}</h3>
          <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
            35-item compliance checklist covering all EU AI Act requirements. Free PDF download after signup.
          </p>

          {status === 'success' ? (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-safety-500/10 border border-safety-500/20">
              <CheckCircle className="w-4 h-4 text-safety-400" />
              <p className="text-xs text-safety-300">Check your inbox!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-background/80 border border-border focus:border-brand-500 focus:outline-none text-xs transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-2.5 rounded-lg gradient-brand text-white font-semibold text-xs hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-1.5"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    Get Free Checklist
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="text-[10px] text-muted-foreground/50 text-center mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
