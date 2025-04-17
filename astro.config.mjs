import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// Get the repository name from environment variable or use a default
const REPO_NAME = 'your-repository-name'; // Replace with your actual repository name
const BASE = process.env.BASE_PATH || `/${REPO_NAME}/`;

export default defineConfig({
  site: 'https://stevegmag.github.io',
  base: BASE,
  output: 'static',
  integrations: [
    icon({
      iconDir: "src/icons",
    })
  ]
});
