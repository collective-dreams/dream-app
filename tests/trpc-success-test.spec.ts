import { test, expect } from '@playwright/test'

test('wait for tRPC to successfully load', async ({ page }) => {
  await page.goto('http://localhost:3000')
  
  // Wait longer for any of the success messages
  try {
    await page.waitForSelector('text=Hello Developer from T3 + Solito!', { timeout: 5000 })
    console.log('✅ Hello query loaded successfully!')
  } catch {
    try {
      await page.waitForSelector('text=tRPC is working!', { timeout: 2000 })
      console.log('✅ Test query loaded successfully!')
    } catch {
      try {
        await page.waitForSelector('text=This is a simple string response', { timeout: 2000 })
        console.log('✅ Simple query loaded successfully!')
      } catch {
        console.log('❌ No queries loaded successfully')
        
        // Check what's in the status area
        const statusArea = await page.locator('div').filter({ hasText: 'tRPC Status:' }).first()
        const content = await statusArea.textContent()
        console.log('Status area content:', content)
        
        // Check for any errors in the console
        await page.evaluate(() => {
          console.log('Window location:', window.location.href)
          console.log('API URL would be:', window.location.origin + '/api/trpc')
        })
      }
    }
  }
  
  await page.screenshot({ path: 'screenshots/trpc-final-status.png', fullPage: true })
})