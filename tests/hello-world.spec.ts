import { test, expect } from '@playwright/test';
import { argosScreenshot } from '@argos-ci/playwright';

const APP_URL = 'http://localhost:3000';

test.describe('Hello World App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(APP_URL);
  });

  test('should display initial greeting', async ({ page }) => {
    const greeting = page.locator('#greeting');
    await expect(greeting).toHaveText('Hello World!');
    await argosScreenshot(page, 'initial-greeting');
  });

  test('should change greeting when button clicked', async ({ page }) => {
    const greeting = page.locator('#greeting');
    const changeButton = page.locator('#change-greeting');
    const output = page.locator('#output');

    await changeButton.click();
    await expect(greeting).toHaveText('Bonjour le monde!');
    await expect(output).toContainText('Greeting changed to: Bonjour le monde!');
    await argosScreenshot(page, 'french-greeting');

    await changeButton.click();
    await expect(greeting).toHaveText('Hola mundo!');
    await argosScreenshot(page, 'spanish-greeting');
  });

  test('should reset greeting', async ({ page }) => {
    const greeting = page.locator('#greeting');
    const changeButton = page.locator('#change-greeting');
    const resetButton = page.locator('#reset-greeting');
    const output = page.locator('#output');

    await changeButton.click();
    await changeButton.click();
    await expect(greeting).toHaveText('Hola mundo!');

    await resetButton.click();
    await expect(greeting).toHaveText('Hello World!');
    await expect(output).toContainText('Greeting reset to default');
    await argosScreenshot(page, 'reset-greeting');
  });

  test('should display timestamp', async ({ page }) => {
    const timestampButton = page.locator('#add-timestamp');
    const output = page.locator('#output');

    await timestampButton.click();
    await expect(output).toContainText('Current time:');
    await argosScreenshot(page, 'timestamp-display');
  });

  test('full interaction flow', async ({ page }) => {
    const greeting = page.locator('#greeting');
    const changeButton = page.locator('#change-greeting');
    const resetButton = page.locator('#reset-greeting');
    const timestampButton = page.locator('#add-timestamp');

    await argosScreenshot(page, 'flow-start');

    await changeButton.click();
    await expect(greeting).toHaveText('Bonjour le monde!');
    
    await timestampButton.click();
    await argosScreenshot(page, 'flow-with-timestamp');

    await resetButton.click();
    await expect(greeting).toHaveText('Hello World!');
    await argosScreenshot(page, 'flow-end');
  });
});