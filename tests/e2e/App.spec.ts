import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Click me' }).click();
  await expect(page.getByText('Button is clicked')).toBeVisible();
});
