import { NextResponse } from 'next/server';

// Test A2A gateway connection
export async function GET() {
  const gatewayUrl = process.env.A2A_GATEWAY_URL || 'http://localhost:18789';
  
  try {
    // Try to connect to OpenClaw gateway
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    
    const response = await fetch(`${gatewayUrl}/health`, {
      signal: controller.signal,
    }).catch(async () => {
      // Try alternative endpoints
      const endpoints = ['/', '/api/health', '/healthz', '/status'];
      for (const ep of endpoints) {
        try {
          const r = await fetch(`${gatewayUrl}${ep}`, { 
            signal: AbortController ? undefined : undefined,
          });
          if (r.ok) return r;
        } catch {}
      }
      return null;
    });
    
    clearTimeout(timeout);
    
    if (response && response.ok) {
      const data = await response.json().catch(() => ({}));
      return NextResponse.json({
        status: 'connected',
        gateway: gatewayUrl,
        response: data,
        a2aReady: true,
      });
    }
    
    return NextResponse.json({
      status: 'simulation_mode',
      gateway: gatewayUrl,
      error: 'Gateway not responding — running in simulation mode',
      a2aReady: false,
      note: 'OpenClaw gateway may use different endpoints. Check ~/.openclaw/openclaw.json for config.',
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      gateway: gatewayUrl,
      error: error instanceof Error ? error.message : 'Unknown error',
      a2aReady: false,
    });
  }
}
