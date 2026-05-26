import type { Metadata } from 'next';
import {
  BookOpen,
  Terminal,
  Code2,
  Shield,
  KeyRound,
  Gauge,
  Webhook,
  History,
  ArrowRight,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developer Documentation — SafetyOf.AI',
  description:
    'Integration guides, API reference, MCP server installation, compliance framework docs, and webhook setup for SafetyOf.AI.',
  openGraph: {
    title: 'Developer Documentation — SafetyOf.AI',
    description: 'Integrate SafetyOf.AI into your compliance workflow.',
    url: 'https://safetyof.ai/docs',
  },
};

const SECTIONS = [
  {
    title: 'Getting Started',
    description: 'Install MCP servers, run your first scan, and generate compliance documentation in 5 steps.',
    icon: BookOpen,
    href: '/docs/getting-started',
    tag: 'Quick Start',
    tagColor: 'bg-safety-500/20 text-safety-300',
  },
  {
    title: 'MCP Server Installation',
    description: 'Install and configure the governance MCP pack with npx meok-setup. Supports Claude, Cursor, and Windsurf.',
    icon: Terminal,
    href: '/docs/mcp-installation',
    tag: 'Setup',
    tagColor: 'bg-brand-500/20 text-brand-300',
  },
  {
    title: 'API Reference',
    description: 'REST endpoints for scans, attestations, compliance reports, and webhook management.',
    icon: Code2,
    href: '/docs/api',
    tag: 'Reference',
    tagColor: 'bg-violet-500/20 text-violet-300',
  },
  {
    title: 'Compliance Frameworks',
    description: 'Deep dives into EU AI Act, DORA, NIS2, ISO 42001, and GDPR — with mapping to SafetyOf.AI tools.',
    icon: Shield,
    href: '/docs/frameworks',
    tag: 'Guides',
    tagColor: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Attestation Verification',
    description: 'Verify HMAC-SHA256 attestation signatures. Includes code samples for Node.js, Python, and Go.',
    icon: KeyRound,
    href: '/docs/attestation',
    tag: 'Security',
    tagColor: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Rate Limits',
    description: '10 scans/day on Free tier, unlimited on Pro. Burst limits, retry headers, and 429 handling.',
    icon: Gauge,
    href: '/docs/rate-limits',
    tag: 'Limits',
    tagColor: 'bg-orange-500/20 text-orange-300',
  },
  {
    title: 'Webhooks',
    description: 'Stripe integration for subscription events, scan completion callbacks, and attestation delivery.',
    icon: Webhook,
    href: '/docs/webhooks',
    tag: 'Integration',
    tagColor: 'bg-cyan-500/20 text-cyan-300',
  },
  {
    title: 'Changelog',
    description: 'Platform updates, new MCP tools, regulatory feed changes, and API versioning.',
    icon: History,
    href: '/docs/changelog',
    tag: 'Updates',
    tagColor: 'bg-emerald-500/20 text-emerald-300',
  },
];

export default function DocsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'SafetyOf.AI Developer Documentation',
            description: 'Integration guides, API reference, and MCP server docs for SafetyOf.AI.',
            url: 'https://safetyof.ai/docs',
            isPartOf: {
              '@type': 'WebSite',
              name: 'SafetyOf.AI',
              url: 'https://safetyof.ai',
            },
          }),
        }}
      />

      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Developer <span className="text-brand-400">Docs</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to integrate SafetyOf.AI into your compliance workflow.
          MCP servers, REST APIs, webhooks, and attestation verification.
        </p>
      </div>

      {/* Quick Start Banner */}
      <a
        href="/docs/getting-started"
        className="block rounded-2xl gradient-hero p-6 mb-10 hover:opacity-95 transition-opacity"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">New? Start here</h2>
              <p className="text-white/70 text-sm">
                Install MCP servers, run your first scan, and generate docs in under 10 minutes.
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-white/70 hidden sm:block" />
        </div>
      </a>

      {/* Section Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <a
              key={section.title}
              href={section.href}
              className="group rounded-xl bg-card border border-border p-6 hover:border-brand-500/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-brand-500/30 transition-colors">
                  <Icon className="w-5 h-5 text-brand-400" />
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${section.tagColor}`}>
                  {section.tag}
                </span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-brand-400 transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
            </a>
          );
        })}
      </div>

      {/* SDKs */}
      <div className="mt-12 rounded-2xl bg-card border border-border p-8">
        <h2 className="text-xl font-bold mb-4">SDKs &amp; Libraries</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { name: 'Node.js / TypeScript', pkg: 'npm install @safetyofai/sdk', icon: '🟢' },
            { name: 'Python', pkg: 'pip install safetyofai', icon: '🐍' },
            { name: 'Go', pkg: 'go get github.com/CSOAI-ORG/sdk-go', icon: '🔵' },
          ].map((sdk) => (
            <div key={sdk.name} className="rounded-xl bg-background border border-border p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{sdk.icon}</span>
                <span className="font-medium text-sm">{sdk.name}</span>
              </div>
              <code className="text-xs font-mono text-brand-300 bg-brand-500/10 px-2 py-1 rounded">
                {sdk.pkg}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
