export default {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2022: true,
    jest: true,
    mocha: true,
    node: true,
  },
  extends: [
    '../plugins/import.yml',
    '../plugins/node.yml',
    '../plugins/unicorn.yml',
  ],
  globals: {
    Atomics: 'readonly',
    document: 'readonly',
    globalThis: 'readonly',
    navigator: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: 'readonly',
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
    },
    ecmaVersion: 'latest',
    extraFileExtensions: ['.cjs', '.mjs', '.cts', '.mts'],
    project: true,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unicorn'],
  root: true,
}

