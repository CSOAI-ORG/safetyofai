import type { Metadata } from 'next';
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronDown,
  Zap,
  Globe,
  ArrowRight,
  Calendar,
  BookOpen,
  Cpu,
  Lock,
  Database,
  Activity,
  Server,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How MCP Servers Are Automating AI Compliance (And Why It Matters) | SafetyOf.AI',
  description:
    'How Model Context Protocol (MCP) servers are transforming AI compliance automation. 218 servers, x402 payments, agent-native compliance, and what it means for EU AI Act readiness.',
  keywords: [
    'MCP compliance automation',
    'Model Context Protocol',
    'MCP servers',
    'AI compliance automation',
    'agent-native compliance',
    'EU AI Act automation',
    'MCP tools',
  ],
  openGraph: {
    title: 'How MCP Servers Are Automating AI Compliance',
    description:
      '218 MCP servers, x402 payments, agent-native compliance — how the Model Context Protocol is transforming AI governance.',
    url: 'https://safetyof.ai/blog/mcp-compliance-automation',
    siteName: 'SafetyOf.AI',
    type: 'article',
    publishedTime: '2026-05-15T00:00:00Z',
    authors: ['SafetyOf.AI'],
    images: [
      {
        url: 'https://safetyof.ai/og-blog-mcp.png',
        width: 1200,
        height: 630,
        alt: 'MCP Compliance Automation — SafetyOf.AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How MCP Servers Are Automating AI Compliance',
    description:
      '218 MCP servers, x402 payments, agent-native compliance — how the Model Context Protocol is transforming AI governance.',
    images: ['https://safetyof.ai/og-blog-mcp.png'],
  },
};

const tocItems = [
  { id: 'what-is-mcp', label: 'What Is MCP?' },
  { id: 'how-mcp-works', label: 'How MCP Works for Compliance' },
  { id: '218-servers', label: '218 MCP Servers' },
  { id: 'x402', label: 'x402 Payments & Agent Commerce' },
  { id: 'agent-native', label: 'Agent-Native Compliance' },
  { id: 'architecture', label: 'Architecture Deep Dive' },
  { id: 'use-cases', label: 'Real-World Use Cases' },
  { id: 'future', label: 'The Future of Compliance' },
  { id: 'faq', label: 'FAQ' },
];

const faqItems = [
  {
    question: 'What is the Model Context Protocol (MCP)?',
    answer:
      'MCP is an open protocol that standardises how AI models and agents connect to external tools, data sources, and services. Think of it as a universal adapter for AI systems — it provides a consistent interface for AI agents to interact with compliance tools, databases, and APIs.',
  },
  {
    question: 'How does MCP help with compliance automation?',
    answer:
      'MCP servers expose compliance capabilities as standardised tools that AI agents can call directly. Instead of manual compliance checks, an AI agent can invoke an MCP server to scan a system, classify risk, verify watermarking, or generate a conformity assessment report — all programmatically.',
  },
  {
    question: 'What are the 218 MCP servers?',
    answer:
      'SafetyOf.AI operates 218 MCP servers covering EU AI Act compliance, DORA financial resilience, NIS2 cybersecurity, ISO 42001 AI management, GDPR data protection, and more. Each server provides specialised compliance tools accessible via the MCP protocol.',
  },
  {
    question: 'What is x402 in the context of MCP?',
    answer:
      'x402 is an HTTP-based payment protocol that enables agent-to-agent commerce. When combined with MCP, it allows AI agents to autonomously purchase compliance services, pay for audits, and transact with other agents — creating an agent-native compliance economy.',
  },
  {
    question: 'Is MCP an open standard?',
    answer:
      'Yes. MCP was originally created by Anthropic and has been released as an open specification. Any organisation can build MCP servers or clients. The protocol is designed to be vendor-neutral and model-agnostic.',
  },
];

export default function MCPComplianceAutomation() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How MCP Servers Are Automating AI Compliance (And Why It Matters)',
    description:
      'How Model Context Protocol (MCP) servers are transforming AI compliance automation with 218 servers, x402 payments, and agent-native compliance.',
    author: {
      '@type': 'Organization',
      name: 'SafetyOf.AI',
      url: 'https://safetyof.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SafetyOf.AI',
      url: 'https://safetyof.ai',
    },
    datePublished: '2026-05-15',
    dateModified: '2026-05-15',
    url: 'https://safetyof.ai/blog/mcp-compliance-automation',
    mainEntityOfPage: 'https://safetyof.ai/blog/mcp-compliance-automation',
    keywords: [
      'MCP compliance automation',
      'Model Context Protocol',
      'MCP servers',
      'AI compliance',
      'agent-native compliance',
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium mb-6">
              <Calendar className="w-3.5 h-3.5" />
              Published 15 May 2026 &middot; 13 min read
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-500/10 border border-safety-500/20 text-safety-400 text-sm font-medium mb-8">
              <Server className="w-3.5 h-3.5" />
              218 MCP servers &middot; Agent-native compliance
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">MCP Servers Are</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Automating Compliance
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              The Model Context Protocol is transforming how AI systems interact with compliance infrastructure. 218 specialised servers, x402 agent payments, and agent-native workflows are making EU AI Act compliance autonomous.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/scanner"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
              >
                <Zap className="w-5 h-5" />
                Try MCP-Powered Scan
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#218-servers"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors"
              >
                <Server className="w-5 h-5" />
                View Server Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-mono text-brand-400 uppercase tracking-wider mb-4">On This Page</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {tocItems.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              >
                <span className="text-xs font-mono text-brand-500 w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What Is MCP */}
      <section id="what-is-mcp" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">What Is the Model Context Protocol (MCP)?</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The <strong className="text-foreground">Model Context Protocol (MCP)</strong> is an open protocol that standardises how AI models and agents connect to external tools, data sources, and services. Originally created by Anthropic, MCP provides a universal interface that allows any AI system to interact with any compliant tool — regardless of the underlying model, framework, or vendor.
            </p>
            <p>
              Think of MCP as a <strong className="text-foreground">USB-C port for AI</strong>. Just as USB-C provides a universal connector for devices regardless of manufacturer, MCP provides a universal protocol for AI agents to access capabilities — whether that&apos;s scanning a URL, checking compliance, querying a database, or executing a payment.
            </p>
            <p>
              The protocol defines a standardised request-response format, tool discovery mechanism, and capability negotiation between AI clients (models, agents) and servers (tools, services). This means an AI agent can discover, invoke, and compose compliance tools dynamically — without hardcoded integrations.
            </p>
            <p>
              MCP has rapidly become the dominant standard for tool integration in the AI ecosystem. Major model providers (Anthropic, OpenAI, Google), framework developers (LangChain, LlamaIndex), and enterprise platforms have adopted or announced MCP support.
            </p>
          </div>
        </div>
      </section>

      {/* How MCP Works for Compliance */}
      <section id="how-mcp-works" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">How MCP Works for Compliance</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Traditional compliance is manual: consultants review documentation, auditors conduct assessments, and reports are generated over weeks or months. MCP changes this by exposing compliance capabilities as <strong className="text-foreground">standardised tools</strong> that AI agents can invoke programmatically.
          </p>

          <div className="space-y-6">
            <div className="rounded-xl bg-background border border-border p-6">
              <h3 className="text-lg font-semibold mb-4">Traditional Compliance vs MCP-Powered Compliance</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-red-400 mb-3">Traditional Approach</h4>
                  <div className="space-y-2">
                    {[
                      'Manual document review (weeks)',
                      'Consultant-led gap analysis',
                      'Static checklists and spreadsheets',
                      'Point-in-time assessments',
                      'Human-generated reports',
                      'Annual audit cycles',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-safety-400 mb-3">MCP-Powered Approach</h4>
                  <div className="space-y-2">
                    {[
                      'Automated scanning (minutes)',
                      'AI agent-coordinated analysis',
                      'Standardised tool invocations',
                      'Continuous monitoring',
                      'Machine-generated reports',
                      'Real-time compliance tracking',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-safety-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  step: '1. Discovery',
                  desc: 'AI agents discover available MCP compliance servers and their capabilities through the protocol\'s tool discovery mechanism.',
                  icon: Globe,
                },
                {
                  step: '2. Invocation',
                  desc: 'Agents invoke specific compliance tools — risk classification, watermarking verification, documentation audit, penalty assessment.',
                  icon: Zap,
                },
                {
                  step: '3. Composition',
                  desc: 'Multiple MCP tools are composed into end-to-end compliance workflows. An agent might chain 12+ tools for a comprehensive audit.',
                  icon: Activity,
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl bg-background border border-brand-500/20 p-5 text-center">
                  <item.icon className="w-6 h-6 text-brand-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-sm mb-2">{item.step}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 218 Servers */}
      <section id="218-servers" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">218 MCP Servers</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            SafetyOf.AI operates <strong className="text-foreground">218 MCP servers</strong> covering the full spectrum of AI governance and compliance. Each server is a specialised microservice that exposes compliance capabilities as standardised MCP tools. Here&apos;s how they break down:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                category: 'EU AI Act',
                count: 48,
                tools: ['Risk classification', 'Article 50 verification', 'Conformity assessment', 'EU database registration', 'GPAI compliance checks'],
                color: 'brand',
              },
              {
                category: 'NIST AI RMF',
                count: 32,
                tools: ['Risk mapping', 'Governance assessment', 'Measurement framework', 'AI lifecycle monitoring', 'Bias detection'],
                color: 'safety',
              },
              {
                category: 'DORA (Financial)',
                count: 24,
                tools: ['ICT risk assessment', 'Third-party provider audit', 'Incident reporting', 'Resilience testing', 'Digital operational resilience'],
                color: 'brand',
              },
              {
                category: 'NIS2 (Cybersecurity)',
                count: 28,
                tools: ['Network security audit', 'Incident management', 'Supply chain assessment', 'Risk analysis', 'Compliance reporting'],
                color: 'safety',
              },
              {
                category: 'ISO 42001',
                count: 22,
                tools: ['AIMS assessment', 'Policy documentation', 'Risk treatment plans', 'Internal audit', 'Management review'],
                color: 'brand',
              },
              {
                category: 'GDPR & Data Protection',
                count: 36,
                tools: ['DPIA automation', 'Data mapping', 'Consent verification', 'Cross-border transfer assessment', 'Breach notification'],
                color: 'safety',
              },
              {
                category: 'Threat Intelligence',
                count: 18,
                tools: ['URL scanning', 'Malware detection', 'Phishing analysis', 'Domain reputation', 'IOC correlation'],
                color: 'brand',
              },
              {
                category: 'Model Security',
                count: 10,
                tools: ['Prompt injection detection', 'Model extraction defence', 'Adversarial robustness', 'Supply chain scanning', 'AIBOM generation'],
                color: 'safety',
              },
            ].map((cat) => (
              <div
                key={cat.category}
                className={`rounded-xl border p-5 ${
                  cat.color === 'brand'
                    ? 'border-brand-500/20 bg-brand-500/5'
                    : 'border-safety-500/20 bg-safety-500/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-sm">{cat.category}</h3>
                  <span
                    className={`text-lg font-bold ${
                      cat.color === 'brand' ? 'text-brand-400' : 'text-safety-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>
                <div className="space-y-1">
                  {cat.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div
                        className={`w-1 h-1 rounded-full flex-shrink-0 ${
                          cat.color === 'brand' ? 'bg-brand-400' : 'bg-safety-400'
                        }`}
                      />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-card border border-brand-500/20 p-6 mt-6">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-5 h-5 text-brand-400" />
              <h3 className="font-semibold">Total: 218 servers, 12+ primary compliance tools</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each server can be invoked independently or composed with others. A single compliance scan might invoke 12–15 servers in parallel, producing a comprehensive assessment in under 60 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* x402 */}
      <section id="x402" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">x402 Payments & Agent Commerce</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">x402</strong> is an HTTP-based payment protocol designed for machine-to-machine transactions. Named after the HTTP 402 &ldquo;Payment Required&rdquo; status code, x402 enables AI agents to autonomously pay for services, APIs, and compliance tools — without human intervention.
            </p>
            <p>
              When combined with MCP, x402 creates a powerful pattern: <strong className="text-foreground">agent-native compliance commerce</strong>. An AI agent can discover a compliance MCP server, negotiate pricing, invoke the tool, and settle payment — all programmatically, in milliseconds.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">How x402 + MCP Works</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  step: '1. Agent requests compliance scan',
                  desc: 'An AI agent identifies that a compliance check is needed and invokes the relevant MCP server.',
                },
                {
                  step: '2. Server responds with 402',
                  desc: 'The MCP server responds with HTTP 402, including pricing information and payment instructions.',
                },
                {
                  step: '3. Agent makes payment',
                  desc: 'The agent executes the payment via x402 protocol — using stablecoins, micropayments, or prepaid credits.',
                },
                {
                  step: '4. Server delivers result',
                  desc: 'After payment confirmation, the MCP server executes the compliance check and returns the results.',
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl bg-background border border-border p-5">
                  <h4 className="text-sm font-semibold text-foreground mb-2">{item.step}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Why It Matters for Compliance</h3>
            <p className="text-sm">
              x402 enables <strong className="text-foreground">pay-per-scan</strong> compliance economics. Instead of annual compliance contracts costing tens of thousands, organisations can pay per scan, per check, per assessment. This makes compliance accessible to startups and SMEs while enabling enterprises to scale their compliance operations without scaling headcount.
            </p>
          </div>
        </div>
      </section>

      {/* Agent-Native Compliance */}
      <section id="agent-native" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Agent-Native Compliance</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The convergence of MCP, x402, and multi-agent systems is creating a new paradigm: <strong className="text-foreground">agent-native compliance</strong>. Instead of compliance being a human-driven, periodic activity, it becomes an autonomous, continuous process managed by AI agents.
            </p>
            <p>
              SafetyOf.AI&apos;s architecture deploys <strong className="text-foreground">A2A (Agent-to-Agent) coordination</strong> across multiple specialised compliance agents. Each agent manages a specific compliance domain — EU AI Act, DORA, NIS2, ISO 42001 — and coordinates with other agents to produce unified compliance assessments.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">The Agent-Native Stack</h3>

            <div className="space-y-3">
              {[
                {
                  layer: 'Orchestration Layer',
                  desc: 'A2A coordination agents that plan, delegate, and synthesise compliance workflows across multiple MCP servers.',
                  count: '6 agents',
                },
                {
                  layer: 'Domain Agents',
                  desc: 'Specialised agents for each compliance framework — EU AI Act, DORA, NIS2, ISO 42001, GDPR, NIST AI RMF.',
                  count: '12 agents',
                },
                {
                  layer: 'Tool Agents',
                  desc: 'MCP-connected agents that execute specific compliance tasks — scanning, classification, verification, reporting.',
                  count: '15+ agents',
                },
                {
                  layer: 'MCP Servers',
                  desc: '218 servers providing the actual compliance capabilities — data sources, analysis engines, report generators.',
                  count: '218 servers',
                },
              ].map((item) => (
                <div key={item.layer} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center flex-shrink-0">
                    <Server className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">{item.layer}</h4>
                      <span className="text-xs font-mono text-brand-400">{item.count}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Architecture Deep Dive</h2>
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            SafetyOf.AI&apos;s MCP-powered compliance architecture follows a layered design that separates concerns, enables independent scaling, and supports multi-tenant isolation:
          </p>

          <div className="rounded-xl bg-background border border-border p-6 mb-6">
            <pre className="text-xs font-mono text-muted-foreground overflow-x-auto whitespace-pre">
{`┌─────────────────────────────────────────────┐
│              A2A Coordination Layer          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │ Planner │  │ Router  │  │Synthesizer│    │
│  └────┬────┘  └────┬────┘  └────┬─────┘    │
│       │            │            │            │
├───────┼────────────┼────────────┼────────────┤
│       ▼            ▼            ▼            │
│  ┌──────────────────────────────────────┐   │
│  │         Domain Agent Layer           │   │
│  │  EU AI Act │ DORA │ NIS2 │ ISO 42001│   │
│  └──────────────────┬───────────────────┘   │
│                     │                        │
├─────────────────────┼────────────────────────┤
│                     ▼                        │
│  ┌──────────────────────────────────────┐   │
│  │          MCP Server Layer            │   │
│  │  218 servers across 8 categories     │   │
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐        │   │
│  │  │EU  │ │NIST│ │DORA│ │NIS2│ ...     │   │
│  │  └────┘ └────┘ └────┘ └────┘        │   │
│  └──────────────────────────────────────┘   │
│                                             │
├─────────────────────────────────────────────┤
│           x402 Payment Layer                │
│  Per-scan micropayments & agent commerce    │
└─────────────────────────────────────────────┘`}
            </pre>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Zero-Trust Architecture',
                desc: 'Every MCP server is independently authenticated. No implicit trust between layers. Cell-level security isolates each compliance domain.',
              },
              {
                title: 'Horizontal Scaling',
                desc: 'MCP servers are stateless microservices that can scale independently. Peak compliance loads (e.g., pre-deadline rushes) are handled automatically.',
              },
              {
                title: 'Multi-Tenant Isolation',
                desc: 'Each organisation\'s compliance data is isolated. MCP server instances are tenant-aware with encrypted data boundaries.',
              },
              {
                title: 'Audit Logging',
                desc: 'Every MCP tool invocation is logged with full provenance — who called what, when, with what inputs, and what results were returned.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-card border border-border p-5">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Real-World Use Cases</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: '48-Hour Compliance Audit',
                description:
                  'A startup deploying a new AI-powered hiring tool needs to comply with the EU AI Act before launch. An AI agent invokes 15 MCP servers in parallel — risk classification, Annex III mapping, data governance assessment, Article 50 transparency check, conformity assessment readiness — and produces a complete gap analysis report in under 48 hours.',
                tools: '15 MCP servers, 3 domain agents, 1 orchestrator',
              },
              {
                title: 'Continuous Article 50 Monitoring',
                description:
                  'An enterprise deploying generative AI across marketing, customer service, and product needs continuous Article 50 compliance monitoring. MCP servers verify watermarking on every generated asset, check chatbot disclosure compliance, and flag deepfake content — all running as background agents with real-time dashboards.',
                tools: '8 MCP servers, 2 domain agents, continuous background execution',
              },
              {
                title: 'Multi-Framework Compliance',
                description:
                  'A financial services company must comply with the EU AI Act, DORA, NIS2, and GDPR simultaneously. A2A coordination agents orchestrate cross-framework compliance checks — identifying overlaps, eliminating duplication, and producing unified compliance reports that satisfy all four regulatory frameworks.',
                tools: '45+ MCP servers, 6 domain agents, cross-framework synthesis',
              },
              {
                title: 'Agent-to-Agent Compliance Commerce',
                description:
                  'A SaaS platform offers compliance-as-a-service to its customers. Using x402 payments, customer AI agents autonomously purchase compliance scans from the platform\'s MCP servers — paying per scan with micropayments. No human intervention, no annual contracts, just agent-native compliance commerce.',
                tools: '12 MCP servers, x402 payment layer, agent discovery protocol',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-card border border-border p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                <div className="text-xs font-mono text-brand-400 px-3 py-1.5 rounded-lg bg-brand-500/10 inline-block">
                  {item.tools}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section id="future" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">The Future of Compliance</h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              MCP-powered compliance is still in its early days, but the trajectory is clear. As AI systems become more capable and regulations become more complex, the only scalable approach to compliance is <strong className="text-foreground">automation through agents</strong>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">What&apos;s Coming Next</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Federated Compliance Networks',
                  desc: 'MCP servers operated by different organisations will form federated compliance networks. An AI agent in Germany can invoke compliance tools hosted in France, producing legally valid cross-border assessments.',
                },
                {
                  title: 'Regulatory Sandbox Integration',
                  desc: 'EU AI regulatory sandboxes will expose MCP endpoints, allowing AI agents to test compliance in sandbox environments before deploying to production.',
                },
                {
                  title: 'Autonomous Audit Trails',
                  desc: 'Every MCP invocation creates an immutable audit trail. Regulators will be able to verify compliance by reviewing the MCP call history — not just the final report.',
                },
                {
                  title: 'Real-Time Regulatory Updates',
                  desc: 'When the EU AI Office publishes new guidance, MCP servers will be updated automatically. Compliance checks will reflect the latest regulatory interpretation within hours, not months.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-background border border-border p-5">
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-brand-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-border rounded-xl overflow-hidden group">
                <summary className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-accent/50 transition-colors cursor-pointer list-none">
                  <span className="font-medium pr-4">{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-500/10 border border-safety-500/20 text-safety-400 text-sm font-medium mb-6">
            <Server className="w-3.5 h-3.5" />
            Powered by 218 MCP servers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience <span className="text-brand-400">Agent-Native Compliance</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            SafetyOf.AI&apos;s MCP-powered compliance platform scans your AI systems against every major framework — EU AI Act, DORA, NIS2, ISO 42001, GDPR — in minutes. 3 free scans per day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
            >
              <Shield className="w-5 h-5" />
              Book Compliance Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/scanner"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border font-semibold hover:bg-accent transition-colors"
            >
              <Zap className="w-5 h-5" />
              Try Our Free Compliance Scanner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
