import { test, expect } from '@playwright/test';

test('calculate bmi of boom', async ({ page }) => {
  await page.goto('https://www.calculator.net/bmi-calculator.html');
  // The site defaults to US or metric units based on the visitor's detected
  // location, so explicitly switch to Metric Units to make the metric
  // height/weight fields visible regardless of that default.
  await page.getByRole('link', { name: 'Metric Units' }).click();
  await page.waitForLoadState('load');
  await page.locator('#cage').click();
  await page.locator('#cage').fill('23');
  await page.locator('#cheightmeter').click();
  await page.locator('#cheightmeter').fill('185');
  await page.locator('#ckg').click();
  await page.locator('#ckg').fill('63.76');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.getByText('BMI = 18.6', { exact: true })).toBeVisible();
});