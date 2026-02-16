import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { log } from 'node:console';


test.describe('Library System Tests', () => {
  
  
test('Valid Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const baseUrl = process.env.BASE_URL;
  const username = process.env.USER_NAME;
  const password = process.env.PASSWORD;
  console.log("Name",username);
  console.log("password",password);

  if (!baseUrl || !username || !password) {
    throw new Error('Missing BASE_URL, USERNAME or PASSWORD in environment variables');
  }

  const loginUrl = `${baseUrl.replace(/\/$/, '')}/login`;
  console.log(`Navigating to ${loginUrl}`);
  await loginPage.goto(loginUrl);

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
 
  await loginPage.login(username, password);

  // after login we should no longer be on the /login page
  // await expect(page).not.toHaveURL(/\/login$/);
 
});
  
});




// test('Add Book Test', async ({ page }) => {

   
//   await page.goto('https://frontendui-librarysystem.onrender.com/books');
//   await page.getByRole('button', { name: 'Add Book' }).click();
  
//   await page.getByRole('textbox', { name: 'Title:' }).fill('mybook');

//   await page.getByRole('textbox', { name: 'Author:' }).fill('tester');
//   await page.getByLabel('Genre:').selectOption('Fiction');
 
//   await page.getByRole('textbox', { name: 'ISBN:' }).fill('tgyty');
//   await page.getByRole('textbox', { name: 'Publication Date:' }).fill('2026-02-13');
//   await page.getByRole('textbox', { name: 'Price:' }).fill('10');
//   await page.getByRole('button', { name: 'Submit Add New Book Form' }).click();
  // await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  // await page.getByRole('spinbutton').click();
  // await page.getByRole('spinbutton').fill('10.99');
  // await page.getByRole('button', { name: 'Save Changes' }).click();
  // await page.getByRole('cell', { name: '£10.99' }).click();
  // await page.getByText('Welcome, Admin!Log Out').click();
  // await page.getByRole('button', { name: 'Log Out' }).click();
// });
