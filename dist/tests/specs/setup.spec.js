"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const logger_1 = require("../helpers/logger");
const LoginPage_1 = require("../pages/LoginPage");
(0, test_1.test)("Setup test for the Login Page", async ({ page }) => {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
        throw new Error("BASE_URL environment variable is not defined");
    }
    (0, logger_1.log)(`Base URL from environment variable: ${baseUrl}`, logger_1.LogType.INFO);
    await new LoginPage_1.LoginPage(page).goto(baseUrl);
    //Take screenshot of the main screen before login
    await page.screenshot({
        path: "screenshots/LibraryMainScreen.png",
        fullPage: true,
    });
    //click the start testing button if it is visible
    const startBtn = page.getByRole("button", { name: "Start Testing" });
    if (await startBtn.isVisible()) {
        await startBtn.click();
    }
    //Take screenshot of login screen
    await page.screenshot({
        path: "screenshots/LoginPageScreen.png",
        fullPage: true,
    });
});
