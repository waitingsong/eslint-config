/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { base } from './base.mjs'
import { importPluginRules } from './plugin/import.mjs'
import { unicornPluginRules } from './plugin/unicorn.mjs'
import { lintRules, stylesRules } from './rule/recommended-rules.mjs'


// https://eslint.style/packages/default
const styles = [
  stylistic.configs['recommended-flat'],
  {
    rules: {
      ...stylesRules,
    },
  },
]
const testConfig = {
  // files: ['packages/*/test/**/*.ts', 'test/**/*.ts'],
  languageOptions: {
    globals: {
      ...globals.mocha,
    },
  },
  rules: {
    ...lintRules,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/prefer-ts-expect-error': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'unicorn/filename-case': 0,
    'import/consistent-type-specifier-style': [0],
    '@typescript-eslint/consistent-type-exports': [1, { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/consistent-type-imports': [1],
  },
}


export default [
  ...base,
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...styles,
  ...importPluginRules,
  ...unicornPluginRules,
  testConfig,
]


