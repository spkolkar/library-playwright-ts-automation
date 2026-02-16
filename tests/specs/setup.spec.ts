import { test as setup } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";

setup("Setup test for the Login Page", async ({ page }) => {
  const baseUrl = process.env.BASE_URL ?? '';
  console.log("Base URL:", baseUrl);
  await new LoginPage(page).goto(baseUrl);

  //Take screenshot of the main screen before login
  await page.screenshot({ path: 'screenshots/LibraryMainScreen.png' , fullPage: true });

  //click the start testing button if it is visible
  const startBtn = page.getByRole('button', { name: 'Start Testing' });
  if (await startBtn.isVisible()) {
    await startBtn.click();
  }

   //Take screenshot of login screen
  await page.screenshot({ path: 'screenshots/LoginPageScreen.png' , fullPage: true });

});

