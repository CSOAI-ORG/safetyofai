import type { Metadata } from 'next';
import {
  Shield,
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  Award,
  Globe,
  Building2,
  Calendar,
  Server,
  FileText,
  Quote,
  Newspaper,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press Kit — SafetyOf.AI',
  description:
    'SafetyOf.AI press kit: company boilerplate, key facts, founder bio, logo downloads, screenshots, and press contact information.',
  openGraph: {
    title: 'Press Kit — SafetyOf.AI',
    description:
      'SafetyOf.AI press kit: company boilerplate, key facts, founder bio, and press contact information.',
    url: 'https://safetyof.ai/press',
    siteName: 'SafetyOf.AI',
    type: 'website',
  },
};

const boilerplate50 =
  'SafetyOf.AI is an EU AI Act compliance platform that delivers 48-hour audits, continuous monitoring, and HMAC-SHA256 cryptographic attestations. Built on 218 MCP servers, it automates compliance for EU AI Act, DORA, NIS2, and ISO 42001. Founded 2026, Lincolnshire, UK. MIT licensed.';

const boilerplate100 =
  'SafetyOf.AI is a compliance automation platform purpose-built for the EU AI Act. It delivers 48-hour gap analyses, continuous compliance monitoring, and HMAC-SHA256 cryptographically signed attestations through a network of 218 MCP (Model Context Protocol) servers. The platform covers five regulatory frameworks — EU AI Act, DORA, NIS2, ISO 42001, and GDPR — with automated risk classification, Annex IV documentation generation, and Article 50 transparency verification. Founded in 2026 and headquartered in Lincolnshire, United Kingdom, SafetyOf.AI is MIT licensed and available from £0.';

const boilerplate200 =
  'SafetyOf.AI is a compliance automation platform purpose-built for organisations developing, deploying, or using AI systems subject to the EU AI Act. The platform delivers 48-hour compliance gap analyses, continuous real-time monitoring, and HMAC-SHA256 cryptographically signed attestations — providing tamper-evident compliance evidence that regulators and auditors can independently verify.\n\nPowered by a network of 218 MCP (Model Context Protocol) servers, SafetyOf.AI automates evidence collection, risk classification under Article 6 and Annex III, technical documentation generation per Annex IV, and Article 50 transparency requirements including watermarking and disclosure. The platform covers five regulatory frameworks — EU AI Act, DORA, NIS2, ISO 42001, and GDPR — with cross-referenced controls that eliminate duplicate compliance work.\n\nSafetyOf.AI was founded in 2026 by Nicholas Templeman and is headquartered in Lincolnshire, United Kingdom. The platform is MIT licensed and available in three tiers: Free (3 scans/day), Pro (£99/month), and Enterprise (£499/month with continuous monitoring and dedicated support).';

export default function PressPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 rounded-full blur-[128px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium mb-8">
            <Newspaper className="w-3.5 h-3.5" />
            Press & Media Resources
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            <span className="text-foreground">SafetyOf.AI</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
              Press Kit
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Everything you need to write about SafetyOf.AI. Company boilerplates, key facts,
            founder bio, logos, and press contact information.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 border-t border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Boilerplate', href: '#boilerplate', icon: FileText },
              { label: 'Key Facts', href: '#key-facts', icon: Globe },
              { label: 'Founder Bio', href: '#founder', icon: Building2 },
              { label: 'Press Contact', href: '#contact', icon: Mail },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-background border border-border text-sm font-medium hover:border-brand-500/30 transition-colors"
              >
                <link.icon className="w-4 h-4 text-brand-400" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Company Boilerplate */}
      <section id="boilerplate" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Company Boilerplate</h2>
          </div>

          <p className="text-muted-foreground mb-8">
            Use these standard descriptions when writing about SafetyOf.AI. Choose the length
            that fits your publication.
          </p>

          <div className="space-y-6">
            {[
              { label: '50 words', text: boilerplate50 },
              { label: '100 words', text: boilerplate100 },
              { label: '200 words', text: boilerplate200 },
            ].map((bp) => (
              <div key={bp.label} className="rounded-xl bg-card border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-brand-400">{bp.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {bp.text.split(/\s+/).length} words
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {bp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section id="key-facts" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Key Facts</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Founded', value: '2026', icon: Calendar },
              { label: 'Headquarters', value: 'Lincolnshire, United Kingdom', icon: Building2 },
              { label: 'MCP Servers', value: '218 automated compliance servers', icon: Server },
              { label: 'Licence', value: 'MIT Open Source', icon: FileText },
              { label: 'Frameworks Covered', value: 'EU AI Act, DORA, NIS2, ISO 42001, GDPR', icon: Shield },
              { label: 'Attestation Method', value: 'HMAC-SHA256 cryptographic signing', icon: Shield },
              { label: 'Free Tier', value: '3 scans/day, no credit card required', icon: Globe },
              { label: 'Founder', value: 'Nicholas Templeman', icon: Building2 },
              { label: 'Parent Company', value: 'MEOK AI LABS', icon: Building2 },
              { label: 'Pricing', value: 'Free / Pro (£99/mo) / Enterprise (£499/mo)', icon: Globe },
            ].map((fact) => (
              <div key={fact.label} className="flex items-start gap-3 rounded-xl bg-background border border-border p-4">
                <fact.icon className="w-5 h-5 text-safety-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">{fact.value}</p>
                  <p className="text-xs text-muted-foreground">{fact.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section id="founder" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Founder Bio</h2>
          </div>

          <div className="rounded-xl bg-card border border-border p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-500 to-safety-500 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">NT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Nicholas Templeman</h3>
                <p className="text-sm text-brand-400 mb-4">Founder & CEO, SafetyOf.AI</p>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Nicholas Templeman is the founder of SafetyOf.AI, an EU AI Act compliance platform
                    built on 218 MCP servers. A technologist and entrepreneur based in Lincolnshire,
                    United Kingdom, Nicholas founded SafetyOf.AI in 2026 to make AI compliance accessible,
                    affordable, and automated.
                  </p>
                  <p>
                    Nicholas is also the founder of MEOK AI LABS, the parent company behind SafetyOf.AI
                    and a portfolio of AI governance domains. He is passionate about open-source compliance
                    tooling and believes that AI safety infrastructure should be available to every
                    organisation — not just those with enterprise budgets.
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-xs text-muted-foreground">Available for:</span>
                  {['Interviews', 'Commentary', 'Speaking'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos & Screenshots */}
      <section id="assets" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Logos & Screenshots</h2>
          </div>

          <p className="text-muted-foreground mb-8">
            Download high-resolution logos and platform screenshots for editorial use.
            All assets are available in PNG and SVG formats.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'SafetyOf.AI Logo (Full)',
                format: 'PNG / SVG',
                dimensions: '4000 x 1000px',
                url: '#',
              },
              {
                title: 'SafetyOf.AI Logo (Icon)',
                format: 'PNG / SVG',
                dimensions: '1000 x 1000px',
                url: '#',
              },
              {
                title: 'Platform Screenshot — Dashboard',
                format: 'PNG',
                dimensions: '2560 x 1440px',
                url: '#',
              },
              {
                title: 'Platform Screenshot — Compliance Scan',
                format: 'PNG',
                dimensions: '2560 x 1440px',
                url: '#',
              },
              {
                title: 'Platform Screenshot — Audit Report',
                format: 'PNG',
                dimensions: '2560 x 1440px',
                url: '#',
              },
              {
                title: 'Founder Headshot',
                format: 'JPG',
                dimensions: '2000 x 2000px',
                url: '#',
              },
            ].map((asset) => (
              <div
                key={asset.title}
                className="flex items-center justify-between rounded-xl bg-background border border-border p-4 hover:border-brand-500/30 transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold">{asset.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {asset.format} &middot; {asset.dimensions}
                  </p>
                </div>
                <a
                  href={asset.url}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500/10 text-brand-400 text-xs font-medium hover:bg-brand-500/20 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-background border border-brand-500/20 p-4 mt-6">
            <p className="text-xs text-muted-foreground">
              All logos and screenshots are provided for editorial use only. For commercial licensing,
              please contact{' '}
              <a href="mailto:press@safetyof.ai" className="text-brand-400 hover:text-brand-300">
                press@safetyof.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section id="contact" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Press Contact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-card border border-border p-6">
              <h3 className="font-semibold mb-4">For Press Enquiries</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-400" />
                  <a
                    href="mailto:press@safetyof.ai"
                    className="text-brand-400 hover:text-brand-300 font-medium"
                  >
                    press@safetyof.ai
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-brand-400" />
                  <span className="text-muted-foreground">safetyof.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-brand-400" />
                  <span className="text-muted-foreground">Lincolnshire, United Kingdom</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We aim to respond to all press enquiries within 24 hours.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border p-6">
              <h3 className="font-semibold mb-4">What We Can Provide</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Expert commentary on EU AI Act compliance',
                  'Data and insights on AI regulation trends',
                  'Interviews with founder Nicholas Templeman',
                  'Platform demos and walkthroughs',
                  'Custom data for editorial pieces',
                  'Guest articles and bylined content',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Coverage */}
      <section id="coverage" className="py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-safety-500/10 text-safety-400 flex items-center justify-center">
              <Newspaper className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Recent Coverage</h2>
          </div>

          <div className="rounded-xl bg-background border border-dashed border-border p-12 text-center">
            <Newspaper className="w-10 h-10 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">Coverage coming soon</p>
            <p className="text-sm text-muted-foreground/60">
              Press mentions and media coverage will be listed here as they are published.
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold">Awards & Recognition</h2>
          </div>

          <div className="rounded-xl bg-background border border-dashed border-border p-12 text-center">
            <Award className="w-10 h-10 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">Watch this space</p>
            <p className="text-sm text-muted-foreground/60">
              Awards, nominations, and industry recognition will be listed here.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to write about{' '}
            <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
              SafetyOf.AI?
            </span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Get in touch for interviews, commentary, or custom data for your story.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:press@safetyof.ai"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25"
            >
              <Mail className="w-5 h-5" />
              Contact Press Team
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border font-semibold hover:bg-accent transition-colors"
            >
              Learn About SafetyOf.AI
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
