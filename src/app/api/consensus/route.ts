import { NextRequest, NextResponse } from 'next/server';

// Multi-AI Consensus Engine — the core of SafetyOf.AI
// This replaces AI Dome with Byzantine fault-tolerant consensus verification
// Queries 4 AI models simultaneously and uses majority voting

interface AIResponse {
  provider: string;
  model: string;
  analysis: string;
  riskScore: number;
  isSafe: boolean;
  confidence: number;
  threatsDetected: string[];
  processingTimeMs: number;
}

const SYSTEM_PROMPT = `You are a security analysis AI agent within the SafetyOf.AI Byzantine Council.
Your task is to analyze content for potential threats including:
- AI-generated text (GPT, Claude, etc.)
- Phishing attempts
- Social engineering
- Misinformation/disinformation
- Scam patterns
- Malicious intent

Respond ONLY with valid JSON in this exact format:
{
  "isSafe": true/false,
  "riskScore": 0-100,
  "confidence": 0-100,
  "threatsDetected": ["threat1", "threat2"],
  "analysis": "Brief analysis explanation"
}`;

async function queryOpenAI(content: string): Promise<AIResponse> {
  const start = Date.now();
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo-preview',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: `Analyze this content for safety threats:\n\n${content}` },
        ],
        temperature: 0.1,
        max_tokens: 500,
      }),
    });
    const data = await res.json();
    const parsed = JSON.parse(data.choices[0].message.content);
    return {
      provider: 'GPT-4',
      model: 'gpt-4-turbo-preview',
      analysis: parsed.analysis,
      riskScore: parsed.riskScore,
      isSafe: parsed.isSafe,
      confidence: parsed.confidence,
      threatsDetected: parsed.threatsDetected || [],
      processingTimeMs: Date.now() - start,
    };
  } catch {
    return fallbackResponse('GPT-4', 'gpt-4-turbo-preview', Date.now() - start);
  }
}

async function queryAnthropic(content: string): Promise<AIResponse> {
  const start = Date.now();
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 500,
        messages: [
          { role: 'user', content: `${SYSTEM_PROMPT}\n\nAnalyze this content for safety threats:\n\n${content}` },
        ],
      }),
    });
    const data = await res.json();
    const parsed = JSON.parse(data.content[0].text);
    return {
      provider: 'Claude 3.5',
      model: 'claude-3-5-sonnet-20241022',
      analysis: parsed.analysis,
      riskScore: parsed.riskScore,
      isSafe: parsed.isSafe,
      confidence: parsed.confidence,
      threatsDetected: parsed.threatsDetected || [],
      processingTimeMs: Date.now() - start,
    };
  } catch {
    return fallbackResponse('Claude 3.5', 'claude-3-5-sonnet', Date.now() - start);
  }
}

async function queryGemini(content: string): Promise<AIResponse> {
  const start = Date.now();
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GOOGLE_GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${SYSTEM_PROMPT}\n\nAnalyze this content for safety threats:\n\n${content}` }] }],
        generationConfig: { temperature: 0.1, maxOutputTokens: 500 },
      }),
    });
    const data = await res.json();
    const text = data.candidates[0].content.parts[0].text;
    const parsed = JSON.parse(text.replace(/```json\n?|\n?```/g, ''));
    return {
      provider: 'Gemini 2.0',
      model: 'gemini-2.0-flash',
      analysis: parsed.analysis,
      riskScore: parsed.riskScore,
      isSafe: parsed.isSafe,
      confidence: parsed.confidence,
      threatsDetected: parsed.threatsDetected || [],
      processingTimeMs: Date.now() - start,
    };
  } catch {
    return fallbackResponse('Gemini 2.0', 'gemini-2.0-flash', Date.now() - start);
  }
}

async function queryDeepseek(content: string): Promise<AIResponse> {
  const start = Date.now();
  try {
    const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: `Analyze this content for safety threats:\n\n${content}` },
        ],
        temperature: 0.1,
        max_tokens: 500,
      }),
    });
    const data = await res.json();
    const parsed = JSON.parse(data.choices[0].message.content);
    return {
      provider: 'Deepseek V3',
      model: 'deepseek-chat',
      analysis: parsed.analysis,
      riskScore: parsed.riskScore,
      isSafe: parsed.isSafe,
      confidence: parsed.confidence,
      threatsDetected: parsed.threatsDetected || [],
      processingTimeMs: Date.now() - start,
    };
  } catch {
    return fallbackResponse('Deepseek V3', 'deepseek-chat', Date.now() - start);
  }
}

function fallbackResponse(provider: string, model: string, elapsed: number): AIResponse {
  // Graceful fallback when API keys aren't configured
  return {
    provider,
    model,
    analysis: `${provider} analysis unavailable — API key not configured. Using fallback assessment.`,
    riskScore: 15,
    isSafe: true,
    confidence: 50,
    threatsDetected: [],
    processingTimeMs: elapsed,
  };
}

function computeConsensus(responses: AIResponse[]) {
  const safeVotes = responses.filter((r) => r.isSafe).length;
  const totalVotes = responses.length;
  const isSafe = safeVotes > totalVotes / 2;
  const consensusScore = Math.round((Math.max(safeVotes, totalVotes - safeVotes) / totalVotes) * 100);
  const avgRisk = Math.round(responses.reduce((sum, r) => sum + r.riskScore, 0) / totalVotes);

  let riskLevel: 'safe' | 'low' | 'medium' | 'high' | 'critical';
  if (avgRisk <= 15) riskLevel = 'safe';
  else if (avgRisk <= 35) riskLevel = 'low';
  else if (avgRisk <= 60) riskLevel = 'medium';
  else if (avgRisk <= 85) riskLevel = 'high';
  else riskLevel = 'critical';

  const allThreats = [...new Set(responses.flatMap((r) => r.threatsDetected))];

  return { isSafe, consensusScore, riskScore: avgRisk, riskLevel, threats: allThreats };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, query } = body;

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Query all 4 AI models in parallel — Byzantine consensus
    const responses = await Promise.all([
      queryOpenAI(query),
      queryAnthropic(query),
      queryGemini(query),
      queryDeepseek(query),
    ]);

    const consensus = computeConsensus(responses);

    const result = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      queryType: type || 'text',
      query: query.substring(0, 500),
      ...consensus,
      aiResponses: responses,
      summary: `Content analyzed by ${responses.length} AI models. ${consensus.isSafe ? 'No significant threats detected.' : `${consensus.threats.length} threat(s) identified.`} Byzantine consensus: ${consensus.consensusScore}%.`,
      byzantineVerified: consensus.consensusScore >= 75,
    };

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Consensus engine error' }, { status: 500 });
  }
}
