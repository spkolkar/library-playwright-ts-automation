import * as steps from '../steps/index';
import { type Page, test as base } from '@playwright/test';

type MyFixture = {
  forEachTest:void;
  loginPageSteps: steps.LoginPageSteps;
  booksPageSteps: steps.BooksPageSteps;
}

export const test = base.extend<MyFixture>({
  
  loginPageSteps: async ({ page }, use) => {
    await use(new steps.LoginPageSteps(page));
  },
  booksPageSteps: async ({ page }: { page: Page }, use) => {
    await use(new steps.BooksPageSteps(page) );
  }
});