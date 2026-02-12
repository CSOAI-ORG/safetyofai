/// <reference types="cypress" />

describe('All Pages Load Successfully', () => {
  const pages = [
    { path: '/', title: 'Landing' },
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/scanner', title: 'Scanner' },
    { path: '/threat-intel', title: 'Threat Intel' },
    { path: '/byzantine', title: 'Byzantine Council' },
    { path: '/pricing', title: 'Pricing' },
    { path: '/about', title: 'About' },
  ];

  pages.forEach(({ path, title }) => {
    it(`${title} page (${path}) loads without errors`, () => {
      cy.visit(path);
      cy.get('header').should('be.visible');
      cy.get('footer').should('be.visible');
    });
  });
});

describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays hero with correct branding', () => {
    cy.get('h1').should('contain.text', 'AI Safety');
    cy.get('h1').should('contain.text', 'Shield You Need');
  });

  it('shows CSOAI Security Layer badge', () => {
    cy.contains('CSOAI Security Layer').should('be.visible');
  });

  it('displays live stats', () => {
    cy.contains('33/33').should('be.visible');
    cy.contains('AI Agents Online').should('be.visible');
    cy.contains('99.99%').should('be.visible');
  });

  it('has working CTA buttons', () => {
    cy.contains('a', 'Launch Dashboard').should('have.attr', 'href', '/dashboard');
    cy.contains('a', 'Try Free Scan').should('have.attr', 'href', '/scanner');
  });

  it('shows feature cards', () => {
    cy.contains('Multi-AI Consensus Engine').should('be.visible');
    cy.contains('Real-Time Threat Intelligence').should('be.visible');
    cy.contains('Byzantine Council Integration').should('be.visible');
  });

  it('shows how it works section with all steps', () => {
    cy.contains('STEP 01').should('be.visible');
    cy.contains('STEP 02').should('be.visible');
    cy.contains('STEP 03').should('be.visible');
    cy.contains('STEP 04').should('be.visible');
    cy.contains('STEP 05').should('be.visible');
  });

  it('shows security features grid', () => {
    cy.contains('Deepfake Detection').should('be.visible');
    cy.contains('URL Scanner').should('be.visible');
    cy.contains('Content Verification').should('be.visible');
    cy.contains('Phishing Protection').should('be.visible');
  });

  it('displays CSOAI stack status panel', () => {
    cy.contains('All Systems Operational').should('be.visible');
    cy.contains('Byzantine Council').should('be.visible');
    cy.contains('Prosperity Fund').should('be.visible');
    cy.contains('Watchdog System').should('be.visible');
  });
});

describe('Navigation', () => {
  it('navigates to all pages via header nav', () => {
    cy.visit('/');
    cy.verifyNavigation();

    cy.get('header nav').contains('Dashboard').click();
    cy.url().should('include', '/dashboard');

    cy.get('header nav').contains('Scanner').click();
    cy.url().should('include', '/scanner');

    cy.get('header nav').contains('Threat Intel').click();
    cy.url().should('include', '/threat-intel');

    cy.get('header nav').contains('Byzantine Council').click();
    cy.url().should('include', '/byzantine');

    cy.get('header nav').contains('Pricing').click();
    cy.url().should('include', '/pricing');
  });

  it('footer links work correctly', () => {
    cy.visit('/');
    cy.get('footer').contains('Security Scanner').click();
    cy.url().should('include', '/scanner');
  });
});
