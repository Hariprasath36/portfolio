import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sitemapPlugin } from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://itshariprasath.vercel.app', // Your site's domain
      // Optional: Customize the sitemap further
      routes: [
        '/',
        '/about',   // Add paths based on your routes
        '/projects',
        '/contact',
      ],
    }),
  ],
});
