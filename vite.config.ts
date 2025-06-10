import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        dts({ tsconfigPath: './tsconfig.app.json' })
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: '@minchat/react',
            fileName: (format) => `minchat-sdk.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {},
            },
        },
    },
}); 