import { Page, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';


export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

 public async validateURL(expected: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(expected);
  }


  public async navigateTo(url: string) {
    await this.page.goto(url);
  }

  public async waitForNetworkIdle() {
    await this.page.waitForLoadState('networkidle');
  }

   /**
   * Generic screenshot function
   */
   public async takeScreenshot(
    fileName: string,
    fullPage: boolean = true
  ): Promise<void> {

    const screenshotsDir = path.join(process.cwd(), 'screenshots');

    // Create folder if it doesn't exist
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir);
    }

    const filePath = path.join(
      screenshotsDir,
      `${fileName}-${Date.now()}.png`
    );

    await this.page.screenshot({
      path: filePath,
      fullPage
    });
  }


  /**
   * Generic method to click button by accessible name
   */
  public async clickButton(buttonName: string): Promise<void> {
    // const button = this.page.getByRole('button', { name: buttonName });
    const button = this.page.getByRole('button', {
      name: new RegExp(buttonName, 'i'),
    });
    await expect(button).toBeVisible({ timeout: 10000 });
    //await page.getByRole('button', { name: 'Add Book' }).click();
    // await expect(button).toBeVisible();
    await button.click();
  }
}
