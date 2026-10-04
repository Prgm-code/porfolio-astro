import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://prgm.cl",
  trailingSlash: "always",

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-CL",
          en: "en-US",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
