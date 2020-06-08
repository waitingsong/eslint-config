import * as assert from 'assert'

// https://github.com/benmosher/eslint-plugin-import/issues/1753
// eslint-disable-next-line import/named
import { Consts } from './bar';


const ab = Consts.foo + 1
assert(ab === 2)

