import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test.describe('Library System Tests', () => {
  test.beforeAll(async ({ page }) => {
    await page.goto('https://frontendui-librarysystem.onrender.com/');
    await page.getByRole('button', { name: 'Start Testing' }).click();
  });

  
test('Valid Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto(process.env.BASE_URL);
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  if (!username || !password) {
    throw new Error('Missing USERNAME or PASSWORD in environment variables');
  }
  await loginPage.login(username, password);

  // await expect(page).toHaveURL('books');
  // await page.goto('https://frontendui-librarysystem.onrender.com/');
  // await page.getByRole('button', { name: 'Start Testing' }).click();
  // await page.goto('https://frontendui-librarysystem.onrender.com/login');

  // await page.getByTestId('login-heading').isVisible();

  // await page.getByRole('textbox', { name: 'Enter your username' }).click();
  // await page.getByRole('textbox', { name: 'Enter your username' }).fill('admin');
  // await page.getByRole('textbox', { name: 'Enter your password' }).fill('admin');
  // await page.getByRole('button', { name: 'Submit login' }).click();

});
  
});




test('Add Book Test', async ({ page }) => {

   
  await page.goto('https://frontendui-librarysystem.onrender.com/books');
  await page.getByRole('button', { name: 'Add Book' }).click();
  
  await page.getByRole('textbox', { name: 'Title:' }).fill('mybook');

  await page.getByRole('textbox', { name: 'Author:' }).fill('tester');
  await page.getByLabel('Genre:').selectOption('Fiction');
 
  await page.getByRole('textbox', { name: 'ISBN:' }).fill('tgyty');
  await page.getByRole('textbox', { name: 'Publication Date:' }).fill('2026-02-13');
  await page.getByRole('textbox', { name: 'Price:' }).fill('10');
  await page.getByRole('button', { name: 'Submit Add New Book Form' }).click();
  // await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  // await page.getByRole('spinbutton').click();
  // await page.getByRole('spinbutton').fill('10.99');
  // await page.getByRole('button', { name: 'Save Changes' }).click();
  // await page.getByRole('cell', { name: '£10.99' }).click();
  // await page.getByText('Welcome, Admin!Log Out').click();
  // await page.getByRole('button', { name: 'Log Out' }).click();
});
