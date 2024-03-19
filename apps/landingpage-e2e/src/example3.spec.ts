import { test, expect } from '@playwright/test';

test('has title three', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('#welcome').innerText()).toContain('Welcome');
});
