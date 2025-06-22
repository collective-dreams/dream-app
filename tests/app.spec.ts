import { test, expect } from '@playwright/test'

test.describe('T3 + Solito App', () => {
  test('homepage loads with correct content', async ({ page }) => {
    await page.goto('/')
    
    // Check main title
    await expect(page.getByText('Hello from T3 + Solito v4!')).toBeVisible()
    
    // Check tech stack list
    await expect(page.getByText('✅ Solito v4 - Unified navigation')).toBeVisible()
    await expect(page.getByText('✅ tRPC - End-to-end typesafety')).toBeVisible()
    await expect(page.getByText('✅ Prisma - Type-safe database')).toBeVisible()
    
    // Take screenshot
    await page.screenshot({ path: 'screenshots/homepage.png' })
  })

  test('tRPC integration works', async ({ page }) => {
    await page.goto('/')
    
    // Wait for tRPC to load
    await page.waitForTimeout(1000)
    
    // Check tRPC status box
    const statusBox = page.locator('div').filter({ hasText: 'tRPC Status:' }).first()
    await expect(statusBox).toBeVisible()
    
    // Check greeting message
    await expect(page.getByText('Hello Developer from T3 + Solito!')).toBeVisible()
    
    // Take screenshot
    await page.screenshot({ path: 'screenshots/trpc-status.png' })
  })

  test('navigation to about page works', async ({ page }) => {
    await page.goto('/')
    
    // Click the about button
    await page.getByText('Go to About').click()
    
    // Check URL changed
    await expect(page).toHaveURL('/about')
    
    // Check about page content
    await expect(page.getByText('About Dream App')).toBeVisible()
    
    // Take screenshot
    await page.screenshot({ path: 'screenshots/about-page.png' })
    
    // Test back navigation
    await page.getByText('Go Back').click()
    await expect(page).toHaveURL('/')
  })

  test('responsive design', async ({ page }) => {
    // Desktop view
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/')
    await page.screenshot({ path: 'screenshots/desktop-view.png' })
    
    // Tablet view
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.screenshot({ path: 'screenshots/tablet-view.png' })
    
    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 })
    await page.screenshot({ path: 'screenshots/mobile-view.png' })
  })
})