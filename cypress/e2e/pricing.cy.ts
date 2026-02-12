/// <reference types="cypress" />

describe('Pricing Page', () => {
  beforeEach(() => {
    cy.visit('/pricing');
  });

  it('shows all 4 pricing tiers', () => {
    cy.contains('h3', 'Free').should('be.visible');
    cy.contains('h3', 'Pro').should('be.visible');
    cy.contains('h3', 'Expert').should('be.visible');
    cy.contains('h3', 'Enterprise').should('be.visible');
  });

  it('displays correct prices', () => {
    cy.contains('$0').should('be.visible');
    cy.contains('$9').should('be.visible');
    cy.contains('$29').should('be.visible');
    cy.contains('Custom').should('be.visible');
  });

  it('Pro plan has Most Popular badge', () => {
    cy.contains('Most Popular').should('be.visible');
  });

  it('Free plan shows 3 scans per day', () => {
    cy.contains('3 scans per day').should('be.visible');
  });

  it('Expert plan shows full Byzantine Council', () => {
    cy.contains('33 AI models (full Byzantine Council)').should('be.visible');
  });

  it('Enterprise shows CSOAI governance integration', () => {
    cy.contains('CSOAI governance integration').should('be.visible');
  });

  it('all plans have CTA buttons', () => {
    cy.get('button').contains('Get Started').should('have.length.greaterThan', 0);
    cy.get('button').contains('Contact Sales').should('be.visible');
  });

  it('FAQ section is displayed with 4 questions', () => {
    cy.contains('Frequently Asked Questions').should('be.visible');
    cy.contains('What is multi-AI consensus?').should('be.visible');
    cy.contains('How does SafetyOf.AI replace AI Dome?').should('be.visible');
    cy.contains('What AI models are used?').should('be.visible');
    cy.contains('Is there a free trial?').should('be.visible');
  });
});
