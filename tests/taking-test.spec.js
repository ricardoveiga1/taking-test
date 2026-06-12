import { test, expect } from "../fixture/fixture";
import { HomePage } from "../pages/HomePage";

test.describe("Taking UI Tests", () => {
  test("Search and validate Amazon product", async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step("Visit Amazon", async () => {
      await homePage.visit();
    });

    await test.step("Search product", async () => {
      await homePage.searchProduct("Monitor 4k");
    });

    await test.step("Validate product result", async () => {
      await homePage.assertProduct(
        /Monitor PC Gamer LG 24MS500 24” IPS 100Hz Full HD HDMI 2x/i,
        "4,8",
        "554",
      );
    });
  });
});
