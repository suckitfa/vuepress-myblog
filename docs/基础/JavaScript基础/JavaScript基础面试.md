### JS Web API

- DOM
- BOM
- 事件绑定
- ajax
- 存储

### DOM

1. DOM的常用API

   ```js
   getElementById
   getElementsByClassName
   getElementsByTagName
   querySelectorAll(选择器)
   querySelector
   ```

2. attr和property的区别

   ```js
   attribute: 直接在标签上显示,刚好有一些默认的比如：style,class等等
   setAttribute()
   getAttribute()
   property: 使用JavaScript来操作DOM节点对象 的一种方式
    div.style
   div.classList
   div.className
   div.style.width
   ```

3. 一次性插入多个DOM节点，考虑性能

4. DOM的结构操作

   ```js
   appendChild
   parentNode
   childNodes
   parentElement
   innerHTML
   removeChild
   ```

### DOM性能

- DOM操作非常昂贵，尽量避免进行DOM操作

- 缓存DOM查询的结构

  ```js
  // 不好的例子
  for(let i = 0; i < document.getElementsByClassName('p').length; ++i) {
    // 每次循环，都会计算length, 频繁DOM查询
  }
  
  // 缓存DOM查询的结果
  const pList = document.getElementsByClassName('p').length;
  const pListLength = pList.length
  for(let i = 0; i < pListLength; ++i) {
    // 缓存
  }
  ```

- 将多次操作压缩成一次

  ```js
  // 插入操作, frag还未进入DOM Tree中
  const frag = document.createDocumentFragment()
  ```

  

### 导致浏览器重绘和重排的操作

### BOM

- navigator

  ```js
  const ua = navagator.userAgent
  // 浏览器的检测方案
  ```

  

- location

  ```js
  href
  protocol
  pathname
  search
  hash
  host
  ```

  

- screen

  ```js
  screen.height
  screen.width
  ```

  

-  如何识别浏览器的类型
- 分解url的各个部分



### 事件模型（捕获阶段,目标阶段，冒泡阶段）

- 编写一个通用的事件监听函数

- 描述时间冒泡的流程

  ```js
  想象水泡从水底向上冒出的过程(事件流程的最后一个阶段)
  ```

  

- 无线下拉列表，如何监听每个图片的点击

  ```js
  // addEventListener(eventName,callBackFn)
  通用的事件绑定，支持事件代理，正常的事件绑定
  function bindEvent(element,type,selector,cb) {
    if(cb == null ){
      cb = selector
      selector = null
    }
    element.addEventListener(type,event=>{
      const eventTarget = event.target
      if(selector) {
        // 代理
        if(target.matches(selector)) {
          // 判断DOM元素是否符合选择器
          cb.call(target,event)
        }
      } else {
        // 普通事件绑定
        cb.call(target,event)
      }
    })
  }
  event.preventDefault()// 阻止默认行为
  event.stopPropagation() 
  event.target
  ```

  

### AJAX

> fetch
>
> axios

### 简易的Ajax

```js
var ajax = new XMLHttpRequest()
// 传入url地址和请求方法
ajax.open("GET",URL,false) // 最后一个参数控制异步
ajax.onreadystateChange = function() {
  	if(ajax.readyState === 4) {
      if (ajax.status === 200) {
        alert(xhr.responseText)
      }
    }
}
ajax.send(null) // 请求体
```

### 状态码 readyState

- 0 （未初始化） ，还没有调用send()方法
- 1  （载入）已调用send()方法，正在发送请求
- 2 （载入完成） ，send()方法执行完成，已经接收全部响应内容
- 3 （交互） 正在解析响应内容
- 4 （完成）响应内容解析完成， 可以在客户端调用(请求回来的数据) 

### HTTP请求： status

- 2xx 表示成功处理请求
- 3xx 需要重定向，浏览器直接自己处理 如301 302 
- 4xx 客户端请求错误，如404 403
- 5xx 服务端内部错误，后端挂了

### 跨域问题

> 浏览器安全限制:  协议，域名，端口 三者必须一样

```js
img 统计打点？？ 第三方统计服务
link 应用cdn， 外域
script 实现JSONP
这些标签无视同源策略
```

### JSONP的实现

```js
// 前端已经定义好了callback
// script发送请求给后端，后端拼接callback({id:100})
// 浏览器加载执行
// 请求jsonp例子URL
http://test.com/jsonp.js?username=xxx&callback=testcb
// 后端根据传入的参数来动态拼接
```

### CORS 服务器设置http header

```js
Access-Control-Allow-Origin
-Headers
-Methods
-Credentials
```



### 浏览器存储

- cookie

  ```js
  document.cookie="k1=v1;k2=v2;"
  存储大小最大4KB
  http请求时候发送到服务端，增加数据量
  api不友好哈..........键相同，覆盖，不同追加
  ```

  

- localStorage / sessionStorage （以浏览器的标签页为界限）

  ```js
  getItem(key)
  setItem(key,value)
  removeItem(key)
  clear()
  key(index)
  length
  不会随着HTTP请求发送出去
  最大5M
  永久存储在浏览器，除非代码删除或者手动删除 （用的更多？）
  在同源（域/端口/协议）的所有窗口下共享数据
  ```

  ```js
   （关闭标签后，数据清空）
  （限制在一个标签，开一个标签一个存储）
  但是，它在同一标签页下的 iframe 之间是共享的（假如它们来自相同的源）。
  数据在页面刷新后仍然保留，但在关闭/重新打开浏览器标签页后不会被保留
  ```

- Web 存储对象 `localStorage` 和 `sessionStorage` 允许我们在浏览器中保存键/值对。

  - `key` 和 `value` 都必须为**字符串。**
  - 存储大小限制为 5MB+，具体取决于浏览器。
  - 它们不会过期。
  - 数据绑定到源（域/端口/协议）。

  | `localStorage`                       | `sessionStorage`                                       |
  | :----------------------------------- | :----------------------------------------------------- |
  | 在同源的所有标签页和窗口之间共享数据 | 在当前浏览器标签页中可见，包括同源的 iframe            |
  | 浏览器重启后数据仍然保留             | 页面刷新后数据仍然保留（但标签页关闭后数据则不再保留） |

  API：

  - `setItem(key, value)` —— 存储键/值对。
  - `getItem(key)` —— 按照键获取值。
  - `removeItem(key)` —— 删除键及其对应的值。
  - `clear()` —— 删除所有数据。
  - `key(index)` —— 获取该索引下的键名。
  - `length` —— 存储的内容的长度。
  - 使用 `Object.keys` 来获取所有的键。
  - 我们将键作为对象属性来访问，在这种情况下，不会触发 `storage` 事件。

  Storage 事件：

  - 在调用 `setItem`，`removeItem`，`clear` 方法后触发。
  - 包含有关操作的所有数据（`key/oldValue/newValue`），文档 `url` 和存储对象 `storageArea`。
  - 在所有可访问到存储对象的 `window` 对象上触发，导致当前数据改变的 `window` 对象除外（对于 `sessionStorage` 是在当前标签页下，对于 `localStorage` 是在全局，即所有同源的窗口）。

### 运行环境
"大浏览器" ： 浏览器 & node.js & webview(手机上具备浏览器的功能)
下载网页代码，渲染网页，执行JavaScript
- 网页加载过程
- 性能优化
- 安全

### 网页的加载过程
> 从输入URL到渲染出页面的整个过程？
> 1. DNS解析: 域名->IP地址
> 2. 浏览器根据IP地址向服务器发起请求http
> 3. 服务器处理http请求，并返回给浏览器
> 4. HTML生成DOM ， CSSOM
> 5. DOM和CSSOM生成RenderTree
> 6. 根据RenderTree渲染页面
> 7. 遇到script，则暂停渲染，优先加载JS代码，完成再继续
### window.onload & window.DOMContentLoaded
> 资源：html代码，媒体文件，JavaScript CSS
```js
window.addEventListener('load',function(){
  // 页面全部资源加载完才会执行，包括图片，视频
})

document.addEventListener('DOMContentLoaded',function(){
  // DOM渲染完即触发，此时图片，视频还可能没有加载完成
})
```
### 性能优化的方向
> 多使用内存和缓存 webpack，文件名加后缀，触发http缓存机制，返回304
> 减少CPU计算量，减少网络加载耗时
> （适用所有的编程的性能优化-空间换时间)
> 减少代码体积,webpack压缩代码
> 减少代码请求次数,代码合并，SSR服务端渲染(Vue,React)，缓存
> CDN：适用更快的
### 防抖和节流
> 监听一个输入框，文字变化后触发change事件
> 直接用keyup事件，则会频发触发change事件
> 防抖：用户输入暂停才出发change事件
```js
function debounce(cb, delay = 500) {
            // timer是在闭包中
            let timer = null
            return function() {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    console.log(this)
                        // 当前this是什么?
                    cb.apply(this, arguments)
                    timer = null
                }, delay)
            }
        }
```
> 拖拽一个元素,随时拿到元素位置
> 直接用drag事件，则会频发触发，很容易卡顿
> 保持一个频率频繁触发
```js
function throttle(cb, delay = 300) {
            let timer = null
            return function() {
                if (timer) return
                timer = setTimeout(() => {
                    cb.apply(this, arguments)
                    timer = null
                }, delay);
            }
        }
```
### 异步编程

### web安全
- xss
> 获取cookie,发送给服务器
> 替换
```js
过滤 > <
```
- xsrf
- post方法 , 密码，短信验证码，指纹， csrf_token


### 开发环境
- git
```sh
git add .
git checkout xxx
git commit -m "xxx"
git push -u origin master
git pull origin master
git branch 
git branch -b xxx
git merge xxx #合并分支
```
```sh
# 登入分支 feat
git checkout -b feature-login
git add .
git commit -m "feat:登入"
git push origin feature-login

# 注册分支
git checkout -b feature-register
git add .
git commit -m "feat:注册"
git push origin feature-register

#切换到master分支
# git feature 拉取服务端所有分支

git checkout master
git merge feature-login # 合并feature-login中的分支

# 冲突处理
current change
incoming change
# 
git stash 
git stash pop
```
- 调试工具

```js
// chrome 调试
elments
concole
network
debugger
network
application # localStorage | sessionStorage
```

- 抓包 

```js
// charles的使用 
// H5 
// 手机和电脑连接同一个局域网
// 手机代理到电脑上
// 手机浏览网页，抓包
```

- webpack babel

  > 主页版本问题!!
  >
  > webpack的插件机制

```js
// 有些es6的语法浏览器不支持
// 压缩代码，整合代码，让网页加载更快
```

![image-20210925141056336](/Users/bobtang/Library/Application Support/typora-user-images/image-20210925141056336.png)

- linux常用命令

```js
grep
```



### 常见题目

1. 变量提升

   ```js
   var 声明的标量
   function 声明函数
   ```

   

2. typeof 能够判断哪些类型

   ````js
   undefined
   string
   boolean
   symbol 
   ### const mysymbol = Symbol()
   number
   typeof null === 'object' //这个是特殊的
   function
   
   // 类型转换
   强制类型转化：parseInt, parseFloat, toString
   隐式类型转换: if 逻辑运算 == + 拼接字符串 
   ````

   

3. 深度比较 isEqual

   ```js
   const obj1 = {a:100,b:{x:1,y:200}}
   const obj2 = {a:100,b:{x:1,y:200}}
   // 判断是否为对象或者数组
   function isObject(obj) {
     return obj!==null && typeof obj === 'object';
   }
   // 全相等
   function isEqual(obj1,obj2) {
     if(!isObject(obj1) || isObject(obj2)){
       // 值类型（注意，参与equal的一般不会是函数）
       return obj1 === obj2;
     }
     // obj1 obj2引用同一个地址
     if(obj1 === obj2) {
       return true;
     }
     
     // 两个对现实对象或者数组而且不相等
     // 1. 先取出keys，比较个数
     const obj1Keys = Object.Keys(obj1)
     const obj2Keys = Object.Keys(obj2)
     // 简单比较key的个数，如果不相等就直接返回false
     if(obj1Keys.length !== obj2Keys.length) {
       return false;
     }
     // 2. 以obj1为基准和obj2依次递归比较
     for(let key in obj1) {
       // 比较当前的key的val --- 递归
       const res = isEqual(obj1[key],obj2[key])
       if(!res) {
         return false;
       }
     }
   }
   ```

   

4. split和join的区别

5. 数组中的方法: shift unshift pop push分别做什么？

   # 全面梳理数组的API

   ```js
   功能是什么？
   返回值？
   是否会对原来的数组造成影响?
   ### 纯函数 1. 不改变原数组（没有副作用） 2. 返回一个数组
   ### 不是纯函数
   unshift
   shift
   push
   pop
   forEach
   some
   every
   reduce
   ### 纯函数
   map
   filter
   concat
   slice
   
   ### splice和slice的区别
   - splice 剪接 
   - slice 切片
   ### [10,20,30].map(parseInt)
   ```

   

6. 如何获取最大值. 

7. 解析 url 参数. 

8. 数组去重有几种方式？. 

9. 是否用过 requestAnimationFrame. 

10. 再学闭包. 

    > 函数作为参数
    >
    > 函数作为返回值
    >
    > 自由变量的查找，在函数定义的地方查找

    ```js
    call: 传入参数的形式 ， test.call(context,p1,p2)
    apply : test.call(context,arguments)
    ```

    

11. 回顾 DOM 操作和优化. 

    > 减少DOM操作次数: 
    >
    > 对DOM查找结果做缓存

12. jsonp 本质是 ajax 吗. 

13. 是否用过 Object.create(). 

14. flattern

    ```js
    function flat(arr) {
      const isDeep = arr.some(item=> item instanceof Array)
      if(!isDeep) {
        return arr;
      }
      const res = Array.prototype.concat.apply([],arr)
      return flat(res)
    }
    ```

15. 数组去重

    ```js
    function unique(arr) {
      return [...new Set(arr)]
    }
    ```

16. 深拷贝

    ```js
    function deepClone(obj) {
      // 基本数据类型的拷贝
      if(typeof !== 'object' || obj == null ) {
        return obj
      }
      let result  = (Array.isArray(obj)?[]:{});
      for(let key in obj) {
        // 保证属性定义在对象上，排除原型上的属性
        if(obj.hasOwnProperty(key)) {
          result[key] = deepClone(obj[key])
        }
      }
      return result
    }
    ```

    

17. requestAnimationFrame

    > 60 帧/s 即16.67 ms 更新一次
    >
    > API浏览器自动控制

    
    
