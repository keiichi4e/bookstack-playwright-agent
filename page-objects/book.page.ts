import { Page, Locator } from '@playwright/test';

export class BookPage {
  readonly page: Page;
  readonly createBookButton: Locator;
  readonly bookNameInput: Locator;
  readonly bookDescriptionInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createBookButton = page.getByRole('link', { name: 'Create New Book' });
    this.bookNameInput = page.getByLabel('Name');
    this.bookDescriptionInput = page.getByLabel('Description');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async gotoBooks() {
    await this.page.goto('/books');
  }

  async createBook(name: string, description?: string) {
    await this.createBookButton.click();
    await this.bookNameInput.fill(name);
    if (description) {
      await this.bookDescriptionInput.fill(description);
    }
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getBookByName(name: string): Promise<Locator> {
    return this.page.getByRole('link', { name });
  }
}
