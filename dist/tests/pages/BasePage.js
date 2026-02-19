"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const test_1 = require("@playwright/test");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class BasePage {
    constructor(page) {
        this.page = page;
    }
    /**
     * Navigate to a URL with custom options (waitUntil: 'domcontentloaded', timeout: 180000)
     */
    async goto(url) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded",
            timeout: 180000,
        });
    }
    async validateURL(expected) {
        await (0, test_1.expect)(this.page).toHaveURL(expected);
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async waitForNetworkIdle() {
        await this.page.waitForLoadState("networkidle");
    }
    /**
     * Generic screenshot function
     */
    async takeScreenshot(fileName, fullPage = true) {
        const screenshotsDir = path.join(process.cwd(), "screenshots");
        // Create folder if it doesn't exist
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir);
        }
        const filePath = path.join(screenshotsDir, `${fileName}_${Date.now()}.png`);
        await this.page.screenshot({
            path: filePath,
            fullPage,
        });
    }
    /**
     * Generic method to click button by accessible name
     */
    async clickButton(buttonName) {
        const button = this.page.getByRole("button", {
            name: new RegExp(buttonName, "i"),
        });
        await (0, test_1.expect)(button).toBeVisible({ timeout: 10000 });
        await button.click();
    }
    /**
     * Generic function to find a row in a table by text
     * @param rowLocator - locator for table rows (e.g. 'tr')
     * @param searchText - text to search inside row
     * @returns Locator of matched row
     */
    async searchRowForRequiredElement(rowLocator, searchText) {
        const row = this.page.locator(rowLocator, {
            hasText: searchText,
        });
        await (0, test_1.expect)(row).toBeVisible({ timeout: 10000 });
        return row;
    }
    /**
     * Generic header validation function
     * @param expectedText - Expected heading text
     * @param level - Heading level (1 = h1, 2 = h2, etc.)
     */
    async validateHeader(expectedText, level = 1) {
        const header = this.page.getByRole("heading", {
            name: expectedText,
            level,
        });
        await (0, test_1.expect)(header).toBeVisible({ timeout: 10000 });
    }
}
exports.BasePage = BasePage;
