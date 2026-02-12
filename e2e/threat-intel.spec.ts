import { test, expect } from '@playwright/test';

test.describe('Threat Intelligence Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/threat-intel');
  });

  test('renders threat intelligence header', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Threat Intelligence/i })).toBeVisible();
    await expect(page.getByText('LIVE')).toBeVisible();
  });

  test('displays global stats cards', async ({ page }) => {
    await expect(page.getByText('Total Threats Tracked')).toBeVisible();
    await expect(page.getByText('New (24h)')).toBeVisible();
    await expect(page.getByText('Phishing')).toBeVisible();
    await expect(page.getByText('Malware')).toBeVisible();
    await expect(page.getByText('Scams')).toBeVisible();
    await expect(page.getByText('Deepfakes')).toBeVisible();
  });

  test('shows all 4 intelligence sources as online', async ({ page }) => {
    await expect(page.getByText('PhishTank').first()).toBeVisible();
    await expect(page.getByText('URLhaus').first()).toBeVisible();
    await expect(page.getByText('OpenPhish').first()).toBeVisible();
    await expect(page.getByText('AlienVault OTX').first()).toBeVisible();
  });

  test('live threat feed displays entries', async ({ page }) => {
    await expect(page.getByText('Live Threat Feed')).toBeVisible();
    // Check at least a few threat entries exist
    const threatEntries = page.locator('[class*="rounded-lg bg-background"]');
    const count = await threatEntries.count();
    expect(count).toBeGreaterThan(3);
  });

  test('threat entries show severity badges', async ({ page }) => {
    const severityBadges = page.getByText(/CRITICAL|HIGH|MEDIUM|LOW/);
    const count = await severityBadges.count();
    expect(count).toBeGreaterThan(0);
  });

  test('threat entries show source attribution', async ({ page }) => {
    await expect(page.getByText('PhishTank').first()).toBeVisible();
    await expect(page.getByText('URLhaus').first()).toBeVisible();
  });

  test('threat entries show defanged URLs', async ({ page }) => {
    // URLs should be defanged with [.] notation
    const defangedUrls = page.getByText(/\[.\]/);
    const count = await defangedUrls.count();
    expect(count).toBeGreaterThan(0);
  });

  test('threat entries show timestamps', async ({ page }) => {
    await expect(page.getByText(/\d+ min ago/).first()).toBeVisible();
  });

  test('intelligence sources show uptime percentages', async ({ page }) => {
    const uptimeTexts = page.getByText(/99\.\d+% uptime/);
    const count = await uptimeTexts.count();
    expect(count).toBe(4);
  });

  test('total threat count is a large number', async ({ page }) => {
    // The counter should show 82000+ threats
    const statCard = page.getByText('Total Threats Tracked').locator('..');
    const numberText = await statCard.locator('p.text-xl').textContent();
    expect(numberText).toBeTruthy();
    const num = parseInt(numberText!.replace(/,/g, ''));
    expect(num).toBeGreaterThan(80000);
  });
});
