import { defineConfig } from 'vite';

export default defineConfig({
  base: '/pega-csa-study-guide/',

  // The root index.html and src/ are at the project root
  root: '.',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
