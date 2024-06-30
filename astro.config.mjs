import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://calculator.cafe',
  integrations: [svelte(), sitemap()]
});