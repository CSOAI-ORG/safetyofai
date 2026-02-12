// SafetyOf.AI — Cypress E2E Support File
// Custom commands and global configuration

declare global {
  namespace Cypress {
    interface Chainable {
      /** Runs a consensus scan with the given text */
      runTextScan(text: string): Chainable<void>;
      /** Runs a URL scan */
      runURLScan(url: string): Chainable<void>;
      /** Checks that all nav links exist */
      verifyNavigation(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('runTextScan', (text: string) => {
  cy.visit('/dashboard');
  cy.get('button').contains('Text').click();
  cy.get('textarea').clear().type(text);
  cy.get('button').contains('Scan').click();
});

Cypress.Commands.add('runURLScan', (url: string) => {
  cy.visit('/scanner');
  cy.get('input[type="url"]').clear().type(url);
  cy.get('button').contains('Scan').click();
});

Cypress.Commands.add('verifyNavigation', () => {
  cy.get('header nav').within(() => {
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Scanner').should('be.visible');
    cy.contains('Threat Intel').should('be.visible');
    cy.contains('Byzantine Council').should('be.visible');
    cy.contains('Pricing').should('be.visible');
  });
});

export {};
