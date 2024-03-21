import recommended from './recommended.mjs'
import { strictRules } from './strict-rules.mjs'


export default [
  ...recommended,
  { rules: strictRules },
]

