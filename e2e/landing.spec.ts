import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section with correct branding', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('AI Safety');
    await expect(page.locator('h1')).toContainText('Shield You Need');
    await expect(page.getByText('CSOAI Security Layer')).toBeVisible();
  });

  test('displays live stats bar', async ({ page }) => {
    await expect(page.getByText('AI Agents Online')).toBeVisible();
    await expect(page.getByText('33/33')).toBeVisible();
    await expect(page.getByText('Threats Blocked')).toBeVisible();
    await expect(page.getByText('Content Verified')).toBeVisible();
    await expect(page.getByText('99.99%')).toBeVisible();
  });

  test('shows three main feature cards', async ({ page }) => {
    await expect(page.getByText('Multi-AI Consensus Engine')).toBeVisible();
    await expect(page.getByText('Real-Time Threat Intelligence')).toBeVisible();
    await expect(page.getByText('Byzantine Council Integration')).toBeVisible();
  });

  test('displays how it works section with 5 steps', async ({ page }) => {
    await expect(page.getByText('How SafetyOf.AI')).toBeVisible();
    await expect(page.getByText('STEP 01')).toBeVisible();
    await expect(page.getByText('STEP 05')).toBeVisible();
  });

  test('shows CSOAI stack integration section', async ({ page }) => {
    await expect(page.getByText('Built Into the')).toBeVisible();
    await expect(page.getByText('Governance Stack')).toBeVisible();
    await expect(page.getByText('All Systems Operational')).toBeVisible();
  });

  test('displays security features grid with 6 items', async ({ page }) => {
    await expect(page.getByText('Deepfake Detection')).toBeVisible();
    await expect(page.getByText('URL Scanner')).toBeVisible();
    await expect(page.getByText('Content Verification')).toBeVisible();
    await expect(page.getByText('Phishing Protection')).toBeVisible();
    await expect(page.getByText('Security Dashboard')).toBeVisible();
    await expect(page.getByText('Community Reputation')).toBeVisible();
  });

  test('CTA section has correct links', async ({ page }) => {
    const ctaSection = page.getByText('Start Protecting Your AI Ecosystem').locator('..');
    await expect(ctaSection.getByText('Get Started Free')).toBeVisible();
    await expect(ctaSection.getByText('View Pricing')).toBeVisible();
  });

  test('free tier badges show correct info', async ({ page }) => {
    await expect(page.getByText('3 free scans/day')).toBeVisible();
    await expect(page.getByText('No credit card')).toBeVisible();
    await expect(page.getByText('4 AI models')).toBeVisible();
  });

  test('"Launch Dashboard" button navigates to dashboard', async ({ page }) => {
    await page.getByRole('link', { name: /Launch Dashboard/i }).first().click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('"Try Free Scan" button navigates to scanner', async ({ page }) => {
    await page.getByRole('link', { name: /Try Free Scan/i }).click();
    await expect(page).toHaveURL('/scanner');
  });
});
