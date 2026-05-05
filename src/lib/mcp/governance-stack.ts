// Governance MCP Stack Integration
// Bootstrap MVP — connects to 9 core CSOAI-ORG MCP servers via OpenClaw A2A gateway

export interface MCPTool {
  name: string;
  description: string;
  repo: string;
  a2aAgent: string;
  status: 'active' | 'beta' | 'coming_soon';
}

export const GOVERNANCE_MCP_STACK: MCPTool[] = [
  {
    name: 'risk-assessment-ai-mcp',
    description: 'NIST AI RMF-aligned risk register with scoring & treatments',
    repo: 'https://github.com/CSOAI-ORG/risk-assessment-ai-mcp',
    a2aAgent: 'risk-assessment-agent',
    status: 'active',
  },
  {
    name: 'regulatory-webhook-mcp',
    description: 'Monitor EU AI Act, GDPR, DORA changes & cliff dates',
    repo: 'https://github.com/CSOAI-ORG/regulatory-webhook-mcp',
    a2aAgent: 'regulatory-monitor-agent',
    status: 'active',
  },
  {
    name: 'owasp-agentic-mcp',
    description: 'OWASP Top 10 for Agentic AI — prompt injection & tool poisoning',
    repo: 'https://github.com/CSOAI-ORG/owasp-agentic-mcp',
    a2aAgent: 'security-scan-agent',
    status: 'active',
  },
  {
    name: 'meok-omnibus-tracker-mcp',
    description: 'EU AI Act Omnibus tracker — 8 cliff dates, 14 article changes',
    repo: 'https://github.com/CSOAI-ORG/meok-omnibus-tracker-mcp',
    a2aAgent: 'regulatory-monitor-agent',
    status: 'active',
  },
  {
    name: 'meok-watermark-attest-mcp',
    description: 'Article 50 watermarking compliance — C2PA, content provenance',
    repo: 'https://github.com/CSOAI-ORG/meok-watermark-attest-mcp',
    a2aAgent: 'compliance-agent',
    status: 'active',
  },
  {
    name: 'soc2-compliance-ai-mcp',
    description: 'SOC 2 Type II control evidence automation & audit',
    repo: 'https://github.com/CSOAI-ORG/soc2-compliance-ai-mcp',
    a2aAgent: 'compliance-agent',
    status: 'active',
  },
  {
    name: 'pci-dss-mcp',
    description: 'PCI DSS 4.0 — 12 requirements assessment & SAQ generation',
    repo: 'https://github.com/CSOAI-ORG/pci-dss-mcp',
    a2aAgent: 'compliance-agent',
    status: 'active',
  },
  {
    name: 'security-scanner-ai-mcp',
    description: 'AI security scanning & vulnerability assessment',
    repo: 'https://github.com/CSOAI-ORG/security-scanner-ai-mcp',
    a2aAgent: 'security-scan-agent',
    status: 'active',
  },
  {
    name: 'proofof-ai-mcp',
    description: 'AI content verification & deepfake detection',
    repo: 'https://github.com/CSOAI-ORG/proofof-ai-mcp',
    a2aAgent: 'verification-agent',
    status: 'active',
  },
];

// A2A Gateway URL (OpenClaw running locally)
const A2A_GATEWAY = process.env.A2A_GATEWAY_URL || 'http://localhost:18789';

export async function callMCPAgent(agent: string, tool: string, params: Record<string, unknown>) {
  try {
    const response = await fetch(`${A2A_GATEWAY}/a2a/call`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ agent, tool, params }),
    });
    return await response.json();
  } catch (error) {
    console.error(`A2A call failed [${agent}/${tool}]:`, error);
    return { error: 'Agent unavailable — running in simulation mode' };
  }
}

export async function getCompliancePosture() {
  const results = await Promise.allSettled([
    callMCPAgent('risk-assessment-agent', 'get_risk_score', {}),
    callMCPAgent('regulatory-monitor-agent', 'get_upcoming_cliffs', { days: 90 }),
    callMCPAgent('security-scan-agent', 'get_security_score', {}),
  ]);
  return results.map((r) => (r.status === 'fulfilled' ? r.value : null));
}
