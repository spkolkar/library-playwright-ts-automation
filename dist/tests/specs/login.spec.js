"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const loginPage_steps_1 = require("../steps/loginPage-steps");
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
//
test_1.test.describe("Login Page Tests", () => {
    (0, test_1.test)("Validate login page UI  Elements ", async ({ page }) => {
        const loginSteps = new loginPage_steps_1.LoginPageSteps(page);
        await loginSteps.navigateToLoginPage();
        await loginSteps.validateLoginPageUI();
    });
    (0, test_1.test)("Admin user login test", async ({ page }) => {
        const loginSteps = new loginPage_steps_1.LoginPageSteps(page);
        await loginSteps.navigateToLoginPage();
        await loginSteps.loginWithCredentials(username, password);
    });
});
