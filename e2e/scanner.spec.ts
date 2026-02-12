import { test, expect } from '@playwright/test';

test.describe('URL Security Scanner', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scanner');
  });

  test('renders scanner page with correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /URL Security Scanner/i })).toBeVisible();
    await expect(page.getByText('Multi-AI consensus URL scanning')).toBeVisible();
  });

  test('has URL input field', async ({ page }) => {
    const input = page.locator('input[type="url"]');
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute('placeholder', /Enter URL to scan/i);
  });

  test('scan button is disabled when empty', async ({ page }) => {
    await expect(page.getByRole('button', { name: /^Scan$/i })).toBeDisabled();
  });

  test('scan button enables when URL is entered', async ({ page }) => {
    await page.locator('input[type="url"]').fill('https://example.com');
    await expect(page.getByRole('button', { name: /^Scan$/i })).toBeEnabled();
  });

  test('shows scanning progress phases', async ({ page }) => {
    await page.locator('input[type="url"]').fill('https://example.com');
    await page.getByRole('button', { name: /^Scan$/i }).click();

    // Should show at least one scanning phase
    await expect(page.getByText(/Checking|Querying|Scanning|Running|Computing/i).first()).toBeVisible({ timeout: 5000 });
  });

  test('displays full scan result after completion', async ({ page }) => {
    await page.locator('input[type="url"]').fill('https://example.com');
    await page.getByRole('button', { name: /^Scan$/i }).click();

    // Wait for result
    await expect(page.getByText(/URL is Safe|Threats Detected/i)).toBeVisible({ timeout: 15000 });
  });

  test('result shows domain information', async ({ page }) => {
    await page.locator('input[type="url"]').fill('https://example.com');
    await page.getByRole('button', { name: /^Scan$/i }).click();

    await expect(page.getByText('Domain Information')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('example.com')).toBeVisible();
    await expect(page.getByText('Valid')).toBeVisible(); // SSL valid
  });

  test('result shows threat intelligence checks', async ({ page }) => {
    await page.locator('input[type="url"]').fill('https://example.com');
    await page.getByRole('button', { name: /^Scan$/i }).click();

    await expect(page.getByText('Threat Intelligence Feeds')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('PhishTank')).toBeVisible();
    await expect(page.getByText('URLhaus')).toBeVisible();
    await expect(page.getByText('OpenPhish')).toBeVisible();
    await expect(page.getByText('AlienVault OTX')).toBeVisible();
  });

  test('result shows AI model verdicts', async ({ page }) => {
    await page.locator('input[type="url"]').fill('https://google.com');
    await page.getByRole('button', { name: /^Scan$/i }).click();

    await expect(page.getByText('AI Model Verdicts')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('GPT-4')).toBeVisible();
    await expect(page.getByText('Claude 3.5')).toBeVisible();
    await expect(page.getByText('Gemini 2.0')).toBeVisible();
    await expect(page.getByText('Deepseek V3')).toBeVisible();
  });

  test('result shows consensus score', async ({ page }) => {
    await page.locator('input[type="url"]').fill('https://example.com');
    await page.getByRole('button', { name: /^Scan$/i }).click();

    await expect(page.getByText(/Consensus/i)).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/%$/)).toBeVisible();
  });

  test('Enter key triggers scan', async ({ page }) => {
    await page.locator('input[type="url"]').fill('https://example.com');
    await page.locator('input[type="url"]').press('Enter');

    await expect(page.getByText(/Checking|Querying|URL is Safe/i).first()).toBeVisible({ timeout: 10000 });
  });
});
