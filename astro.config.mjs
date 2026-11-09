// @ts-check
import { defineConfig } from 'astro/config';
import { jetBrainsMono, spaceGrotesk } from 'fonts.config';
import sitemap from "@astrojs/sitemap"

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://meladry.dev',
    integrations: [sitemap()],
    build: {
        inlineStylesheets: 'always',
    },
    fonts: [spaceGrotesk, jetBrainsMono],
    vite: {
        plugins: [tailwindcss()],
        resolve: { tsconfigPaths: true }
    },
});
