"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const loginPage_steps_1 = require("../steps/loginPage-steps");
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
//  
test_1.test.describe('Login Page Tests', () => {
    (0, test_1.test)('Validate login page UI  Elements ', async ({ page }) => {
        const loginSteps = new loginPage_steps_1.LoginPageSteps(page);
        await loginSteps.navigateToLoginPage();
        await loginSteps.validateLoginPageUI();
    });
    (0, test_1.test)('Admin user login test', async ({ page }) => {
        const loginSteps = new loginPage_steps_1.LoginPageSteps(page);
        await loginSteps.navigateToLoginPage();
        await loginSteps.loginWithCredentials(username, password);
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
