import { test } from "@playwright/test";

test("Debug Amazon Structure", async ({ page }) => {
  await page.goto("https://www.amazon.com.br/");

  await page.locator("#twotabsearchtextbox").fill("Monitor 4k");
  await page.locator("#nav-search-submit-button").click();

  // Aguardar alguns segundos para carregar
  await page.waitForTimeout(5000);

  const firstProduct = page
    .locator('div[data-component-type="s-search-result"]')
    .first();

  console.log("===== INVESTIGANDO PRIMEIRO RESULTADO =====");

  // Nome do produto
  const name = await firstProduct
    .locator("h2 a, span[data-a-color]")
    .first()
    .textContent();
  console.log("Nome do produto:", name);

  // Buscar rating/estrelas
  const ratingSpans = await firstProduct
    .locator('span[aria-label*="estrela"], span[aria-label*="de 5"]')
    .count();
  console.log(`✓ Rating spans encontrados: ${ratingSpans}`);

  const rating = await firstProduct
    .locator('span[aria-label*="estrela"], span[aria-label*="de 5"]')
    .first()
    .getAttribute("aria-label");
  console.log("Rating aria-label:", rating);

  // Buscar preço
  const priceSpans = await firstProduct.locator('span[class*="price"]').count();
  console.log(`✓ Price spans encontrados: ${priceSpans}`);

  const price = await firstProduct
    .locator('span[class*="a-price-whole"]')
    .first()
    .textContent();
  console.log("Preço:", price);

  // Listar todos os spans do primeiro resultado
  const allSpans = await firstProduct.locator("span").allTextContents();
  console.log("Todos os spans (primeiros 20):", allSpans.slice(0, 20));

  // Salvar HTML do primeiro resultado
  const html = await firstProduct.innerHTML();
  console.log("===== HTML DO PRIMEIRO RESULTADO =====");
  console.log(html.substring(0, 2000));
});
