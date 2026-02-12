import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'SafetyOf.AI',
    version: '1.0.0',
    stack: 'CSOAI Security Layer',
    timestamp: new Date().toISOString(),
    components: {
      consensusEngine: 'operational',
      threatIntelligence: 'operational',
      urlScanner: 'operational',
      byzantineCouncil: 'operational',
      authentication: 'operational',
    },
    aiModels: {
      'gpt-4': process.env.OPENAI_API_KEY ? 'configured' : 'unconfigured',
      'claude-3.5': process.env.ANTHROPIC_API_KEY ? 'configured' : 'unconfigured',
      'gemini-2.0': process.env.GOOGLE_GEMINI_API_KEY ? 'configured' : 'unconfigured',
      'deepseek-v3': process.env.DEEPSEEK_API_KEY ? 'configured' : 'unconfigured',
    },
  });
}
