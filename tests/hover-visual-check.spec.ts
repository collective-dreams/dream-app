import { test } from '@playwright/test'

test('visual check of card hover states', async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(1000)
  
  // Normal state
  await page.screenshot({ path: 'screenshots/cards-normal.png', fullPage: false })
  
  // Hover on first card/button if exists
  const card = page.locator('.dream-card').first()
  const button = page.locator('button').first()
  
  if (await card.count() > 0) {
    await card.hover()
    await page.waitForTimeout(500)
    await page.screenshot({ path: 'screenshots/cards-with-hover.png', fullPage: false })
  } else if (await button.count() > 0) {
    await button.hover()
    await page.waitForTimeout(500)
    await page.screenshot({ path: 'screenshots/button-with-hover.png', fullPage: false })
  }
  
  // Dark mode hover (if toggle exists)
  const themeToggle = page.locator('#theme-toggle')
  if (await themeToggle.count() > 0) {
    await themeToggle.click()
    await page.waitForTimeout(300)
    
    if (await card.count() > 0) {
      await card.hover()
      await page.waitForTimeout(500)
      await page.screenshot({ path: 'screenshots/cards-dark-hover.png', fullPage: false })
    }
  }
})