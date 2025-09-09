const { test, expect } = require('@playwright/test');

test('example.com should have correct title', async ({ page }) => {
  await page.goto('https://www.dev.rmg.cloverbaylabs.com/');
  await expect(page).toHaveTitle('Clover Bay Labs');
});
