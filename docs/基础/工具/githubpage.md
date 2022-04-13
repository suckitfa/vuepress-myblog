```sh
yarn add gh-pages
```

### 修改`package.json`文件
```js
"home-page":"./"
"scripts"{
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
}
```