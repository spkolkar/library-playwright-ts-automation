import { test as setup, expect, Page } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";

setup("Setup test for the Login Page", async ({ page }) => {
  const baseUrl = process.env.BASE_URL ?? '';
  await new LoginPage(page).goto(baseUrl);

  await page.screenshot({ path: 'screenshots/LibraryMainScreen.png' , fullPage: true });

  //click the start testing button if it is visible
  const startBtn = page.getByRole('button', { name: 'Start Testing' });
  if (await startBtn.isVisible()) {
    await startBtn.click();
  }
});

