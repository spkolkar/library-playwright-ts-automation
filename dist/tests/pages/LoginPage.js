"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const test_1 = require("@playwright/test");
const logger_1 = require("../helpers/logger");
class LoginPage {
    constructor(page) {
        this.page = page;
        // Header
        this.loginHeader = page.getByRole("heading", { name: "Login" });
        // Labels
        this.usernameLabel = page.locator('label[for="username"]');
        this.passwordLabel = page.locator('label[for="password"]');
        // Button
        this.loginButton = page.getByRole("button", { name: "Submit Login" });
        // this.loginButton = page.getByRole('button', { name: /log/i });
    }
    async goto(baseUrl) {
        //login page url should be baseUrl + /login
        const loginUrl = `${baseUrl.replace(/\/$/, "")}/login`;
        (0, logger_1.log)(`Navigating to login URL: ${loginUrl}`, logger_1.LogType.INFO);
        await this.gotoWithOptions(loginUrl);
    }
    async gotoWithOptions(url) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded",
            timeout: 180000,
        });
    }
    async validateLoginHeader(expectedText) {
        await (0, test_1.expect)(this.loginHeader).toHaveText(expectedText);
    }
    async validateUsernameLabel(expectedText) {
        await (0, test_1.expect)(this.usernameLabel).toHaveText(expectedText);
    }
    async validatePasswordLabel(expectedText) {
        await (0, test_1.expect)(this.passwordLabel).toHaveText(expectedText);
    }
    async validateLoginButtonName(expectedText) {
        const buttonText = await this.loginButton.innerText();
        await (0, test_1.expect)(buttonText).toBe(expectedText);
    }
    async enterUsername(username) {
        await this.usernameLabel.fill(username);
    }
    async enterPassword(password) {
        await this.passwordLabel.fill(password);
    }
    async clickLogin() {
        await this.loginButton.click();
    }
}
exports.LoginPage = LoginPage;
