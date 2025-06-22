import { test } from '@playwright/test'

test('visual check', async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'screenshots/visual-check.png', fullPage: true })
})