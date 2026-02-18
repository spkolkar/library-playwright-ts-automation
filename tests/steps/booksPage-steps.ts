// import { BooksPage } from "../pages/BooksPage";
// import {Page} from '@playwright/test';

// export class BooksPageSteps{
//   booksPage: BooksPage;
//   constructor(page: Page){
//     this.booksPage = new BooksPage(page);
//   }

//   public validateBookTitleInList = async (title: string) => {
//     const bookTitleLocator = this.booksPage.page.locator(`.book-item:has-text("${title}") .book-title`);
//     const count = await bookTitleLocator.count();
//     if (count === 0) {
//       throw new Error(`Book with title '${title}' not found.`);
//     }
//   }
// }

import { Page } from '@playwright/test';
import { BooksPage } from '../pages/BooksPage';

export class BooksPageSteps {
  private booksPage: BooksPage;

  constructor(page: Page) {
    this.booksPage = new BooksPage(page);
  }

  /**
   * Navigate to Books page
   */
  public async navigateToBooksPage(): Promise<void> {
    await this.booksPage.goto(process.env.BASE_URL!);
  }

  public async openAddBookForm(): Promise<void> {
  await this.booksPage.clickAddBook();
}


  /**
   * Add new book
   */
  public async addBook(title: string, author: string, genre: string, isbn: string, publicationDate: string, price: string): Promise<void> {
    await this.booksPage.clickAddBook();
    await this.booksPage.enterTitle(title);
    await this.booksPage.enterAuthor(author);
    await this.booksPage.selectGenre(genre);
    await this.booksPage.enterIsbn(isbn);
    await this.booksPage.enterPublicationDate(publicationDate);
    await this.booksPage.enterPrice(price);
    await this.booksPage.clickSave();
    await this.booksPage.validateBookExists(title);
  }

  /**
   * Edit existing book
   */
  public async editBook(oldTitle: string, newTitle: string): Promise<void> {
    await this.booksPage.clickEditForBook(oldTitle);
    await this.booksPage.enterTitle(newTitle);
    await this.booksPage.clickSave();
    await this.booksPage.validateBookExists(newTitle);
  }

  /**
   * Delete book
   */
  public async deleteBook(title: string): Promise<void> {
    await this.booksPage.clickDeleteForBook(title);
    await this.booksPage.validateBookDeleted(title);
  }
}
