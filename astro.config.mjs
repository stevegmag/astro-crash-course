import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import image from "astro:assets";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image(),
    icon({
      iconDir: "src/icons",
    })
  ]
});