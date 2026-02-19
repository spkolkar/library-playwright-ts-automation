"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const testData_1 = require("../helpers/testData");
const booksPage_steps_1 = require("../steps/booksPage-steps");
const loginPage_steps_1 = require("../steps/loginPage-steps");
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
test_1.test.describe("Books Management", () => {
    test_1.test.only("Admin user login and manage books", async ({ page }) => {
        // 🔐 Login First
        const loginSteps = new loginPage_steps_1.LoginPageSteps(page);
        await loginSteps.navigateToLoginPage();
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        await loginSteps.loginWithCredentials(username, password);
        const booksSteps = new booksPage_steps_1.BooksPageSteps(page);
        //Navigate to Books page
        await booksSteps.navigateToBooksPage();
        //Add new book to the Books List
        await booksSteps.addBook(testData_1.testBooks.validBook.title, testData_1.testBooks.validBook.author, testData_1.testBooks.validBook.genre, testData_1.testBooks.validBook.isbn, testData_1.testBooks.validBook.publicationDate, testData_1.testBooks.validBook.price);
        //Edit the existing book in the Books List
        await booksSteps.editBook(testData_1.testBooks.validBook.title, testData_1.testBooks.updatedBook.title);
        //Delete the existing book in the Books List
        await booksSteps.deleteBook(testData_1.testBooks.updatedBook.title);
    });
});
