import { test } from "@playwright/test";
import { Homepage } from "../business/ui/poms/Homepage";
import { DocsPage } from "../business/ui/poms/DocsPage";

test.describe("Playwright Homepage", () => {
  test.beforeEach(async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.open();
  });

  test("Open Docs page from Homepage", async ({ page }) => {
    const homepage = new Homepage(page);
    const docsPage = new DocsPage(page);

    await homepage.getNavMenuOption("Docs").click();

    await docsPage.expectTitleToBe(docsPage.title);
    await docsPage.expectURLToBe(docsPage.url);
  });

  test("Open Playwright for .NET Homepage", async ({ page }) => {
    const homepage = new Homepage(page);

    await homepage.open();
    await homepage.selectTechnologyOption(".NET");
    await homepage.expectURLToBe(`${homepage.url}/dotnet/`);
  });
});
