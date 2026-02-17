import { test, expect } from '@playwright/test';
import { LoginPageSteps } from '../steps/loginPage-steps';
 const username: string| undefined = process.env.USER_NAME;
 const password : string| undefined = process.env.PASSWORD;
//  

test.describe('Login Page Tests', () => {
  test('Validate login page UI  Elements ', async ({ page }) => {
    const loginSteps = new LoginPageSteps(page);

    await loginSteps.navigateToLoginPage();
    await loginSteps.validateLoginPageUI();
  });

  test('Admin user login test', async ({ page }) => {
    const loginSteps = new LoginPageSteps(page);

    await loginSteps.navigateToLoginPage();
    await loginSteps.loginWithCredentials(username!, password!
    );
  });
});

// t//   await page.getByRole('textbox', { name: 'ISBN:' }).fill('tgyty');
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
