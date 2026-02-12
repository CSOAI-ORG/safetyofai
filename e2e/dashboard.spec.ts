import { test, expect } from '@playwright/test';

test.describe('Security Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
  });

  test('renders dashboard header', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Security Dashboard/i })).toBeVisible();
    await expect(page.getByText('All Systems Online')).toBeVisible();
  });

  test('displays security score widget', async ({ page }) => {
    await expect(page.getByText('Security Score')).toBeVisible();
    await expect(page.getByText('85')).toBeVisible();
  });

  test('shows quick stats cards', async ({ page }) => {
    await expect(page.getByText('Scans Today')).toBeVisible();
    await expect(page.getByText('Threats Blocked')).toBeVisible();
    await expect(page.getByText('AI Models Active')).toBeVisible();
  });

  test('scanner section is present with type tabs', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Security Scanner/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Text/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /URL/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Image/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Audio/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Video/i })).toBeVisible();
  });

  test('text scan type shows textarea', async ({ page }) => {
    await page.getByRole('button', { name: /^Text$/i }).click();
    await expect(page.locator('textarea')).toBeVisible();
  });

  test('URL scan type shows URL input', async ({ page }) => {
    await page.getByRole('button', { name: /^URL$/i }).click();
    await expect(page.locator('input[type="url"]')).toBeVisible();
  });

  test('image scan type shows upload area', async ({ page }) => {
    await page.getByRole('button', { name: /^Image$/i }).click();
    await expect(page.getByText(/Drop image file/i)).toBeVisible();
  });

  test('scan button is disabled when input is empty', async ({ page }) => {
    const scanBtn = page.getByRole('button', { name: /^Scan$/i });
    await expect(scanBtn).toBeDisabled();
  });

  test('text scan triggers analysis and shows results', async ({ page }) => {
    await page.locator('textarea').fill('This is a test message to verify the consensus engine.');
    await page.getByRole('button', { name: /^Scan$/i }).click();

    // Wait for scan to complete (demo mode returns quickly)
    await expect(page.getByText('Analysis Result')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('Consensus Score')).toBeVisible();

    // Check AI model responses are displayed
    await expect(page.getByText('GPT-4')).toBeVisible();
    await expect(page.getByText('Claude 3.5')).toBeVisible();
    await expect(page.getByText('Gemini 2.0')).toBeVisible();
    await expect(page.getByText('Deepseek V3')).toBeVisible();
  });

  test('scan result shows risk level badge', async ({ page }) => {
    await page.locator('textarea').fill('Test content');
    await page.getByRole('button', { name: /^Scan$/i }).click();
    await expect(page.getByText('Analysis Result')).toBeVisible({ timeout: 10000 });
    // Should show SAFE for benign content
    await expect(page.getByText('SAFE')).toBeVisible();
  });

  test('threat intelligence feeds section is visible', async ({ page }) => {
    await expect(page.getByText('Threat Intelligence Feeds')).toBeVisible();
    await expect(page.getByText('PhishTank')).toBeVisible();
    await expect(page.getByText('URLhaus')).toBeVisible();
    await expect(page.getByText('OpenPhish')).toBeVisible();
    await expect(page.getByText('AlienVault OTX')).toBeVisible();
  });

  test('all threat feeds show online status', async ({ page }) => {
    const onlineIndicators = page.getByText('online');
    const count = await onlineIndicators.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });
});
