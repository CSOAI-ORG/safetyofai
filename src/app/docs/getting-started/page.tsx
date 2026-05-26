import type { Metadata } from 'next';
import {
  BookOpen,
  Terminal,
  Scan,
  FileText,
  Activity,
  CheckCircle2,
  ArrowRight,
  Copy,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Getting Started — SafetyOf.AI Docs',
  description:
    'Install MCP servers, run your first compliance scan, and generate audit-ready documentation in 5 steps.',
  openGraph: {
    title: 'Getting Started — SafetyOf.AI Docs',
    description: 'Go from zero to compliant in 5 steps.',
    url: 'https://safetyof.ai/docs/getting-started',
  },
};

const STEPS = [
  {
    step: 1,
    title: 'Install MCP Servers',
    description:
      'The SafetyOf.AI governance pack bundles 218 MCP servers for compliance automation. Install with a single command.',
    icon: Terminal,
    code: 'npx meok-setup --pack governance',
    codeDescription: 'Installs the full governance MCP pack including risk assessment, watermarking, and regulatory webhooks.',
    notes: [
      'Requires Node.js 18+ and npm 9+',
      'Supports Claude Desktop, Cursor, Windsurf, and VS Code',
      'Configuration is written to your MCP settings file automatically',
    ],
  },
  {
    step: 2,
    title: 'Run Your First Scan',
    description:
      'Use the quick_scan tool to perform a preliminary compliance assessment of your AI system.',
    icon: Scan,
    code: `# Via MCP tool call in your AI assistant:
quick_scan({
  "system_name": "My AI System",
  "industry": "Financial Services",
  "use_case": "Credit Scoring",
  "region": "EU"
})`,
    codeDescription: 'The scan evaluates your system against EU AI Act, DORA, NIS2, and ISO 42001 frameworks simultaneously.',
    notes: [
      'Free tier: 10 scans/day',
      'Pro tier: Unlimited scans with detailed reports',
      'Results include risk classification, gap analysis, and remediation steps',
    ],
  },
  {
    step: 3,
    title: 'Review Results',
    description:
      'Your scan results include a compliance score, risk classification, and a list of gaps found across all applicable frameworks.',
    icon: FileText,
    code: `{
  "compliance_score": 72,
  "risk_level": "HIGH-RISK",
  "gaps_found": 8,
  "frameworks": {
    "eu_ai_act": { "score": 68, "gaps": 5 },
    "iso_42001":  { "score": 81, "gaps": 2 },
    "gdpr":       { "score": 67, "gaps": 1 }
  },
  "attestation": "hmac-sha256:base64..."
}`,
    codeDescription: 'Each gap includes a severity level, affected article/section, and recommended remediation.',
    notes: [
      'Scores are normalised to 0–100 across all frameworks',
      'Gaps are prioritised by regulatory deadline urgency',
      'HMAC attestation is generated for audit trail integrity',
    ],
  },
  {
    step: 4,
    title: 'Generate Documentation',
    description:
      'Auto-generate technical documentation, risk management reports, and conformity assessment pre-fill using the generate_docs tool.',
    icon: FileText,
    code: `generate_docs({
  "scan_id": "scan_abc123",
  "output_format": "pdf",
  "sections": [
    "risk_management_system",
    "technical_documentation",
    "data_governance",
    "transparency_measures"
  ]
})`,
    codeDescription: 'Generates Annex IV-compliant technical documentation ready for conformity assessment.',
    notes: [
      'Output formats: PDF, Markdown, DOCX',
      'Documents are cryptographically signed with your HMAC key',
      'Pre-fills 60–80% of required documentation fields',
    ],
  },
  {
    step: 5,
    title: 'Set Up Continuous Monitoring',
    description:
      'Enable continuous monitoring to track regulatory changes, detect drift, and maintain compliance over time.',
    icon: Activity,
    code: `# Enable in your SafetyOf.AI dashboard:
# https://safetyof.ai/dashboard → Settings → Monitoring

# Or via API:
POST /api/v1/monitoring/enable
{
  "system_id": "sys_abc123",
  "frequency": "daily",
  "alerts": ["email", "webhook"],
  "webhook_url": "https://your-app.com/compliance-alerts"
}`,
    codeDescription: 'Monitors for regulatory updates, model drift, data distribution changes, and new compliance requirements.',
    notes: [
      'Free tier: Weekly monitoring checks',
      'Pro tier: Daily monitoring with instant alerts',
      'Enterprise: Real-time monitoring with custom thresholds',
    ],
  },
];

export default function GettingStartedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            name: 'Getting Started with SafetyOf.AI',
            description: 'Install MCP servers, run your first compliance scan, and generate docs in 5 steps.',
            url: 'https://safetyof.ai/docs/getting-started',
            author: {
              '@type': 'Organization',
              name: 'SafetyOf.AI',
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <a href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </a>
        <span>/</span>
        <span className="text-foreground">Getting Started</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Quick Start</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Getting <span className="text-brand-400">Started</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Go from zero to compliant in 5 steps. Install the governance MCP pack, run your first scan,
          review results, generate documentation, and set up continuous monitoring.
        </p>
        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
          <span className="px-2 py-0.5 rounded bg-safety-500/20 text-safety-300 text-xs font-medium">
            ~10 min
          </span>
          <span>Estimated completion time</span>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="rounded-xl bg-card border border-border p-6 mb-10">
        <h2 className="font-semibold mb-3">Prerequisites</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: 'Node.js 18+', check: true },
            { label: 'npm 9+ or yarn', check: true },
            { label: 'An AI coding assistant (Claude, Cursor, etc.)', check: true },
            { label: 'SafetyOf.AI account (free tier works)', check: false },
          ].map((prereq) => (
            <div key={prereq.label} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-safety-500 flex-shrink-0" />
              <span className="text-sm">{prereq.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-10">
        {STEPS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.step} className="relative">
              {/* Step connector line */}
              <div className="absolute left-5 top-12 bottom-0 w-px bg-border -mb-10 hidden sm:block" />

              <div className="flex gap-6">
                {/* Step number */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-sm flex-shrink-0 z-10">
                    {s.step}
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 rounded-2xl bg-card border border-border p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="sm:hidden w-8 h-8 rounded-full gradient-brand flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {s.step}
                    </div>
                    <Icon className="w-5 h-5 text-brand-400" />
                    <h2 className="text-xl font-bold">{s.title}</h2>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{s.description}</p>

                  {/* Code block */}
                  <div className="rounded-xl bg-background border border-border overflow-hidden mb-4">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-border">
                      <span className="text-xs font-mono text-muted-foreground">
                        {s.step === 1 ? 'Terminal' : 'Code'}
                      </span>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm font-mono text-brand-300 whitespace-pre">{s.code}</code>
                    </pre>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">{s.codeDescription}</p>

                  {/* Notes */}
                  <div className="space-y-2">
                    {s.notes.map((note) => (
                      <div key={note} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-safety-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Steps */}
      <div className="mt-16 rounded-2xl bg-card border border-border p-8">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: 'API Reference',
              description: 'Explore REST endpoints for programmatic access to scans and attestations.',
              href: '/docs/api',
              icon: 'Code2',
            },
            {
              title: 'Compliance Frameworks',
              description: 'Deep dive into EU AI Act, DORA, NIS2, ISO 42001, and GDPR requirements.',
              href: '/docs/frameworks',
              icon: 'Shield',
            },
            {
              title: 'Attestation Verification',
              description: 'Learn how to verify HMAC-SHA256 attestation signatures in your system.',
              href: '/docs/attestation',
              icon: 'KeyRound',
            },
            {
              title: 'Upgrade to Pro',
              description: 'Unlimited scans, daily monitoring, and audit-ready reports.',
              href: '/pricing',
              icon: 'Zap',
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-brand-500/30 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-sm group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand-400 transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* Help */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          Need help?{' '}
          <a href="mailto:support@safetyof.ai" className="text-brand-400 hover:underline">
            support@safetyof.ai
          </a>{' '}
          or{' '}
          <a
            href="https://github.com/CSOAI-ORG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:underline inline-flex items-center gap-1"
          >
            GitHub <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </div>
    </div>
  );
}
