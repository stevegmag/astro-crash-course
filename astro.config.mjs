import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import deployConfig from './deploy.config.js';

const TARGET = process.env.DEPLOY_TARGET || 'github';
const config = deployConfig[TARGET];

export default defineConfig({
  site: config.url,
  base: config.base,
  output: 'static',
  integrations: [icon()]
});
