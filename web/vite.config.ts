import { heyApiPlugin } from "@hey-api/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";
import { VitePWA } from "vite-plugin-pwa";

const MB = 1_048_576

// https://vite.dev/config/
export default defineConfig({
  fmt: {
    arrowParens: "avoid",
    endOfLine: "lf",
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
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
      "react/only-export-components": ["off", { allowConstantExport: true }],
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5200",
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
      generatedRouteTree: "./src/App/assets/route-tree.gen.ts",
      target: "react",
      quoteStyle: "single",
      semicolons: false,
    }),
    heyApiPlugin({
      config: {
        input: "./src/features/api/openapi.yml",
        output: "./src/features/api/client/generated",
        plugins: [
          {
            name: "@hey-api/client-axios",
            baseUrl: "",
            includeInEntry: true,
          },
          {
            name: "@hey-api/typescript",
            enums: "javascript",
            includeInEntry: true,
          },
          { name: "zod", includeInEntry: true },
          {
            name: "@hey-api/sdk",
            operations: { strategy: "byTags" },
            transformer: false,
            includeInEntry: true,
          },
          { name: "@tanstack/react-query", includeInEntry: true },
        ],
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: "./src/features/pwa/vite-pwa-assets.config.ts",
      },

      manifest: {
        id: "ir.bahrami85.zenbu",
        name: "Zenbu",
        short_name: "Zenbu",
        description: "A super app.",
        theme_color: "#0284C7",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico,woff,woff2,ttf}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: 10 * MB,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ]),
});
