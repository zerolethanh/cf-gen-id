import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'auto',
            compact: true,
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'auto',
            compact: true,
        },
    ],
    plugins: [
        nodeResolve(),
        terser(),
    ],
};
