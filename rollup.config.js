import path from 'path'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import { string } from 'rollup-plugin-string'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
    input: 'index.js',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            sourcemap: true,
            name: 'tailwind',
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        {
            resolveId(id) {
                if (/plugins\/preflight/.test(id)) {
                    return path.resolve('./preflight.js')
                }
                return null
            },
        },
        string({
            include: '**/*.css',
        }),
        alias({
            entries: [
                { find: 'postcss', replacement: '@mapgrid/postcss' },
                { find: 'glob', replacement: '@mapgrid/glob' },
            ],
        }),
        builtins(),
        resolve(),
        commonjs(),
        globals(),
        terser(),
    ],
}
