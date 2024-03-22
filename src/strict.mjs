/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import tseslint from 'typescript-eslint'

import recommended from './recommended.mjs'
import { strictRules } from './strict-rules.mjs'


export default [
  ...recommended,
  ...tseslint.configs.strictTypeChecked,
  { rules: strictRules },
]

