import { Page, expect } from '@playwright/test';
import { log, LogType } from '../helpers/logger';
import { BasePage } from './BasePage';

export class BooksPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private genreDropdown = () => this.page.locator('#genre');
  private isbnInput = () => this.page.locator('#isbn');
  private publicationDateInput = () => this.page.locator('#publicationDate');
  private priceInput = () => this.page.locator('#price');
  private submitButton = () =>
    this.page.getByRole('button', { name: /submit/i });

  public async goto(baseUrl: string): Promise<void> {
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    const booksUrl = `${cleanBaseUrl}/books`;
    log(`Navigating to Books URL to add books: ${booksUrl}`, LogType.INFO);
    await this.page.goto(booksUrl);
  }

  public async selectGenre(genre: string): Promise<void> {
    await this.genreDropdown().selectOption(genre);
  }

  public async enterISBN(isbn: string): Promise<void> {
    await this.isbnInput().fill(isbn);
  }

  public async enterPublicationDate(date: string): Promise<void> {
    await this.publicationDateInput().fill(date);
  }

  public async enterPrice(price: string): Promise<void> {
    await this.priceInput().fill(price);
  }
  public async updatePrice(price: string): Promise<void> {
    await this.page.getByLabel('Price:').fill(price);
  }

  public async submitBookForm(): Promise<void> {
    await this.submitButton().click();
  }

  public async clickAddBook(): Promise<void> {
    await this.clickButton('Add Book');
  }

  public async enterTitle(title: string): Promise<void> {
    await this.page.getByLabel('Title:').fill(title);
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
    const bookRow = await this.searchRowForRequiredElement('tr', title);
    const editButton = bookRow.getByRole('button', { name: /edit/i });
    await expect(editButton).toBeVisible();
    await editButton.click();
    log(`Book row found and updated '${title}'`, LogType.INFO);
  }

  public async enterIsbn(isbn: string): Promise<void> {
    await this.isbnInput().fill(isbn);
  }
  public async clickDeleteForBook(title: string): Promise<void> {
    const bookRow = await this.searchRowForRequiredElement('tr', title);
    log(`Book row found and deleted '${title}'`, LogType.INFO);
    const deleteButton = bookRow.getByRole('button', { name: /delete/i });
    await deleteButton.click();
  }

  public async validateBookNotExists(title: string): Promise<void> {
    const bookTitleLocator = this.page.getByRole('cell', { name: title });
    await expect(bookTitleLocator).not.toBeVisible();
  }



}