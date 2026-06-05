// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH is set by CI for PR preview builds (e.g. "/pr-preview/pr-12/").
// It defaults to "/" for the production site at the domain root.
const base = process.env.BASE_PATH || '/';

// Tailwind v4 is wired up through PostCSS (see postcss.config.mjs) to stay
// decoupled from Astro's bundled Vite version.
// https://astro.build/config
export default defineConfig({
  site: 'https://heshammeneisi.github.io',
  base,
});
