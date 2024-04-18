import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    icon({
      iconDir: "src/icons",
    })
  ]
});