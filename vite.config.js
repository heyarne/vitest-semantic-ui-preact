import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// this is for some extra config we need to properly resolve some modules (e.g. preact/hooks)
// inside vitest; see https://github.com/preactjs/preact/issues/3468#issuecomment-1241160724
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// https://vitejs.dev/config/
export default defineConfig({
  root: './src', // root path from the build tool's perspective
  build: {
    rollupOptions: {
      input: 'src/Counter.jsx'
    }
  },
  test: {
    setupFiles: ['test.setup.js'],
    environment: 'happy-dom' // provide DOM api for node.js
  },
  resolve: {
    // as noted above, see https://github.com/preactjs/preact/issues/3468#issuecomment-1241160724
    // if this alias is not defined, you will see errors along the lines of
    // `TypeError: Cannot read properties of undefined (reading '__H')`
    alias: [
      {
        find: 'preact/hooks',
        replacement: require.resolve('preact/hooks')
      }
    ],
  },
  plugins: [preact()]
})
