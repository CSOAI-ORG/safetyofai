import { NextResponse } from 'next/server';

// Stripe webhook handler for ACP (AI Commerce Protocol)
export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // In production, verify signature
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    event = JSON.parse(body);
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  // Handle subscription events
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('Pro subscription created:', session.customer);
        // TODO: Provision Pro access, send welcome email
        break;

      case 'invoice.payment_succeeded':
        const invoice = event.data.object;
        console.log('Payment succeeded for customer:', invoice.customer);
        break;

      case 'invoice.payment_failed':
        const failedInvoice = event.data.object;
        console.log('Payment failed for customer:', failedInvoice.customer);
        // TODO: Downgrade to free tier
        break;

      case 'customer.subscription.deleted':
        const subscription = event.data.object;
        console.log('Subscription cancelled:', subscription.customer);
        // TODO: Downgrade to free tier
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
