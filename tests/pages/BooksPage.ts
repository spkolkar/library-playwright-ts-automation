import { Page } from '@playwright/test';
import { BasePage } from "./BasePage";
export class BooksPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}