import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import plugin from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const importPlugin = await import("eslint-plugin-import");
const reactPlugin = await import("eslint-plugin-react");
const reactHooksPlugin = await import("eslint-plugin-react-hooks");
const jsxA11yPlugin = await import("eslint-plugin-jsx-a11y");
// const tailwindcssPlugin = await import("eslint-plugin-tailwindcss");

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended"
  ),

  {
    plugins: {
      import: importPlugin.default,
      react: reactPlugin.default,
      "react-hooks": reactHooksPlugin.default,
      "jsx-a11y": jsxA11yPlugin.default,
      // "tailwindcss": tailwindcssPlugin.default
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "prettier/prettier": "warn",
      "react/self-closing-comp": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-autofocus": "warn",
      // optional tailwind rules (disabled for now)
      // "tailwindcss/classnames-order": "warn",

      quotes: ["warn", "double", { avoidEscape: true }],
      semi: ["warn", "always"],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];
