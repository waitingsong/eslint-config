/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import base from './base.mjs'
import importPluginRules from './plugin/import.mjs'
import unicornPluginRules from './plugin/unicorn.mjs'
import { stylesRules, lintRules } from './recommended-rules.mjs'


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


