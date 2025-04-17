import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// Get the base from environment variable or use default
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://stevegmag.github.io/',
  base: BASE,
  output: 'static',
  integrations: [
    icon({
      iconDir: "src/icons",
    })
  ]
});
