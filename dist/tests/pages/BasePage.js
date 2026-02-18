"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const test_1 = require("@playwright/test");
class BasePage {
    constructor(page) {
        this.page = page;
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async waitForNetworkIdle() {
        await this.page.waitForLoadState('networkidle');
    }
    /**
     * Generic method to click button by accessible name
     */
    async clickButton(buttonName) {
        const button = this.page.getByRole('button', { name: buttonName });
        await (0, test_1.expect)(button).toBeVisible();
        //await page.getByRole('button', { name: 'Add Book' }).click();
        // await expect(button).toBeVisible();
        await button.click();
    }
}
exports.BasePage = BasePage;
