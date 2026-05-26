import { NextResponse } from 'next/server';
import { subscribeSchema } from './schema';
import {
  addSubscriber,
  getSubscriberByEmail,
  checkRateLimit,
  scheduleNurture,
  getSubscriberCount,
} from '@/lib/store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = subscribeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Invalid input' },
        { status: 400 }
      );
    }

    const { email, source, framework } = parsed.data;

    if (!checkRateLimit(email, 10)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const existing = getSubscriberByEmail(email);
    if (existing) {
      return NextResponse.json({
        success: true,
        message: 'You\'re already subscribed! Check your inbox for the checklist.',
        checklistUrl: '/checklist',
        subscriberCount: getSubscriberCount(),
      });
    }

    const subscriber = addSubscriber(email, source, framework);
    scheduleNurture(subscriber);

    return NextResponse.json({
      success: true,
      message: 'Check your inbox for your EU AI Act Compliance Checklist!',
      checklistUrl: '/checklist',
      subscriberCount: getSubscriberCount(),
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    subscriberCount: getSubscriberCount(),
  });
}
