(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{555:function(s,a,n){"use strict";n.r(a);var e=n(45),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"webpack-性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-性能优化"}},[s._v("#")]),s._v(" Webpack 性能优化")]),s._v(" "),n("p",[s._v("在这一的章节中，我不会浪费篇幅给大家讲如何写配置文件。"),n("strong",[s._v("如果你想学习这方面的内容，那么完全可以去官网学习")]),s._v("。在这部分的内容中，我们会聚焦于以下两个知识点，并且每一个知识点都属于高频考点：")]),s._v(" "),n("ul",[n("li",[s._v("有哪些方式可以减少 Webpack 的打包时间")]),s._v(" "),n("li",[s._v("有哪些方式可以让 Webpack 打出来的包更小")])]),s._v(" "),n("h2",{attrs:{id:"减少-webpack-打包时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#减少-webpack-打包时间"}},[s._v("#")]),s._v(" 减少 Webpack 打包时间")]),s._v(" "),n("h3",{attrs:{id:"优化-loader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化-loader"}},[s._v("#")]),s._v(" 优化 Loader")]),s._v(" "),n("p",[s._v("对于 Loader 来说，影响打包效率首当其冲必属 Babel 了。因为 Babel 会将代码转为字符串生成 AST，然后对 AST 继续进行转变最后再生成新的代码，项目越大，"),n("strong",[s._v("转换代码越多，效率就越低")]),s._v("。当然了，我们是有办法优化的。")]),s._v(" "),n("p",[s._v("首先我们可以"),n("strong",[s._v("优化 Loader 的文件搜索范围")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  module: {\n    rules: [\n      {\n        // js 文件才使用 babel\n        test: /\\.js$/,\n        loader: 'babel-loader',\n        // 只在 src 文件夹下查找\n        include: [resolve('src')],\n        // 不会去查找的路径\n        exclude: /node_modules/\n      }\n    ]\n  }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("对于 Babel 来说，我们肯定是希望只作用在 JS 代码上的，然后 "),n("code",[s._v("node_modules")]),s._v(" 中使用的代码都是编译过的，所以我们也完全没有必要再去处理一遍。")]),s._v(" "),n("p",[s._v("当然这样做还不够，我们还可以将 Babel 编译过的文件"),n("strong",[s._v("缓存")]),s._v("起来，下次只需要编译更改过的代码文件即可，这样可以大幅度加快打包时间")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("loader: 'babel-loader?cacheDirectory=true'\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"happypack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#happypack"}},[s._v("#")]),s._v(" HappyPack")]),s._v(" "),n("p",[s._v("受限于 Node 是单线程运行的，所以 Webpack 在打包的过程中也是单线程的，特别是在执行 Loader 的时候，长时间编译的任务很多，这样就会导致等待的情况。")]),s._v(" "),n("p",[n("strong",[s._v("HappyPack 可以将 Loader 的同步执行转换为并行的")]),s._v("，这样就能充分利用系统资源来加快打包效率了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module: {\n  loaders: [\n    {\n      test: /\\.js$/,\n      include: [resolve('src')],\n      exclude: /node_modules/,\n      // id 后面的内容对应下面\n      loader: 'happypack/loader?id=happybabel'\n    }\n  ]\n},\nplugins: [\n  new HappyPack({\n    id: 'happybabel',\n    loaders: ['babel-loader?cacheDirectory'],\n    // 开启 4 个线程\n    threads: 4\n  })\n]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"dllplugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dllplugin"}},[s._v("#")]),s._v(" DllPlugin")]),s._v(" "),n("p",[n("strong",[s._v("DllPlugin 可以将特定的类库提前打包然后引入")]),s._v("。这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案。")]),s._v(" "),n("p",[s._v("接下来我们就来学习如何使用 DllPlugin")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 单独配置在一个文件中\n// webpack.dll.conf.js\nconst path = require('path')\nconst webpack = require('webpack')\nmodule.exports = {\n  entry: {\n    // 想统一打包的类库\n    vendor: ['react']\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    filename: '[name].dll.js',\n    library: '[name]-[hash]'\n  },\n  plugins: [\n    new webpack.DllPlugin({\n      // name 必须和 output.library 一致\n      name: '[name]-[hash]',\n      // 该属性需要与 DllReferencePlugin 中一致\n      context: __dirname,\n      path: path.join(__dirname, 'dist', '[name]-manifest.json')\n    })\n  ]\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("然后我们需要执行这个配置文件生成依赖文件，接下来我们需要使用 "),n("code",[s._v("DllReferencePlugin")]),s._v(" 将依赖文件引入项目中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// webpack.conf.js\nmodule.exports = {\n  // ...省略其他配置\n  plugins: [\n    new webpack.DllReferencePlugin({\n      context: __dirname,\n      // manifest 就是之前打包出来的 json 文件\n      manifest: require('./dist/vendor-manifest.json'),\n    })\n  ]\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"代码压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[s._v("#")]),s._v(" 代码压缩")]),s._v(" "),n("p",[s._v("在 Webpack3 中，我们一般使用 "),n("code",[s._v("UglifyJS")]),s._v(" 来压缩代码，但是这个是单线程运行的，为了加快效率，我们可以使用 "),n("code",[s._v("webpack-parallel-uglify-plugin")]),s._v(" 来并行运行 "),n("code",[s._v("UglifyJS")]),s._v("，从而提高效率。")]),s._v(" "),n("p",[s._v("在 Webpack4 中，我们就不需要以上这些操作了，只需要将 "),n("code",[s._v("mode")]),s._v(" 设置为 "),n("code",[s._v("production")]),s._v(" 就可以默认开启以上功能。代码压缩也是我们必做的性能优化方案，当然我们不止可以压缩 JS 代码，还可以压缩 HTML、CSS 代码，并且在压缩 JS 代码的过程中，我们还可以通过配置实现比如删除 "),n("code",[s._v("console.log")]),s._v(" 这类代码的功能。")]),s._v(" "),n("h3",{attrs:{id:"一些小的优化点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一些小的优化点"}},[s._v("#")]),s._v(" 一些小的优化点")]),s._v(" "),n("p",[s._v("我们还可以通过一些小的优化点来加快打包速度")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("resolve.extensions")]),s._v("：用来表明文件后缀列表，默认查找顺序是 "),n("code",[s._v("['.js', '.json']")]),s._v("，如果你的导入文件没有添加后缀就会按照这个顺序查找文件。我们应该尽可能减少后缀列表长度，然后将出现频率高的后缀排在前面")]),s._v(" "),n("li",[n("code",[s._v("resolve.alias")]),s._v("：可以通过别名的方式来映射一个路径，能让 Webpack 更快找到路径")]),s._v(" "),n("li",[n("code",[s._v("module.noParse")]),s._v("：如果你确定一个文件下没有其他依赖，就可以使用该属性让 Webpack 不扫描该文件，这种方式对于大型的类库很有帮助")])]),s._v(" "),n("h2",{attrs:{id:"减少-webpack-打包后的文件体积"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#减少-webpack-打包后的文件体积"}},[s._v("#")]),s._v(" 减少 Webpack 打包后的文件体积")]),s._v(" "),n("blockquote",[n("p",[s._v("注意：该内容也属于性能优化领域。")])]),s._v(" "),n("h3",{attrs:{id:"按需加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[s._v("#")]),s._v(" 按需加载")]),s._v(" "),n("p",[s._v("想必大家在开发 SPA 项目的时候，项目中都会存在十几甚至更多的路由页面。如果我们将这些页面全部打包进一个 JS 文件的话，虽然将多个请求合并了，但是同样也加载了很多并不需要的代码，耗费了更长的时间。那么为了首页能更快地呈现给用户，我们肯定是希望首页能加载的文件体积越小越好，"),n("strong",[s._v("这时候我们就可以使用按需加载，将每个路由页面单独打包为一个文件")]),s._v("。当然不仅仅路由可以按需加载，对于 "),n("code",[s._v("loadash")]),s._v(" 这种大型类库同样可以使用这个功能。")]),s._v(" "),n("p",[s._v("按需加载的代码实现这里就不详细展开了，因为鉴于用的框架不同，实现起来都是不一样的。当然了，虽然他们的用法可能不同，但是底层的机制都是一样的。都是当使用的时候再去下载对应文件，返回一个 "),n("code",[s._v("Promise")]),s._v("，当 "),n("code",[s._v("Promise")]),s._v(" 成功以后去执行回调。")]),s._v(" "),n("h3",{attrs:{id:"scope-hoisting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scope-hoisting"}},[s._v("#")]),s._v(" Scope Hoisting")]),s._v(" "),n("p",[n("strong",[s._v("Scope Hoisting 会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去。")])]),s._v(" "),n("p",[s._v("比如我们希望打包两个文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// test.js\nexport const a = 1\n// index.js\nimport { a } from './test.js'\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("对于这种情况，我们打包出来的代码会类似这样")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[\n  /* 0 */\n  function (module, exports, require) {\n    //...\n  },\n  /* 1 */\n  function (module, exports, require) {\n    //...\n  }\n]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("但是如果我们使用 Scope Hoisting 的话，代码就会尽可能的合并到一个函数中去，也就变成了这样的类似代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[\n  /* 0 */\n  function (module, exports, require) {\n    //...\n  }\n]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这样的打包方式生成的代码明显比之前的少多了。如果在 Webpack4 中你希望开启这个功能，只需要启用 "),n("code",[s._v("optimization.concatenateModules")]),s._v(" 就可以了。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  optimization: {\n    concatenateModules: true\n  }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"tree-shaking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[s._v("#")]),s._v(" Tree Shaking")]),s._v(" "),n("p",[n("strong",[s._v("Tree Shaking 可以实现删除项目中未被引用的代码")]),s._v("，比如")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// test.js\nexport const a = 1\nexport const b = 2\n// index.js\nimport { a } from './test.js'\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("对于以上情况，"),n("code",[s._v("test")]),s._v(" 文件中的变量 "),n("code",[s._v("b")]),s._v(" 如果没有在项目中使用到的话，就不会被打包到文件中。")]),s._v(" "),n("p",[s._v("如果你使用 Webpack 4 的话，开启生产环境就会自动启动这个优化功能。")]),s._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),n("p",[s._v("在这一章节中，我们学习了如何使用 Webpack 去进行性能优化以及如何减少打包时间。")]),s._v(" "),n("p",[s._v("Webpack 的版本更新很快，各个版本之间实现优化的方式可能都会有区别，所以我没有使用过多的代码去展示如何实现一个功能。"),n("strong",[s._v("这一章节的重点是学习到我们可以通过什么方式去优化，具体的代码实现可以查找具体版本对应的代码即可。")])])])}),[],!1,null,null,null);a.default=t.exports}}]);