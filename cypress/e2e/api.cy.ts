/// <reference types="cypress" />

describe('API Routes', () => {

  describe('Health Check', () => {
    it('GET /api/health returns 200', () => {
      cy.request('GET', '/api/health').then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.status).to.eq('ok');
        expect(res.body.service).to.eq('SafetyOf.AI');
        expect(res.body.version).to.eq('1.0.0');
        expect(res.body.stack).to.eq('CSOAI Security Layer');
      });
    });

    it('reports all components operational', () => {
      cy.request('GET', '/api/health').then((res) => {
        expect(res.body.components.consensusEngine).to.eq('operational');
        expect(res.body.components.threatIntelligence).to.eq('operational');
        expect(res.body.components.urlScanner).to.eq('operational');
        expect(res.body.components.byzantineCouncil).to.eq('operational');
        expect(res.body.components.authentication).to.eq('operational');
      });
    });

    it('reports AI model configuration', () => {
      cy.request('GET', '/api/health').then((res) => {
        expect(res.body.aiModels).to.have.property('gpt-4');
        expect(res.body.aiModels).to.have.property('claude-3.5');
        expect(res.body.aiModels).to.have.property('gemini-2.0');
        expect(res.body.aiModels).to.have.property('deepseek-v3');
      });
    });
  });

  describe('Consensus API', () => {
    it('rejects requests without query', () => {
      cy.request({
        method: 'POST',
        url: '/api/consensus',
        body: { type: 'text' },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(400);
      });
    });

    it('returns consensus result with correct structure', () => {
      cy.request({
        method: 'POST',
        url: '/api/consensus',
        body: { type: 'text', query: 'Test content for consensus.' },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('timestamp');
        expect(res.body).to.have.property('isSafe');
        expect(res.body).to.have.property('riskScore');
        expect(res.body).to.have.property('consensusScore');
        expect(res.body).to.have.property('riskLevel');
        expect(res.body).to.have.property('aiResponses');
        expect(res.body.aiResponses).to.have.length(4);
        expect(res.body).to.have.property('byzantineVerified');
      });
    });

    it('includes all 4 AI providers', () => {
      cy.request({
        method: 'POST',
        url: '/api/consensus',
        body: { type: 'text', query: 'Provider check.' },
      }).then((res) => {
        const providers = res.body.aiResponses.map((r: any) => r.provider);
        expect(providers).to.include('GPT-4');
        expect(providers).to.include('Claude 3.5');
        expect(providers).to.include('Gemini 2.0');
        expect(providers).to.include('Deepseek V3');
      });
    });

    it('consensus score is between 0 and 100', () => {
      cy.request({
        method: 'POST',
        url: '/api/consensus',
        body: { type: 'text', query: 'Score range.' },
      }).then((res) => {
        expect(res.body.consensusScore).to.be.at.least(0);
        expect(res.body.consensusScore).to.be.at.most(100);
      });
    });
  });

  describe('URL Scan API', () => {
    it('rejects requests without URL', () => {
      cy.request({
        method: 'POST',
        url: '/api/scan',
        body: {},
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(400);
      });
    });

    it('returns scan result with correct structure', () => {
      cy.request({
        method: 'POST',
        url: '/api/scan',
        body: { url: 'https://example.com' },
        timeout: 30000,
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.property('url');
        expect(res.body).to.have.property('isSafe');
        expect(res.body).to.have.property('riskScore');
        expect(res.body).to.have.property('domainInfo');
        expect(res.body).to.have.property('threatIntel');
        expect(res.body).to.have.property('aiVerdicts');
        expect(res.body).to.have.property('consensusScore');
      });
    });

    it('includes 4 threat intel sources', () => {
      cy.request({
        method: 'POST',
        url: '/api/scan',
        body: { url: 'https://google.com' },
        timeout: 30000,
      }).then((res) => {
        const sources = res.body.threatIntel.map((t: any) => t.source);
        expect(sources).to.include('PhishTank');
        expect(sources).to.include('URLhaus');
        expect(sources).to.include('OpenPhish');
        expect(sources).to.include('AlienVault OTX');
      });
    });
  });

  describe('Threats API', () => {
    it('GET returns threat feed', () => {
      cy.request('GET', '/api/threats').then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.threats).to.be.an('array');
        expect(res.body.threats.length).to.be.greaterThan(0);
        expect(res.body).to.have.property('sources');
        expect(res.body).to.have.property('stats');
      });
    });

    it('threat entries have correct structure', () => {
      cy.request('GET', '/api/threats').then((res) => {
        const threat = res.body.threats[0];
        expect(threat).to.have.property('id');
        expect(threat).to.have.property('type');
        expect(threat).to.have.property('url');
        expect(threat).to.have.property('source');
        expect(threat).to.have.property('severity');
        expect(threat).to.have.property('details');
      });
    });

    it('supports type filtering', () => {
      cy.request('GET', '/api/threats?type=phishing').then((res) => {
        res.body.threats.forEach((t: any) => {
          expect(t.type).to.eq('phishing');
        });
      });
    });

    it('POST reports a new threat', () => {
      cy.request({
        method: 'POST',
        url: '/api/threats',
        body: {
          url: 'https://e2e-test-phish.example',
          type: 'phishing',
          description: 'Cypress E2E test report',
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.success).to.be.true;
        expect(res.body.id).to.be.a('string');
      });
    });
  });

  describe('Auth API', () => {
    it('login returns user and token', () => {
      cy.request({
        method: 'POST',
        url: '/api/auth',
        body: { action: 'login', email: 'cy@test.com', password: 'pass123' },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.success).to.be.true;
        expect(res.body.user.email).to.eq('cy@test.com');
        expect(res.body.token).to.be.a('string');
      });
    });

    it('signup creates user', () => {
      cy.request({
        method: 'POST',
        url: '/api/auth',
        body: { action: 'signup', email: 'new@cy.com', password: 'pass123' },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.success).to.be.true;
        expect(res.body.user).to.have.property('id');
      });
    });

    it('rejects missing credentials', () => {
      cy.request({
        method: 'POST',
        url: '/api/auth',
        body: { action: 'login' },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(400);
      });
    });
  });
});
