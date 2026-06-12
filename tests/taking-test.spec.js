import { test, expect } from "../fixture/fixture";
import { HomePage } from "../pages/HomePage";

test.describe("Taking UI Tests", () => {
  test("Sign Up Page UI Elements Visibility", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();

    await test.step("Search  product", async () => {
        // authenticatedPage já está autenticada e logada
        //await authenticatedPage.screenshot({ path: "test-results/main-page.png" });
        await homePage.searchProduct("Monitor 4k");
        //expect(page.getByRole("textbox", { name: "Resultados" })).toBeVisible();

    });

    await test.step("Clicks on Open Account button", async () => {
      
        await homePage.assertproduct(
          "Monitor PC Gamer LG 24MS500 24” IPS 100Hz Full HD HDMI 2x",
          "4,8",
          "554",
        );
    });

    await test.step("Asserts Sign Up Page URL", async () => {
  
    });

    await test.step("Asserts Sign Up Page UI elements", async () => {
     
    });
  });

});
