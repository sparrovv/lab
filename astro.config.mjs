import { defineConfig } from 'astro/config';

const site = process.env.SITE ?? 'https://sparrovv.github.io';
const base = process.env.BASE_PATH ?? '/lab';

export default defineConfig({
  site,
  base,
  output: 'static',
});
