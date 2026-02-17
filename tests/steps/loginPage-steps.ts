
import {Page} from '@playwright/test';  
import { LoginPage} from "../pages/LoginPage"; 
import { loginPageLabelNames } from '../helpers/testData';
export class LoginPageSteps {
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

   public async validateLoginLabels(): Promise<void> {
    await this.loginPage.validateUsernameLabel(loginPageLabelNames.usernameLabel);
    await this.loginPage.validatePasswordLabel(loginPageLabelNames.passwordLabel);
    await this.loginPage.validateLoginHeader(loginPageLabelNames.loginHeader);
  }
  
  public async navigateToLoginPage(): Promise<void> {
    await this.loginPage.goto();
  }

  public async validateLoginPageUI(): Promise<void> {
    await this.loginPage.validateLoginHeader('Login');
    await this.loginPage.validateUsernameLabel('Username');
    await this.loginPage.validatePasswordLabel('Password');
    await this.loginPage.validateLoginButtonName('Login');
  }

  public async loginWithCredentials(username: string, password: string): Promise<void> {
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLogin();
  }
}
