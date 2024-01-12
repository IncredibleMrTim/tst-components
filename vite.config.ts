import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

import path, { resolve } from 'path';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 9000,
  },

  test: {
    include: ['./src/**/*.{test,spec}.{ts,tsx}', './e2e/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'text-summary'],
      all: true,
      exclude: ['./src/**/*.{test,spec}.{ts,tsx}', '**/setupTests.ts'],
    },
  },
  plugins: [react(), viteTsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@timsmarttechnology/components',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
