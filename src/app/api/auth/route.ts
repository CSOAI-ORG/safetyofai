import { NextRequest, NextResponse } from 'next/server';

// Authentication API for SafetyOf.AI
// JWT-based auth compatible with CSOAI platform SSO

// In production, this would use a real database and bcrypt
// For now, providing the auth structure for Vercel deployment

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, email, password } = body;

    if (action === 'login') {
      if (!email || !password) {
        return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
      }

      // In production: verify against database with bcrypt
      // For now: return a demo token structure
      return NextResponse.json({
        success: true,
        user: {
          id: 'demo-user',
          email,
          name: 'Demo User',
          role: 'free',
          subscription: {
            tier: 'free',
            queriesUsed: 0,
            queriesLimit: 3,
            validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          },
        },
        token: 'demo-jwt-token',
        message: 'Authentication successful. Connect your CSOAI account for full access.',
      });
    }

    if (action === 'signup') {
      if (!email || !password) {
        return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        user: {
          id: crypto.randomUUID(),
          email,
          role: 'free',
          subscription: {
            tier: 'free',
            queriesUsed: 0,
            queriesLimit: 3,
          },
        },
        message: 'Account created. Welcome to SafetyOf.AI.',
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
