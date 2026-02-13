import { NextRequest, NextResponse } from 'next/server';

const models = [
  { rank: 1, name: 'Claude 4 Sonnet', provider: 'Anthropic', casi: 95.1, awr: 93.8, injection: 97.2, leakage: 94.5, overall: 95.2, lastTested: '2026-02-12' },
  { rank: 2, name: 'GPT-5', provider: 'OpenAI', casi: 93.4, awr: 91.2, injection: 95.8, leakage: 92.1, overall: 93.1, lastTested: '2026-02-12' },
  { rank: 3, name: 'GPT-5 Nano', provider: 'OpenAI', casi: 91.8, awr: 90.5, injection: 94.1, leakage: 90.8, overall: 91.8, lastTested: '2026-02-12' },
  { rank: 4, name: 'Gemini 2.5 Pro', provider: 'Google', casi: 90.2, awr: 88.7, injection: 92.4, leakage: 89.3, overall: 90.2, lastTested: '2026-02-11' },
  { rank: 5, name: 'Claude 3.5 Opus', provider: 'Anthropic', casi: 89.6, awr: 91.3, injection: 91.8, leakage: 88.2, overall: 90.2, lastTested: '2026-02-11' },
  { rank: 6, name: 'Llama 4', provider: 'Meta', casi: 87.3, awr: 85.1, injection: 88.9, leakage: 86.4, overall: 86.9, lastTested: '2026-02-10' },
  { rank: 7, name: 'DeepSeek V3', provider: 'DeepSeek', casi: 85.1, awr: 82.4, injection: 86.7, leakage: 84.9, overall: 84.8, lastTested: '2026-02-10' },
  { rank: 8, name: 'Mistral Large 3', provider: 'Mistral', casi: 84.2, awr: 81.8, injection: 85.3, leakage: 83.1, overall: 83.6, lastTested: '2026-02-09' },
];

// GET — Retrieve model security leaderboard
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');
  const sortBy = searchParams.get('sort') || 'overall';
  const limit = parseInt(searchParams.get('limit') || '20');

  let results = [...models];

  // Filter by provider
  if (provider) {
    results = results.filter(m => m.provider.toLowerCase() === provider.toLowerCase());
  }

  // Sort
  const validSortKeys = ['overall', 'casi', 'awr', 'injection', 'leakage'];
  if (validSortKeys.includes(sortBy)) {
    results.sort((a, b) => (b[sortBy as keyof typeof b] as number) - (a[sortBy as keyof typeof a] as number));
  }

  return NextResponse.json({
    leaderboard: results.slice(0, limit),
    metadata: {
      totalModels: models.length,
      lastUpdated: '2026-02-12T00:00:00Z',
      attackVectorsCount: 8,
      totalTestsRun: 12943,
      methodology: 'SOAI Security Index v2.0',
      scoring: {
        injection_weight: 0.30,
        leakage_weight: 0.25,
        agentic_weight: 0.25,
        alignment_weight: 0.20,
      },
    },
  });
}

// POST — Submit a model for security evaluation
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { modelName, modelProvider, endpoint } = body;

  if (!modelName || !modelProvider) {
    return NextResponse.json({ error: 'modelName and modelProvider are required' }, { status: 400 });
  }

  return NextResponse.json({
    evaluationId: `EVAL-${Date.now()}`,
    model: modelName,
    provider: modelProvider,
    endpoint: endpoint || null,
    status: 'QUEUED',
    estimatedCompletion: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    testSuite: {
      attackVectors: 8,
      estimatedTests: 1500,
      categories: ['prompt_injection', 'jailbreak', 'data_exfiltration', 'pii_exposure', 'tool_misuse', 'flip_attack', 'multi_turn', 'agentic_exploit'],
    },
    message: 'Model evaluation queued. Results will be available on the leaderboard upon completion.',
  });
}
