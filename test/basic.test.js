/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies, @typescript-eslint/no-require-imports */
import test from 'tape'

import config from '../src/base.mjs'


test('test basic properties of config', (tt) => {
  tt.ok(Array.isArray(config))
  tt.end()
})

