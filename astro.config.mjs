import { defineConfig } from "astro/config";
// import vercel from "@astrojs/vercel/serverless";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true, // set to false when using @vercel/analytics@1.4.0
  //   },
  // }),
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});
