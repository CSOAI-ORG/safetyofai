// Core types for SafetyOf.AI security layer

export interface AIModelResponse {
  provider: string;
  model: string;
  analysis: string;
  riskScore: number;
  isSafe: boolean;
  confidence: number;
  threatsDetected: string[];
  processingTimeMs: number;
}

export interface ConsensusResult {
  id: string;
  timestamp: string;
  queryType: 'text' | 'url' | 'image' | 'audio' | 'video';
  query: string;
  isSafe: boolean;
  riskScore: number;
  riskLevel: 'safe' | 'low' | 'medium' | 'high' | 'critical';
  consensusScore: number;
  aiResponses: AIModelResponse[];
  threats: string[];
  summary: string;
  byzantineVerified: boolean;
}

export interface ThreatIntelResult {
  isThreat: boolean;
  threatTypes: string[];
  sources: string[];
  confidence: number;
  details: {
    phishTank?: { inDatabase: boolean; verified: boolean };
    urlhaus?: { inDatabase: boolean; threatType: string };
    openPhish?: { inDatabase: boolean };
    alienVault?: { pulseCount: number; reputation: number };
  };
}

export interface URLScanResult {
  url: string;
  isSafe: boolean;
  riskScore: number;
  riskLevel: 'safe' | 'suspicious' | 'dangerous' | 'critical';
  threats: string[];
  consensusScore: number;
  aiResponses: AIModelResponse[];
  domainInfo: {
    domain: string;
    hasSSL: boolean;
    domainAge?: string;
    registrar?: string;
  };
  threatIntelligence?: ThreatIntelResult;
  summary: string;
}

export interface ByzantineAgent {
  id: string;
  name: string;
  family: 'transformer' | 'alternative' | 'symbolic';
  tier: string;
  region: string;
  status: 'online' | 'offline' | 'degraded';
  lastHeartbeat: string;
  uptime: number;
  verificationCount: number;
  consensusAccuracy: number;
}

export interface ByzantineCouncilStatus {
  totalAgents: number;
  onlineAgents: number;
  consensusThreshold: number;
  lastVerification: string;
  agents: ByzantineAgent[];
  globalThreatLevel: 'low' | 'elevated' | 'high' | 'critical';
}

export interface SecurityScore {
  overall: number;
  breakdown: {
    scansCompleted: number;
    threatsDetected: number;
    threatsBlocked: number;
    urlsVerified: number;
    contentVerified: number;
  };
  trend: 'improving' | 'stable' | 'declining';
}

export interface ThreatFeed {
  name: string;
  status: 'online' | 'offline' | 'degraded';
  lastUpdated: string;
  totalThreats: number;
  category: string;
}

export interface UserSubscription {
  tier: 'free' | 'pro' | 'expert' | 'enterprise';
  queriesUsed: number;
  queriesLimit: number;
  validUntil: string;
}
