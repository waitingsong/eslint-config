/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import { base } from './base.mjs'
import { importPluginRules } from './plugin/import.mjs'
import { unicornPluginRules } from './plugin/unicorn.mjs'
import { recommendedStyles, lintRules } from './rule/recommended-rules.mjs'


export default [
  ...base,
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...recommendedStyles,
  ...importPluginRules,
  ...unicornPluginRules,
  { rules: lintRules },
]
