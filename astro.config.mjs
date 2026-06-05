// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind v4 is wired up through PostCSS (see postcss.config.mjs) to stay
// decoupled from Astro's bundled Vite version.
// https://astro.build/config
export default defineConfig({
  site: 'https://heshammeneisi.github.io',
});
