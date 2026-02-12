import { test, expect } from '@playwright/test';

test.describe('API Routes', () => {

  test.describe('Health Check', () => {
    test('GET /api/health returns 200 with correct structure', async ({ request }) => {
      const res = await request.get('/api/health');
      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(body.status).toBe('ok');
      expect(body.service).toBe('SafetyOf.AI');
      expect(body.version).toBe('1.0.0');
      expect(body.stack).toBe('CSOAI Security Layer');
      expect(body.timestamp).toBeTruthy();
    });

    test('health check reports component statuses', async ({ request }) => {
      const res = await request.get('/api/health');
      const body = await res.json();

      expect(body.components).toBeTruthy();
      expect(body.components.consensusEngine).toBe('operational');
      expect(body.components.threatIntelligence).toBe('operational');
      expect(body.components.urlScanner).toBe('operational');
      expect(body.components.byzantineCouncil).toBe('operational');
      expect(body.components.authentication).toBe('operational');
    });

    test('health check reports AI model configuration', async ({ request }) => {
      const res = await request.get('/api/health');
      const body = await res.json();

      expect(body.aiModels).toBeTruthy();
      expect(body.aiModels['gpt-4']).toBeTruthy();
      expect(body.aiModels['claude-3.5']).toBeTruthy();
      expect(body.aiModels['gemini-2.0']).toBeTruthy();
      expect(body.aiModels['deepseek-v3']).toBeTruthy();
    });
  });

  test.describe('Consensus API', () => {
    test('POST /api/consensus requires a query', async ({ request }) => {
      const res = await request.post('/api/consensus', {
        data: { type: 'text' },
      });
      expect(res.status()).toBe(400);
      const body = await res.json();
      expect(body.error).toBeTruthy();
    });

    test('POST /api/consensus returns consensus result', async ({ request }) => {
      const res = await request.post('/api/consensus', {
        data: { type: 'text', query: 'Hello world, this is a safety test.' },
      });
      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(body.id).toBeTruthy();
      expect(body.timestamp).toBeTruthy();
      expect(body.queryType).toBe('text');
      expect(typeof body.isSafe).toBe('boolean');
      expect(typeof body.riskScore).toBe('number');
      expect(typeof body.consensusScore).toBe('number');
      expect(body.riskLevel).toMatch(/safe|low|medium|high|critical/);
      expect(Array.isArray(body.aiResponses)).toBe(true);
      expect(body.aiResponses.length).toBe(4);
      expect(body.summary).toBeTruthy();
      expect(typeof body.byzantineVerified).toBe('boolean');
    });

    test('consensus result includes all 4 AI providers', async ({ request }) => {
      const res = await request.post('/api/consensus', {
        data: { type: 'text', query: 'Testing AI provider responses.' },
      });
      const body = await res.json();

      const providers = body.aiResponses.map((r: any) => r.provider);
      expect(providers).toContain('GPT-4');
      expect(providers).toContain('Claude 3.5');
      expect(providers).toContain('Gemini 2.0');
      expect(providers).toContain('Deepseek V3');
    });

    test('each AI response has correct structure', async ({ request }) => {
      const res = await request.post('/api/consensus', {
        data: { type: 'text', query: 'Structure test.' },
      });
      const body = await res.json();

      for (const ai of body.aiResponses) {
        expect(ai.provider).toBeTruthy();
        expect(ai.model).toBeTruthy();
        expect(ai.analysis).toBeTruthy();
        expect(typeof ai.riskScore).toBe('number');
        expect(typeof ai.isSafe).toBe('boolean');
        expect(typeof ai.confidence).toBe('number');
        expect(Array.isArray(ai.threatsDetected)).toBe(true);
        expect(typeof ai.processingTimeMs).toBe('number');
      }
    });

    test('consensus score is between 0 and 100', async ({ request }) => {
      const res = await request.post('/api/consensus', {
        data: { type: 'text', query: 'Score range test.' },
      });
      const body = await res.json();

      expect(body.consensusScore).toBeGreaterThanOrEqual(0);
      expect(body.consensusScore).toBeLessThanOrEqual(100);
      expect(body.riskScore).toBeGreaterThanOrEqual(0);
      expect(body.riskScore).toBeLessThanOrEqual(100);
    });
  });

  test.describe('URL Scan API', () => {
    test('POST /api/scan requires a URL', async ({ request }) => {
      const res = await request.post('/api/scan', {
        data: {},
      });
      expect(res.status()).toBe(400);
    });

    test('POST /api/scan returns scan result', async ({ request }) => {
      const res = await request.post('/api/scan', {
        data: { url: 'https://example.com' },
      });
      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(body.url).toBe('https://example.com');
      expect(typeof body.isSafe).toBe('boolean');
      expect(typeof body.riskScore).toBe('number');
      expect(body.riskLevel).toBeTruthy();
      expect(body.domainInfo).toBeTruthy();
      expect(body.domainInfo.domain).toBe('example.com');
      expect(body.threatIntel).toBeTruthy();
      expect(body.aiVerdicts).toBeTruthy();
      expect(typeof body.consensusScore).toBe('number');
      expect(body.summary).toBeTruthy();
    });

    test('scan includes 4 threat intelligence sources', async ({ request }) => {
      const res = await request.post('/api/scan', {
        data: { url: 'https://google.com' },
      });
      const body = await res.json();

      const sources = body.threatIntel.map((t: any) => t.source);
      expect(sources).toContain('PhishTank');
      expect(sources).toContain('URLhaus');
      expect(sources).toContain('OpenPhish');
      expect(sources).toContain('AlienVault OTX');
    });
  });

  test.describe('Threats API', () => {
    test('GET /api/threats returns threat feed', async ({ request }) => {
      const res = await request.get('/api/threats');
      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(Array.isArray(body.threats)).toBe(true);
      expect(body.threats.length).toBeGreaterThan(0);
      expect(body.total).toBeGreaterThan(0);
      expect(body.sources).toBeTruthy();
      expect(body.stats).toBeTruthy();
    });

    test('threat entries have correct structure', async ({ request }) => {
      const res = await request.get('/api/threats');
      const body = await res.json();

      const threat = body.threats[0];
      expect(threat.id).toBeTruthy();
      expect(threat.type).toMatch(/phishing|malware|scam|deepfake/);
      expect(threat.url).toBeTruthy();
      expect(threat.source).toBeTruthy();
      expect(threat.severity).toMatch(/low|medium|high|critical/);
      expect(threat.timestamp).toBeTruthy();
      expect(threat.details).toBeTruthy();
    });

    test('threats can be filtered by type', async ({ request }) => {
      const res = await request.get('/api/threats?type=phishing');
      const body = await res.json();

      for (const threat of body.threats) {
        expect(threat.type).toBe('phishing');
      }
    });

    test('threats can be filtered by severity', async ({ request }) => {
      const res = await request.get('/api/threats?severity=critical');
      const body = await res.json();

      for (const threat of body.threats) {
        expect(threat.severity).toBe('critical');
      }
    });

    test('POST /api/threats reports a new threat', async ({ request }) => {
      const res = await request.post('/api/threats', {
        data: {
          url: 'https://test-phish-site.example',
          type: 'phishing',
          description: 'Test threat report from E2E tests',
        },
      });
      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(body.success).toBe(true);
      expect(body.id).toBeTruthy();
      expect(body.message).toContain('Byzantine Council');
    });
  });

  test.describe('Auth API', () => {
    test('POST /api/auth login returns user data', async ({ request }) => {
      const res = await request.post('/api/auth', {
        data: { action: 'login', email: 'test@test.com', password: 'password123' },
      });
      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(body.success).toBe(true);
      expect(body.user).toBeTruthy();
      expect(body.user.email).toBe('test@test.com');
      expect(body.token).toBeTruthy();
    });

    test('POST /api/auth signup creates user', async ({ request }) => {
      const res = await request.post('/api/auth', {
        data: { action: 'signup', email: 'new@test.com', password: 'password123' },
      });
      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(body.success).toBe(true);
      expect(body.user).toBeTruthy();
      expect(body.user.email).toBe('new@test.com');
    });

    test('POST /api/auth requires email and password', async ({ request }) => {
      const res = await request.post('/api/auth', {
        data: { action: 'login' },
      });
      expect(res.status()).toBe(400);
    });

    test('POST /api/auth rejects invalid action', async ({ request }) => {
      const res = await request.post('/api/auth', {
        data: { action: 'invalid' },
      });
      expect(res.status()).toBe(400);
    });
  });
});
