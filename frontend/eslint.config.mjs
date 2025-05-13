import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    plugins: {
      import: await import("eslint-plugin-import"),
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [["builtin", "external"], "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
  {
    plugins: {
      react: await import("eslint-plugin-react"),
      "react-hooks": await import("eslint-plugin-react-hooks"),
    },
    rules: {
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  // {
  //   plugins: {
  //     tailwindcss: await import("eslint-plugin-tailwindcss"),
  //   },
  //   rules: {
  //     "tailwindcss/classnames-order": "warn",
  //   },
  // },
  {
    plugins: {
      jsxA11y: await import("eslint-plugin-jsx-a11y"),
    },
    rules: {
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-autofocus": "warn",
    },
  },
  {
    rules: {
      quotes: ["warn", "double", { avoidEscape: true }],
      semi: ["warn", "always"],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];

export default eslintConfig;
