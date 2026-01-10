import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  root: 'src',   // root - твоя папка з index.html
  build: {
    outDir: '../dist',  // dist поза src
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync('src/*.html', { absolute: true }), // <- обов'язково absolute
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./*.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
});
