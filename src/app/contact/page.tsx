import { Mail, MessageSquare, Shield, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact — SafetyOf.AI',
  description: 'Get in touch with the SafetyOf.AI team. Enterprise sales, support, partnerships, and general inquiries.',
};

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: 'Enterprise Sales',
    description: 'Custom pricing, white-label deployments, and dedicated support for regulated industries.',
    action: 'mailto:sales@safetyof.ai',
    cta: 'Email Sales',
  },
  {
    icon: MessageSquare,
    title: 'Support',
    description: 'Get help with your account, technical issues, or compliance questions.',
    action: 'mailto:support@safetyof.ai',
    cta: 'Get Support',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Report vulnerabilities or security concerns to our security team.',
    action: 'mailto:security@safetyof.ai',
    cta: 'Report Issue',
  },
  {
    icon: Clock,
    title: 'Partnerships',
    description: 'Interested in partnering with SafetyOf.AI? Let\'s build the future of AI governance.',
    action: 'mailto:partners@safetyof.ai',
    cta: 'Partner With Us',
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Get in <span className="text-brand-400">Touch</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Have a question about AI governance, need enterprise pricing, or want to report an issue?
          We&apos;re here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        {CONTACT_CHANNELS.map((channel) => {
          const Icon = channel.icon;
          return (
            <a
              key={channel.title}
              href={channel.action}
              className="rounded-2xl border border-border bg-card p-8 hover:border-brand-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
              <span className="text-sm text-brand-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                {channel.cta}
                <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          );
        })}
      </div>

      <div className="rounded-2xl bg-card border border-border p-8 max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">EU AI Act Deadline</h2>
        <p className="text-muted-foreground text-sm mb-4">
          August 2, 2026. Is your AI system compliant? Book a free 15-minute compliance scan.
        </p>
        <Link
          href="/checklist"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold gradient-brand text-white hover:opacity-90 transition-opacity"
        >
          Start Free Compliance Scan
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
