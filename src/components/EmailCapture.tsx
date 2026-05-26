'use client';

import { useState, useCallback } from 'react';
import { Mail, CheckCircle, AlertCircle, ArrowRight, Loader2, Sparkles } from 'lucide-react';

interface EmailCaptureProps {
  source?: 'homepage' | 'blog' | 'scanner' | 'checklist' | 'pricing';
  framework?: string;
  headline?: string;
  subtitle?: string;
  compact?: boolean;
}

function ConfettiParticle({ delay, left }: { delay: number; left: number }) {
  const colors = ['#0066CC', '#00B894', '#4da6ff', '#1ad29c', '#f59e0b', '#ef4444'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = 4 + Math.random() * 6;
  const duration = 1.5 + Math.random() * 1;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: '50%',
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
        animation: `confetti-fall ${duration}s ease-out ${delay}s forwards`,
        opacity: 0,
      }}
    />
  );
}

export default function EmailCapture({
  source = 'homepage',
  framework,
  headline = 'Get Your Free EU AI Act Compliance Checklist',
  subtitle = '10-point checklist + weekly compliance updates',
  compact = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [confettiParticles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: Math.random() * 0.5,
      left: 10 + Math.random() * 80,
    }))
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || status === 'loading') return;

      setStatus('loading');
      setErrorMessage('');

      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source, framework }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Subscription failed');
        }

        setStatus('success');

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'subscribe', {
            method: 'email_capture',
            source,
            framework: framework || 'none',
          });
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage(
          err instanceof Error ? err.message : 'Something went wrong. Please try again.'
        );
      }
    },
    [email, source, framework, status]
  );

  const handleRetry = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  if (status === 'success') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-safety-500/10 to-brand-500/10 border border-safety-500/20 p-8 backdrop-blur-sm">
        <div className="absolute inset-0 pointer-events-none">
          {confettiParticles.map((p) => (
            <ConfettiParticle key={p.id} delay={p.delay} left={p.left} />
          ))}
        </div>

        <div className="relative text-center">
          <div className="w-16 h-16 rounded-2xl bg-safety-500/20 flex items-center justify-center mx-auto mb-4 glow-safety">
            <CheckCircle className="w-8 h-8 text-safety-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Check your inbox!</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your EU AI Act Compliance Checklist is on its way. We sent it to{' '}
            <span className="text-brand-400 font-medium">{email}</span>
          </p>
          <a
            href="/checklist"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View Checklist Online
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl border border-white/[0.06] backdrop-blur-sm overflow-hidden ${
        compact ? 'p-5' : 'p-6 sm:p-8'
      }`}
      style={{
        background:
          'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(17, 24, 39, 0.8) 50%, rgba(0, 184, 148, 0.05) 100%)',
        boxShadow: '0 0 30px rgba(0, 102, 204, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-safety-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        {!compact && (
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{headline}</h3>
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            </div>
          </div>
        )}

        {compact && (
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-brand-400" />
            <h3 className="text-sm font-bold text-foreground">{headline}</h3>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-background/80 border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none text-sm transition-all disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || !email}
            className="w-full py-3 rounded-xl gradient-brand text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                Get Free Checklist
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {status === 'error' && (
          <div className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-red-300">{errorMessage}</p>
              <button
                onClick={handleRetry}
                className="text-xs text-brand-400 hover:text-brand-300 mt-1 underline underline-offset-2"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        <p className="text-[11px] text-muted-foreground/60 text-center mt-3">
          Join 500+ AI professionals. No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
