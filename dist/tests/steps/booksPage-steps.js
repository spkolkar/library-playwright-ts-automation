"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksPageSteps = void 0;
const testData_1 = require("../helpers/testData");
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
    async addBook(_title, _author, _genre, _isbn, _publicationDate, _price) {
        await this.booksPage.clickAddBook();
        await this.booksPage.enterTitle(testData_1.testBooks.validBook.title);
        await this.booksPage.enterAuthor(testData_1.testBooks.validBook.author);
        await this.booksPage.selectGenre(testData_1.testBooks.validBook.genre);
        await this.booksPage.enterIsbn(testData_1.testBooks.validBook.isbn);
        await this.booksPage.enterPublicationDate(testData_1.testBooks.validBook.publicationDate);
        await this.booksPage.enterPrice(testData_1.testBooks.validBook.price);
        await this.booksPage.takeScreenshot("BookedAddFilledFormScreen");
        await this.booksPage.clickSave();
        await this.booksPage.validateBookExists(testData_1.testBooks.validBook.title);
        await this.booksPage.takeScreenshot("BookedAddedExistsScreen");
    }
    /*
     * Edit existing book
     */
    async editBook(oldTitle, newTitle) {
        //click on Edit button for the specific book
        await this.booksPage.clickEditForBook(oldTitle);
        await this.booksPage.validateHeader("Edit book details", 1);
        await this.booksPage.takeScreenshot("BookSearchOpenedforEditScreen");
        await this.booksPage.enterTitle(newTitle);
        await this.booksPage.takeScreenshot("BookEditedWithNewTitleScreen");
        await this.booksPage.clickSave();
        await this.booksPage.validateBookExists(newTitle);
        await this.booksPage.takeScreenshot("BookEditUpdatedIntheBooksListScreen");
    }
    /**
     * Delete book
     */
    async deleteBook(title) {
        await this.booksPage.clickDeleteForBook(title);
        await this.booksPage.takeScreenshot("BookDeletedFromTheBookListScreen");
        await this.booksPage.validateBookNotExists(title);
    }
    async verifyBooksPageLoaded() {
        await this.booksPage.validateHeader("Books", 1);
    }
}
exports.BooksPageSteps = BooksPageSteps;
