import { NextResponse } from 'next/server';
import {
  getPendingNurture,
  markNurtureSent,
  scheduleNurture,
  getSubscriberByEmail,
} from '@/lib/store';

const NURTURE_EMAILS: Record<number, { subject: string; body: string; cta: string; ctaUrl: string }> = {
  0: {
    subject: 'Your EU AI Act Compliance Checklist is here',
    body: `Welcome to SafetyOf.AI! Here's your 35-item EU AI Act compliance checklist covering Articles 5-50 and Annexes III & IV. Start working through it today — the August 2026 deadline is approaching fast.`,
    cta: 'View Your Checklist',
    ctaUrl: 'https://safetyof.ai/checklist',
  },
  2: {
    subject: 'EU AI Act Article 50: What you need to know',
    body: `Article 50 introduces transparency obligations that affect every AI system generating content. Watermarking, disclosure, and labelling — here's our complete breakdown of what's required before August 2026.`,
    cta: 'Read the Article 50 Guide',
    ctaUrl: 'https://safetyof.ai/blog/article-50-watermarking',
  },
  4: {
    subject: 'Have you run your free compliance scan?',
    body: `You downloaded our checklist — now let us do the heavy lifting. Our free compliance scanner checks your AI systems against all EU AI Act requirements in minutes. 3 free scans per day, no credit card required.`,
    cta: 'Start Your Free Scan',
    ctaUrl: 'https://safetyof.ai/dashboard',
  },
  7: {
    subject: 'Your AI compliance audit — from £5,000',
    body: `Manual compliance audits take 6+ months and cost £50k+. SafetyOf.AI delivers 48-hour gap analysis with HMAC-SHA256 signed attestations, starting at £5,000. Book your audit before the August 2026 deadline.`,
    cta: 'Book Your £5,000 Audit',
    ctaUrl: 'https://safetyof.ai/pricing',
  },
};

export async function GET() {
  const pending = getPendingNurture();

  const results = [];

  for (const schedule of pending) {
    const emailTemplate = NURTURE_EMAILS[schedule.day];
    if (!emailTemplate) {
      markNurtureSent(schedule.id);
      continue;
    }

    try {
      console.log(`[Nurture] Sending day ${schedule.day} email to ${schedule.email}:`, {
        subject: emailTemplate.subject,
        cta: emailTemplate.ctaUrl,
      });

      // In production: integrate with Resend, Mailchimp, or n8n
      // await resend.emails.send({
      //   from: 'SafetyOf.AI <hello@safetyof.ai>',
      //   to: schedule.email,
      //   subject: emailTemplate.subject,
      //   html: renderNurtureTemplate(schedule.email, emailTemplate),
      // });

      markNurtureSent(schedule.id);
      results.push({
        id: schedule.id,
        email: schedule.email,
        day: schedule.day,
        status: 'sent',
        subject: emailTemplate.subject,
      });
    } catch (error) {
      console.error(`[Nurture] Failed to send day ${schedule.day} to ${schedule.email}:`, error);
      results.push({
        id: schedule.id,
        email: schedule.email,
        day: schedule.day,
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  return NextResponse.json({
    processed: results.length,
    results,
    pendingCount: getPendingNurture().length,
  });
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const subscriber = getSubscriberByEmail(email);
    if (!subscriber) {
      return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 });
    }

    const schedule = scheduleNurture(subscriber);

    return NextResponse.json({
      success: true,
      message: `Nurture sequence scheduled for ${email}`,
      schedule: schedule.map((s) => ({
        day: s.day,
        scheduledAt: s.scheduledAt,
        status: s.status,
      })),
    });
  } catch (error) {
    console.error('[Nurture] Schedule error:', error);
    return NextResponse.json(
      { error: 'Failed to schedule nurture sequence' },
      { status: 500 }
    );
  }
}
