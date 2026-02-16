import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  public usernameInput: Locator;
  public passwordInput: Locator;
  public loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.getByRole('textbox', { name: 'Enter your username' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Enter your password' });
    this.loginButton = this.page.getByRole('button', { name: 'Submit login' });
  }
/**
 * 
 * @param url : pass the url to which user wants to navigate
 */
  public async goto(url: string) {
    await this.page.goto(url);
  }
/**
 * 
 * @param username : pass the valid  user name
 * @param password : pass the valid password
 */
  public async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    
  //Take screenshot of login screen
  await this.page.screenshot({ path: 'screenshots/LoginPageFilled.png' , fullPage: true });
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}