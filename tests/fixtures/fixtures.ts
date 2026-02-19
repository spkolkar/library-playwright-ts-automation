import { test as base, type Page } from "@playwright/test";
import * as steps from "../steps/index";

type MyFixture = {
	forEachTest: void;
	loginPageSteps: steps.LoginPageSteps;
	booksPageSteps: steps.BooksPageSteps;
};

export const test = base.extend<MyFixture>({
	loginPageSteps: async ({ page }, use) => {
		await use(new steps.LoginPageSteps(page));
	},
	booksPageSteps: async ({ page }: { page: Page }, use) => {
		await use(new steps.BooksPageSteps(page));
	},
});
