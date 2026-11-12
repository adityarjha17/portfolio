import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adityarjha.com',
  build: {
    // Keep CSS inside the page: fewer requests, and it lets us preview the build anywhere.
    inlineStylesheets: 'always',
  },
});
