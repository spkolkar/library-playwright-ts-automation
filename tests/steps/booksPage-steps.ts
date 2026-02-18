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
import { testBooks } from '../helpers/testData';
import test from 'node:test';

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
    await this.booksPage.enterTitle(testBooks.validBook.title);
    await this.booksPage.enterAuthor(testBooks.validBook.author);
    await this.booksPage.selectGenre(testBooks.validBook.genre);
    await this.booksPage.enterIsbn(testBooks.validBook.isbn);
    await this.booksPage.enterPublicationDate(testBooks.validBook.publicationDate);
    await this.booksPage.enterPrice(testBooks.validBook.price);
    await this.booksPage.clickSave();
    await this.booksPage.takeScreenshot('BookedAddFilledFormScreen');
    await this.booksPage.validateBookExists(testBooks.validBook.title);
    await this.booksPage.takeScreenshot('BookedAddedExistsScreen');
  }

  /*
   * Edit existing book
   */
  public async editBook(oldTitle: string, newTitle: string): Promise<void> {
    await this.booksPage.clickEditForBook(oldTitle);
    // await this.booksPage.validateHeader('Edit book details', 2);
    // await this.booksPage.takeScreenshot('BookSearchOpenedforEditScreen');
    await this.booksPage.enterPrice('87.99');
    await this.booksPage.enterTitle(newTitle);
    await this.booksPage.takeScreenshot('BookEditedWithNewTitleScreen');
    await this.booksPage.clickSave();
    await this.booksPage.validateBookExists(newTitle);
    await this.booksPage.takeScreenshot('BookUpdatedIntheBooksListScreen');
  }

  /**
   * Delete book
   */
  public async deleteBook(title: string): Promise<void> {
    await this.booksPage.clickDeleteForBook(title);
    await this.booksPage.validateBookNotExists(title);
  }

  // public async verifyBooksPageLoaded(): Promise<void> {
  //   await this.booksPage.validateHeader('Books', 1);
  //   // Change level to 2 if your header is <h2>
  // }
}
