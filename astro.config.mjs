// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://owloud.app',
  // /get only forwards to the App Store, so it stays out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/get') })],
  vite: {
    plugins: [tailwindcss()]
  }
});