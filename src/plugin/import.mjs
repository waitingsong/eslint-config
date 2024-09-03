
const rules = {
  // https://github.com/benmosher/eslint-plugin-import#static-analysis
  'import/default': 2,
  'import/named': 0,
  'import/namespace': 0,
  'import/no-unresolved': 0,
  'import/no-absolute-path': 2,
  'import/no-cycle': 0,
  'import/no-self-import': 2,
  'import/no-useless-path-segments': 2,
  'import/no-webpack-loader-syntax': 2,

  // https://github.com/benmosher/eslint-plugin-import#helpful-warnings
  'import/export': 2,
  'import/no-deprecated': 0,
  'import/no-mutable-exports': 2,
  'import/no-named-as-default': 1,
  'import/no-named-as-default-member': 2,

  // https://github.com/benmosher/eslint-plugin-import#style-guide
  'import/consistent-type-specifier-style': [0],
  'import/exports-last': 0,
  'import/first': 2,
  'import/max-dependencies': [1, { max: 20 }],
  'import/newline-after-import': [1, { count: 2 }],
  'import/no-default-export': 0,
  'import/no-duplicates': 1,
  'import/no-extraneous-dependencies': [2, {
    devDependencies: false,
    optionalDependencies: false,
    bundledDependencies: false,
    // packageDir: [
    //   './',
    //   '../../node_modules/@mwcp/share/',
    //   '../../node_modules/@mwcp/boot/',
    // ],
  }],
  'import/no-named-default': 2,
  'import/no-namespace': 0,
  'import/order': [
    1,
    {
      alphabetize: {
        order: 'asc',
        caseInsensitive: false,
      },
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'always',
      pathGroups: [
        {
          pattern: '##/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: '#a/**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: '#@/**',
          group: 'internal',
          position: 'after',
        },
      ],
      distinctGroup: false,
    },
  ],
}

export const importPluginRules = [
  { rules },
]
