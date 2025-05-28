import js from '@eslint/js';
import ts from 'typescript-eslint';
import node from 'eslint-plugin-n';
import prettierConfig from 'eslint-config-prettier';

/**
 * @type {Array<import("eslint").Linter.Config>}
 */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  node.configs['flat/recommended-module'],
  prettierConfig,
  {
    name: 'own/recommended',
    files: ['**/*.ts'],
    rules: {
      'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'after-used', destructuredArrayIgnorePattern: '^_' },
      ],
    },
  },
];
