// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH;

import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/main.ts',
  external: [
    'axios',
    'vue-demi',
    'vue',
    'vue-router',
    '@vueuse/core'
  ],

  output: [
    {
      file: './dist/auth-composables.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve({
      resolveOnly: [/^(?!vue).*/],
      modulesOnly: true,
      dedupe: [
        'vue'
      ]
    }),
    typescript({
      sourceMap: !production,
      tsconfig: './tsconfig.json'
    })
  ]
}
