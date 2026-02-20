import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig(({ mode }) => {
  // * Load env file based on `mode` in the current working directory.
  // * Set the third parameter to "" to load all env regardless of the
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
        insertTypesEntry: true // * creates dist/index.d.ts entry -- 02/18/2026 JW
      })
    ],
    server: {
      port: env.PORT
    },
    css: {
      postcss: "./postcss.config.js"
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./lib") // * Allows imports from "lib" using "@/path/to/file" and must match the "paths" alias in tsconfig.json -- 02/18/2026 JW
      }
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "lib/index.ts"), // * Entry point of your library -- 02/18/2026 JW
        name: "shared-components", // * lib name -- 02/18/2026 JW
        fileName: "shared-components", // * Output file name -- 02/18/2026 JW
        formats: ["es", "cjs"] // * Output formats (ESM and CommonJS) -- 02/18/2026 JW
      },
      cssCodeSplit: false,
      rollupOptions: {
        external: ["react", "react-dom"] // * External dependencies -- 02/18/2026 JW
      }
    }
  };
});
