import { test, expect } from '@playwright/test';

test('calculate bmi of boom', async ({ page }) => {
  await page.goto('https://www.calculator.net/bmi-calculator.html');
  await page.locator('#cage').click();
  await page.locator('#cage').fill('23');
  await page.locator('#cheightmeter').click();
  await page.locator('#cheightmeter').fill('185');
  await page.locator('#ckg').click();
  await page.locator('#ckg').fill('63.76');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.getByText('BMI = 18.6', { exact: true })).toBeVisible();
});