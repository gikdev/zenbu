import { heyApiPlugin } from '@hey-api/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, lazyPlugins } from 'vite-plus'

// https://vite.dev/config/
export default defineConfig({
  fmt: {
    arrowParens: 'avoid',
    endOfLine: 'lf',
    ignorePatterns: [],
    insertFinalNewline: true,
    jsxSingleQuote: true,
    printWidth: 120,
    semi: false,
    singleQuote: true,
    sortImports: true,
    sortPackageJson: true,
    sortTailwindcss: true,
    tabWidth: 2,
    useTabs: false,
  },
  lint: {
    plugins: ['react', 'typescript', 'oxc'],
    rules: {
      'react/rules-of-hooks': 'error',
      'vite-plus/prefer-vite-plus-imports': 'error',
      'react/only-export-components': ['off', { allowConstantExport: true }],
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: 'vite-plus',
        specifier: 'vite-plus/oxlint-plugin',
      },
    ],
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7200',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: lazyPlugins(() => [
    react(),
    tailwindcss(),
    tanstackRouter({
      autoCodeSplitting: false,
      generatedRouteTree: './src/App/assets/route-tree.gen.ts',
      target: 'react',
      quoteStyle: 'single',
      semicolons: false,
    }),
    heyApiPlugin({
      config: {
        input: './src/features/api/openapi.yml',
        output: './src/features/api/client/generated',
        plugins: [
          {
            name: '@hey-api/client-axios',
            baseUrl: '/',
            includeInEntry: true,
          },
          {
            name: '@hey-api/typescript',
            enums: 'javascript',
            includeInEntry: true,
          },
          { name: 'valibot', includeInEntry: true },
          { name: 'zod', includeInEntry: true },
          {
            name: '@hey-api/sdk',
            operations: { strategy: 'byTags' },
            transformer: false,
            includeInEntry: true,
          },
          { name: '@tanstack/react-query', includeInEntry: true },
        ],
      },
    }),
  ]),
})
