import { fontProviders } from 'astro/config';
import type { FontFamily } from 'node_modules/astro/dist/assets/fonts/types';

export const spaceGrotesk = {
  provider: fontProviders.local(),
  name: 'Space Grotesk',
  cssVariable: '--font-space-grotesk',
  options: {
    variants: [
      { src: ['./src/assets/fonts/SpaceGrotesk-Light.woff2'], weight: 'light', style: 'normal' },
      { src: ['./src/assets/fonts/SpaceGrotesk-Regular.woff2'], weight: 'normal', style: 'normal' },
      { src: ['./src/assets/fonts/SpaceGrotesk-Medium.woff2'], weight: 'medium', style: 'normal' },
      { src: ['./src/assets/fonts/SpaceGrotesk-SemiBold.woff2'], weight: 'semibold', style: 'normal' },
      { src: ['./src/assets/fonts/SpaceGrotesk-Bold.woff2'], weight: 'bold', style: 'normal' },
    ],
  },
} satisfies FontFamily<ReturnType<typeof fontProviders.local>>;


export const jetBrainsMono = {
  provider: fontProviders.local(),
  name: 'JetBrains Mono',
  cssVariable: '--font-jetbrains-mono',
  options: {
    variants: [
      { src: ['./src/assets/fonts/JetBrainsMono-Medium.woff2'], weight: 'medium', style: 'normal' },
    ],
  },
} satisfies FontFamily<ReturnType<typeof fontProviders.local>>;
