import { test, expect } from '@playwright/test';

test('has title two', async ({ page }) => {
  await page.goto('/');

  // make this test fail randomly to test flaky test re-running
  // eslint-disable-next-line playwright/no-conditional-in-test
  if (Math.random() > 0.5) {
    throw new Error('Random failure');
  }

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
