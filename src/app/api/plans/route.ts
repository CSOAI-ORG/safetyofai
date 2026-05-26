import { NextResponse } from 'next/server';

// Stripe products configuration
// Run these commands after Stripe auth:
// stripe products create --name="Pro" --description="AI Compliance Pro - Unlimited scans + 12 MCP tools"
// stripe prices create --product=prod_xxx --unit-amount=9900 --currency=usd --recurring.interval=month
// stripe products create --name="Enterprise" --description="AI Compliance Enterprise - Full audit + dedicated CSO"
// stripe prices create --product=prod_yyy --unit-amount=49900 --currency=usd --recurring.interval=month;

export async function GET() {
  // Return available pricing plans
  const plans = [
    {
      id: 'pro_monthly',
      name: 'Pro',
      price: 99,
      currency: 'USD',
      interval: 'month',
      features: [
        'Unlimited compliance scans',
        '12+ MCP tools',
        '5 A2A agents',
        'Email support',
        'Audit-ready reports',
      ],
      stripePriceId: process.env.STRIPE_PRO_PRICE_ID || 'price_xxx',
    },
    {
      id: 'enterprise_monthly',
      name: 'Enterprise',
      price: 499,
      currency: 'USD',
      interval: 'month',
      features: [
        'Everything in Pro',
        'Custom regulatory feeds',
        'ACP enterprise integration',
        'White-labeling',
        'Dedicated CSO + A2A coordination',
        'SLA guarantee (99.9%)',
      ],
      stripePriceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || 'price_yyy',
    },
  ];

  return NextResponse.json({ plans });
}
