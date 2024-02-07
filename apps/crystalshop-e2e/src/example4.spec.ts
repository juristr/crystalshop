import { test, expect } from '@playwright/test';

test('has title four', async ({ page }) => {
  await page.goto('/');

  // eslint-disable-next-line playwright/no-wait-for-timeout
  page.waitForTimeout(2000);

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
