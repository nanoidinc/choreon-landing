import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: '../public',
  root: 'src',
  base: '/choreon-landing/',
  build: {
    outDir: '../docs',
  },
});
