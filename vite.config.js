import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv }), new TypeScriptLinter()],
    }),
    dts({
      include: ['src/'],
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'tawk-messenger-react',
      formats: ['es','umd'],
      fileName: (format) => `tawk-messenger-react.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],

      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'          
        },
      },
    },
  },
}))
