import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://stevegmag.github.io/astro-crash-course/',
  base: 'develop',
  output: 'static',
  integrations: [
    icon({
      iconDir: "src/icons",
    })
  ]
});