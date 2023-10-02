import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript2 from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ['src/components/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts', 'main.ts'],
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/Plugin.ts',
      formats: ['es', 'cjs'],
      name: 'Plugin',
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs'
    },
    rollupOptions: {
      external: ['vue', 'vue-framework-test'], // Ensure that Vue and vue-framework-test are not bundled with the plugin
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
