import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import deployConfig from './deploy.config.js';

const TARGET = process.env.DEPLOY_TARGET || 'github';
const config = deployConfig[TARGET];

// Ensure base path always starts and ends with /
const basePath = config.base.startsWith('/') ? config.base : `/${config.base}`;
const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;

export default defineConfig({
  site: config.url,
  base: normalizedBase,
  output: 'static',
  integrations: [
    icon({
      include: {
        'mdi': ['*'],
        'simple-icons': ['*']
      }
    })
  ],
  build: {
    assets: '_assets'
  }
});
