import { NextResponse } from 'next/server';

// A2A Protocol v1.0 endpoint for agent-to-agent communication
export async function GET() {
  const agentCard = await import('../../public/.well-known/agent-card.json');
  return NextResponse.json(agentCard.default || agentCard);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { action, params } = body;

  try {
    switch (action) {
      case 'compliance_check':
        // Delegate to A2A gateway
        const result = await fetch('http://localhost:18789/a2a/call', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            agent: 'compliance-agent',
            tool: 'run_compliance_scan',
            params: params,
          }),
        });
        const data = await result.json();
        return NextResponse.json({
          status: 'completed',
          result: data,
          cost: 99, // $0.99 per check (Intercom outcome model)
          currency: 'USD',
        });

      case 'regulatory_tracker':
        // Return cached regulatory data
        return NextResponse.json({
          cliffDates: [
            { date: '2026-11-02', regulation: 'EU AI Act', article: 'Article 50', daysUntil: 181 },
            { date: '2026-08-02', regulation: 'EU AI Act', article: 'Article 53', daysUntil: 89 },
          ],
          status: 'completed',
        });

      case 'audit_report_generate':
        return NextResponse.json({
          status: 'completed',
          reportUrl: 'https://safetyof.ai/api/reports/sample.pdf',
          cost: 499,
          currency: 'USD',
        });

      default:
        return NextResponse.json(
          { error: `Unknown action: ${action}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('A2A error:', error);
    return NextResponse.json(
      { error: 'Agent execution failed' },
      { status: 500 }
    );
  }
}
