/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
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

export default [
  ...base,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
  ...styles,
  ...importPluginRules,
  ...unicornPluginRules,
  { rules: lintRules },
]


