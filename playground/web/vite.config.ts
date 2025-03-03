import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: process.env.VITE_APP_BASE_URL ? `${process.env.VITE_APP_BASE_URL}/` : '',
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
    }
  },
});
