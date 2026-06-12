import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto("https://www.amazon.com.br/");
  }

  async searchProduct(productName) {
    await this.page.locator("#twotabsearchtextbox").fill(productName);
    await this.page.locator("#nav-search-submit-button").click();
    // Aguardar resultados carregarem com retry
    await this.page.waitForTimeout(2000);
  }

  async assertProduct(name, score, price) {
    // Valida o nome do produto - buscar dentro do primeiro resultado
    const firstProduct = this.page
      .locator('div[data-component-type="s-search-result"]')
      .first();

    const productName = firstProduct
      .getByRole("link")
      .filter({ hasText: name })
      .first();

    await expect(productName).toBeVisible({ timeout: 10000 });
    await expect(productName).toContainText(name);

    // Valida o score/rating - usar seletor mais genérico
    const ratingSpan = firstProduct
      .locator("span")
      .filter({ hasText: new RegExp(score.replace(",", ".")) })
      .first();

    await expect(ratingSpan).toBeVisible();
    await expect(ratingSpan).toContainText(score);

    // Valida o preço - usar seletor mais genérico
    const priceSpan = firstProduct
      .locator("span")
      .filter({ hasText: new RegExp(price) })
      .first();

    await expect(priceSpan).toBeVisible();
    await expect(priceSpan).toContainText(price);
  }

  async submit(email, password) {
    await this.page.getByPlaceholder("E-mail").fill(email);
    await this.page.getByPlaceholder("Senha").fill(password);
    await this.page.getByText("Entrar").click();
  }
}
