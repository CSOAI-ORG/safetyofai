/// <reference types="cypress" />

describe('Byzantine Council', () => {
  beforeEach(() => {
    cy.visit('/byzantine');
  });

  it('renders page with correct heading', () => {
    cy.contains('h1', 'Byzantine Council').should('be.visible');
    cy.contains('33 independent AI agents').should('be.visible');
  });

  it('shows agent online count', () => {
    cy.contains(/\d+\/33 Online/).should('be.visible');
  });

  it('displays council stats', () => {
    cy.contains('Total Agents').should('be.visible');
    cy.contains('Verifications Today').should('be.visible');
    cy.contains('Global Threat Level').should('be.visible');
    cy.contains('LOW').should('be.visible');
  });

  it('shows all 3 architecture families', () => {
    cy.contains('Family A — Transformers').should('be.visible');
    cy.contains('Family B — Alternative').should('be.visible');
    cy.contains('Family C — Symbolic').should('be.visible');
  });

  describe('Filter Tabs', () => {
    it('All Agents tab shows 33 agents', () => {
      cy.get('button').contains('All Agents (33)').click();
      // Should see agents from all families
      cy.contains('GPT-4 Turbo').should('be.visible');
      cy.contains('RNN-Safety').should('be.visible');
      cy.contains('ProverBot').should('be.visible');
    });

    it('Family A tab filters to transformers', () => {
      cy.get('button').contains('Family A (11)').click();
      cy.contains('GPT-4 Turbo').should('be.visible');
      cy.contains('Claude 3.5 Sonnet').should('be.visible');
      cy.contains('Gemini 2.0 Flash').should('be.visible');
    });

    it('Family B tab filters to alternative architectures', () => {
      cy.get('button').contains('Family B (11)').click();
      cy.contains('RNN-Safety').should('be.visible');
      cy.contains('CNN-Visual').should('be.visible');
      cy.contains('GNN-Network').should('be.visible');
    });

    it('Family C tab filters to symbolic systems', () => {
      cy.get('button').contains('Family C (11)').click();
      cy.contains('ProverBot').should('be.visible');
      cy.contains('LEAN-Safety').should('be.visible');
      cy.contains('Symbolic-Logic-Engine').should('be.visible');
    });
  });

  it('agent cards show region, uptime, verifications, and accuracy', () => {
    cy.get('[class*="rounded-lg bg-card"]').first().within(() => {
      cy.contains('Region').should('be.visible');
      cy.contains('Uptime').should('be.visible');
      cy.contains('Verifications').should('be.visible');
      cy.contains('Accuracy').should('be.visible');
    });
  });

  it('agents show high uptime values', () => {
    cy.contains(/99\.\d+%/).should('be.visible');
  });
});
