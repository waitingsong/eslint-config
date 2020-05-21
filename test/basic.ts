/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies, @typescript-eslint/no-require-imports */
import * as test from 'tape'

import * as config from '../base.js'


// export const fullPath = __dirname + '/foo.js'

// console.log(test, config)


export function isObject(obj: unknown): boolean {
  return !! (typeof obj === 'object' && obj)
}

export {
  test,
  config,
}

