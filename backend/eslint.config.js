import js from "@eslint/js";
import ts from 'typescript-eslint';
import prettierConfig from "eslint-config-prettier";

/**
 * @type {Array<import("eslint").Linter.Config>}
 */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  prettierConfig,
  {
    name: "own/recommended",
    files: ["**/*.ts"],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
]
