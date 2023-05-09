import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:3000/',
    routes: [
        {
          path: '/',
          component: './src/pages/index.astro'
        },
        {
          path: '/new-page',
          component: './src/pages/new-page.astro'
        }
    ]
});
