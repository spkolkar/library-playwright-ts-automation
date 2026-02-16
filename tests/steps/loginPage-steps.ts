import { LoginPage } from "../pages/LoginPage";
import {Page} from '@playwright/test';  

export class LoginPageSteps {
  loginPage: LoginPage;
  constructor(page: Page){
    this.loginPage = new LoginPage(page);
  }
}