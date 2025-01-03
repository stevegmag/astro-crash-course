import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://stevegmag.github.io/',
  base: 'astro-crash-course',
  output: 'static',
  integrations: [
    icon({
      iconDir: "src/icons",
    })
  ]
});
