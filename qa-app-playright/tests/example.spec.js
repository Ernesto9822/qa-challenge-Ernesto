const { test, expect } = require('@playwright/test');

test('qa-app - Login with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // Fill username
  await page.getByPlaceholder('Username').fill('testuser');

  // Fill password
  await page.getByPlaceholder('Password').fill('password');

  // Click on Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Expects page to have the sample token name.
  const token = page.getByText('Logged in with token:');
  await expect(token).toContainText('sampletoken');
});