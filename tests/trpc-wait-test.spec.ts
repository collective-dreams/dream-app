import { test, expect } from '@playwright/test'

test('wait for tRPC to load', async ({ page }) => {
  // Enable console logging
  page.on('console', msg => {
    if (msg.text().includes('error') || msg.text().includes('Error')) {
      console.log('Console error:', msg.text())
    }
  })
  
  page.on('pageerror', exception => console.log('Page error:', exception))
  
  await page.goto('http://localhost:3000')
  
  // Wait up to 10 seconds for the greeting to appear
  try {
    await page.waitForSelector('text=Hello Developer from T3 + Solito!', { timeout: 10000 })
    console.log('✅ tRPC loaded successfully!')
  } catch (e) {
    console.log('❌ tRPC did not load within 10 seconds')
    
    // Check what's actually in the tRPC status area
    const statusElement = await page.locator('text=tRPC Status:').locator('..')
    const statusText = await statusElement.textContent()
    console.log('Current status:', statusText)
    
    // Try to get the network response
    const response = await page.evaluate(() => {
      return fetch('/api/trpc/hello?input=' + encodeURIComponent(JSON.stringify({ name: 'Developer' })))
        .then(res => res.text())
        .catch(err => err.toString())
    })
    console.log('Direct API response:', response)
  }
  
  await page.screenshot({ path: 'screenshots/trpc-wait-test.png', fullPage: true })
})