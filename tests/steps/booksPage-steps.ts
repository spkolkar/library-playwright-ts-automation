import { BooksPage } from "../pages/BooksPage";
import {Page} from '@playwright/test';

export class BooksPageSteps{
  booksPage: BooksPage;
  constructor(page: Page){
    this.booksPage = new BooksPage(page);
  }

  public validateBookTitleInList = async (title: string) => {
    const bookTitleLocator = this.booksPage.page.locator(`.book-item:has-text("${title}") .book-title`);
    const count = await bookTitleLocator.count();
    if (count === 0) {
      throw new Error(`Book with title '${title}' not found.`);
    }
  }
}