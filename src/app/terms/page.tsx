import type { Metadata } from 'next';
import { FileText, Shield, CreditCard, Scale, AlertTriangle, Database, XCircle, Gavel, Mail, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — SafetyOf.AI',
  description: 'Terms of Service for SafetyOf.AI, the EU AI Act compliance platform by MEOK AI Labs Ltd.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://safetyof.ai/terms' },
};

const LAST_UPDATED = '15 May 2026';

const sections = [
  { id: 'service-description', label: '1. Service Description' },
  { id: 'user-responsibilities', label: '2. User Responsibilities' },
  { id: 'payment-terms', label: '3. Payment Terms' },
  { id: 'intellectual-property', label: '4. Intellectual Property' },
  { id: 'limitation-of-liability', label: '5. Limitation of Liability' },
  { id: 'data-processing', label: '6. Data Processing' },
  { id: 'termination', label: '7. Termination' },
  { id: 'governing-law', label: '8. Governing Law' },
  { id: 'contact', label: '9. Contact Us' },
];

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 glow-brand">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          These terms govern your use of SafetyOf.AI. We have written them in plain English
          so they are easy to understand.
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
        <Section id="service-description" icon={Shield} title="1. Service Description">
          <p>
            SafetyOf.AI is a compliance platform operated by MEOK AI Labs Ltd that provides automated
            tools for assessing AI systems against regulatory frameworks, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>EU AI Act compliance scanning</strong> — automated risk classification under Article 6 and Annex III, with gap analysis across Articles 9-15.</li>
            <li><strong>Continuous compliance monitoring</strong> — ongoing tracking of your AI systems against regulatory requirements, with alerts when compliance drift is detected.</li>
            <li><strong>Compliance auditing</strong> — 48-hour gap analysis, Annex IV documentation generation, and HMAC-SHA256 signed attestations.</li>
            <li><strong>MCP server infrastructure</strong> — 218 Model Context Protocol servers that automate evidence collection from your AI stack.</li>
            <li><strong>Multi-framework coverage</strong> — EU AI Act, DORA, NIS2, ISO 42001, and GDPR Article 22.</li>
          </ul>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the service with
            reasonable notice. We will always strive to maintain backward compatibility.
          </p>
        </Section>

        <Section id="user-responsibilities" icon={Users} title="2. User Responsibilities">
          <p>When using SafetyOf.AI, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Provide accurate information</strong> — the compliance assessments we generate are only as good as the data you submit. Inaccurate AI system descriptions will produce unreliable results.</li>
            <li><strong>Use the service lawfully</strong> — you must not use SafetyOf.AI for any purpose that violates applicable laws or regulations.</li>
            <li><strong>Maintain account security</strong> — you are responsible for keeping your login credentials secure and for all activity under your account.</li>
            <li><strong>Respect rate limits</strong> — free tier accounts are limited to 3 compliance scans per day. Attempting to circumvent these limits is prohibited.</li>
            <li><strong>Not reverse-engineer</strong> — you must not attempt to decompile, reverse-engineer, or extract source code from our proprietary systems.</li>
          </ul>
          <p>
            You retain full ownership of any data you submit to SafetyOf.AI. We process it solely
            to provide our services to you.
          </p>
        </Section>

        <Section id="payment-terms" icon={CreditCard} title="3. Payment Terms">
          <h4 className="font-semibold mt-4 mb-2">Billing</h4>
          <p>
            All paid subscriptions are billed through Stripe. Payments are processed securely and
            we do not store your card details on our servers. Subscription fees are charged at the
            beginning of each billing cycle (monthly or annually, depending on your plan).
          </p>

          <h4 className="font-semibold mt-4 mb-2">Pricing</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Free tier</strong> — 3 compliance scans per day, basic risk score. No payment required.</li>
            <li><strong>Pro</strong> — £99/month. Unlimited scans, full audit reports, MCP server access.</li>
            <li><strong>Enterprise</strong> — £499/month. Full audit trails, custom frameworks, dedicated support.</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Refund Policy</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Subscriptions</strong> — you may request a full refund within 14 days of your initial subscription payment, provided you have not extensively used the service (more than 10 compliance scans). After 14 days, no refunds are available for the current billing period.</li>
            <li><strong>Completed audits</strong> — bespoke compliance audits that have been delivered are non-refundable, as the intellectual work has been completed and delivered.</li>
            <li><strong>Cancellations</strong> — you may cancel your subscription at any time. Your access will continue until the end of the current billing period.</li>
          </ul>
        </Section>

        <Section id="intellectual-property" icon={Scale} title="4. Intellectual Property">
          <h4 className="font-semibold mt-4 mb-2">Open Source Components</h4>
          <p>
            Our MCP (Model Context Protocol) servers are released under the{' '}
            <strong>MIT License</strong>. You are free to use, modify, and distribute them
            in accordance with the MIT License terms. Source code is available on our GitHub
            repository.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Proprietary Components</h4>
          <p>
            The SafetyOf.AI dashboard, compliance engine, scoring algorithms, HMAC-SHA256
            attestation system, and all associated documentation are proprietary to MEOK AI Labs Ltd.
            These are protected by copyright and may not be reproduced, distributed, or create
            derivative works without our express written permission.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Your Content</h4>
          <p>
            You retain all intellectual property rights in the data and content you submit to
            SafetyOf.AI. By using our service, you grant us a limited licence to process your
            content solely for the purpose of providing compliance assessments.
          </p>
        </Section>

        <Section id="limitation-of-liability" icon={AlertTriangle} title="5. Limitation of Liability">
          <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4 mb-4">
            <p className="text-sm font-medium text-amber-300">
              Important Notice
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              SafetyOf.AI provides automated compliance assessment tools. This does not constitute
              legal advice. Users should consult qualified legal professionals for compliance
              decisions.
            </p>
          </div>
          <p>
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>SafetyOf.AI is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied.</li>
            <li>We do not warrant that the service will be uninterrupted, error-free, or completely secure.</li>
            <li>Our compliance assessments are automated tools designed to assist your compliance efforts. They are not a substitute for professional legal advice or formal regulatory submissions.</li>
            <li>MEOK AI Labs Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.</li>
            <li>Our total liability to you shall not exceed the amount you have paid to us in the 12 months preceding the claim.</li>
          </ul>
          <p>
            Nothing in these terms excludes or limits our liability for death or personal injury
            caused by negligence, fraud, or any other liability that cannot be excluded by law.
          </p>
        </Section>

        <Section id="data-processing" icon={Database} title="6. Data Processing">
          <p>
            We process your data to provide our compliance assessment services. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Analysing AI system descriptions you submit to generate compliance assessments.</li>
            <li>Storing scan results and audit reports for your access and download.</li>
            <li>Generating anonymised, aggregated data to improve our compliance tools and models.</li>
            <li>Sending service-related communications (e.g., compliance deadline alerts, if you have opted in).</li>
          </ul>
          <p>
            For full details on how we collect, use, store, and protect your personal data,
            please see our{' '}
            <a href="/privacy" className="text-brand-400 hover:text-brand-300 transition-colors">
              Privacy Policy
            </a>.
          </p>
        </Section>

        <Section id="termination" icon={XCircle} title="7. Termination">
          <h4 className="font-semibold mt-4 mb-2">By You</h4>
          <p>
            You may terminate your account at any time by contacting us at{' '}
            <a href="mailto:hello@safetyof.ai" className="text-brand-400 hover:text-brand-300 transition-colors">
              hello@safetyof.ai
            </a>{' '}
            or through your account settings. If you have a paid subscription, your access will
            continue until the end of the current billing period.
          </p>

          <h4 className="font-semibold mt-4 mb-2">By Us</h4>
          <p>
            We may terminate or suspend your account with 30 days written notice if:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You breach these terms and fail to remedy the breach within 14 days of notice.</li>
            <li>We are required to do so by law or regulatory authority.</li>
            <li>We discontinue the service (in which case we will provide a pro-rata refund for any prepaid period).</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Effect of Termination</h4>
          <p>
            Upon termination, your right to use SafetyOf.AI ceases immediately. We will retain
            your data for 30 days after termination to allow you to export it, after which it
            will be permanently deleted (except for anonymised aggregates).
          </p>
        </Section>

        <Section id="governing-law" icon={Gavel} title="8. Governing Law">
          <p>
            These terms are governed by and construed in accordance with the laws of{' '}
            <strong>England and Wales</strong>.
          </p>
          <p>
            Any disputes arising from or relating to these terms shall be subject to the exclusive
            jurisdiction of the courts of England and Wales, unless you are a consumer in the
            European Union, in which case you may also bring proceedings in the courts of the
            EU member state where you reside.
          </p>
          <p>
            If any provision of these terms is found to be unenforceable, the remaining provisions
            shall continue in full force and effect.
          </p>
        </Section>

        <Section id="contact" icon={Mail} title="9. Contact Us">
          <p>
            If you have any questions about these Terms of Service, please contact us:
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


