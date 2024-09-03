import test from 'tape'

import config from '../src/recommended.mjs'


test('test basic properties of config', (tt) => {
  tt.ok(Array.isArray(config))
  tt.end()
})

