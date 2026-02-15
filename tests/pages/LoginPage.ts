// import { Page, Locator } from "@playwright/test";  
// import { BasePage } from "./BasePage";

// export class LoginPage extends BasePage {
//   static goto(BASE_URL: string | undefined) {
//     throw new Error('Method not implemented.');
//   }
//   readonly usernameInput: Locator;
//   readonly passwordInput: Locator;
//   readonly loginButton: Locator;

//   constructor(page: Page) {
//     super(page);
//     this.usernameInput = page.getByRole('textbox', { name: 'Enter your username' });
//     this.passwordInput = page.getByRole('textbox', { name: 'Enter your password' });
//     this.loginButton = page.getByRole('button', { name: 'Submit login' });
//   }
//   async goto(BASE_URL: string) {
//     await this.page.goto(BASE_URL);
//   } 
//   async login(username: string, password:string) {
//     await this.usernameInput.fill(username);
//     await this.passwordInput.fill(password);
//     await this.loginButton.click();
//   }
// }

import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  static async goto(page: Page, BASE_URL?: string) {
    const target = BASE_URL ?? process.env.BASE_URL ?? '';
    await page.goto(target);
  }
  constructor(page: Page) {
    super(page);
  }

 public async goto(BASE_URL: string) {
    await this.page.goto(BASE_URL);
  }
  
}