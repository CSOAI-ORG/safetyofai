import { test, expect } from '@playwright/test';

test.describe('Byzantine Council Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/byzantine');
  });

  test('renders Byzantine Council header', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Byzantine Council/i })).toBeVisible();
    await expect(page.getByText('33 independent AI agents')).toBeVisible();
  });

  test('shows online agent count', async ({ page }) => {
    await expect(page.getByText(/\d+\/33 Online/)).toBeVisible();
  });

  test('displays council stats', async ({ page }) => {
    await expect(page.getByText('Total Agents')).toBeVisible();
    await expect(page.getByText('33').first()).toBeVisible();
    await expect(page.getByText('Verifications Today')).toBeVisible();
    await expect(page.getByText('Global Threat Level')).toBeVisible();
    await expect(page.getByText('LOW')).toBeVisible();
  });

  test('shows all 3 architecture families', async ({ page }) => {
    await expect(page.getByText('Family A — Transformers')).toBeVisible();
    await expect(page.getByText('Family B — Alternative')).toBeVisible();
    await expect(page.getByText('Family C — Symbolic')).toBeVisible();
  });

  test('family descriptions are accurate', async ({ page }) => {
    await expect(page.getByText(/GPT, Claude, Gemini, Llama/)).toBeVisible();
    await expect(page.getByText(/RNN, CNN, GNN, SSM/)).toBeVisible();
    await expect(page.getByText(/ProverBot, LEAN, Bayesian/)).toBeVisible();
  });

  test('filter tabs work correctly', async ({ page }) => {
    // Default: All Agents
    await expect(page.getByRole('button', { name: /All Agents \(33\)/i })).toBeVisible();

    // Click Family A filter
    await page.getByRole('button', { name: /Family A \(11\)/i }).click();
    await expect(page.getByText('GPT-4 Turbo')).toBeVisible();
    await expect(page.getByText('Claude 3.5 Sonnet')).toBeVisible();

    // Click Family B filter
    await page.getByRole('button', { name: /Family B \(11\)/i }).click();
    await expect(page.getByText('RNN-Safety')).toBeVisible();
    await expect(page.getByText('CNN-Visual')).toBeVisible();

    // Click Family C filter
    await page.getByRole('button', { name: /Family C \(11\)/i }).click();
    await expect(page.getByText('ProverBot')).toBeVisible();
    await expect(page.getByText('Symbolic-Logic-Engine')).toBeVisible();
  });

  test('agent cards display correct info', async ({ page }) => {
    // Check first visible agent has all expected fields
    const firstAgent = page.locator('[class*="rounded-lg bg-card"]').first();
    await expect(firstAgent.getByText('Region')).toBeVisible();
    await expect(firstAgent.getByText('Uptime')).toBeVisible();
    await expect(firstAgent.getByText('Verifications')).toBeVisible();
    await expect(firstAgent.getByText('Accuracy')).toBeVisible();
  });

  test('shows 33 agents when All filter is selected', async ({ page }) => {
    await page.getByRole('button', { name: /All Agents \(33\)/i }).click();
    const agents = page.locator('[class*="rounded-lg bg-card border border-border p-4"]');
    const count = await agents.count();
    expect(count).toBe(33);
  });

  test('shows 11 agents when single family is selected', async ({ page }) => {
    await page.getByRole('button', { name: /Family A \(11\)/i }).click();
    // Count Transformer badges
    const transformerBadges = page.getByText('Transformer');
    const count = await transformerBadges.count();
    expect(count).toBe(11);
  });

  test('agents show uptime above 99%', async ({ page }) => {
    const uptimeValues = page.getByText(/99\.\d+%/);
    const count = await uptimeValues.count();
    expect(count).toBeGreaterThan(0);
  });

  test('each family shows status dots in header', async ({ page }) => {
    // Each family card should have 11 small status dots
    const familyCards = page.locator('.rounded-xl.bg-card.border');
    const firstFamilyDots = familyCards.first().locator('.w-2.h-2.rounded-full');
    const dotCount = await firstFamilyDots.count();
    expect(dotCount).toBe(11);
  });
});
