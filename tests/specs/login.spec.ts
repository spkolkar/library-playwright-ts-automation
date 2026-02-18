import { test, expect } from '@playwright/test';
import { LoginPageSteps } from '../steps/loginPage-steps';
const username: string | undefined = process.env.USER_NAME;
const password: string | undefined = process.env.PASSWORD;
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