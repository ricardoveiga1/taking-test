import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto("https://www.amazon.com.br/");
    //const loginForm = this.page.locator('.login-form');
    //await expect(loginForm).toBeVisible();
  }

  async searchProduct(productName) {
    await this.page.locator('#twotabsearchtextbox').fill(productName);
    await this.page.locator('#nav-search-submit-button').click();
  }

  this.name = this.page..getByRole("heading", {
        label:
          "Anúncio patrocinado – Monitor PC Gamer LG 24MS500 24” IPS 100Hz Full HD HDMI 2x",
      })
      .toHaveText(name)

   async assertproduct(name, score, price){
    await this.page
    //   .getByRole("heading", {
    //     label:
    //       "Anúncio patrocinado – Monitor PC Gamer LG 24MS500 24” IPS 100Hz Full HD HDMI 2x",
    //   })
    //   .toHaveText(name);
    await this.page.locator("a-row a-size-small").toHaveText(score);
    await this.page.locator("a-price-whole").toHaveText(price);

   }

  async submit(email, password) {
    await this.page.getByPlaceholder('E-mail').fill(email);
    await this.page.getByPlaceholder('Senha').fill(password);
    await this.page.getByText('Entrar').click();
  }
}

