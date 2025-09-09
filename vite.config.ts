import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { visualizer } from 'rollup-plugin-visualizer';
import babel from 'vite-plugin-babel';

const isStorybook = !!process.env.STORYBOOK;

console.log({ isStorybook })

export default isStorybook
    ? defineConfig({
        plugins: [
            react()],
    })
    : defineConfig({
        plugins: [
            react(),
            babel({
                babelConfig: {
                    plugins: [
                        ["babel-plugin-styled-components", { "pure": true, "ssr": false, "displayName": false }]
                    ],
                },
            }),
            dts({ tsconfigPath: './tsconfig.app.json' }),
            cssInjectedByJsPlugin(),
            visualizer({ open: true })
        ],
        build: {
            minify: true,
            sourcemap: false,
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
                    'react/jsx-dev-runtime',
                    'styled-components'
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