import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", lang: "es", canonical: "https://prgm.cl/" },
  { path: "/en/", lang: "en", canonical: "https://prgm.cl/en/" },
  {
    path: "/proyectos/",
    lang: "es",
    canonical: "https://prgm.cl/proyectos/",
  },
  {
    path: "/en/proyectos/",
    lang: "en",
    canonical: "https://prgm.cl/en/proyectos/",
  },
  {
    path: "/proyectos/chronus/",
    lang: "es",
    canonical: "https://prgm.cl/proyectos/chronus/",
  },
  {
    path: "/en/proyectos/chronus/",
    lang: "en",
    canonical: "https://prgm.cl/en/proyectos/chronus/",
  },
] as const;

for (const route of routes) {
  test(`${route.path} exposes localized SEO and semantic structure`, async ({
    page,
  }) => {
    await page.addInitScript(() => localStorage.setItem("prgm:lang", "es"));
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", route.lang);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      route.canonical,
    );
    await expect(page.locator('link[hreflang="es-CL"]')).toHaveCount(1);
    await expect(page.locator('link[hreflang="en-US"]')).toHaveCount(1);
    await expect(page.locator('link[hreflang="x-default"]')).toHaveCount(1);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://prgm.cl/og-image.png",
    );

    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    expect(() => JSON.parse(jsonLd || "")).not.toThrow();
    expect(errors).toEqual([]);
  });
}

test("public SEO, PWA and CV resources are available", async ({ request }) => {
  const resources = [
    "/robots.txt",
    "/sitemap-index.xml",
    "/sitemap-0.xml",
    "/site.webmanifest",
    "/site.en.webmanifest",
    "/og-image.png",
    "/favicon-mark.svg",
  ];

  for (const resource of resources) {
    const response = await request.get(resource);
    expect(response.status(), resource).toBe(200);
  }
});
