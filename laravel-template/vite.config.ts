import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      refresh: true,
    }),
    inertia(),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    wayfinder({
      formVariants: true,
    }),
  ],

  resolve: {
    alias: {
      'styled-system': path.resolve(__dirname, 'styled-system'),
      '@/*': path.resolve(__dirname, './resources/js/*'),
    },
  },
  optimizeDeps: {
    exclude: ['@fidely-ui/react'],
  },
  ssr: {
    noExternal: ["@fidely-ui/react"],
  },
});