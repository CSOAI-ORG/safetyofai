import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import MobileMenu from '@/components/MobileMenu';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  title: 'SafetyOf.AI — Prove Your AI Is Safe. Before Regulators Ask.',
  description:
    '48-hour compliance audits, continuous monitoring, and cryptographic attestations for EU AI Act, DORA, NIS2, and ISO 42001. From £5,000.',
  keywords: [
    'EU AI Act compliance',
    'AI compliance audit',
    'AI risk classification',
    'ISO 42001',
    'DORA compliance',
    'NIS2',
    'AI safety platform',
    'compliance monitoring',
    'HMAC attestations',
    'GDPR AI',
  ],
  openGraph: {
    title: 'SafetyOf.AI — Prove Your AI Is Safe. Before Regulators Ask.',
    description:
      '48-hour compliance audits, continuous monitoring, and cryptographic attestations for EU AI Act, DORA, NIS2, and ISO 42001. From £5,000.',
    url: 'https://safetyof.ai',
    siteName: 'SafetyOf.AI',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://safetyof.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SafetyOf.AI — EU AI Act Compliance Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafetyOf.AI — Prove Your AI Is Safe. Before Regulators Ask.',
    description:
      '48-hour compliance audits, continuous monitoring, and cryptographic attestations for EU AI Act, DORA, NIS2, and ISO 42001.',
    images: ['https://safetyof.ai/og-image.png'],
    creator: '@safetyofai',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://safetyof.ai',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="text/llms.txt"
          dangerouslySetInnerHTML={{
            __html: `SafetyOf.AI is an EU AI Act compliance platform by MEOK AI LABS. Services: 48-hour gap analysis (£5,000), continuous monitoring (from £79/mo), free compliance scanner. 218 MCP servers for automated compliance. Covers EU AI Act, DORA, NIS2, ISO 42001, GDPR. Book audit: safetyof.ai/pricing | GitHub: github.com/CSOAI-ORG`
          }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <a href="/" className="text-lg font-bold">
              <span className="text-brand-400">Safety</span>
              <span className="text-brand-300">Of</span>
              <span className="text-white">.AI</span>
            </a>
            <span className="hidden sm:inline text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-medium ml-1 font-mono">
              Aug 2, 2026
            </span>
          </div>

          <MobileMenu />
          <nav className="hidden lg:flex items-center gap-5 text-sm">
            <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Free Scanner</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="/vs-vanta" className="text-muted-foreground hover:text-foreground transition-colors">vs Vanta</a>
            <a href="/vs-drata" className="text-muted-foreground hover:text-foreground transition-colors">vs Drata</a>
            <a href="/status" className="text-muted-foreground hover:text-foreground transition-colors">Status</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/dashboard" className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg gradient-brand text-white hover:opacity-90 transition-opacity">
              Start Free Scan
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md gradient-brand flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="font-bold text-sm">SafetyOf.AI</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              48-hour compliance audits, continuous monitoring, and cryptographic attestations for
              EU AI Act, DORA, NIS2, ISO 42001, and GDPR. From £5,000.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Compliance</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="/dashboard" className="block hover:text-foreground transition-colors">Free Scanner</a>
              <a href="/pricing" className="block hover:text-foreground transition-colors">Pricing</a>
              <a href="/about" className="block hover:text-foreground transition-colors">About</a>
              <a href="/status" className="block hover:text-foreground transition-colors">System Status</a>
              <a href="/support" className="block hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Frameworks</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <span className="block">EU AI Act</span>
              <span className="block">DORA</span>
              <span className="block">NIS2</span>
              <span className="block">ISO 42001</span>
              <span className="block">GDPR</span>
            </div>
          </div>
            <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="/privacy" className="block hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="/terms" className="block hover:text-foreground transition-colors">Terms of Service</a>
              <a href="/cookies" className="block hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SafetyOf.AI — A MEOK AI LABS Company. All rights reserved.</p>
          <p>EU AI Act &bull; DORA &bull; NIS2 &bull; ISO 42001 &bull; GDPR</p>
        </div>
      </div>
    </footer>
  );
}
