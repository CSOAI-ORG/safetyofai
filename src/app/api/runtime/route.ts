import { NextRequest, NextResponse } from 'next/server';

// POST — Scan a prompt/response through the runtime defense pipeline
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { prompt, response, model, scanType } = body;

  if (!prompt && !response) {
    return NextResponse.json({ error: 'Either prompt or response text is required' }, { status: 400 });
  }

  const text = prompt || response;
  const direction = prompt ? 'inbound' : 'outbound';

  // Simulate runtime defense scanning
  const piiPatterns = {
    ssn: /\b\d{3}-\d{2}-\d{4}\b/.test(text),
    creditCard: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/.test(text),
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(text),
    phone: /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/.test(text),
  };

  const injectionIndicators = [
    'ignore previous instructions',
    'ignore all instructions',
    'you are now',
    'act as',
    'forget everything',
    'system prompt',
    'reveal your instructions',
    'DAN',
    'developer mode',
    'jailbreak',
  ];

  const injectionScore = injectionIndicators.reduce((score, pattern) => {
    return score + (text.toLowerCase().includes(pattern.toLowerCase()) ? 15 : 0);
  }, 0);

  const hasPII = Object.values(piiPatterns).some(Boolean);
  const piiTypes = Object.entries(piiPatterns).filter(([, v]) => v).map(([k]) => k);
  const isInjection = injectionScore > 20;

  const actions: string[] = [];
  if (isInjection) actions.push('BLOCKED');
  if (hasPII && direction === 'inbound') actions.push('PII_REDACTED');
  if (hasPII && direction === 'outbound') actions.push('PII_MASKED');
  if (actions.length === 0) actions.push('ALLOWED');

  return NextResponse.json({
    scanId: `RT-${Date.now()}`,
    direction,
    model: model || 'unspecified',
    scanType: scanType || 'full',
    timestamp: new Date().toISOString(),
    latencyMs: Math.floor(Math.random() * 15) + 8,
    results: {
      action: actions[0],
      allActions: actions,
      injection: {
        detected: isInjection,
        score: Math.min(injectionScore, 100),
        type: isInjection ? 'direct_prompt_injection' : null,
        patterns: injectionIndicators.filter(p => text.toLowerCase().includes(p.toLowerCase())),
      },
      pii: {
        detected: hasPII,
        types: piiTypes,
        action: hasPII ? (direction === 'inbound' ? 'redacted' : 'masked') : 'none',
      },
      contentPolicy: {
        compliant: true,
        violations: [],
      },
      toxicity: {
        score: Math.random() * 0.15,
        threshold: 0.7,
        flagged: false,
      },
    },
    audit: {
      requestHash: `sha256:${Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      policyVersion: '2.1.0',
      rulesEvaluated: 156,
    },
  });
}

// GET — Retrieve runtime defense statistics
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '24h';

  const stats: Record<string, object> = {
    '1h': {
      totalRequests: 35291,
      blocked: 534,
      redacted: 128,
      allowed: 34629,
      blockRate: 1.51,
      avgLatencyMs: 22,
    },
    '24h': {
      totalRequests: 847293,
      blocked: 12847,
      redacted: 3291,
      allowed: 831155,
      blockRate: 1.52,
      avgLatencyMs: 23,
    },
    '7d': {
      totalRequests: 5931047,
      blocked: 89832,
      redacted: 23041,
      allowed: 5818174,
      blockRate: 1.51,
      avgLatencyMs: 24,
    },
    '30d': {
      totalRequests: 25419832,
      blocked: 386241,
      redacted: 98723,
      allowed: 24934868,
      blockRate: 1.52,
      avgLatencyMs: 23,
    },
  };

  return NextResponse.json({
    period,
    stats: stats[period] || stats['24h'],
    threatBreakdown: [
      { type: 'prompt_injection', count: 4821, percentage: 37.5 },
      { type: 'jailbreak', count: 3156, percentage: 24.6 },
      { type: 'pii_exposure', count: 2103, percentage: 16.4 },
      { type: 'data_exfiltration', count: 1458, percentage: 11.3 },
      { type: 'tool_misuse', count: 892, percentage: 6.9 },
      { type: 'other', count: 417, percentage: 3.3 },
    ],
    modelsProtected: ['GPT-4', 'GPT-5', 'Claude 3.5', 'Claude 4', 'Gemini 2.5', 'DeepSeek V3', 'Llama 4', 'Mistral Large 3'],
    activeRules: 156,
    policyVersion: '2.1.0',
  });
}
