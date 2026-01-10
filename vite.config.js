import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  root: 'src', // коренева папка з index.html
  base: '/goit-js-hw-10/', // <-- обов'язково заміни на свій репозиторій
  build: {
    outDir: '../dist', // dist поза src
    emptyOutDir: true,
    rollupOptions: {
      // збірка всіх html файлів у src
      input: glob.sync('src/*.html', { absolute: true }),
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['src/**/*.html']), // стежимо за усіма html в src
    SortCss({ sort: 'mobile-first' }),
  ],
});
