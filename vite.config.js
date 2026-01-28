import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
  // * Load env file based on `mode` in the current working directory.
  // * Set the third parameter to '' to load all env regardless of the
  // * `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    plugins: [
      react(),
      eslintPlugin({
        include: ["lib/**/*.{ts,tsx}", "src/**/*.{ts,tsx}"]
      }),
      dts({
        entryRoot: "lib",
        outDir: "dist",
        insertTypesEntry: true // * creates dist/index.d.ts entry
      })],
    server: {
      port: env.PORT
    },
    css: {
      postcss: {
        plugins: [
          postcssImport,
          postcssNested,
          autoprefixer,
          postcssPresetEnv({ stage: 1 })
        ]
      }
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "lib/index.ts"), // * Entry point of your library
        name: "shared-components", // * lib name
        fileName: "shared-components", // * Output file name
        formats: ["es", "cjs"] // * Output formats (ESM and CommonJS)
      },
      cssCodeSplit: false,
      rollupOptions: {
        external: ["react", "react-dom"] // * External dependencies
      },
    }
  };
});