import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import deployConfig from './deploy.config.js';

const TARGET = process.env.DEPLOY_TARGET || 'github';
const config = deployConfig[TARGET];

const basePath = config.base.startsWith('/') ? config.base : `/${config.base}`;
const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;

export default defineConfig({
  site: config.url,
  base: normalizedBase,
  output: 'static',
  integrations: [
    icon({
      include: {
        'mdi': ['*'], // Include all icons from Material Design Icons
        'simple-icons': ['*'] // Include all Simple Icons
      }
    })
  ],
  build: {
    assets: '_assets'
  }
});
