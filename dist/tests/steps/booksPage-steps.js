"use strict";
// import { BooksPage } from "../pages/BooksPage";
// import {Page} from '@playwright/test';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksPageSteps = void 0;
const BooksPage_1 = require("../pages/BooksPage");
class BooksPageSteps {
    constructor(page) {
        this.booksPage = new BooksPage_1.BooksPage(page);
    }
    /**
     * Navigate to Books page
     */
    async navigateToBooksPage() {
        await this.booksPage.goto(process.env.BASE_URL);
    }
    async openAddBookForm() {
        await this.booksPage.clickAddBook();
    }
    /**
     * Add new book
     */
    async addBook(title, author, genre, isbn, publicationDate, price) {
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
    async editBook(oldTitle, newTitle) {
        await this.booksPage.clickEditForBook(oldTitle);
        await this.booksPage.enterTitle(newTitle);
        await this.booksPage.clickSave();
        await this.booksPage.validateBookExists(newTitle);
    }
    /**
     * Delete book
     */
    async deleteBook(title) {
        await this.booksPage.clickDeleteForBook(title);
        await this.booksPage.validateBookDeleted(title);
    }
}
exports.BooksPageSteps = BooksPageSteps;
