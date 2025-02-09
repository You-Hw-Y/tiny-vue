import { test, expect } from '@playwright/test'

test('尺寸设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#radio-size')

  const demo = page.locator('#radio-size')
  const radioGroup = demo.locator('.tiny-radio-group')

  await expect(radioGroup.first()).toHaveCSS('width', '184px')
  await expect(radioGroup.first()).toHaveCSS('height', '32px')
  await expect(radioGroup.nth(1)).toHaveCSS('width', '184px')
  await expect(radioGroup.nth(1)).toHaveCSS('height', '28px')
  await expect(radioGroup.nth(2)).toHaveCSS('width', '152px')
  await expect(radioGroup.nth(2)).toHaveCSS('height', '24px')
})
