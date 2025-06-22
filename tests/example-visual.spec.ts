import { test, expect } from '@playwright/test';
import { argosScreenshot } from '@argos-ci/playwright';

test.describe('Visual Regression Example', () => {
  test('homepage visual test', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://example.com');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Take a full page screenshot for Argos
    await argosScreenshot(page, 'homepage-full');
    
    // Interact with elements
    await page.click('a[href="/"]');
    
    // Take another screenshot after interaction
    await argosScreenshot(page, 'homepage-after-click');
  });

  test('form interaction with screenshots', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Take initial screenshot
    await argosScreenshot(page, 'playwright-homepage');
    
    // Search for something
    const searchButton = page.getByRole('button', { name: 'Search' });
    await searchButton.click();
    
    const searchInput = page.getByPlaceholder('Search docs');
    await searchInput.fill('screenshot');
    
    // Take screenshot of search results
    await argosScreenshot(page, 'search-results');
    
    // Verify search worked
    await expect(page.getByText('screenshot')).toBeVisible();
  });

  test('responsive design testing', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await argosScreenshot(page, 'desktop-view');
    
    // Tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await argosScreenshot(page, 'tablet-view');
    
    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await argosScreenshot(page, 'mobile-view');
  });

  test('element-specific screenshots', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Screenshot specific elements
    const header = page.locator('header');
    await argosScreenshot(header, 'header-element');
    
    const nav = page.locator('nav');
    await argosScreenshot(nav, 'navigation-element');
  });
});