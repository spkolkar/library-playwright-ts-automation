"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksPage = void 0;
const test_1 = require("@playwright/test");
const logger_1 = require("../helpers/logger");
const BasePage_1 = require("./BasePage");
class BooksPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.genreDropdown = () => this.page.locator("#genre");
        this.isbnInput = () => this.page.locator("#isbn");
        this.publicationDateInput = () => this.page.locator("#publicationDate");
        this.priceInput = () => this.page.locator("#price");
        this.submitButton = () => this.page.getByRole("button", { name: /submit/i });
    }
    async goto(baseUrl) {
        const cleanBaseUrl = baseUrl.replace(/\/$/, "");
        const booksUrl = `${cleanBaseUrl}/books`;
        (0, logger_1.log)(`Navigating to Books URL to add books: ${booksUrl}`, logger_1.LogType.INFO);
        await this.gotoWithOptions(booksUrl);
    }
    async gotoWithOptions(url) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded",
            timeout: 180000,
        });
    }
    async selectGenre(genre) {
        await this.genreDropdown().selectOption(genre);
    }
    async enterISBN(isbn) {
        await this.isbnInput().fill(isbn);
    }
    async enterPublicationDate(date) {
        await this.publicationDateInput().fill(date);
    }
    async enterPrice(price) {
        await this.priceInput().fill(price);
    }
    async updatePrice(price) {
        await this.page.getByLabel("Price:").fill(price);
    }
    async submitBookForm() {
        await this.submitButton().click();
    }
    async clickAddBook() {
        await this.clickButton("Add Book");
    }
    async enterTitle(title) {
        await this.page.getByLabel("Title:").fill(title);
    }
    async enterAuthor(author) {
        await this.page.getByRole("textbox", { name: "Author:" }).fill(author);
    }
    async clickSave() {
        await this.page
            .getByRole("button", { name: "Submit Add New Book Form" })
            .click();
    }
    async validateBookExists(title) {
        const bookTitleLocator = this.page.getByRole("cell", { name: title });
        await (0, test_1.expect)(bookTitleLocator).toBeVisible();
    }
    async clickEditForBook(title) {
        const bookRow = await this.searchRowForRequiredElement("tr", title);
        const editButton = bookRow.getByRole("button", { name: /edit/i });
        await (0, test_1.expect)(editButton).toBeVisible();
        await editButton.click();
        (0, logger_1.log)(`Book row found and updated '${title}'`, logger_1.LogType.INFO);
    }
    async enterIsbn(isbn) {
        await this.isbnInput().fill(isbn);
    }
    async clickDeleteForBook(title) {
        const bookRow = await this.searchRowForRequiredElement("tr", title);
        (0, logger_1.log)(`Book row found and deleted '${title}'`, logger_1.LogType.INFO);
        const deleteButton = bookRow.getByRole("button", { name: /delete/i });
        await deleteButton.click();
    }
    async validateBookNotExists(title) {
        const bookTitleLocator = this.page.getByRole("cell", { name: title });
        await (0, test_1.expect)(bookTitleLocator).not.toBeVisible();
    }
}
exports.BooksPage = BooksPage;
