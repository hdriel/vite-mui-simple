import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // install for this package: npm i -D @types/node
import postCssNesting from 'postcss-nesting';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                // for vsc idea need to install extension: "language-postcss"
                // go to settings > search for files.associations
                // add item: '*.css' value: 'postcss'
                postCssNesting(),
            ],
        },
    },
    build: {
        target: 'esnext', // for dynamic module imports, if not need to dynamic module import remove this
        rollupOptions: {
            // for multiple routes
            input: {
                main: resolve(__dirname, 'index.html'),
                another: resolve(__dirname, 'another-route/index.html'),
            },

            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.split('node_modules/')[1].split('/')[0];
                    }
                },
            },
        },
    },
});
