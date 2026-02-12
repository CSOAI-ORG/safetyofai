/// <reference types="cypress" />

describe('Security Dashboard', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('displays dashboard header and system status', () => {
    cy.contains('h1', 'Security Dashboard').should('be.visible');
    cy.contains('All Systems Online').should('be.visible');
  });

  it('shows security score of 85', () => {
    cy.contains('Security Score').should('be.visible');
    cy.contains('85').should('be.visible');
  });

  it('displays quick stat cards', () => {
    cy.contains('Scans Today').should('be.visible');
    cy.contains('Threats Blocked').should('be.visible');
    cy.contains('AI Models Active').should('be.visible');
    cy.contains('4').should('be.visible'); // 4 AI models
  });

  describe('Scanner Functionality', () => {
    it('has all 5 scan type tabs', () => {
      cy.get('button').contains('Text').should('be.visible');
      cy.get('button').contains('URL').should('be.visible');
      cy.get('button').contains('Image').should('be.visible');
      cy.get('button').contains('Audio').should('be.visible');
      cy.get('button').contains('Video').should('be.visible');
    });

    it('Text tab shows textarea input', () => {
      cy.get('button').contains('Text').click();
      cy.get('textarea').should('be.visible');
    });

    it('URL tab shows URL input', () => {
      cy.get('button').contains('URL').click();
      cy.get('input[type="url"]').should('be.visible');
    });

    it('Image tab shows upload area', () => {
      cy.get('button').contains('Image').click();
      cy.contains('Drop image file').should('be.visible');
    });

    it('Scan button is disabled when empty', () => {
      cy.get('button').contains('Scan').should('be.disabled');
    });

    it('performs text scan and shows results', () => {
      cy.runTextScan('This is a test of the multi-AI consensus engine.');

      // Wait for results
      cy.contains('Analysis Result', { timeout: 15000 }).should('be.visible');
      cy.contains('Consensus Score').should('be.visible');

      // All 4 AI models should appear
      cy.contains('GPT-4').should('be.visible');
      cy.contains('Claude 3.5').should('be.visible');
      cy.contains('Gemini 2.0').should('be.visible');
      cy.contains('Deepseek V3').should('be.visible');
    });

    it('scan result shows SAFE for benign content', () => {
      cy.runTextScan('Hello world, this is perfectly safe content.');

      cy.contains('Analysis Result', { timeout: 15000 }).should('be.visible');
      cy.contains('SAFE').should('be.visible');
    });

    it('scan result shows consensus percentage', () => {
      cy.runTextScan('Testing consensus percentage display.');

      cy.contains('Analysis Result', { timeout: 15000 }).should('be.visible');
      cy.contains('%').should('be.visible');
    });
  });

  describe('Threat Intelligence Feeds', () => {
    it('displays all 4 feed sources', () => {
      cy.contains('Threat Intelligence Feeds').should('be.visible');
      cy.contains('PhishTank').should('be.visible');
      cy.contains('URLhaus').should('be.visible');
      cy.contains('OpenPhish').should('be.visible');
      cy.contains('AlienVault OTX').should('be.visible');
    });

    it('all feeds show online status', () => {
      cy.get('[class*="bg-safety-500"]').should('have.length.greaterThan', 3);
    });
  });
});
