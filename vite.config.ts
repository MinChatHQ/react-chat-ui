import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [
        react(),
        dts({ tsconfigPath: './tsconfig.app.json' }),
        cssInjectedByJsPlugin()
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: '@minchat/react',
            fileName: (format) => `minchat-sdk.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'react/jsx-dev-runtime'
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
}); 