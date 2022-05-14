import assert from 'assert'

// https://github.com/benmosher/eslint-plugin-import/issues/1753
// eslint-disable-next-line import/named
import { Consts } from './bar.js';


const ab = Consts.foo + 1
assert(ab === 2)

const config = {
  method: 'GET',
  cache: true,
}
const ret = {} as typeof config
for (const [key, value] of Object.entries(config)) {
  Object.defineProperty(ret, key, {
    configurable: true,
    enumerable: true,
    writable: true,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    value,
  })
}
assert(ret.method === config.method)
assert(ret.cache === config.cache)

