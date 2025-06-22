import { test, expect } from '@playwright/test'

test('debug tRPC connection', async ({ page }) => {
  // Enable console logging
  page.on('console', msg => console.log('Browser log:', msg.text()))
  page.on('pageerror', exception => console.log('Page error:', exception))
  
  // Log network requests
  page.on('request', request => {
    if (request.url().includes('trpc')) {
      console.log('tRPC Request:', request.method(), request.url())
    }
  })
  
  page.on('response', response => {
    if (response.url().includes('trpc')) {
      console.log('tRPC Response:', response.status(), response.url())
    }
  })
  
  await page.goto('http://localhost:3000')
  
  // Wait for the page to fully load
  await page.waitForLoadState('networkidle')
  
  // Check if tRPC is loading
  const trpcStatus = await page.locator('text=tRPC Status:').locator('..')
  await expect(trpcStatus).toBeVisible()
  
  // Wait a bit to see if it resolves
  await page.waitForTimeout(3000)
  
  // Take screenshot
  await page.screenshot({ path: 'screenshots/debug-trpc.png' })
  
  // Get the actual content
  const statusText = await trpcStatus.textContent()
  console.log('tRPC Status text:', statusText)
})