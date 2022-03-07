const {build} = require('esbuild');
const {dependencies, peerDependencies} = require('./package.json');

const shared = {
    entryPoints: ['src/index.js'],
    bundle: true,
    // external: Object.keys(dependencies || {}).
    //     concat(Object.keys(peerDependencies || {})),
};

build({
    ...shared,
    format: 'cjs',
    platform: 'node',
    outfile: 'dist/index.js',
});

build({
    ...shared,
    format: 'esm',
    outfile: 'dist/index.esm.js',
});
