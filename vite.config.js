import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sitemapPlugin } from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://itshariprasath.vercel.app', // Your site's domain
      routes: [
        '/',
        '/about',    // Ensure these routes exist in your app
        '/projects',
        '/contact',
      ],
      // Optional: Specify output directory for sitemap (if not using default)
      outDir: 'dist', // Adjust if your output directory is different
    }),
  ],
});
