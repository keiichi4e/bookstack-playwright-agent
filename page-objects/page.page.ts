import { Page as PlaywrightPage, Locator } from '@playwright/test';

export class PagePage {
  readonly page: PlaywrightPage;
  readonly createPageButton: Locator;
  readonly pageNameInput: Locator;
  readonly pageEditorContent: Locator;
  readonly saveButton: Locator;

  constructor(page: PlaywrightPage) {
    this.page = page;
    this.createPageButton = page.getByRole('link', { name: 'Create New Page' });
    this.pageNameInput = page.getByLabel('Page Name');
    this.pageEditorContent = page.locator('[name="markdown"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async gotoPages() {
    await this.page.goto('/pages');
  }

  async createPage(name: string, content?: string) {
    await this.createPageButton.click();
    await this.pageNameInput.fill(name);
    if (content) {
      await this.pageEditorContent.fill(content);
    }
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getPageByName(name: string): Promise<Locator> {
    return this.page.getByRole('link', { name });
  }
}
