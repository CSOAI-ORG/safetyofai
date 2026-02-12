import { test, expect } from '@playwright/test';

test.describe('Pricing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test('renders pricing page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Protection for/i })).toBeVisible();
    await expect(page.getByText('Every Scale')).toBeVisible();
  });

  test('displays all 4 pricing tiers', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Free' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pro' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Expert' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Enterprise' })).toBeVisible();
  });

  test('shows correct prices', async ({ page }) => {
    await expect(page.getByText('$0')).toBeVisible();
    await expect(page.getByText('$9')).toBeVisible();
    await expect(page.getByText('$29')).toBeVisible();
    await expect(page.getByText('Custom')).toBeVisible();
  });

  test('Pro plan shows "Most Popular" badge', async ({ page }) => {
    await expect(page.getByText('Most Popular')).toBeVisible();
  });

  test('Free plan lists key features', async ({ page }) => {
    await expect(page.getByText('3 scans per day')).toBeVisible();
    await expect(page.getByText('4 AI model consensus')).toBeVisible();
  });

  test('Expert plan shows full Byzantine Council', async ({ page }) => {
    await expect(page.getByText('33 AI models (full Byzantine Council)')).toBeVisible();
  });

  test('Enterprise plan shows CSOAI integration', async ({ page }) => {
    await expect(page.getByText('CSOAI governance integration')).toBeVisible();
    await expect(page.getByText('EU AI Act compliance package')).toBeVisible();
  });

  test('each plan has a CTA button', async ({ page }) => {
    const getStartedButtons = page.getByRole('button', { name: /Get Started|Contact Sales/i });
    const count = await getStartedButtons.count();
    expect(count).toBe(4);
  });

  test('FAQ section is displayed', async ({ page }) => {
    await expect(page.getByText('Frequently Asked Questions')).toBeVisible();
  });

  test('FAQ explains multi-AI consensus', async ({ page }) => {
    await expect(page.getByText('What is multi-AI consensus?')).toBeVisible();
    await expect(page.getByText('Byzantine voting algorithm')).toBeVisible();
  });

  test('FAQ explains AI Dome replacement', async ({ page }) => {
    await expect(page.getByText(/replace.*AI Dome/i)).toBeVisible();
  });

  test('FAQ lists the AI models', async ({ page }) => {
    await expect(page.getByText('What AI models are used?')).toBeVisible();
    await expect(page.getByText(/OpenAI GPT-4/)).toBeVisible();
  });
});
