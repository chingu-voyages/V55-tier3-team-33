import js from '@eslint/js';
import ts from 'typescript-eslint';
import node from 'eslint-plugin-n';
import jsdoc from 'eslint-plugin-jsdoc';
import prettierConfig from 'eslint-config-prettier';

/* eslint-disable jsdoc/check-tag-names */
/**
 * @type {Array<import("eslint").Linter.Config>}
 */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  node.configs['flat/recommended-module'],
  jsdoc.configs['flat/recommended-typescript-error'],
  prettierConfig,
  {
    name: 'own/recommended',
    files: ['**/*.ts'],
    rules: {
      'jsdoc/require-jsdoc': ['error', { publicOnly: true }],
      'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'after-used', destructuredArrayIgnorePattern: '^_' },
      ],
    },
  },
];
