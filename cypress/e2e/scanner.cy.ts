/// <reference types="cypress" />

describe('URL Security Scanner', () => {
  beforeEach(() => {
    cy.visit('/scanner');
  });

  it('displays scanner page with heading', () => {
    cy.contains('h1', 'URL Security Scanner').should('be.visible');
    cy.contains('Multi-AI consensus URL scanning').should('be.visible');
  });

  it('has URL input field with placeholder', () => {
    cy.get('input[type="url"]')
      .should('be.visible')
      .and('have.attr', 'placeholder')
      .and('contain', 'Enter URL');
  });

  it('scan button is disabled when empty', () => {
    cy.get('button').contains('Scan').should('be.disabled');
  });

  it('scan button enables when URL is entered', () => {
    cy.get('input[type="url"]').type('https://example.com');
    cy.get('button').contains('Scan').should('not.be.disabled');
  });

  it('shows scanning progress when scan starts', () => {
    cy.runURLScan('https://example.com');
    // Should see at least one scanning phase
    cy.contains(/Checking|Querying|Scanning|Running|Computing/, { timeout: 5000 })
      .should('be.visible');
  });

  it('displays full scan results', () => {
    cy.runURLScan('https://example.com');

    // Wait for results
    cy.contains(/URL is Safe|Threats Detected/, { timeout: 20000 }).should('be.visible');
  });

  it('shows domain information in results', () => {
    cy.runURLScan('https://example.com');

    cy.contains('Domain Information', { timeout: 20000 }).should('be.visible');
    cy.contains('example.com').should('be.visible');
  });

  it('shows threat intelligence checks', () => {
    cy.runURLScan('https://example.com');

    cy.contains('Threat Intelligence Feeds', { timeout: 20000 }).should('be.visible');
    cy.contains('PhishTank').should('be.visible');
    cy.contains('URLhaus').should('be.visible');
    cy.contains('OpenPhish').should('be.visible');
    cy.contains('AlienVault OTX').should('be.visible');
  });

  it('shows AI model verdicts', () => {
    cy.runURLScan('https://google.com');

    cy.contains('AI Model Verdicts', { timeout: 20000 }).should('be.visible');
    cy.contains('GPT-4').should('be.visible');
    cy.contains('Claude 3.5').should('be.visible');
    cy.contains('Gemini 2.0').should('be.visible');
    cy.contains('Deepseek V3').should('be.visible');
  });

  it('shows SSL status for HTTPS URLs', () => {
    cy.runURLScan('https://example.com');

    cy.contains('SSL Certificate', { timeout: 20000 }).should('be.visible');
    cy.contains('Valid').should('be.visible');
  });

  it('shows consensus score in results', () => {
    cy.runURLScan('https://example.com');

    cy.contains('Consensus', { timeout: 20000 }).should('be.visible');
  });
});
