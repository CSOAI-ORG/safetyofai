import type { Metadata } from 'next';
import {
  Gauge,
  Shield,
  Zap,
  Building2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rate Limits — SafetyOf.AI Docs',
  description:
    'API rate limits for SafetyOf.AI. Free, Pro, and Enterprise tier limits, burst quotas, rate limit headers, and 429 error handling.',
  openGraph: {
    title: 'Rate Limits — SafetyOf.AI Docs',
    description: 'Understand API rate limits, headers, and 429 handling for SafetyOf.AI.',
    url: 'https://safetyof.ai/docs/rate-limits',
  },
};

const TIERS = [
  {
    name: 'Free',
    icon: Shield,
    requestsDay: '10',
    requestsMinute: '2',
    burst: '5',
    highlight: false,
    color: 'text-muted-foreground',
    bgColor: 'bg-background',
  },
  {
    name: 'Pro',
    icon: Zap,
    requestsDay: 'Unlimited',
    requestsMinute: '60',
    burst: '100',
    highlight: true,
    color: 'text-brand-400',
    bgColor: 'bg-brand-500/5',
  },
  {
    name: 'Enterprise',
    icon: Building2,
    requestsDay: 'Unlimited',
    requestsMinute: '300',
    burst: '500',
    highlight: false,
    color: 'text-safety-400',
    bgColor: 'bg-safety-500/5',
  },
];

const RESPONSE_HEADERS = [
  {
    header: 'X-RateLimit-Limit',
    description: 'Maximum requests allowed in the current window.',
    example: '10',
  },
  {
    header: 'X-RateLimit-Remaining',
    description: 'Number of requests remaining before hitting the limit.',
    example: '7',
  },
  {
    header: 'X-RateLimit-Reset',
    description: 'Unix timestamp (seconds) when the current window resets.',
    example: '1715836800',
  },
];

export default function RateLimitsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            name: 'SafetyOf.AI Rate Limits',
            description: 'API rate limits, headers, and 429 handling for SafetyOf.AI.',
            url: 'https://safetyof.ai/docs/rate-limits',
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
        <span className="text-foreground">Rate Limits</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Gauge className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Limits</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Rate <span className="text-brand-400">Limits</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          API rate limits protect service stability and ensure fair usage across all tiers.
          Limits are applied per API key using a sliding window algorithm.
        </p>
      </div>

      {/* Tier Comparison Table */}
      <div className="rounded-2xl bg-card border border-border overflow-hidden mb-10">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-lg font-bold">Tier Limits</h2>
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Tier</th>
                <th className="text-center text-sm font-medium text-muted-foreground px-6 py-3">
                  Requests/day
                </th>
                <th className="text-center text-sm font-medium text-muted-foreground px-6 py-3">
                  Requests/minute
                </th>
                <th className="text-center text-sm font-medium text-muted-foreground px-6 py-3">Burst</th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map((tier) => {
                const Icon = tier.icon;
                return (
                  <tr
                    key={tier.name}
                    className={`border-b border-border last:border-0 ${tier.highlight ? tier.bgColor : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${tier.color}`} />
                        <span className={`font-semibold ${tier.color}`}>{tier.name}</span>
                        {tier.highlight && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-brand-500/20 text-brand-300">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="text-center px-6 py-4 font-mono text-sm">{tier.requestsDay}</td>
                    <td className="text-center px-6 py-4 font-mono text-sm">{tier.requestsMinute}</td>
                    <td className="text-center px-6 py-4 font-mono text-sm">{tier.burst}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden divide-y divide-border">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <div key={tier.name} className={`p-4 ${tier.highlight ? tier.bgColor : ''}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-5 h-5 ${tier.color}`} />
                  <span className={`font-semibold ${tier.color}`}>{tier.name}</span>
                  {tier.highlight && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-brand-500/20 text-brand-300">
                      Popular
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Per day</span>
                    <span className="font-mono text-sm">{tier.requestsDay}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Per minute</span>
                    <span className="font-mono text-sm">{tier.requestsMinute}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Burst</span>
                    <span className="font-mono text-sm">{tier.burst}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rate Limit Headers */}
      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 mb-10">
        <h2 className="text-xl font-bold mb-4">Response Headers</h2>
        <p className="text-muted-foreground mb-6">
          Every API response includes these headers so you can track your usage in real time and avoid hitting limits.
        </p>

        <div className="space-y-4">
          {RESPONSE_HEADERS.map((item) => (
            <div
              key={item.header}
              className="rounded-xl bg-background border border-border p-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <code className="font-mono text-sm text-brand-300 bg-brand-500/10 px-2 py-0.5 rounded whitespace-nowrap">
                  {item.header}
                </code>
                <span className="text-sm text-muted-foreground">{item.description}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-muted-foreground">Example:</span>
                <code className="font-mono text-xs text-foreground bg-muted px-2 py-0.5 rounded">
                  {item.header}: {item.example}
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-background border border-border p-4">
          <h3 className="font-semibold text-sm mb-3">Example Response Headers</h3>
          <pre className="overflow-x-auto">
            <code className="text-sm font-mono text-brand-300 whitespace-pre">{`HTTP/1.1 200 OK
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 7
X-RateLimit-Reset: 1715836800
Content-Type: application/json`}</code>
          </pre>
        </div>
      </div>

      {/* 429 Error Handling */}
      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-400" />
          <h2 className="text-xl font-bold">429 Too Many Requests</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          When you exceed your tier&apos;s rate limit, the API returns a <code className="font-mono text-sm text-orange-300 bg-orange-500/10 px-1.5 py-0.5 rounded">429</code> status code.
          The response body includes details about the limit and when you can retry.
        </p>

        <div className="rounded-xl bg-background border border-border overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">429 Response</span>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm font-mono text-brand-300 whitespace-pre">{`{
  "error": "rate_limit_exceeded",
  "message": "Free tier limit (10/day). Upgrade to Pro for unlimited.",
  "upgrade_url": "https://safetyof.ai/pricing",
  "retry_after": 86400
}`}</code>
          </pre>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Response Fields</h3>
          {[
            {
              field: 'error',
              type: 'string',
              description: 'Machine-readable error code. Always "rate_limit_exceeded" for 429 responses.',
            },
            {
              field: 'message',
              type: 'string',
              description: 'Human-readable message with current tier and limit details.',
            },
            {
              field: 'upgrade_url',
              type: 'string',
              description: 'Link to upgrade your plan for higher limits.',
            },
            {
              field: 'retry_after',
              type: 'number',
              description: 'Seconds until the rate limit window resets. Do not retry before this period.',
            },
          ].map((item) => (
            <div
              key={item.field}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 rounded-xl bg-background border border-border p-4"
            >
              <div className="flex items-center gap-2 sm:min-w-[180px]">
                <code className="font-mono text-sm text-brand-300">{item.field}</code>
                <span className="text-xs text-muted-foreground">{item.type}</span>
              </div>
              <span className="text-sm text-muted-foreground">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Info className="w-5 h-5 text-brand-400" />
          <h2 className="text-xl font-bold">Best Practices</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              title: 'Monitor response headers',
              description:
                'Check X-RateLimit-Remaining on every response. When it reaches 0, stop making requests until X-RateLimit-Reset.',
            },
            {
              title: 'Implement exponential backoff',
              description:
                'On 429 responses, wait retry_after seconds before retrying. For subsequent failures, double the wait time up to a maximum of 5 minutes.',
            },
            {
              title: 'Cache scan results',
              description:
                'GET /api/scan/{scan_id} is unlimited on all tiers. Cache results client-side to avoid unnecessary POST requests.',
            },
            {
              title: 'Use batch endpoints',
              description:
                'If scanning multiple systems, use the batch API (Pro+) to submit multiple scans in a single request and save rate limit budget.',
            },
          ].map((practice) => (
            <div key={practice.title} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-brand-400">
                  {/* index + 1 is implicit from order */}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{practice.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exponential Backoff Example */}
      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 mb-10">
        <h2 className="text-xl font-bold mb-4">Handling 429 with Backoff</h2>
        <p className="text-muted-foreground mb-6">
          Example implementation of exponential backoff with <code className="font-mono text-sm text-brand-300 bg-brand-500/10 px-1.5 py-0.5 rounded">retry_after</code> support.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-background border border-border overflow-hidden">
            <div className="px-4 py-2 border-b border-border">
              <span className="text-xs font-mono text-muted-foreground">Node.js</span>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-xs font-mono text-brand-300 whitespace-pre">{`async function scanWithRetry(body, retries = 3) {
  const res = await fetch('/api/scan', {
    method: 'POST',
    headers: {
      'X-API-Key': process.env.API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (res.status === 429 && retries > 0) {
    const data = await res.json();
    const wait = data.retry_after * 1000;
    await new Promise(r => setTimeout(r, wait));
    return scanWithRetry(body, retries - 1);
  }

  return res.json();
}`}</code>
            </pre>
          </div>
          <div className="rounded-xl bg-background border border-border overflow-hidden">
            <div className="px-4 py-2 border-b border-border">
              <span className="text-xs font-mono text-muted-foreground">Python</span>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-xs font-mono text-brand-300 whitespace-pre">{`import time, requests

def scan_with_retry(body, retries=3):
    res = requests.post(
        "https://safetyof.ai/api/scan",
        json=body,
        headers={"X-API-Key": API_KEY}
    )

    if res.status_code == 429 and retries > 0:
        data = res.json()
        time.sleep(data["retry_after"])
        return scan_with_retry(body, retries - 1)

    return res.json()`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="rounded-2xl gradient-hero p-6 sm:p-8 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">Need higher limits?</h2>
            <p className="text-white/70 text-sm">
              Pro gives you unlimited scans per day. Enterprise adds 300 requests/minute with priority routing.
            </p>
          </div>
          <a
            href="https://safetyof.ai/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-brand-600 font-semibold text-sm hover:bg-white/90 transition-colors flex-shrink-0"
          >
            View Plans <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Related */}
      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-4">Related</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: 'API Reference',
              description: 'Full endpoint documentation with request/response examples.',
              href: '/docs/api',
            },
            {
              title: 'Webhooks',
              description: 'Receive events instead of polling for scan results.',
              href: '/docs/webhooks',
            },
            {
              title: 'Getting Started',
              description: 'Install MCP servers and run your first scan.',
              href: '/docs/getting-started',
            },
            {
              title: 'Attestation Verification',
              description: 'Verify HMAC-SHA256 attestation signatures.',
              href: '/docs/attestation',
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
