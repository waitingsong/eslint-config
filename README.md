# eslint-config

#### A strict [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) for instead of [TSlint](https://github.com/palantir/tslint)

[![Version](https://img.shields.io/npm/v/@waiting/eslint-config.svg)](https://www.npmjs.com/package/@waiting/eslint-config)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## Features
- `@waiting/eslint-config/recommended` extends and customize from
  - `eslint-plugin-import`
  - `eslint:recommended`
  - `@typescript-eslint/eslint-recommended`
  - `@typescript-eslint/recommended`
- `@waiting/eslint-config` extends `@waiting/eslint-config/recommended` and enable more strict rules


## Install

```sh
npm i -D @waiting/eslint-config eslint
```


## Usage
Shareable configs are designed to work with the `extends` feature of `.eslintrc.*` files.
You can learn more about
[Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Add this to your `.eslintrc.*` file:
- `.eslintrc.yml` 
  ```yml
  extends: '@waiting/eslint-config' 
  ```
- `.eslintrc.json` 
  ```json
  {
    "extends": "@waiting/eslint-config"
  }
  ```

You can override settings from the shareable config by adding them directly into your
`.eslintrc.*` file.
And add file `.eslintrc.yml` under the folder such as `./test` for fast linting with less strict rules:
```yml
# .eslintrc.yml
extends: '@waiting/eslint-config/recommended'
```

## Linting

```sh
eslint --fix src/**/*.ts
eslint src/**/*.{ts,js}
```


## Learn more
- [ESlint](https://eslint.org/)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [TSLint will be deprecated](https://github.com/palantir/tslint/issues/4534)
- [Eslint: Migrating to v6.0.0](https://eslint.org/docs/user-guide/migrating-to-6.0.0#package-loading-simplification)

## License
[MIT](LICENSE)


### Languages
- [English](README.md)
- [中文](README.zh-CN.md)
