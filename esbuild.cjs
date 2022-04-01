const esbuild = require('esbuild');
const {dtsPlugin} = require('esbuild-plugin-d.ts');

const commonOptions = {
  entryPoints: ['index.ts'],
  plugins: [dtsPlugin()],
};

esbuild.build({
  ...commonOptions,
  format: 'esm',
  outfile: 'index.esm.js',
}).then(res => {
  console.log('✅ build done index.esm.js');
});

esbuild.build({
  ...commonOptions,
  platform: 'node',
  format: 'cjs',
  outfile: 'index.cjs.js',
}).then(res => {
  console.log('✅ build done index.cjs.js');
});

const watch = {
  onRebuild(error, result) {
    if (error) console.error('watch build failed:', error);
    else console.log('watch build succeeded:', result);
  },
};
