import type { Metadata } from 'next';
import { Lock, Building2, Database, Eye, HardDrive, Users, Calendar, Shield, Cookie, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — SafetyOf.AI',
  description: 'How SafetyOf.AI collects, uses, and protects your personal data. GDPR compliant.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://safetyof.ai/privacy' },
};

const LAST_UPDATED = '15 May 2026';

const sections = [
  { id: 'data-controller', label: '1. Who We Are' },
  { id: 'data-collected', label: '2. What Data We Collect' },
  { id: 'data-usage', label: '3. How We Use Your Data' },
  { id: 'data-storage', label: '4. Data Storage & Security' },
  { id: 'third-parties', label: '5. Third Parties' },
  { id: 'data-retention', label: '6. Data Retention' },
  { id: 'your-rights', label: '7. Your Rights' },
  { id: 'cookies', label: '8. Cookies' },
  { id: 'contact', label: '9. Contact Us' },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 glow-brand">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your privacy matters to us. This policy explains what data we collect, why we collect it,
          and how we protect it. Written in plain English, not legalese.
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
        <Section id="data-controller" icon={Building2} title="1. Who We Are">
          <p>
            The data controller for SafetyOf.AI is:
          </p>
          <div className="rounded-xl bg-background border border-border p-4 mt-2">
            <p className="font-semibold">MEOK AI Labs Ltd</p>
            <p className="text-sm text-muted-foreground">Lincolnshire, United Kingdom</p>
            <p className="text-sm text-muted-foreground">
              Email:{' '}
              <a href="mailto:hello@safetyof.ai" className="text-brand-400 hover:text-brand-300 transition-colors">
                hello@safetyof.ai
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              ICO Registration: [To be confirmed]
            </p>
          </div>
          <p>
            We are committed to protecting your personal data in accordance with the UK General
            Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </Section>

        <Section id="data-collected" icon={Database} title="2. What Data We Collect">
          <p>We collect the following types of data:</p>

          <h4 className="font-semibold mt-4 mb-2">Account Information</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Email address</strong> — used for account login, service communications, and compliance alerts (with your consent).</li>
            <li><strong>Company name</strong> — used to personalise your compliance reports and attestations.</li>
            <li><strong>Password</strong> — stored in hashed form only. We never see your actual password.</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Compliance Data</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>AI system descriptions</strong> — information you submit about your AI systems for compliance scanning (e.g., system purpose, data inputs, risk level).</li>
            <li><strong>Scan results</strong> — compliance scores, gap analyses, and audit reports generated from your submissions.</li>
            <li><strong>Usage data</strong> — which features you use, scan frequency, and report generation activity.</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Technical Data</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>IP address</strong> — processed automatically for security and rate limiting, not stored long-term.</li>
            <li><strong>Browser and device information</strong> — used for debugging and improving compatibility.</li>
          </ul>
        </Section>

        <Section id="data-usage" icon={Eye} title="3. How We Use Your Data">
          <p>We use your data for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>To provide compliance assessments</strong> — processing your AI system descriptions to generate risk classifications, gap analyses, and compliance reports.</li>
            <li><strong>To improve our tools</strong> — analysing anonymised, aggregated usage patterns to improve our compliance engine accuracy and coverage.</li>
            <li><strong>To send compliance updates</strong> — with your explicit consent, we may send you emails about EU AI Act deadlines, regulatory changes, or new platform features. You can unsubscribe at any time.</li>
            <li><strong>To maintain security</strong> — detecting and preventing fraud, abuse, and unauthorised access to accounts.</li>
          </ul>
          <p>
            <strong>Legal basis for processing:</strong> We process your data under Article 6(1)(b)
            of the UK GDPR (performance of a contract) for service delivery, and Article 6(1)(f)
            (legitimate interests) for security and improvement. Marketing communications require
            your explicit consent under Article 6(1)(a).
          </p>
        </Section>

        <Section id="data-storage" icon={HardDrive} title="4. Data Storage & Security">
          <p>We take data security seriously:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Encryption at rest</strong> — all data stored in our databases is encrypted using industry-standard AES-256 encryption.</li>
            <li><strong>Encryption in transit</strong> — all communications between your browser and our servers use TLS 1.3.</li>
            <li><strong>UK/EU data centres</strong> — your data is stored in data centres located in the United Kingdom and European Union. We do not transfer data to jurisdictions without adequate data protection.</li>
            <li><strong>Access controls</strong> — access to personal data is restricted to authorised personnel on a need-to-know basis. All access is logged and audited.</li>
            <li><strong>Regular security reviews</strong> — we conduct periodic security assessments and vulnerability testing.</li>
          </ul>
        </Section>

        <Section id="third-parties" icon={Users} title="5. Third Parties">
          <p>
            We share data with the following third-party service providers, strictly for the
            purposes described:
          </p>

          <div className="space-y-4 mt-4">
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="font-semibold">Stripe (Payment Processing)</p>
              <p className="text-sm text-muted-foreground mt-1">
                When you subscribe to a paid plan, your payment is processed by Stripe. We do not
                store your card details. Stripe processes your name, email, and payment information
                in accordance with their{' '}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">
                  privacy policy
                </a>.
              </p>
            </div>

            <div className="rounded-xl bg-background border border-border p-4">
              <p className="font-semibold">Vercel (Hosting)</p>
              <p className="text-sm text-muted-foreground mt-1">
                SafetyOf.AI is hosted on Vercel. They process technical data (IP addresses, request
                headers) as a data processor to deliver our service. Vercel participates in the
                EU-US Data Privacy Framework.
              </p>
            </div>

            <div className="rounded-xl bg-background border border-border p-4">
              <p className="font-semibold">Analytics (Privacy-Friendly)</p>
              <p className="text-sm text-muted-foreground mt-1">
                We use privacy-friendly analytics (Plausible or Vercel Analytics) to understand how
                our service is used. These tools do not use cookies, do not collect personal data,
                and do not track you across websites. All analytics data is aggregated and
                anonymised.
              </p>
            </div>
          </div>

          <p className="mt-4">
            We do not sell, rent, or trade your personal data to any third parties.
          </p>
        </Section>

        <Section id="data-retention" icon={Calendar} title="6. Data Retention">
          <p>We retain different types of data for different periods:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Scan data</strong> — raw data submitted for compliance scanning is retained for <strong>30 days</strong> after the scan is completed, then permanently deleted. This gives you time to download your reports.</li>
            <li><strong>Account data</strong> — your email, company name, and account settings are retained for as long as your account is active.</li>
            <li><strong>Anonymised aggregates</strong> — we retain anonymised, aggregated data indefinitely. This data cannot be used to identify you and is used to improve our compliance tools.</li>
            <li><strong>Billing records</strong> — retained for 7 years as required by UK tax law.</li>
          </ul>
          <p>
            When you delete your account, we permanently remove your personal data within 30 days,
            except where retention is required by law.
          </p>
        </Section>

        <Section id="your-rights" icon={Shield} title="7. Your Rights">
          <p>
            Under the UK GDPR (Articles 15-20), you have the following rights:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Right of access</strong> (Article 15) — you can request a copy of all personal data we hold about you.</li>
            <li><strong>Right to rectification</strong> (Article 16) — you can ask us to correct inaccurate personal data.</li>
            <li><strong>Right to erasure</strong> (Article 17) — you can ask us to delete your personal data (subject to legal retention requirements).</li>
            <li><strong>Right to restrict processing</strong> (Article 18) — you can ask us to limit how we use your data.</li>
            <li><strong>Right to data portability</strong> (Article 20) — you can request your data in a structured, machine-readable format (JSON or CSV).</li>
            <li><strong>Right to object</strong> — you can object to processing based on legitimate interests, including direct marketing.</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{' '}
            <a href="mailto:hello@safetyof.ai" className="text-brand-400 hover:text-brand-300 transition-colors">
              hello@safetyof.ai
            </a>. We will respond within 30 days.
          </p>
          <p>
            If you are not satisfied with our response, you have the right to lodge a complaint
            with the Information Commissioner&rsquo;s Office (ICO) at{' '}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors">
              ico.org.uk
            </a>.
          </p>
        </Section>

        <Section id="cookies" icon={Cookie} title="8. Cookies">
          <p>
            SafetyOf.AI does <strong>not</strong> use tracking cookies. We believe in privacy by
            default.
          </p>
          <p>
            We use privacy-friendly analytics (Plausible or Vercel Analytics) that do not use
            cookies, do not collect personal data, and are fully compliant with GDPR, PECR,
            and ePrivacy regulations. These tools provide us with aggregated, anonymised usage
            statistics only.
          </p>
          <p>
            If we introduce essential cookies in the future (e.g., for session management),
            we will update this policy and provide clear notice.
          </p>
          <p>
            For more details, see our{' '}
            <a href="/cookies" className="text-brand-400 hover:text-brand-300 transition-colors">
              Cookie Policy
            </a>.
          </p>
        </Section>

        <Section id="contact" icon={Mail} title="9. Contact Us">
          <p>
            If you have any questions about this Privacy Policy or how we handle your data,
            please contact us:
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
            <p className="text-sm text-muted-foreground">
              ICO Registration: [To be confirmed]
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
