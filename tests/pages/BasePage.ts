import { Page, expect } from '@playwright/test';

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async navigateTo(url: string) {
    await this.page.goto(url);
  }

  public async waitForNetworkIdle() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Generic method to click button by accessible name
   */
  public async clickButton(buttonName: string): Promise<void> {
    const button = this.page.getByRole('button', { name: buttonName });
    await expect(button).toBeVisible();
    //await page.getByRole('button', { name: 'Add Book' }).click();
    // await expect(button).toBeVisible();
    await button.click();
  }
}
