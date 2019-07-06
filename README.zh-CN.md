# eslint-config

#### 严格的针对[TypeScript 项目](https://github.com/Microsoft/TypeScript)的[TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) [共享规则](https://eslint.org/docs/developer-guide/shareable-configs)，用于替代 [TSlint](https://github.com/palantir/tslint)

[![Version](https://img.shields.io/npm/v/@waiting/eslint-config.svg)](https://www.npmjs.com/package/@waiting/eslint-config)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## 功能
- `@waiting/eslint-config/recommended` 扩展并定制于以下规则
  - `eslint:recommended`,
  - `@typescript-eslint/eslint-recommended`,
  - `@typescript-eslint/recommended`,
- `@waiting/eslint-config` 扩展于 `@waiting/eslint-config/recommended` 并开启更多限制规则


## 安装
```sh
npm i -D @waiting/eslint-config \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/eslint-plugin-tslint \
    @typescript-eslint/parser \
    eslint
```


## 用途
共享配置用于 `.eslintrc.*` 文件 `extends` 项目，详细文档见 [Shareable Configs](https://cn.eslint.org/docs/developer-guide/shareable-configs)

添加以下内容到你的 `.eslintrc.*` 文件：
- `.eslintrc.yaml` 
  ```yml
  extends: '@waiting/eslint-config' 
  ```
- `.eslintrc.json` 
  ```json
  {
    "extends": "@waiting/eslint-config"
  }
  ```

你可以在 `.eslintrc.*` 文件中覆盖共享配置中的设置。
并且可以添加在如 `./test` 目录下添加文件 `.eslintrc.yaml` 使用较少规则以便提高检查速度：
```yml
# .eslintrc.yaml
extends: '@waiting/eslint-config/recommended'
```


## Learn more
- [ESlint](https://cn.eslint.org/)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [TSLint will be deprecated](https://github.com/palantir/tslint/issues/4534)


## License
[MIT](LICENSE)


### Languages
- [English](README.md)
- [中文](README.zh-CN.md)
