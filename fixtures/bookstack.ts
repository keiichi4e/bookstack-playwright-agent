import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';

type BookStackFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<BookStackFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
