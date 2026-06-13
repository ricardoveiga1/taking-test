import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto("/");
  }

  async searchProduct(productName) {
    const searchInput = this.page.locator("#twotabsearchtextbox");
    await searchInput.fill(productName);
    //expect(searchInput).toHaveText(productName);
    await searchInput.press("Enter");

    // Aguarda até que o primeiro resultado de busca seja visível
    await this.page
      .locator('div[data-component-type="s-search-result"]')
      .first()
      .waitFor();
  }

  async assertProduct(name, score, price) {
    const firstProduct = this.page
      .locator('div[data-component-type="s-search-result"]')
      .first();

    // Valida o título do produto
    const productTitle = firstProduct.locator("h2");
    await expect(productTitle).toContainText(name);

    // Valida o score (ex: "3,8 de 5 estrelas")
    await expect(firstProduct).toContainText(score);

    // Valida o preço usando a classe padrão da Amazon
    const priceContainer = firstProduct.locator(".a-price").first();
    await expect(priceContainer).toContainText(price);
  }
}
