import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submited, setSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      // In production: send to Mailchimp, ConvertKit, or n8n webhook
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'compliance_checker' }),
      });
      
      if (response.ok) {
        setSubmited(true);
        // Track conversion
        if (typeof window ! == 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'subscribe', { method: 'email_capture' });
        }
      }
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submited) {
    return (
      <div className="text-center p-6 bg-safety-500/10 rounded-xl border border-safety-500/20">
        <CheckCircle className="w-12 h-12 text-safety-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Successfully Subscribed! 🎉</h3>
        <p className="text-sm text-muted-foreground">
          Check your email for your 10-point EU AI Act checklist.
          We'll send you weekly compliance tips + exclusive offers.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-card border border-border p-6">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-6 h-6 text-brand-400" />
        <h3 className="text-lg font-semibold">Get Your Free Compliance Checklist</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Download our 10-point EU AI Act checklist + get weekly compliance tips.
        Join 500+ AI professionals.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-brand-500 focus:outline-none text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg gradient-brand text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Get Free Checklist →'}
        </button>
      </form>
      <p className="text-xs text-muted-foreground text-center">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
