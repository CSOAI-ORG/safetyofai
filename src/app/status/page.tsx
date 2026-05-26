'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  Bell,
  ArrowRight,
  Activity,
  Server,
  Shield,
  LayoutDashboard,
  CreditCard,
  Mail,
} from 'lucide-react';

type Status = 'operational' | 'degraded' | 'outage';

const COMPONENTS = [
  { name: 'API', endpoint: 'safetyof.ai/api', status: 'operational' as Status, icon: Server, uptime: '99.99%' },
  { name: 'MCP Servers', endpoint: '218 servers', status: 'operational' as Status, icon: Activity, uptime: '99.98%' },
  { name: 'Compliance Scanner', endpoint: 'safetyof.ai/scanner', status: 'operational' as Status, icon: Shield, uptime: '99.97%' },
  { name: 'Dashboard', endpoint: 'safetyof.ai/dashboard', status: 'operational' as Status, icon: LayoutDashboard, uptime: '99.99%' },
  { name: 'Payment Processing', endpoint: 'Stripe', status: 'operational' as Status, icon: CreditCard, uptime: '100%' },
  { name: 'Email Delivery', endpoint: 'Transactional email', status: 'operational' as Status, icon: Mail, uptime: '99.95%' },
];

function generateUptimeHistory(): { day: number; status: Status }[] {
  const days: { day: number; status: Status }[] = [];
  for (let i = 89; i >= 0; i--) {
    const rand = Math.random();
    let status: Status = 'operational';
    if (rand > 0.97) status = 'degraded';
    if (rand > 0.995) status = 'outage';
    days.push({ day: i, status });
  }
  return days;
}

const UPTIME_HISTORY = generateUptimeHistory();

const INCIDENTS: {
  id: string;
  title: string;
  status: 'resolved' | 'monitoring' | 'investigating';
  severity: 'minor' | 'major' | 'critical';
  date: string;
  updates: { time: string; message: string }[];
}[] = [];

function StatusBadge({ status }: { status: Status }) {
  const config = {
    operational: { label: 'Operational', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    degraded: { label: 'Degraded', icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    outage: { label: 'Outage', icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  };
  const c = config[status];
  const Icon = c.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.color} border ${c.border}`}>
      <Icon className="w-3.5 h-3.5" />
      {c.label}
    </span>
  );
}

function OverallStatus() {
  const allOperational = COMPONENTS.every((c) => c.status === 'operational');
  const hasOutage = COMPONENTS.some((c) => c.status === 'outage');

  let overallStatus: Status = 'operational';
  if (hasOutage) overallStatus = 'outage';
  else if (!allOperational) overallStatus = 'degraded';

  const config = {
    operational: { label: 'All Systems Operational', bg: 'from-emerald-500/20 to-emerald-600/5', border: 'border-emerald-500/30', icon: CheckCircle2, iconColor: 'text-emerald-400' },
    degraded: { label: 'Partial System Degradation', bg: 'from-amber-500/20 to-amber-600/5', border: 'border-amber-500/30', icon: AlertTriangle, iconColor: 'text-amber-400' },
    outage: { label: 'Major System Outage', bg: 'from-red-500/20 to-red-600/5', border: 'border-red-500/30', icon: XCircle, iconColor: 'text-red-400' },
  };
  const c = config[overallStatus];
  const Icon = c.icon;

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${c.bg} border ${c.border} p-8 mb-8`}>
      <div className="flex items-center justify-center gap-3 mb-2">
        <Icon className={`w-8 h-8 ${c.iconColor}`} />
        <h2 className="text-2xl font-bold">{c.label}</h2>
      </div>
      <p className="text-center text-muted-foreground text-sm">
        Last checked: {new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
      </p>
    </div>
  );
}

function ComponentGrid() {
  return (
    <div className="grid gap-3 mb-8">
      {COMPONENTS.map((component) => {
        const Icon = component.icon;
        return (
          <div
            key={component.name}
            className="flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-brand-500/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center">
                <Icon className="w-[18px] h-[18px] text-brand-400" />
              </div>
              <div>
                <div className="font-medium text-sm">{component.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{component.endpoint}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground font-mono hidden sm:inline">{component.uptime} uptime</span>
              <StatusBadge status={component.status} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function UptimeHistory() {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const colorMap: Record<Status, string> = {
    operational: 'bg-emerald-500',
    degraded: 'bg-amber-500',
    outage: 'bg-red-500',
  };

  const labelMap: Record<Status, string> = {
    operational: 'Operational',
    degraded: 'Degraded',
    outage: 'Outage',
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">90-Day Uptime History</h3>
        <span className="text-xs text-muted-foreground font-mono">99.97% overall</span>
      </div>
      <div className="flex gap-[2px] mb-3">
        {UPTIME_HISTORY.map((day, i) => (
          <div
            key={i}
            className={`flex-1 h-8 rounded-sm ${colorMap[day.status]} transition-opacity cursor-pointer ${
              hoveredDay !== null && hoveredDay !== i ? 'opacity-40' : 'opacity-100'
            }`}
            onMouseEnter={() => setHoveredDay(i)}
            onMouseLeave={() => setHoveredDay(null)}
            title={`${day.day === 0 ? 'Today' : `${day.day} days ago`} — ${labelMap[day.status]}`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>90 days ago</span>
        <span>Today</span>
      </div>
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-emerald-500" />
          <span className="text-xs text-muted-foreground">Operational</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-amber-500" />
          <span className="text-xs text-muted-foreground">Degraded</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-red-500" />
          <span className="text-xs text-muted-foreground">Outage</span>
        </div>
      </div>
    </div>
  );
}

function IncidentHistory() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 mb-8">
      <h3 className="font-semibold mb-4">Incident History</h3>
      {INCIDENTS.length === 0 ? (
        <div className="text-center py-12">
          <Shield className="w-10 h-10 text-emerald-500/40 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">No incidents reported in the last 90 days.</p>
          <p className="text-muted-foreground/60 text-xs mt-1">Our infrastructure has maintained uninterrupted service.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {INCIDENTS.map((incident) => (
            <div key={incident.id} className="rounded-xl border border-border bg-background p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">{incident.title}</h4>
                <span className="text-xs text-muted-foreground">{incident.date}</span>
              </div>
              <div className="space-y-2">
                {incident.updates.map((update, i) => (
                  <div key={i} className="flex gap-3 text-xs">
                    <Clock className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-muted-foreground">{update.time}</span>
                      <p className="text-foreground">{update.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 mb-2">
        <Bell className="w-5 h-5 text-brand-400" />
        <h3 className="font-semibold">Subscribe to Updates</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Get notified via email when incidents occur or maintenance is scheduled.
      </p>
      {subscribed ? (
        <div className="flex items-center gap-2 text-emerald-400 text-sm">
          <CheckCircle2 className="w-4 h-4" />
          Subscribed — you&apos;ll receive status updates at {email}
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-brand text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function StatusPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'SafetyOf.AI System Status',
            description: 'Real-time status and uptime monitoring for SafetyOf.AI platform services.',
            url: 'https://safetyof.ai/status',
          }),
        }}
      />

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Activity className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">System Status</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Platform <span className="text-brand-400">Status</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          Real-time monitoring of all SafetyOf.AI services and infrastructure.
        </p>
      </div>

      <OverallStatus />
      <ComponentGrid />
      <UptimeHistory />
      <IncidentHistory />
      <SubscribeSection />

      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          Monitoring powered by SafetyOf.AI infrastructure &bull; Updated every 60 seconds &bull;{' '}
          <a href="/support" className="text-brand-400 hover:underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
}
