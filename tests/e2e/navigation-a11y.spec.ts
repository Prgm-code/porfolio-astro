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

test("inactive hero slides are inert and controls update state", async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
  await page.goto("/");

  const dots = page.locator("[data-carousel-dot]");
  await dots.nth(1).click();
  await expect(dots.nth(1)).toHaveAttribute("aria-pressed", "true");
  await expect(dots.nth(0)).toHaveAttribute("aria-pressed", "false");

  const inactiveAreInert = await page
    .locator('[data-slide][aria-hidden="true"]')
    .evaluateAll((slides) =>
      slides.every((slide) => (slide as HTMLElement).inert),
    );
  expect(inactiveAreInert).toBe(true);
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
