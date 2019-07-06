module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    document: 'readonly',
    globalThis: 'readonly',
    navigator: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
    },
    ecmaVersion: 2019,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "require-atomic-updates": 0,
  }
}

