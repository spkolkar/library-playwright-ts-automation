/**
 * Navigate to a URL with custom options (waitUntil: 'domcontentloaded', timeout: 180000)
 */
public
async;
goto(url: string)
: Promise<void>
{
	await this.page.goto(url, {
		waitUntil: "domcontentloaded",
		timeout: 180000,
	});
}

import { expect, type Locator, type Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export class BasePage {
	page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	public async validateURL(expected: string | RegExp): Promise<void> {
		await expect(this.page).toHaveURL(expected);
	}

	public async navigateTo(url: string) {
		await this.page.goto(url);
	}

	public async waitForNetworkIdle() {
		await this.page.waitForLoadState("networkidle");
	}

	/**
	 * Generic screenshot function
	 */
	public async takeScreenshot(
		fileName: string,
		fullPage: boolean = true,
	): Promise<void> {
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
	public async clickButton(buttonName: string): Promise<void> {
		const button = this.page.getByRole("button", {
			name: new RegExp(buttonName, "i"),
		});
		await expect(button).toBeVisible({ timeout: 10000 });
		await button.click();
	}

	/**
	 * Generic function to find a row in a table by text
	 * @param rowLocator - locator for table rows (e.g. 'tr')
	 * @param searchText - text to search inside row
	 * @returns Locator of matched row
	 */
	public async searchRowForRequiredElement(
		rowLocator: string,
		searchText: string,
	): Promise<Locator> {
		const row = this.page.locator(rowLocator, {
			hasText: searchText,
		});

		await expect(row).toBeVisible({ timeout: 10000 });

		return row;
	}

	/**
	 * Generic header validation function
	 * @param expectedText - Expected heading text
	 * @param level - Heading level (1 = h1, 2 = h2, etc.)
	 */
	public async validateHeader(
		expectedText: string,
		level: number = 1,
	): Promise<void> {
		const header = this.page.getByRole("heading", {
			name: expectedText,
			level,
		});

		await expect(header).toBeVisible({ timeout: 10000 });
	}
}
