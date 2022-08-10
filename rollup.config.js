import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";

const packageJson = require("./package.json");

export default [
  {
    external: [
      "react",
      "@jsonforms/core",
      "@jsonforms/react",
      "@jsonforms/material-renderers",
      "@material-ui/core",
    ],
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "iife",
        name: "MonacoJSONForms",
        sourcemap: true,
        globals: {
          react: "React",
          "@jsonforms/core": "JSONFormsCore",
          "@jsonforms/react": "JSONFormsReact",
          "@jsonforms/material-renderers": "JSONFormsMaterial",
          "@material-ui/core": "MaterialUI",
        },
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ browser: "true" }),
      json(),
      commonjs(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
