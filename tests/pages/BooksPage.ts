import { Page, Locator, expect } from '@playwright/test';
import { log, LogType } from '../helpers/logger';
import { BasePage } from './BasePage';

export class BooksPage extends BasePage {
  // readonly page: Page;

  readonly genreDropdown: Locator;
  readonly isbnInput: Locator;
  readonly publicationDateInput: Locator;
  readonly priceInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);

    this.genreDropdown = page.getByLabel('Genre:');
    this.isbnInput = page.getByRole('textbox', { name: 'ISBN:' });
    this.publicationDateInput = page.getByRole('textbox', { name: 'Publication Date:' });
    this.priceInput = page.getByRole('textbox', { name: 'Price:' });
    this.submitButton = page.getByRole('button', { name: 'Submit Add New Book Form' });
  }

  public async goto(baseUrl: string ): Promise<void> {
   const cleanBaseUrl = baseUrl.replace(/\/$/, '');
   console.log(`Cleaned Base URL: ${cleanBaseUrl}`);
    const booksUrl = `${cleanBaseUrl}/books`;
    log(`Navigating to Books URL to add books: ${booksUrl}`, LogType.INFO);
    await this.page.goto(booksUrl);
  }

  public async selectGenre(genre: string): Promise<void> {
    await this.genreDropdown.selectOption(genre);
  }

  public async enterISBN(isbn: string): Promise<void> {
    await this.isbnInput.fill(isbn);
  }

  public async enterPublicationDate(date: string): Promise<void> {
    await this.publicationDateInput.fill(date);
  }

  public async enterPrice(price: string): Promise<void> {
    await this.priceInput.fill(price);
  }

  public async submitBookForm(): Promise<void> {
    await this.submitButton.click();
  }

 public async clickAddBook(): Promise<void> {
    await this.clickButton('Add Book');
  }

  public async enterTitle(title: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Title:' }).fill(title);
  }

  public async enterAuthor(author: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Author:' }).fill(author);
  }
  public async clickSave(): Promise<void> {
    await this.page.getByRole('button', { name: 'Submit Add New Book Form' }).click();
  }

  public async validateBookExists(title: string): Promise<void> {
    const bookTitleLocator = this.page.getByRole('cell', { name: title });
    await expect(bookTitleLocator).toBeVisible();
  }

  public async clickEditForBook(title: string): Promise<void> {
    const editButton = this.page.locator(`.book-item:has-text("${title}")`).getByRole('button', { name: 'Edit' });
    await expect(editButton).toBeVisible();
    await editButton.click();
  } 

  public async enterIsbn(isbn: string): Promise<void> {
    await this.isbnInput.fill(isbn);
  }
  public async clickDeleteForBook(title: string ): Promise<void> {
    const deleteButton = this.page.locator(`.book-item:has-text("${title}")`).getByRole('button', { name: 'Delete' });
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();
  }

  public async validateBookNotExists(title: string): Promise<void> {
     const bookTitleLocator = this.page.getByRole('cell', { name: title });
    await expect(bookTitleLocator).not.toBeVisible();
  }



}