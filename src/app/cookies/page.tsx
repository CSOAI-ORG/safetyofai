import type { Metadata } from 'next';
import { Cookie, ShieldCheck, BarChart3, Settings, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy — SafetyOf.AI',
  description: 'SafetyOf.AI does not use tracking cookies. Learn about our privacy-friendly approach to analytics.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://safetyof.ai/cookies' },
};

const LAST_UPDATED = '15 May 2026';

const sections = [
  { id: 'our-approach', label: '1. Our Approach' },
  { id: 'what-we-use', label: '2. What We Use' },
  { id: 'what-we-dont-use', label: '3. What We Don\'t Use' },
  { id: 'essential-cookies', label: '4. Essential Cookies' },
  { id: 'manage-cookies', label: '5. Managing Cookies' },
  { id: 'contact', label: '6. Contact Us' },
];

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 glow-brand">
          <Cookie className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Short version: we don&rsquo;t use tracking cookies. SafetyOf.AI is built with privacy
          at its core.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Last updated: {LAST_UPDATED}
        </p>
      </div>

      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 mb-8">
        <h2 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Contents</h2>
        <nav className="space-y-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block text-sm text-brand-400 hover:text-brand-300 transition-colors py-1"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="space-y-8">
        <Section id="our-approach" icon={ShieldCheck} title="1. Our Approach to Cookies">
          <p>
            SafetyOf.AI takes a privacy-first approach. We believe you should be able to use
            a compliance platform without being tracked across the internet.
          </p>
          <p>
            We do <strong>not</strong> use tracking cookies, advertising cookies, or any cookie
            that personally identifies you. Our analytics are privacy-friendly and cookieless.
          </p>
          <div className="rounded-xl bg-safety-500/5 border border-safety-500/20 p-4 mt-4">
            <p className="text-sm font-medium text-safety-400">
              No tracking. No advertising cookies. No personal data collected by analytics.
            </p>
          </div>
        </Section>

        <Section id="what-we-use" icon={BarChart3} title="2. What We Use: Privacy-Friendly Analytics">
          <p>
            We use privacy-friendly analytics tools to understand how SafetyOf.AI is used.
            These are either <strong>Plausible Analytics</strong> or <strong>Vercel Analytics</strong>,
            both of which are designed to be fully privacy-compliant.
          </p>
          <p>These tools:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Do <strong>not</strong> use cookies or any form of persistent storage.</li>
            <li>Do <strong>not</strong> collect personal data (no names, emails, or IP addresses stored).</li>
            <li>Do <strong>not</strong> track you across websites.</li>
            <li>Do <strong>not</strong> use fingerprinting or device identification techniques.</li>
            <li>Are fully compliant with GDPR, PECR, and the ePrivacy Directive.</li>
          </ul>
          <p>
            The data we see is entirely aggregated and anonymised — things like total page views,
            top pages, referrer sources, and browser types. We cannot identify individual users
            from this data.
          </p>
        </Section>

        <Section id="what-we-dont-use" icon={ShieldCheck} title="3. What We Don&rsquo;t Use">
          <p>SafetyOf.AI does <strong>not</strong> use:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Google Analytics</strong> — we avoid analytics tools that build advertising profiles.</li>
            <li><strong>Facebook Pixel</strong> — no social media tracking pixels on our site.</li>
            <li><strong>Advertising cookies</strong> — we don&rsquo;t run ads and don&rsquo;t participate in ad networks.</li>
            <li><strong>Third-party trackers</strong> — no scripts from external domains designed to track your behaviour.</li>
            <li><strong>Cookie consent banners</strong> — because we don&rsquo;t need them. There is nothing to consent to.</li>
          </ul>
        </Section>

        <Section id="essential-cookies" icon={Settings} title="4. Essential Cookies">
          <p>
            Currently, SafetyOf.AI does not use any cookies at all — not even essential ones.
          </p>
          <p>
            If we introduce essential cookies in the future (for example, session management to
            keep you logged in), they would be:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Strictly necessary for the service to function.</li>
            <li>Not used for tracking or analytics.</li>
            <li>Session-based (deleted when you close your browser).</li>
            <li>Documented here with full details before they are introduced.</li>
          </ul>
          <p>
            We will update this policy and provide clear notice if we introduce any cookies.
          </p>
        </Section>

        <Section id="manage-cookies" icon={Settings} title="5. Managing Cookies in Your Browser">
          <p>
            Although SafetyOf.AI does not use cookies, you may wish to manage cookies from other
            websites. Most browsers allow you to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>View</strong> all cookies stored on your device.</li>
            <li><strong>Delete</strong> individual cookies or all cookies.</li>
            <li><strong>Block</strong> cookies from specific websites or all websites.</li>
            <li><strong>Block third-party cookies</strong> while allowing first-party cookies.</li>
          </ul>
          <p>Here are links to cookie management for popular browsers:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">
                Apple Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">
                Microsoft Edge
              </a>
            </li>
          </ul>
        </Section>

        <Section id="contact" icon={Mail} title="6. Contact Us">
          <p>
            If you have any questions about our use of cookies or this policy, please contact us:
          </p>
          <div className="rounded-xl bg-card border border-border p-6 mt-4">
            <p className="font-semibold mb-2">MEOK AI Labs Ltd</p>
            <p className="text-sm text-muted-foreground">
              Email:{' '}
              <a href="mailto:hello@safetyof.ai" className="text-brand-400 hover:text-brand-300 transition-colors">
                hello@safetyof.ai
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Website:{' '}
              <a href="https://safetyof.ai" className="text-brand-400 hover:text-brand-300 transition-colors">
                safetyof.ai
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Lincolnshire, United Kingdom
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="rounded-2xl bg-card border border-border p-6 sm:p-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-brand-400" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}
