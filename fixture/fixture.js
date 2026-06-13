import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

export const test = base.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await homePage.visit();
    await use(homePage);
  },
});

export { expect };
