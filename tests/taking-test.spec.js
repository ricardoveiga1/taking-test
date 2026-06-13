import { test } from "../fixture/fixture";

test.describe("Taking UI Tests", () => {
  test("Search and validate Amazon product", async ({ homePage }) => {
    await test.step("Search product", async () => {
      await homePage.searchProduct("Monitor 4k");
    });

    await test.step("Validate product result", async () => {
      await homePage.assertProduct(/DXMO27CF180S CURVO 180HZ/i, "3,0", "898");
    });
  });
});