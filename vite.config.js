import { defineConfig } from 'vite';

export default defineConfig({
  // The root index.html and src/ are at the project root
  root: '.',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
