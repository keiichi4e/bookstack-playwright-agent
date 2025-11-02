import { test, expect } from '@playwright/test';

test('example.com loads and has expected title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
