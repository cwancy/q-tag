// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: './index.js',
            name: 'QTag',
            fileName: 'q-tag',
        },
        rollupOptions: {
            external: ['vue', 'quasar'],
            output: {
                globals: {
                    vue: 'Vue',
                    quasar: 'Quasar',
                },
            },
        },
    },
});