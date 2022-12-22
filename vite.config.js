import { defineConfig } from 'vite';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import ViteRestart from 'vite-plugin-restart';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        manifest: true,
        outDir: path.resolve(__dirname, 'web/dist/'),
        rollupOptions: {
            input: {
                app: path.resolve(__dirname, 'src/scripts/main.js'),
            },
            output: {
                sourcemap: true,
            },
        },
    },
    plugins: [
        manifestSRI(),
        viteCompression({
            filter: /\.(js|mjs|json|css|map)$/i,
        }),
        ViteRestart({
            reload: ['templates/**/*'],
        }),
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('hello-'),
                },
            },
        }),
    ],
    publicDir: path.resolve(__dirname, 'src/public'),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@css': path.resolve(__dirname, 'src/styles'),
            '@js': path.resolve(__dirname, 'src/scripts'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
}));
