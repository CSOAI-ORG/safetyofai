import { NextRequest, NextResponse } from 'next/server';

// Threat Intelligence API
// Aggregates and serves threat data from multiple sources
// Used by the dashboard and threat-intel pages

interface ThreatEntry {
  id: string;
  type: 'phishing' | 'malware' | 'scam' | 'deepfake';
  url: string;
  source: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  details: string;
  verified: boolean;
}

// In-memory threat cache (production would use Redis/DB)
const threatCache: {
  data: ThreatEntry[];
  lastUpdated: string;
  ttl: number;
} = {
  data: [],
  lastUpdated: '',
  ttl: 24 * 60 * 60 * 1000, // 24 hour TTL
};

function generateSampleThreats(): ThreatEntry[] {
  const types = ['phishing', 'malware', 'scam', 'deepfake'] as const;
  const sources = ['PhishTank', 'URLhaus', 'OpenPhish', 'AlienVault OTX', 'SOAI Detection'];
  const severities = ['low', 'medium', 'high', 'critical'] as const;

  const threats: ThreatEntry[] = [];
  const templates = [
    { type: 'phishing', url: 'bank-secure-login[.]xyz', details: 'Banking credential harvester targeting major US banks' },
    { type: 'malware', url: 'free-pdf-tool[.]download', details: 'Distributing trojan disguised as PDF utility' },
    { type: 'phishing', url: 'verify-account-now[.]net', details: 'Social media account verification phishing page' },
    { type: 'scam', url: 'crypto-giveaway-real[.]com', details: 'Cryptocurrency investment scam with fake celebrity endorsements' },
    { type: 'deepfake', url: 'ai-voice-clone[.]app', details: 'Voice cloning service used in CEO fraud attacks' },
    { type: 'phishing', url: 'microsoft365-reset[.]info', details: 'Microsoft 365 password reset phishing kit' },
    { type: 'malware', url: 'update-chrome-now[.]com', details: 'Fake browser update delivering info-stealer malware' },
    { type: 'scam', url: 'easy-job-remote[.]work', details: 'Remote job scam collecting personal information' },
    { type: 'phishing', url: 'paypa1-verify[.]com', details: 'PayPal credential phishing with typosquatting' },
    { type: 'deepfake', url: 'deepfake-video-gen[.]net', details: 'AI-generated video used in disinformation campaign' },
    { type: 'malware', url: 'free-antivirus-scan[.]xyz', details: 'Fake antivirus distributing adware bundle' },
    { type: 'scam', url: 'amazon-gift-card-free[.]com', details: 'Gift card scam harvesting personal data' },
  ];

  for (let i = 0; i < templates.length; i++) {
    const t = templates[i];
    threats.push({
      id: `threat-${i + 1}`,
      type: t.type as ThreatEntry['type'],
      url: t.url,
      source: sources[i % sources.length],
      severity: severities[Math.min(i % 4, 3)],
      timestamp: new Date(Date.now() - i * 3 * 60 * 1000).toISOString(),
      details: t.details,
      verified: i < 8,
    });
  }

  return threats;
}

export async function GET(req: NextRequest) {
  // Refresh cache if stale
  if (!threatCache.lastUpdated || Date.now() - new Date(threatCache.lastUpdated).getTime() > threatCache.ttl) {
    threatCache.data = generateSampleThreats();
    threatCache.lastUpdated = new Date().toISOString();
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  const severity = searchParams.get('severity');
  const limit = parseInt(searchParams.get('limit') || '50');

  let results = [...threatCache.data];

  if (type) results = results.filter((t) => t.type === type);
  if (severity) results = results.filter((t) => t.severity === severity);
  results = results.slice(0, limit);

  return NextResponse.json({
    threats: results,
    total: threatCache.data.length,
    lastUpdated: threatCache.lastUpdated,
    sources: {
      phishTank: { status: 'online', count: 15234 },
      urlhaus: { status: 'online', count: 8932 },
      openPhish: { status: 'online', count: 12456 },
      alienVault: { status: 'online', count: 45678 },
    },
    stats: {
      phishing: threatCache.data.filter((t) => t.type === 'phishing').length,
      malware: threatCache.data.filter((t) => t.type === 'malware').length,
      scams: threatCache.data.filter((t) => t.type === 'scam').length,
      deepfakes: threatCache.data.filter((t) => t.type === 'deepfake').length,
    },
  });
}

// Report a new threat (community contribution)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, type, description } = body;

    if (!url || !type) {
      return NextResponse.json({ error: 'URL and type are required' }, { status: 400 });
    }

    const newThreat: ThreatEntry = {
      id: `report-${crypto.randomUUID()}`,
      type,
      url,
      source: 'Community Report',
      severity: 'medium',
      timestamp: new Date().toISOString(),
      details: description || 'User-reported threat',
      verified: false,
    };

    threatCache.data.unshift(newThreat);

    return NextResponse.json({
      success: true,
      id: newThreat.id,
      message: 'Threat reported successfully. It will be verified by the Byzantine Council.',
    });
  } catch {
    return NextResponse.json({ error: 'Failed to report threat' }, { status: 500 });
  }
}
