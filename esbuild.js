import esbuild from 'esbuild';
import {dtsPlugin} from 'esbuild-plugin-d.ts';

const commonOptions = {
  entryPoints: ['index.ts'],
  // bundle: true,
  // minify: true,
  plugins: [dtsPlugin()],
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
