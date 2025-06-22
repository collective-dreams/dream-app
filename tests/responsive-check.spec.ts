import { test } from '@playwright/test'

test('responsive design check', async ({ page }) => {
  const viewports = {
    'mobile': { width: 375, height: 667 },
    'tablet': { width: 768, height: 1024 },
    'desktop': { width: 1440, height: 900 }
  }
  
  for (const [name, viewport] of Object.entries(viewports)) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    await page.waitForTimeout(1000)
    await page.screenshot({ 
      path: `screenshots/${name}-view.png`, 
      fullPage: true 
    })
  }
})