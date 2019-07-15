/* eslint-disable @typescript-eslint/no-var-requires */
const test = require('tape')

const config = require('../base.js')


test('test basic properties of config', (t) => {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.env))
  t.ok(isObject(config.globals))
  t.end()
})

function isObject(obj) {
  return typeof obj === 'object' && obj ? true : false
}
