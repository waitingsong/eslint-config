import globals from 'globals'


export const testConfig = {
  files: ['test/**'],
  languageOptions: {
    globals: {
      ...globals.mocha,
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/prefer-ts-expect-error': 0,
    'no-console': 0,
    'unicorn/filename-case': 0,
    // 'unicorn/filename-case': [
    //   2,
    //   {
    //     cases: {
    //       camelCase: false,
    //       kebabCase: true,
    //       pascalCase: false,
    //       snakeCase: true,
    //     },
    //   },
    // ],
  },
}
