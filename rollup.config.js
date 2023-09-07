import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from '@rollup/plugin-json';
import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import svg from "rollup-plugin-svg";

const packageJson = require("./package.json");

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs({ include: ['node_modules/**'] }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"],
      babelHelpers: 'bundled'
    }),
    json(),
    postcss(),
    external(),
    svg({ base64: true })
  ]
};