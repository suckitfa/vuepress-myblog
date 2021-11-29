# wepback
### 安装webpack
```sh
# 安装 webpack 和 webpack-cli命令行工具
npm install webpack webpack-cli --save-dev
# 本地开发服务器，提供热更新等功能
npm install webpack-dev-server --save-dev

# --save-dev 将资源放在开发环境中 , devDependency中
```
简单的打包命令的配置

`package.json`

一般工程源码放在目录`src`,输出源码放在 目录`dist`

webpack默认入口为`/src/index.js`

```js
"scripts": {
        "build": "npx webpack --entry=./src/index.js --output-filename=bundle.js --mode=development"
    },
```

- output path使用绝对路径
