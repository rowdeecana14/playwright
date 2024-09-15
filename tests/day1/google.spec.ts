import { test, expect } from '@playwright/test';

test('Search in google', async ({ page }) => {
    await page.goto('https://www.google.com.ph/');
    await expect(page).toHaveTitle('Google');
    await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();

    await page.getByLabel('Search', { exact: true }).fill('playwright');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // test
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
    await expect(page.locator('#APjFqb')).toContainText('playwright');

    await expect(page.getByRole('link', { name: 'Playwright: Fast and reliable' })).toBeVisible();
    await expect(page.locator('#APjFqb')).toContainText('playwright');
});