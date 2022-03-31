import esbuild from 'esbuild';

const commonOptions = {
  entryPoints: ['index.ts'],
  // bundle: true,
  // minify: true,
};

console.log(
    await Promise.all(
        [
          esbuild.build({
            ...commonOptions,
            format: 'esm',
            outfile: 'index.js',
          }),
          esbuild.build({
            ...commonOptions,
            platform: 'node',
            format: 'cjs',
            outfile: 'index.cjs',
          }),
        ]),
);
