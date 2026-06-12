import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

export const test = base.extend({
  authenticatsimedPage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    // Fazer login antes de cada teste
    await homePage.visit();
    // await homePage.submit(
    //   process.env.TEST_EMAIL || "test@example.com",
    //   process.env.TEST_PASSWORD || "password123",
    // );
    // Passar a page autenticada para o teste
    await use(page);

    // Teardown (opcional): logout ou limpeza
    // await page.context().clearCookies();
  },
});

export { expect };
