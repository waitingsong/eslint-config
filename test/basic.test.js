import test from 'tape'

import config from '../src/base.mjs'


test('test basic properties of config', (tt) => {
  tt.ok(Array.isArray(config))
  tt.end()
})

