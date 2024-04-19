import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca'],
    routing: {
      prefixDefaultLocale: false // Significa que cuando ingresen a /es solamente debemos colocar el / (es el idioma por defecto)y para catalán colocamos el /ca
    }
  }
});