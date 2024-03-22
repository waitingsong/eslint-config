import tseslint from 'typescript-eslint'

import recommended from './recommended.mjs'
import { strictRules } from './strict-rules.mjs'


export default [
  ...recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeChecked,
  { rules: strictRules },
]

