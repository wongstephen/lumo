import { expect, test } from '@playwright/test';

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('smoke', { tag: '@smoke' }, async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test('has title', async ({ page }) => {
    await expect(page.getByRole('heading')).toContainText('Welcome');
  });
});
