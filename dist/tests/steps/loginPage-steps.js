"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPageSteps = void 0;
const testData_1 = require("../helpers/testData");
const LoginPage_1 = require("../pages/LoginPage");
class LoginPageSteps {
    constructor(page) {
        this.loginPage = new LoginPage_1.LoginPage(page);
    }
    async validateLoginLabels() {
        await this.loginPage.validateUsernameLabel(testData_1.loginPageLabelNames.usernameLabel);
        await this.loginPage.validatePasswordLabel(testData_1.loginPageLabelNames.passwordLabel);
        await this.loginPage.validateLoginHeader(testData_1.loginPageLabelNames.loginHeader);
    }
    async navigateToLoginPage() {
        await this.loginPage.goto(process.env.BASE_URL);
    }
    async validateLoginPageUI() {
        await this.loginPage.validateLoginHeader("Login");
        await this.loginPage.validateUsernameLabel("Username");
        await this.loginPage.validatePasswordLabel("Password");
        await this.loginPage.validateLoginButtonName("Log In");
    }
    async loginWithCredentials(username, password) {
        await this.loginPage.enterUsername(username);
        await this.loginPage.enterPassword(password);
        await this.loginPage.clickLogin();
    }
}
exports.LoginPageSteps = LoginPageSteps;
