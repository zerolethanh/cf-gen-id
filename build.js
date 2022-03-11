const esbuild = require('esbuild');

const commonOptions = {
    entryPoints: ['index.ts'],
    bundle: true,
    minify: true,
};

esbuild.build({
    ...commonOptions,
    platform: 'node',
    format: 'cjs',
    outfile: 'dist/index.node.cjs',
});

esbuild.build({
    ...commonOptions,
    format: 'esm',
    outfile: 'dist/index.esm.js',
});
