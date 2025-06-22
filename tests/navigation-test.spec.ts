import { test, expect } from '@playwright/test'

test('navigation and tRPC test', async ({ page }) => {
  // Go to home page
  await page.goto('/')
  await page.waitForTimeout(1000)
  
  // Check main content
  await expect(page.getByText('Hello from T3 + Solito v4!')).toBeVisible()
  
  // Take screenshot of home page
  await page.screenshot({ path: 'screenshots/home-page.png' })
  
  // Click about button
  await page.getByText('Go to About').click()
  
  // Wait for navigation
  await page.waitForURL('/about')
  
  // Take screenshot of about page
  await page.screenshot({ path: 'screenshots/about-page.png' })
  
  // Check about content
  await expect(page.getByText('About Dream App')).toBeVisible()
  
  // Go back
  await page.getByText('Go Back').click()
  
  // Should be back at home
  await expect(page).toHaveURL('/')
  
  // Check tRPC status after waiting
  await page.waitForTimeout(2000)
  await page.screenshot({ path: 'screenshots/home-with-trpc.png' })
})