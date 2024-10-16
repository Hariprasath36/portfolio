import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sitemapPlugin } from 'vite-plugin-sitemap'; // Update to use sitemapPlugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://itshariprasath.vercel.app', // Use your actual hostname
      generate: true, // Ensure the sitemap is generated on build
      routes: [
        '/',
        '/about',
        '/projects',
        '/contact',
      ],
    }),
  ],
});
