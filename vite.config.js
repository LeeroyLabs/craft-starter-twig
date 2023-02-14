import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import ViteRestart from 'vite-plugin-restart';

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
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        manifestSRI(),
        viteCompression({
            filter: /\.(js|mjs|json|css|map)$/i,
        }),
        ViteRestart({
            reload: ['templates/**/*'],
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
