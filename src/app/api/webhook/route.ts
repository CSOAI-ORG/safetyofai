import { NextRequest, NextResponse } from 'next/server';

// Stripe Webhook Handler for SafetyOf.AI subscriptions
// Handles subscription lifecycle events

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature');

    if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 400 });
    }

    // In production: verify Stripe signature
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);

    // Handle different event types
    const event = JSON.parse(body);

    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        // Update user subscription in database
        console.log(`Subscription ${event.type}:`, event.data.object.id);
        break;

      case 'customer.subscription.deleted':
        // Downgrade user to free tier
        console.log('Subscription cancelled:', event.data.object.id);
        break;

      case 'invoice.payment_succeeded':
        console.log('Payment succeeded:', event.data.object.id);
        break;

      case 'invoice.payment_failed':
        console.log('Payment failed:', event.data.object.id);
        break;
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
