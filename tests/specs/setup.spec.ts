import { test as setup } from "@playwright/test";
import { log, LogType } from '../helpers/logger';
import { LoginPage } from "../pages/LoginPage";


setup("Setup test for the Login Page", async ({ page }) => {
  const baseUrl = process.env.BASE_URL;
  if (!baseUrl) {
    throw new Error('BASE_URL environment variable is not defined');
  }

  log(`Base URL from environment variable: ${baseUrl}`, LogType.INFO);
  await new LoginPage(page).goto(baseUrl);

  //Take screenshot of the main screen before login
  await page.screenshot({ path: 'screenshots/LibraryMainScreen.png', fullPage: true });

  //click the start testing button if it is visible
  const startBtn = page.getByRole('button', { name: 'Start Testing' });
  if (await startBtn.isVisible()) {
    await startBtn.click();
  }

  //Take screenshot of login screen
  await page.screenshot({ path: 'screenshots/LoginPageScreen.png', fullPage: true });

});

