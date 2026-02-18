"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksPage = void 0;
const test_1 = require("@playwright/test");
const logger_1 = require("../helpers/logger");
const BasePage_1 = require("./BasePage");
class BooksPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.genreDropdown = page.getByLabel('Genre:');
        this.isbnInput = page.getByRole('textbox', { name: 'ISBN:' });
        this.publicationDateInput = page.getByRole('textbox', { name: 'Publication Date:' });
        this.priceInput = page.getByRole('textbox', { name: 'Price:' });
        this.submitButton = page.getByRole('button', { name: 'Submit Add New Book Form' });
    }
    async goto(baseUrl) {
        const cleanBaseUrl = baseUrl.replace(/\/$/, '');
        const booksUrl = `${cleanBaseUrl}/books`;
        (0, logger_1.log)(`Navigating to Books URL to add books: ${booksUrl}`, logger_1.LogType.INFO);
        await this.page.goto(booksUrl);
    }
    async selectGenre(genre) {
        await this.genreDropdown.selectOption(genre);
    }
    async enterISBN(isbn) {
        await this.isbnInput.fill(isbn);
    }
    async enterPublicationDate(date) {
        await this.publicationDateInput.fill(date);
    }
    async enterPrice(price) {
        await this.priceInput.fill(price);
    }
    async submitBookForm() {
        await this.submitButton.click();
    }
    async clickAddBook() {
        await this.clickButton('Add Book');
    }
    async enterTitle(title) {
        await this.page.getByRole('textbox', { name: 'Title:' }).fill(title);
    }
    async enterAuthor(author) {
        await this.page.getByRole('textbox', { name: 'Author:' }).fill(author);
    }
    async clickSave() {
        await this.page.getByRole('button', { name: 'Submit Add New Book Form' }).click();
    }
    async validateBookExists(title) {
        const bookTitleLocator = this.page.getByRole('cell', { name: title });
        await (0, test_1.expect)(bookTitleLocator).toBeVisible();
    }
    async clickEditForBook(title) {
        const editButton = this.page.locator(`.book-item:has-text("${title}")`).getByRole('button', { name: 'Edit' });
        await (0, test_1.expect)(editButton).toBeVisible();
        await editButton.click();
    }
    async enterIsbn(isbn) {
        await this.isbnInput.fill(isbn);
    }
    async clickDeleteForBook(title) {
        const deleteButton = this.page.locator(`.book-item:has-text("${title}")`).getByRole('button', { name: 'Delete' });
        await (0, test_1.expect)(deleteButton).toBeVisible();
        await deleteButton.click();
    }
    async validateBookNotExists(title) {
        const bookTitleLocator = this.page.getByRole('cell', { name: title });
        await (0, test_1.expect)(bookTitleLocator).not.toBeVisible();
    }
}
exports.BooksPage = BooksPage;
