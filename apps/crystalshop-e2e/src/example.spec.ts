import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  console.log('test');
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
