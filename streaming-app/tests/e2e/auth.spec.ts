import { test, expect } from '@playwright/test'

// Note: The dev server must be running before executing this test

test.describe('Authentication', () => {
  test('should redirect to /auth/signin when accessing /dashboard without authentication', async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard')
    
    await expect(page).toHaveURL(/.*\/auth\/signin/)
  })
})