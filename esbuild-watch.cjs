const esbuild = require('esbuild');
const {dtsPlugin} = require('esbuild-plugin-d.ts');

const commonOptions = {
  entryPoints: ['index.ts'],
  plugins: [dtsPlugin()],
};

const watch = {
  onRebuild(error, result) {
    if (error) console.error('❌ watch build failed:', error);
    else console.log('✅ watch build succeeded:', result);
  },
};

esbuild.build({
  ...commonOptions,
  format: 'esm',
  outfile: 'index.esm.js',
  watch,
}).then(res => {
  console.log(res);
  console.log('👀 watching index.esm.js ...');
});

esbuild.build({
  ...commonOptions,
  platform: 'node',
  format: 'cjs',
  outfile: 'index.cjs.js',
  watch,
}).then(res => {
  console.log(res);
  console.log('👀 watching index.cjs.js ...');
});

