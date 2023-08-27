import path from "path";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

const baseConfig = {
  onwarn: function (warning) {
    if (warning.code === "THIS_IS_UNDEFINED") return;
  },
  plugins: [typescript(), commonjs(), json(), terser()],
};

export default [
  {
    input: "src/index.ts",
    output: {
      file: path.resolve("index.js"),
    },
    ...baseConfig,
  },
];
