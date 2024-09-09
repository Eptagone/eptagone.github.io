/**
 * Name: astro.config.ts
 * Description: Astro configuration file
 */

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: "https://eptagone.dev",
    integrations: [tailwind(), sitemap(), solidJs()],
});
