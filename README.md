# eslint-config

#### A strict [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) for instead of [TSlint](https://github.com/palantir/tslint)

[![Version](https://img.shields.io/npm/v/@waiting/eslint-config.svg)](https://www.npmjs.com/package/@waiting/eslint-config)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## Features
- `@waiting/eslint-config/recommended` extends and customize from
  - `eslint:recommended`
  - `typescript-eslint/recommended`
  - `typescript-eslint/stylisticTypeChecked`
  - `@stylistic/eslint-plugin/recommended-flat`
  - `eslint-plugin-import`
  - `eslint-plugin-unicorn`
- `@waiting/eslint-config` extends `@waiting/eslint-config/strict` and more strict rules enabled


## Install

```sh
npm i -D @waiting/eslint-config eslint
```


## Usage
[Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Add this to your `eslint.config.mjs` file:
```js
import tseslint from 'typescript-eslint'
import recommended from './src/recommended.mjs'

const rules = {
  // 'import/no-extraneous-dependencies': 0,
}

export default tseslint.config({
  extends: [
    ...recommended,
  ],
  languageOptions: {
    parserOptions: {
      project: 'tsconfig.eslint.json',
    },
  },
  rules,
})
```

## Linting

```sh
npx eslint --fix src/**/*.ts
npx eslint src/**/*.{ts,js}
```


## Learn more
- [ESlint](https://eslint.org/)
- [ESlint Configuration Files (New)](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [ESlint Rules](https://eslint.org/docs/latest/rules/)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
  - [typescript-eslint Rules](https://typescript-eslint.io/rules/)

## License
[MIT](LICENSE)


### Languages
- [English](README.md)
- [中文](README.zh-CN.md)

