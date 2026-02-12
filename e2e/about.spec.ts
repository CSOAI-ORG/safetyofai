import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('renders about page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /About SafetyOf\.AI/i })).toBeVisible();
  });

  test('shows mission section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Our Mission/i })).toBeVisible();
    await expect(page.getByText('AI safety accessible')).toBeVisible();
  });

  test('displays CSOAI stack position', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Where SOAI Fits/i })).toBeVisible();
    await expect(page.getByText('YOU ARE HERE')).toBeVisible();
  });

  test('shows all stack components', async ({ page }) => {
    await expect(page.getByText('CSOAI Platform').first()).toBeVisible();
    await expect(page.getByText('SafetyOf.AI').first()).toBeVisible();
    await expect(page.getByText('CEASAI Training')).toBeVisible();
    await expect(page.getByText('Byzantine Council').first()).toBeVisible();
    await expect(page.getByText('Prosperity Fund')).toBeVisible();
    await expect(page.getByText('Watchdog System')).toBeVisible();
  });

  test('displays key principles', async ({ page }) => {
    await expect(page.getByText('Multi-AI Consensus').first()).toBeVisible();
    await expect(page.getByText('Geographic Distribution')).toBeVisible();
    await expect(page.getByText('Privacy First')).toBeVisible();
    await expect(page.getByText('Maternal Covenant')).toBeVisible();
  });

  test('CTA links to CSOAI.org', async ({ page }) => {
    const csoaiLink = page.getByRole('link', { name: /Visit CSOAI\.org/i });
    await expect(csoaiLink).toBeVisible();
    await expect(csoaiLink).toHaveAttribute('href', 'https://csoai.org');
  });

  test('CTA links to dashboard', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Try SafetyOf\.AI Free/i })).toBeVisible();
  });
});
