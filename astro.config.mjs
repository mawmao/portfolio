// @ts-check
import { defineConfig } from 'astro/config';
import { jetBrainsMono, spaceGrotesk } from 'fonts.config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    fonts: [spaceGrotesk, jetBrainsMono],
    vite: {
        plugins: [tailwindcss()],
        resolve: { tsconfigPaths: true }
    },
});
