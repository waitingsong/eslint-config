module.exports = {
  extends: ['./recommended.js'],
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/member-ordering': [2],
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/no-explicit-any': [1, { ignoreRestArgs: true } ],
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-includes': 1,
    // "@typescript-eslint/prefer-readonly": 1,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    // "@typescript-eslint/strict-boolean-expressions": 2,
    '@typescript-eslint/unbound-method': 2,

    // https://eslint.org/docs/rules/
    'accessor-pairs': 2,
    'no-await-in-loop': 1,
    'no-console': [1, { allow: ['warn', 'error'] } ],
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-template-curly-in-string': 1,
    'no-undef-init': 1,
    radix: 2,
    'require-atomic-updates': 0,
    'require-unicode-regexp': 1,

    // https://eslint.org/docs/rules/#nodejs-and-commonjs
    'no-path-concat': 2,

    // https://eslint.org/docs/rules/#stylistic-issues
    'consistent-this': 1,
    'id-length': [2, { min: 2, exceptions: ['k', 'v', 'x'] } ],
    'max-depth': [2, { max: 6 } ],
    'max-len': [
      2,
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-lines': [2, { max: 1000, skipBlankLines: true, skipComments: true } ],
    'max-lines-per-function': [
      2, {
        max: 100, skipBlankLines: true, skipComments: true, IIFEs: true,
      },
    ],
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-mixed-operators': 1,
    'no-multi-assign': 2,
    'no-negated-condition': 1,
    'no-new-object': 2,
    'no-plusplus': 2,
    'no-tabs': 1,
    'no-unneeded-ternary': 1,
    'prefer-object-spread': 1,
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-destructuring': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'rest-spread-spacing': [1, 'never'],

    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': [2, { devDependencies: false, optionalDependencies: false, peerDependencies: false } ],
  },
}
