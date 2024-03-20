import importPlugin from 'eslint-plugin-import'
import unicornPlugin from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

// https://eslint.org/blog/2022/08/new-config-system-part-2/
export default [
  {
    ignores: [
      '**/dist',
      '**/node_modules',
    ],
  },
  {
    languageOptions: {
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
