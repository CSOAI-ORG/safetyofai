import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('header navigation contains all main links', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('header nav');
    await expect(nav.getByText('Dashboard')).toBeVisible();
    await expect(nav.getByText('Scanner')).toBeVisible();
    await expect(nav.getByText('Threat Intel')).toBeVisible();
    await expect(nav.getByText('Byzantine Council')).toBeVisible();
    await expect(nav.getByText('Pricing')).toBeVisible();
  });

  test('logo links to homepage', async ({ page }) => {
    await page.goto('/dashboard');
    await page.getByRole('link', { name: /SafetyOf\.AI/i }).first().click();
    await expect(page).toHaveURL('/');
  });

  test('nav link to Dashboard works', async ({ page }) => {
    await page.goto('/');
    await page.locator('header nav').getByText('Dashboard').click();
    await expect(page).toHaveURL('/dashboard');
  });

  test('nav link to Scanner works', async ({ page }) => {
    await page.goto('/');
    await page.locator('header nav').getByText('Scanner').click();
    await expect(page).toHaveURL('/scanner');
  });

  test('nav link to Threat Intel works', async ({ page }) => {
    await page.goto('/');
    await page.locator('header nav').getByText('Threat Intel').click();
    await expect(page).toHaveURL('/threat-intel');
  });

  test('nav link to Byzantine Council works', async ({ page }) => {
    await page.goto('/');
    await page.locator('header nav').getByText('Byzantine Council').click();
    await expect(page).toHaveURL('/byzantine');
  });

  test('nav link to Pricing works', async ({ page }) => {
    await page.goto('/');
    await page.locator('header nav').getByText('Pricing').click();
    await expect(page).toHaveURL('/pricing');
  });

  test('footer contains platform links', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.getByText('Security Scanner')).toBeVisible();
    await expect(footer.getByText('Threat Intelligence')).toBeVisible();
    await expect(footer.getByText('Byzantine Council')).toBeVisible();
  });

  test('footer shows CSOAI branding', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer').getByText('CSOAI Security Layer')).toBeVisible();
    await expect(page.locator('footer').getByText('33 Independent AI Agents')).toBeVisible();
  });

  test('all pages load without errors', async ({ page }) => {
    const routes = ['/', '/dashboard', '/scanner', '/threat-intel', '/byzantine', '/pricing', '/about'];
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBeLessThan(400);
    }
  });
});
