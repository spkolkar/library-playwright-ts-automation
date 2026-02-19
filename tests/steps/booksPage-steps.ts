
import test from "node:test";
import type { Page } from "@playwright/test";
import { testBooks } from "../helpers/testData";
import { BooksPage } from "../pages/BooksPage";

export class BooksPageSteps {
	private booksPage: BooksPage;

	constructor(page: Page) {
		this.booksPage = new BooksPage(page);
	}

	/**
	 * Navigate to Books page
	 */
	public async navigateToBooksPage(): Promise<void> {
		if (process.env.BASE_URL) {
			await this.booksPage.goto(process.env.BASE_URL);
		} else {
			throw new Error("BASE_URL is not defined in environment variables");
		}
	}

	public async openAddBookForm(): Promise<void> {
		await this.booksPage.clickAddBook();
	}

	/**
	 * Add new book
	 */
	public async addBook(
		_title: string,
		_author: string,
		_genre: string,
		_isbn: string,
		_publicationDate: string,
		_price: string,
	): Promise<void> {
		await this.booksPage.clickAddBook();
		await this.booksPage.enterTitle(testBooks.validBook.title);
		await this.booksPage.enterAuthor(testBooks.validBook.author);
		await this.booksPage.selectGenre(testBooks.validBook.genre);
		await this.booksPage.enterIsbn(testBooks.validBook.isbn);
		await this.booksPage.enterPublicationDate(
			testBooks.validBook.publicationDate,
		);
		await this.booksPage.enterPrice(testBooks.validBook.price);
		await this.booksPage.takeScreenshot("BookedAddFilledFormScreen");
		await this.booksPage.clickSave();
		await this.booksPage.validateBookExists(testBooks.validBook.title);
		await this.booksPage.takeScreenshot("BookedAddedExistsScreen");
	}

	/*
	 * Edit existing book
	 */
	public async editBook(oldTitle: string, newTitle: string): Promise<void> {
		//click on Edit button for the specific book
		await this.booksPage.clickEditForBook(oldTitle);
		await this.booksPage.validateHeader("Edit book details", 1);
		await this.booksPage.takeScreenshot("BookSearchOpenedforEditScreen");
		await this.booksPage.enterPublicationDate(
			testBooks.updatedBook.publicationDate,
		);
		await this.booksPage.enterTitle(newTitle);
		await this.booksPage.enterAuthor(testBooks.updatedBook.author);
		await this.booksPage.selectGenre(testBooks.updatedBook.genre);
		await this.booksPage.enterIsbn(testBooks.updatedBook.isbn);

		await this.booksPage.updatePrice(testBooks.updatedBook.price);
		await this.booksPage.takeScreenshot("BookEditedWithNewTitleScreen");
		await this.booksPage.clickSave();
		await this.booksPage.validateBookExists(newTitle);
		await this.booksPage.takeScreenshot("BookEditUpdatedIntheBooksListScreen");
	}

	/**
	 * Delete book
	 */
	public async deleteBook(title: string): Promise<void> {
		await this.booksPage.clickDeleteForBook(title);
		await this.booksPage.takeScreenshot("BookDeletedFromTheBookListScreen");
		await this.booksPage.validateBookNotExists(title);
	}

	public async verifyBooksPageLoaded(): Promise<void> {
		await this.booksPage.validateHeader("Books", 1);
	}
}
