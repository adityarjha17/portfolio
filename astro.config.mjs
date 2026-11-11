import { defineConfig } from 'astro/config';

// Site URL is set once the domain is bought.
export default defineConfig({
  site: 'https://example.com',
  build: {
    // Keep CSS inside the page: fewer requests, and it lets us preview the build anywhere.
    inlineStylesheets: 'always',
  },
});
