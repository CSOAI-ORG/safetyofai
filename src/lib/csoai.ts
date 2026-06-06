/**
 * CSOAI Client — SafetyOf.AI Vertical Integration
 * Connects to Protocol Nexus: MCP, A2A, ACP, libp2p, ABCI, API
 */
import { CSOAI } from '@meok-labs/ai-sdk';

const API_BASE = process.env.NEXT_PUBLIC_CSOAI_API_URL || 'https://api.csoai.org';

export const csoai = CSOAI.create({
  baseUrl: API_BASE,
  vertical: 'safetyofai',
  enableP2P: false, // Enable when cross-site messaging needed
  timeouts: {
    api: 30000,
    mcp: 60000,
    a2a: 45000,
    p2p: 30000,
  },
});

// ── Domain-specific helpers ───────────────────────────────────────

/** Run a compliance audit via MCP */
export async function runSafetyAudit(modelId: string, framework: string) {
  return csoai.tool('safetyofai', 'audit_model', {
    model_id: modelId,
    framework, // 'eu-ai-act', 'iso-42001', 'nist-ai-rmf'
  });
}

/** Detect bias in model outputs via MCP */
export async function detectBias(modelId: string, datasetSample: string) {
  return csoai.tool('safetyofai', 'detect_bias', {
    model_id: modelId,
    dataset_sample: datasetSample,
    protected_attributes: ['gender', 'race', 'age'],
  });
}

/** Generate explainability report via MCP */
export async function generateXAIReport(modelId: string, inputData: unknown) {
  return csoai.tool('safetyofai', 'explain_decision', {
    model_id: modelId,
    input_data: inputData,
    method: 'shap', // or 'lime', 'attention'
  });
}

/** Query trust registry on-chain */
export async function verifyModelTrust(modelId: string) {
  return csoai.verifyTrust(`model:${modelId}`);
}

/** Chat with the Safety Auditor A2A Agent */
export async function askSafetyAgent(question: string) {
  const agentUrl = `${API_BASE}/a2a/safetyofai`;
  return csoai.askAgent(agentUrl, question);
}

/** Fetch protocol health for status page */
export async function fetchProtocolHealth() {
  const res = await csoai.api.get('/health');
  return res.data;
}
