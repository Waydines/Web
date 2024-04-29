import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
      applyBaseStyles: false,
    }),],
  i18n: {
    defaultLocale: "pt",
    locales: ["en", "pt"]
  },
  output: "server",
  adapter: vercel()
});