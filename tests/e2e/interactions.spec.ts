import { expect, test } from "@playwright/test";

for (const locale of [
  {
    path: "/",
    successTitle: "Mensaje enviado",
    errorText: "No se pudo enviar",
  },
  {
    path: "/en/",
    successTitle: "Message sent",
    errorText: "Could not send",
  },
] as const) {
  test(`${locale.path} announces successful form submission`, async ({
    page,
  }) => {
    await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
    await page.route("https://formspree.io/f/xbddooda", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: "{}",
      }),
    );
    await page.goto(locale.path);

    await page.locator("#name").fill("Test User");
    await page.locator("#email").fill("test@example.com");
    await page.locator("#message").fill("Automated portfolio verification");
    await page.locator(".contact-submit").click();

    const status = page.locator("#form-status");
    await expect(status).toBeVisible();
    await expect(status.locator("[data-status-title]")).toHaveText(
      locale.successTitle,
    );
    await expect(status).toBeFocused();
    await expect(page.locator("#name")).toHaveValue("");
  });

  test(`${locale.path} announces form errors and restores submission`, async ({
    page,
  }) => {
    await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
    await page.route("https://formspree.io/f/xbddooda", (route) =>
      route.fulfill({
        status: 500,
        contentType: "application/json",
        body: "{}",
      }),
    );
    await page.goto(locale.path);

    await page.locator("#name").fill("Test User");
    await page.locator("#email").fill("test@example.com");
    await page.locator("#message").fill("Automated portfolio verification");
    await page.locator(".contact-submit").click();

    const status = page.locator("#form-status");
    await expect(status).toBeVisible();
    await expect(status).toContainText(locale.errorText);
    await expect(status).toHaveAttribute("role", "alert");
    await expect(status).toBeFocused();
    await expect(page.locator(".contact-submit")).toBeEnabled();
  });
}

test("content remains visible without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    locale: "es-CL",
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4323/");

  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("#proyectos")).toBeVisible();
  await expect(page.locator("#experiencia")).toBeVisible();
  await expect(page.locator("#perfil")).toBeVisible();
  await expect(page.locator("#contacto")).toBeVisible();
  expect(
    await page
      .locator(".reveal")
      .first()
      .evaluate((element) => getComputedStyle(element).opacity),
  ).toBe("1");
  await context.close();
});

test("project previews do not rotate when reduced motion is requested", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
  await page.goto("/");

  const firstCarousel = page.locator("[data-project-carousel]").first();
  await firstCarousel.hover();
  await page.waitForTimeout(1700);
  await expect(
    firstCarousel.locator("[data-project-slide]").first(),
  ).toHaveClass(/is-active/);
});
