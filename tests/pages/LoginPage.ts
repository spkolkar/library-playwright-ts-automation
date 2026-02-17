import { Page, Locator, expect } from '@playwright/test';
import { log, LogType } from '../helpers/logger';
export class LoginPage {
  readonly page: Page;

  // Locators - Header
  readonly loginHeader: Locator;

  //Locator - labels
  readonly usernameLabel: Locator;
  readonly passwordLabel: Locator;

  //Locator - login button
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Header
    this.loginHeader = page.getByRole('heading', { name: 'Login' });

    // Labels
    this.usernameLabel = page.locator('label[for="username"]');
    this.passwordLabel = page.locator('label[for="password"]');

    // Button
    this.loginButton = page.getByRole('button', { name: 'Submit Login' });
    // this.loginButton = page.getByRole('button', { name: /log/i });

  }

  public async goto(): Promise<void> {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
      throw new Error('BASE_URL environment variable is not defined');
    }
    //login page url should be baseUrl + /login
    const loginUrl = `${baseUrl.replace(/\/$/, '')}/login`;
    log(`Navigating to login URL: ${loginUrl}`, LogType.INFO);
    // console.log(`Navigating to ${loginUrl}`);

    await this.page.goto(loginUrl);
  }

  public async validateLoginHeader(expectedText: string): Promise<void> {
    await expect(this.loginHeader).toHaveText(expectedText);
  }

  public async validateUsernameLabel(expectedText: string): Promise<void> {
    await expect(this.usernameLabel).toHaveText(expectedText);
  }

  public async validatePasswordLabel(expectedText: string): Promise<void> {
    await expect(this.passwordLabel).toHaveText(expectedText);
  }

  public async validateLoginButtonName(expectedText: string): Promise<void> {
    const buttonText = await this.loginButton.innerText();
    await expect(buttonText).toBe(expectedText);
  }

  public async enterUsername(username: string): Promise<void> {
    await this.usernameLabel.fill(username);
  }

  public async enterPassword(password: string): Promise<void> {
    await this.passwordLabel.fill(password);
  }

  public async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }
}