import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  root: 'src',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync('src/*.html', { absolute: true }),
    },
  },

  plugins: [
    injectHTML(),
    FullReload(['src/**/*.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
});
