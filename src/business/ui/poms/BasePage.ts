import { expect, type Locator, type Page } from "@playwright/test";

const basePageLocators = {
  navMenu: '//nav[@aria-label="Main"]',
};

export class BasePage {
  protected page: Page;
  protected url = "";

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    await this.page.goto(this.url);
  }
  async getTitle(): Promise<string> {
    return await this.page.title();
  }
  async expectTitleToBe(expectedTitle: string): Promise<void> {
    await expect(this.page).toHaveTitle(expectedTitle);
  }
  async expectURLToBe(expectedURL: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedURL);
  }
  getNavMenuOption(optionName: string): Locator {
    return this.navMenu.getByText(optionName);
  }
  async selectTechnologyOption(
    langName: "Node.js" | "Python" | "Java" | ".NET"
  ): Promise<void> {
    await this.navMenu.getByRole("button", {
      name: "Node.js",
    }).click();
    await this.navMenu.locator(`//li/a[text()="${langName}"]`).click();
  }

  get navMenu(): Locator {
    return this.page.locator(basePageLocators.navMenu);
  }
}

export default BasePage;
