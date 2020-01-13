import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'

export default {
    input: 'index.js',
    output: [{
        file: 'dist/tailwindcss-browser.js',
        format: 'cjs',
        sourcemap: true,
    }, {
        file: 'dist/tailwindcss-browser.es.js',
        format: 'esm',
        sourcemap: true,
    }],
    plugins: [
        builtins(),
        resolve(),
        commonjs(),
    ],
}
