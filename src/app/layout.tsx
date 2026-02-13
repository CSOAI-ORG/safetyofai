import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SafetyOf.AI — The Security Layer for CSOAI',
  description: 'Multi-AI consensus security platform. Real-time threat detection, Byzantine Council verification, and AI safety compliance — the security layer powering the Council for the Safety of AI.',
  keywords: ['AI safety', 'deepfake detection', 'threat intelligence', 'Byzantine Council', 'CSOAI', 'AI consensus', 'cybersecurity'],
  openGraph: {
    title: 'SafetyOf.AI — The Security Layer for CSOAI',
    description: 'Multi-AI consensus security. Verify content, detect deepfakes, block threats — powered by 33 independent AI agents.',
    url: 'https://safetyof.ai',
    siteName: 'SafetyOf.AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafetyOf.AI — The Security Layer for CSOAI',
    description: 'Multi-AI consensus security platform protecting the AI ecosystem.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
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
            <span className="hidden sm:inline text-xs bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full font-medium ml-1">
              CSOAI Security Layer
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-5 text-sm">
            <a href="/casa" className="text-muted-foreground hover:text-foreground transition-colors">CASA</a>
            <a href="/certification" className="text-muted-foreground hover:text-foreground transition-colors">Certification</a>
            <a href="/byzantine" className="text-muted-foreground hover:text-foreground transition-colors">AI3 Council</a>
            <a href="/dsrb" className="text-muted-foreground hover:text-foreground transition-colors">DSRB Pipeline</a>
            <a href="/programs" className="text-muted-foreground hover:text-foreground transition-colors">DARPA Programs</a>
            <a href="/scanner" className="text-muted-foreground hover:text-foreground transition-colors">Scanner</a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/dashboard" className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg gradient-brand text-white hover:opacity-90 transition-opacity">
              Launch Dashboard
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
              The security layer for the Council for the Safety of AI. Multi-AI consensus verification, Byzantine fault-tolerant monitoring, and real-time threat intelligence.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Platform</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="/casa" className="block hover:text-foreground transition-colors">CASA Assessments</a>
              <a href="/certification" className="block hover:text-foreground transition-colors">POAI Certification</a>
              <a href="/byzantine" className="block hover:text-foreground transition-colors">AI3 Council</a>
              <a href="/dsrb" className="block hover:text-foreground transition-colors">DSRB Pipeline</a>
              <a href="/scanner" className="block hover:text-foreground transition-colors">Security Scanner</a>
              <a href="/dashboard" className="block hover:text-foreground transition-colors">Dashboard</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Ecosystem</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="https://csoai.org" className="block hover:text-foreground transition-colors">CSOAI.org</a>
              <a href="/programs" className="block hover:text-foreground transition-colors">DARPA Programs</a>
              <a href="/about" className="block hover:text-foreground transition-colors">About SOAI</a>
              <a href="/pricing" className="block hover:text-foreground transition-colors">Pricing</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <span className="block">Privacy Policy</span>
              <span className="block">Terms of Service</span>
              <span className="block">Cookie Policy</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SafetyOf.AI — A CSOAI Security Layer. All rights reserved.</p>
          <p>Powered by Byzantine Council &bull; 33 Independent AI Agents</p>
        </div>
      </div>
    </footer>
  );
}
