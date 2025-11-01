import { test, expect } from '../../fixtures/bookstack';

test.describe('Authentication', () => {
  test('should login with valid credentials', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login(
      process.env.BOOKSTACK_ADMIN_EMAIL || 'admin@admin.com',
      process.env.BOOKSTACK_ADMIN_PASSWORD || 'password'
    );
    
    // Verify successful login by checking for user menu or dashboard
    await expect(page).toHaveURL(/.*\/(books|shelves)?$/);
  });

  test('should show error with invalid credentials', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('invalid@example.com', 'wrongpassword');
    
    // Verify error message is displayed
    await expect(page.getByText(/incorrect|invalid|failed/i)).toBeVisible();
  });
});
