// import { test, expect, Page, Locator } from '@playwright/test';
// // Utility function to find a book row by title using the specific td class
// async function findBookRowByTitle(page: Page, title: string): Promise<Locator> {
//   // Find all td elements with the given class
//   const tds = page.locator('td.border-b.border-gray-300.p-4.text-left');
//   const count = await tds.count();
//   for (let i = 0; i < count; i++) {
//     const td = tds.nth(i);
//     const text = await td.textContent();
//     if (text && text.trim() === title) {
//       // Return the parent row (tr) of the matching td
//       return td.locator('xpath=ancestor::tr');
//     }
//   }
//   throw new Error(`Book with title '${title}' not found.`);
// }
// import { LoginPage } from '../pages/LoginPage';
// import { testBooks } from '../helpers/testData';


// test.describe('Library System - Adding Book', () => {



// test('Add Valid Book Test', async ({ page }) => {
//  const loginPage = new LoginPage(page);

//   const baseUrl = process.env.BASE_URL;
//   const username = process.env.USER_NAME;
//   const password = process.env.PASSWORD;
//   const book = testBooks.validBook;

//   if (!baseUrl || !username || !password) {
//     throw new Error('Missing BASE_URL, USERNAME or PASSWORD in environment variables');
//   }

//   // Navigate to the login page and perform login
//   const loginUrl = `${baseUrl.replace(/\/$/, '')}/login`;
//   await loginPage.goto(loginUrl);
//   await loginPage.login(username, password);

//   //after login check whether we are on the books page
//   await expect(page).toHaveURL('books');

//   await page.getByRole('heading', { name: 'Book List' }).waitFor();

//   // Click the "Add Book" button
//    await page.getByRole('button', { name: 'Add Book' }).click();
//   // Fill in the book details
//   await page.getByRole('textbox', { name: 'Title:' }).fill(book.title);
//   await page.getByRole('textbox', { name: 'Author:' }).fill(book.author);
//   await page.getByLabel('Genre:').selectOption(book.genre);
//   await page.getByRole('textbox', { name: 'ISBN:' }).fill(book.isbn);
//   await page.getByRole('textbox', { name: 'Publication Date:' }).fill(book.year);
//   await page.getByRole('textbox', { name: 'Price:' }).fill(book.price);
//      //Take screenshot of Add Book screen
//   await page.screenshot({ path: 'screenshots/AddBookFormFilledScreen.png' , fullPage: true });
//   await page.getByRole('button', { name: 'Submit Add New Book Form' }).click();
//        //Take screenshot of Book added to Book List screen
//   await page.screenshot({ path: 'screenshots/BooksListwithNewlyAddedBookScreen.png' , fullPage: true });

//       // Test: Search for the added book, edit price, and verify
//       test('Search and Edit Book Price', async ({ page, booksPageSteps }) => {
//         // const loginPage = new LoginPage(page);
//         // const baseUrl = process.env.BASE_URL;
//         // const username = process.env.USER_NAME;
//         // const password = process.env.PASSWORD;
//         // const book = testBooks.validBook;

//         // if (!baseUrl || !username || !password) {
//         //   throw new Error('Missing BASE_URL, USERNAME or PASSWORD in environment variables');
//         // }

//         // // Login
//         // const loginUrl = `${baseUrl.replace(/\/$/, '')}/login`;
//         // await loginPage.goto(loginUrl);
//         // await loginPage.login(username, password);
//         // await expect(page).toHaveURL('books');
//         await page.getByRole('heading', { name: 'Book List' }).waitFor();

//         // Search for the book
//         await page.getByRole('textbox', { name: 'Search:' }).fill(book.title);
//          //Take screenshot of Book to search which was added
//   await page.screenshot({ path: 'screenshots/BooksListSearchScreen.png' , fullPage: true });

//         await page.getByRole('button', { name: 'Search' }).click();

//         // Click Edit on the found book row
//         const row = await findBookRowByTitle(page, book.title);
//         await row.getByRole('button', { name: 'Edit' }).click();
//         //Take screenshot of Book in Edit Mode
//   await page.screenshot({ path: 'screenshots/OpenTheBookFortheEditScreen.png' , fullPage: true });

//         // Update price to 99.90
//         await page.getByRole('textbox', { name: 'Price:' }).fill('99.90');
//         //Take screenshot of Book in Edit Mode with updated price
//   await page.screenshot({ path: 'screenshots/OpenTheBookFortheEditScreen.png' , fullPage: true });
//         await page.getByRole('button', { name: 'Save Changes' }).click();

//         // Assert price updated
//         await expect(row.getByRole('cell', { name: '£99.90' })).toBeVisible();

//   await page.screenshot({ path: 'screenshots/ModifiedBookPriceInTheBookListScreen.png' , fullPage: true });
//       });
//   // await page.getByRole('button', { name: 'Edit' }).nth(3).click();
//   // await page.getByRole('spinbutton').click();
//   // await page.getByRole('spinbutton').fill('10.99');
//   // await page.getByRole('button', { name: 'Save Changes' }).click();
//   // await page.getByRole('cell', { name: '£10.99' }).click();


// /*import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://frontendui-librarysystem.onrender.com/login');
//   await page.getByRole('textbox', { name: 'Enter your username' }).click();
//   await page.getByRole('textbox', { name: 'Enter your username' }).fill('admin');
//   await page.getByRole('textbox', { name: 'Enter your password' }).click();
//   await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin');
//   await page.getByRole('button', { name: 'Submit login' }).click();
//   await page.getByRole('heading', { name: 'Book List' }).click();
//   await page.getByRole('button', { name: 'Add Book' }).click();
//   await page.getByRole('textbox', { name: 'Title:' }).click();
//   await page.getByRole('textbox', { name: 'Title:' }).fill('test');
//   await page.getByRole('textbox', { name: 'Title:' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Author:' }).fill('test');
//   await page.getByRole('textbox', { name: 'Author:' }).press('Tab');
//   await page.getByLabel('Genre:').selectOption('Fiction');
//   await page.getByRole('textbox', { name: 'ISBN:' }).click();
//   await page.getByRole('textbox', { name: 'ISBN:' }).fill('88880880');
//   await page.getByRole('textbox', { name: 'Publication Date:' }).fill('2220-01-01');
//   await page.getByRole('textbox', { name: 'Price:' }).click();
//   await page.getByRole('textbox', { name: 'Price:' }).click();
//   await page.getByRole('textbox', { name: 'Price:' }).fill('87.99');
//   await page.getByRole('button', { name: 'Submit Add New Book Form' }).click();
//   await page.locator('body').press('ControlOrMeta+-');
//   await page.locator('body').press('ControlOrMeta+-');
//   await page.locator('body').press('ControlOrMeta+-');
//   await page.getByText('Book ListAdd').click();
//   await page.locator('body').press('ControlOrMeta+-');
//   await page.locator('body').press('ControlOrMeta+-');
//   await page.getByText('PreviousPage 1 of 1Next').dblclick();
// }); */
// //


// });

// });




// // test('Add Book Test', async ({ page }) => {


// //   await page.goto('https://frontendui-librarysystem.onrender.com/books');
// //   await page.getByText('Welcome, Admin!Log Out').click();
//   // await page.getByRole('button', { name: 'Log Out' }).click();
// // });import { test } from '@playwright/test';
import { LoginPageSteps } from '../steps/loginPage-steps';
import { BooksPageSteps } from '../steps/booksPage-steps';
import { test } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { testBooks } from '../helpers/testData';
const username: string | undefined = process.env.USER_NAME;
const password: string | undefined = process.env.PASSWORD;

test.describe('Books Management', () => {

  test('Admin user login and manage books', async ({ page }) => {

    // 🔐 Login First
    const loginSteps = new LoginPageSteps(page);
    await loginSteps.navigateToLoginPage();
    await loginSteps.loginWithCredentials(username!, password!);

    const booksSteps = new BooksPageSteps(page);

    await booksSteps.navigateToBooksPage();
    // await booksSteps.openAddBookForm();

    await booksSteps.addBook(testBooks.validBook.title, testBooks.validBook.author, testBooks.validBook.genre, testBooks.validBook.isbn, testBooks.validBook.publicationDate, testBooks.validBook.price);

    // await booksSteps.editBook(testBooks.validBook.title, testBooks.updatedBook.title);

    await booksSteps.deleteBook(testBooks.validBook.title);
  });

});
