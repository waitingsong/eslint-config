/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import importPlugin from 'eslint-plugin-import'
import unicornPlugin from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

// https://eslint.org/blog/2022/08/new-config-system-part-2/
// https://typescript-eslint.io/getting-started/typed-linting/monorepos

export const base = [
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/*.d.ts',
    ],
  },
  {
    languageOptions: {
      // ecmaVersion: 'latest',
      // sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
      unicorn: unicornPlugin,
    },
  },
]
