import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("stored English preference redirects the Spanish root", async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem("prgm:lang", "en"));
  await page.goto("/");
  await expect(page).toHaveURL(/\/en\/$/);
});

test("browser language is used only when no preference exists", async ({
  browser,
}) => {
  const context = await browser.newContext({ locale: "en-US" });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4323/");
  await expect(page).toHaveURL(/\/en\/$/);
  expect(await page.evaluate(() => localStorage.getItem("prgm:lang"))).toBe(
    "en",
  );
  await context.close();
});

test("language switch preserves route and hash without duplicate slashes", async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
  await page.goto("/proyectos/#contacto");
  await page.locator('[data-lang-choice="en"]').first().click();
  await expect(page).toHaveURL(/\/en\/proyectos\/#contacto$/);
  expect(page.url()).not.toContain("//proyectos");
});

test("mobile dialog manages focus and Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
  await page.goto("/");

  const trigger = page.locator("#mobile-menu-toggle");
  const dialog = page.locator("#mobile-nav");
  await trigger.click();
  await expect(dialog).toHaveAttribute("open", "");
  await expect(page.locator("#mobile-menu-close")).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).not.toHaveAttribute("open", "");
  await expect(trigger).toBeFocused();
});

test("project viewer follows the project being read", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
  await page.goto("/");

  await page
    .locator("[data-showcase-item]")
    .nth(2)
    .evaluate((item) =>
      item.scrollIntoView({ block: "center", behavior: "instant" }),
    );

  const layers = page.locator("[data-viewer-layer]");
  await expect(layers.nth(2)).toHaveClass(/is-active/);
  await expect(page.locator("[data-viewer-count]")).toHaveText("03");

  const inactiveAreInert = await layers.evaluateAll((items) =>
    items.every((layer, index) => index === 2 || (layer as HTMLElement).inert),
  );
  expect(inactiveAreInert).toBe(true);
});

test("navigation marks the section being read", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
  await page.goto("/");

  await page
    .locator("#stack")
    .evaluate((section) =>
      section.scrollIntoView({ block: "start", behavior: "instant" }),
    );
  await expect(
    page.locator('.header-nav a[data-section="stack"]'),
  ).toHaveAttribute("aria-current", "location");
});

test("stack items link to the filtered project archive", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
  await page.goto("/");

  const link = page.locator('#stack a[href$="?stack=convex"]');
  await expect(link).toHaveCount(1);
  await link.click();

  await expect(page).toHaveURL(/\/proyectos\/\?stack=convex$/);
  await expect(page.locator("[data-archive-item]:not([hidden])")).toHaveCount(
    4,
  );
});

for (const path of [
  "/",
  "/en/",
  "/proyectos/",
  "/en/proyectos/",
  "/proyectos/chronus/",
  "/en/proyectos/chronus/",
]) {
  test(`${path} has no critical WCAG A/AA axe violations`, async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
    await page.goto(path);
    // Analizar el estado final, no un elemento a mitad de su entrada.
    await page.waitForTimeout(100);
    await page.waitForFunction(
      () => !document.querySelector(".is-reveal-pending.is-visible"),
    );
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
