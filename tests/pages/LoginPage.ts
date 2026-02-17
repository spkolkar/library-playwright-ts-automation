import { Page, Locator,expect } from '@playwright/test';
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

    // Header (role-based)
    this.loginHeader = page.getByRole('heading', { name: 'Login' });

    // Labels (strict by "for" attribute)
    this.usernameLabel = page.locator('label[for="username"]');
    this.passwordLabel = page.locator('label[for="password"]');

    // Button
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
  // constructor(page: Page) {
  //   this.page = page;

  // this.usernameLabel = page.getByRole('heading', { name: 'Username' });
  // this.passwordLabel = page.getByRole('heading', { name: 'Password' });
  // this.loginButton = page.getByRole('button', { name: 'Submit login' });
  // this.loginHeader = page.getByRole('heading', { name: /Login/i });
  // }

  public async goto(): Promise<void> {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
      throw new Error('BASE_URL environment variable is not defined');
    }
    //login page url should be baseUrl + /login
    const loginUrl = `${baseUrl.replace(/\/$/, '')}/login`;
    console.log(`Navigating to ${loginUrl}`);

    await this.page.goto(loginUrl);
  }

  public async validateLoginHeader(expectedText: string): Promise<void> {
    await expect(this.loginHeader).toHaveText(expectedText);
  }
  // public async validateLabelText(
  //   locator: Locator,
  //   expectedText: string
  // ): Promise<void> {
  //   await expect(locator).toHaveText(expectedText);
  // }

public async validateUsernameLabel(expectedText: string): Promise<void> {
    await expect(this.usernameLabel).toHaveText(expectedText);
  }

  public async validatePasswordLabel(expectedText: string): Promise<void> {
    await expect(this.passwordLabel).toHaveText(expectedText);
  }

  // public async validateLoginHeader(expectedText: string): Promise<void> {
  //   await this.validateLabelText(this.loginHeader, expectedText);
  // }

  // public async validateLoginPageLoaded(): Promise<void> {
  //   await expect(this.loginHeader).toHaveText(expectedText);
  //   await expect(this.usernameLabel).toBeVisible();
  //   await expect(this.passwordLabel).toBeVisible();
  //   await expect(this.loginButton).toBeVisible();
  // }

  public async validateLoginButtonName(expectedText: string): Promise<void> {
    await expect(this.loginButton).toHaveText(expectedText);
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

// export class LoginPage extends BasePage {
//   public usernameInput: Locator;
//   public passwordInput: Locator;
//   public loginButton: Locator;

//   constructor(page: Page) {
//     super(page);
//     this.usernameInput = this.page.getByRole('textbox', { name: 'Enter your username' });
//     this.passwordInput = this.page.getByRole('textbox', { name: 'Enter your password' });
//     this.loginButton = this.page.getByRole('button', { name: 'Submit login' });
//   }
// /**
//  * 
//  * @param url : pass the url to which user wants to navigate
//  */
//   public async goto(url: string) {
//     await this.page.goto(url);
//   }

//   // public async login(username: string, password: string) {
  
//   // }

//   public async validateLoginHeaderDisplayed(loginHeader: string) {
//     const loginHeaderElement = await this.getDisplayedElementBySelector(LOGIN_HEADER);
//     log('This is the displayed login header ${loginHeaderElement}',LogType.INFO);
//     await expect(loginHeaderElement).toBeEqual(loginHeader);
//   }
  
// }