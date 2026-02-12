/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Run a text scan from the dashboard
     * @param text - The text content to scan
     */
    runTextScan(text: string): Chainable<void>;

    /**
     * Run a URL scan from the scanner page
     * @param url - The URL to scan
     */
    runURLScan(url: string): Chainable<void>;

    /**
     * Verify all navigation links work correctly
     */
    verifyNavigation(): Chainable<void>;
  }
}
