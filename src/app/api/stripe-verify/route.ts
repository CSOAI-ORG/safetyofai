import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  const body = await request.json();
  const { priceId } = body;

  try {
    const price = await stripe.prices.retrieve(priceId);
    return NextResponse.json({ price });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid price ID' },
      { status: 400 }
    );
  }
}
