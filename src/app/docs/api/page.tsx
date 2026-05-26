import type { Metadata } from 'next';
import {
  Code2,
  KeyRound,
  Scan,
  FileText,
  Bell,
  Activity,
  Copy,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Reference — SafetyOf.AI Docs',
  description:
    'REST API reference for SafetyOf.AI compliance scans, subscriptions, and system status. Authentication, endpoints, request/response examples, and error codes.',
  openGraph: {
    title: 'API Reference — SafetyOf.AI Docs',
    description: 'REST endpoints for compliance scans, attestations, and monitoring.',
    url: 'https://safetyof.ai/docs/api',
  },
};

const ERROR_CODES = [
  { code: 400, label: 'Bad Request', description: 'Invalid request body or missing required fields.' },
  { code: 401, label: 'Unauthorized', description: 'Missing or invalid API key.' },
  { code: 403, label: 'Forbidden', description: 'API key lacks permission for this resource.' },
  { code: 429, label: 'Too Many Requests', description: 'Rate limit exceeded. Check X-RateLimit-Reset header.' },
  { code: 500, label: 'Internal Server Error', description: 'Unexpected server error. Retry with exponential backoff.' },
];

const RATE_LIMIT_HEADERS = [
  { header: 'X-RateLimit-Limit', description: 'Maximum requests allowed in the current window.' },
  { header: 'X-RateLimit-Remaining', description: 'Number of requests remaining in the current window.' },
  { header: 'X-RateLimit-Reset', description: 'Unix timestamp (seconds) when the current window resets.' },
];

function CodeBlock({ title, code, language = 'json' }: { title: string; code: string; language?: string }) {
  return (
    <div className="rounded-xl bg-background border border-border overflow-hidden mb-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-xs font-mono text-muted-foreground">{title}</span>
        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
          <Copy className="w-3 h-3" />
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-brand-300 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function EndpointCard({
  method,
  path,
  description,
  rateLimit,
  children,
}: {
  method: 'GET' | 'POST';
  path: string;
  description: string;
  rateLimit: string;
  children: React.ReactNode;
}) {
  const methodColors = {
    GET: 'bg-safety-500/20 text-safety-300',
    POST: 'bg-brand-500/20 text-brand-300',
  };

  return (
    <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-mono ${methodColors[method]}`}>
          {method}
        </span>
        <code className="text-sm font-mono text-foreground">{path}</code>
      </div>
      <p className="text-muted-foreground mb-2 leading-relaxed">{description}</p>
      <p className="text-xs text-muted-foreground mb-6">
        <span className="text-orange-400">Rate limit:</span> {rateLimit}
      </p>
      {children}
    </div>
  );
}

export default function APIReferencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            name: 'SafetyOf.AI API Reference',
            description: 'REST API reference for compliance scans, subscriptions, and system status.',
            url: 'https://safetyof.ai/docs/api',
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
        <span className="text-foreground">API Reference</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Reference</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          API <span className="text-brand-400">Reference</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          REST endpoints for compliance scans, subscriptions, and system status.
          All endpoints require authentication and return JSON responses.
        </p>
      </div>

      {/* Authentication */}
      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center">
            <KeyRound className="w-5 h-5 text-brand-400" />
          </div>
          <h2 className="text-xl font-bold">Authentication</h2>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          All API requests require an API key passed via the <code className="font-mono text-brand-300 bg-brand-500/10 px-1.5 py-0.5 rounded text-sm">X-API-Key</code> header.
          Keys are scoped to your account and tier.
        </p>

        <CodeBlock
          title="Header"
          code={`curl -X POST https://safetyof.ai/api/scan \\
  -H "X-API-Key: meok_live_xxxx" \\
  -H "Content-Type: application/json"`}
          language="bash"
        />

        <div className="flex items-start gap-3 rounded-xl bg-background border border-border p-4">
          <Lock className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium mb-1">Get your API key</p>
            <p className="text-sm text-muted-foreground">
              Generate keys at{' '}
              <a
                href="https://safetyof.ai/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:underline inline-flex items-center gap-1"
              >
                safetyof.ai/api-keys <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Rate Limit Headers */}
      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 mb-10">
        <h2 className="text-xl font-bold mb-4">Rate Limit Headers</h2>
        <p className="text-muted-foreground mb-6">
          Every API response includes rate limit headers so you can track your usage.
        </p>
        <div className="space-y-3">
          {RATE_LIMIT_HEADERS.map((item) => (
            <div
              key={item.header}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl bg-background border border-border p-4"
            >
              <code className="font-mono text-sm text-brand-300 bg-brand-500/10 px-2 py-0.5 rounded whitespace-nowrap">
                {item.header}
              </code>
              <span className="text-sm text-muted-foreground">{item.description}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          See{' '}
          <a href="/docs/rate-limits" className="text-brand-400 hover:underline">
            Rate Limits
          </a>{' '}
          for tier details and 429 handling.
        </p>
      </div>

      {/* Endpoints */}
      <div className="space-y-10">
        {/* POST /api/scan */}
        <EndpointCard
          method="POST"
          path="/api/scan"
          description="Run a compliance scan on an AI system. Evaluates against applicable frameworks and returns a risk assessment with gap analysis."
          rateLimit="10/day (Free), unlimited (Pro)"
        >
          <h3 className="font-semibold mb-3 text-sm">Request Body</h3>
          <CodeBlock
            title="POST /api/scan"
            code={`{
  "system_name": "Credit Scoring Model v2",
  "description": "ML model for automated credit decisions",
  "industry": "Financial Services",
  "frameworks": ["eu_ai_act", "dora", "iso_42001"]
}`}
          />

          <h3 className="font-semibold mb-3 text-sm">Response — 201 Created</h3>
          <CodeBlock
            title="Response"
            code={`{
  "scan_id": "scan_7k9m2x4p",
  "risk_level": "HIGH-RISK",
  "gaps": [
    {
      "framework": "eu_ai_act",
      "article": "Article 10",
      "severity": "high",
      "description": "Data governance documentation incomplete"
    }
  ],
  "score": 72
}`}
          />

          <h3 className="font-semibold mb-3 text-sm">Error Response — 429 Too Many Requests</h3>
          <CodeBlock
            title="Error 429"
            code={`{
  "error": "rate_limit_exceeded",
  "message": "Free tier limit (10/day). Upgrade to Pro for unlimited.",
  "upgrade_url": "https://safetyof.ai/pricing",
  "retry_after": 86400
}`}
          />
        </EndpointCard>

        {/* GET /api/scan/{scan_id} */}
        <EndpointCard
          method="GET"
          path="/api/scan/{scan_id}"
          description="Retrieve the results of a previously initiated compliance scan. Returns full results once the scan status is complete."
          rateLimit="Unlimited (all tiers)"
        >
          <h3 className="font-semibold mb-3 text-sm">Path Parameters</h3>
          <div className="rounded-xl bg-background border border-border p-4 mb-4">
            <div className="flex items-center gap-3">
              <code className="font-mono text-sm text-brand-300">scan_id</code>
              <span className="text-xs text-muted-foreground">string — required</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              The scan identifier returned from <code className="font-mono text-xs text-brand-300 bg-brand-500/10 px-1 py-0.5 rounded">POST /api/scan</code>.
            </p>
          </div>

          <h3 className="font-semibold mb-3 text-sm">Response — 200 OK</h3>
          <CodeBlock
            title="Response"
            code={`{
  "scan_id": "scan_7k9m2x4p",
  "status": "complete",
  "results": {
    "compliance_score": 72,
    "risk_level": "HIGH-RISK",
    "gaps_found": 8,
    "frameworks": {
      "eu_ai_act": { "score": 68, "gaps": 5 },
      "iso_42001": { "score": 81, "gaps": 2 },
      "gdpr": { "score": 67, "gaps": 1 }
    }
  },
  "created_at": "2026-05-15T04:12:00Z"
}`}
          />

          <h3 className="font-semibold mb-3 text-sm">Error Response — 404 Not Found</h3>
          <CodeBlock
            title="Error 404"
            code={`{
  "error": "not_found",
  "message": "Scan not found or access denied."
}`}
          />
        </EndpointCard>

        {/* POST /api/subscribe */}
        <EndpointCard
          method="POST"
          path="/api/subscribe"
          description="Subscribe to compliance updates for a specific framework. Receives email notifications when regulations change or new guidance is published."
          rateLimit="5/hour (all tiers)"
        >
          <h3 className="font-semibold mb-3 text-sm">Request Body</h3>
          <CodeBlock
            title="POST /api/subscribe"
            code={`{
  "email": "compliance@example.com",
  "source": "api",
  "framework": "eu_ai_act"
}`}
          />

          <h3 className="font-semibold mb-3 text-sm">Response — 200 OK</h3>
          <CodeBlock
            title="Response"
            code={`{
  "success": true,
  "message": "Subscribed to EU AI Act updates."
}`}
          />

          <h3 className="font-semibold mb-3 text-sm">Error Response — 400 Bad Request</h3>
          <CodeBlock
            title="Error 400"
            code={`{
  "error": "validation_error",
  "message": "Invalid email address.",
  "fields": ["email"]
}`}
          />
        </EndpointCard>

        {/* GET /api/status */}
        <EndpointCard
          method="GET"
          path="/api/status"
          description="Get the current system status of SafetyOf.AI services. Includes component health and uptime metrics."
          rateLimit="Unlimited (all tiers)"
        >
          <h3 className="font-semibold mb-3 text-sm">Response — 200 OK</h3>
          <CodeBlock
            title="Response"
            code={`{
  "status": "operational",
  "components": [
    { "name": "API", "status": "operational" },
    { "name": "Scan Engine", "status": "operational" },
    { "name": "Regulatory Feed", "status": "operational" },
    { "name": "MCP Servers", "status": "operational" }
  ],
  "uptime": 99.98
}`}
          />
        </EndpointCard>
      </div>

      {/* Error Codes Reference */}
      <div className="mt-12 rounded-2xl bg-card border border-border p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          <h2 className="text-xl font-bold">Error Codes</h2>
        </div>
        <div className="space-y-3">
          {ERROR_CODES.map((err) => (
            <div
              key={err.code}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl bg-background border border-border p-4"
            >
              <span
                className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold font-mono whitespace-nowrap ${
                  err.code < 500
                    ? 'bg-orange-500/20 text-orange-300'
                    : 'bg-red-500/20 text-red-300'
                }`}
              >
                {err.code}
              </span>
              <span className="font-medium text-sm">{err.label}</span>
              <span className="text-sm text-muted-foreground">{err.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SDKs */}
      <div className="mt-10 rounded-2xl bg-card border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-4">SDK Usage</h2>
        <p className="text-muted-foreground mb-6">
          Use our official SDKs to simplify authentication and error handling.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              lang: 'Node.js',
              code: `import { SafetyOfAI } from '@safetyofai/sdk';\n\nconst client = new SafetyOfAI({\n  apiKey: 'meok_live_xxxx'\n});\n\nconst scan = await client.scan.create({\n  system_name: 'My AI System',\n  industry: 'Healthcare',\n  frameworks: ['eu_ai_act']\n});`,
            },
            {
              lang: 'Python',
              code: `from safetyofai import SafetyOfAI\n\nclient = SafetyOfAI(\n    api_key="meok_live_xxxx"\n)\n\nscan = client.scan.create(\n    system_name="My AI System",\n    industry="Healthcare",\n    frameworks=["eu_ai_act"]\n)`,
            },
            {
              lang: 'cURL',
              code: `curl -X POST https://safetyof.ai/api/scan \\\n  -H "X-API-Key: meok_live_xxxx" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "system_name": "My AI System",\n    "industry": "Healthcare",\n    "frameworks": ["eu_ai_act"]\n  }'`,
            },
          ].map((sdk) => (
            <div key={sdk.lang} className="rounded-xl bg-background border border-border overflow-hidden">
              <div className="px-4 py-2 border-b border-border">
                <span className="text-xs font-mono text-muted-foreground">{sdk.lang}</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-xs font-mono text-brand-300 whitespace-pre">{sdk.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-10 rounded-2xl bg-card border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-4">Related</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Rate Limits',
              description: 'Tier limits, burst quotas, and 429 handling strategies.',
              href: '/docs/rate-limits',
            },
            {
              title: 'Webhooks',
              description: 'Receive scan completion events and compliance alerts.',
              href: '/docs/webhooks',
            },
            {
              title: 'Attestation Verification',
              description: 'Verify HMAC-SHA256 attestation signatures.',
              href: '/docs/attestation',
            },
            {
              title: 'Getting Started',
              description: 'Install MCP servers and run your first scan.',
              href: '/docs/getting-started',
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
