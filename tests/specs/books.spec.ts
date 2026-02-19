import { test } from "@playwright/test";
import { testBooks } from "../helpers/testData";
import { BooksPageSteps } from "../steps/booksPage-steps";
import { LoginPageSteps } from "../steps/loginPage-steps";

const username: string | undefined = process.env.USER_NAME;
const password: string | undefined = process.env.PASSWORD;

test.describe("Books Management", () => {
	test.only("Admin user login and manage books", async ({ page }) => {
		// Login First
		const loginSteps = new LoginPageSteps(page);
		await loginSteps.navigateToLoginPage();
		if (username && password) {
			await loginSteps.loginWithCredentials(username, password);
		} else {
			throw new Error("Username or password is not defined in environment variables");
		}

		const booksSteps = new BooksPageSteps(page);
		//Navigate to Books page
		await booksSteps.navigateToBooksPage();
		//Add new book to the Books List
		await booksSteps.addBook(
			testBooks.validBook.title,
			testBooks.validBook.author,
			testBooks.validBook.genre,
			testBooks.validBook.isbn,
			testBooks.validBook.publicationDate,
			testBooks.validBook.price,
		);

		//Edit the existing book in the Books List
		// await booksSteps.editBook(
		//   testBooks.validBook.title,
		//   testBooks.updatedBook.title,
		// );

		//Delete the existing book in the Books List
		await booksSteps.deleteBook(testBooks.validBook.title);
	});
});
