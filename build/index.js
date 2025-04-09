const esbuild = require('esbuild')

const Config = {
  target: 'esnext',
  bundle: true,
  entryPoints: [
    { in: 'src/index.ts', out: 'index' }
  ],
}

esbuild.build({
  ...Config,
  platform: 'browser',
  format: 'esm',
  outdir: 'dist/esm',
  outExtension: {
    '.js': '.mjs'
  },
})

esbuild.build({
  ...Config,
  platform: 'browser',
  format: 'cjs',
  outdir: 'dist/cjs',
  outExtension: {
    '.js': '.cjs'
  },
})
