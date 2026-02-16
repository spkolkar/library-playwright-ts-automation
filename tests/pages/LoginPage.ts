import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPageSteps } from '../steps';

const USERNAME_TEXTFIELD ='[id="username"]';
const PASSWORD_TEXTFIELD ='[id="password"]';
const LOGIN_BUTTON ='[id="loginButton"]';
const LOGIN_HEADER ='[id="login-heading"]';

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
}