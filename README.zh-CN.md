# eslint-config

#### 严格的针对[TypeScript 项目](https://github.com/Microsoft/TypeScript)的[TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) [共享规则](https://eslint.org/docs/developer-guide/shareable-configs)，用于替代 [TSlint](https://github.com/palantir/tslint)

[![Version](https://img.shields.io/npm/v/@waiting/eslint-config.svg)](https://www.npmjs.com/package/@waiting/eslint-config)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## 功能
- `@waiting/eslint-config/recommended` 扩展并定制于以下规则
  - `eslint:recommended`
  - `typescript-eslint/recommended`
  - `typescript-eslint/stylisticTypeChecked`
  - `@stylistic/eslint-plugin/recommended-flat`
  - `eslint-plugin-import`
  - `eslint-plugin-unicorn`
- `@waiting/eslint-config` 扩展于 `@waiting/eslint-config/strict` 并开启更多限制规则


## 安装

```sh
npm i -D @waiting/eslint-config eslint
```


## 用途
文档见 [Shareable Configs](https://cn.eslint.org/docs/developer-guide/shareable-configs)

添加以下内容到你的 `eslint.config.mjs` 文件：
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

## 检查

```sh
npx eslint --fix src/**/*.ts
npx eslint src/**/*.{ts,js}
```


## Learn more
- [ESlint](https://cn.eslint.org/)
- [ESlint Configuration Files (New)](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [ESlint Rules](https://eslint.org/docs/latest/rules/)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [typescript-eslint Rules](https://typescript-eslint.io/rules/)


## License
[MIT](LICENSE)


### Languages
- [English](README.md)
- [中文](README.zh-CN.md)

