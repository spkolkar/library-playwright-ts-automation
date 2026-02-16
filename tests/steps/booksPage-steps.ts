import { BooksPage } from "../pages/BooksPage";
import {Page} from '@playwright/test';

export class BooksPageSteps{
  booksPage: BooksPage;
  constructor(page: Page){
    this.booksPage = new BooksPage(page);
  }
}