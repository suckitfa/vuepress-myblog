

### JavaScript高级程序设计

- https://www.bilibili.com/video/BV1p541177F4?p=3



### JavaScript精进

- 上 https://juejin.cn/post/6844903974378668039
- 中 https://juejin.cn/post/6844903986479251464  (大量关于数组的操作)
- 下 https://juejin.cn/post/6844904004007247880 (异步，eventloop)

### 手写题

- https://juejin.cn/post/6946022649768181774

### 浏览器的工作原理

- https://blog.poetries.top/browser-working-principle/guide/part2/lesson07.html

### 计算网络

- TPC灵魂之问： https://juejin.cn/post/6844904070889603085
- HTTP 灵魂之问： https://juejin.cn/post/6844904100035821575

### 页面布局

- https://juejin.cn/post/6844903962529759239



### JavaScript专精

- https://yibo-hao.github.io/study_blog/ES6/hoisting/



### 前端面试之道

导师的博客： https://ringcrl.github.io/cs-notes



### 高频面试题

### HTML5

- cookie,localStorage,sessioinStorage (必考)
- HTML5的新特性
- meta标签包含哪些用法
- 语义化标签

### CSS3

- flex （必考）
- grid
- BFC
- 水平垂直居中
- 动画
- 盒模型
- CSS3的新特性
- 三栏布局
- 移动端适配
- 1px问题
- less/sass有做过哪些比较高级的操作

### JavaScript

- 事件循环（浏览器nodejs)  (必考)
- 原型和原型链（必考）
- var let const 区别
- 继承的方式
- requestAnimationFrame了解吗？
- Promise(手写）
- Promise的all/ allSettled/race/any的区别
- 垃圾回收机制
- 深浅拷贝
- 数据类型以及内存方式
- 类型类型转换
- script上defer和async的作用
- 哪些数据可以直接迭代的 iterable
- ES6的新特性

### TypeScript

- 泛型
- TS函数重载
- interface和type的区别

### HTTP

- 强缓存和协商缓存 （304）状态码是什么？
- HTTPS
- HTTP 1/2/3如何解决对头阻塞问题
- HTTP2头部压缩是怎么做的
- HTTP1/2/3的区别
- TLS握手的过程
- httponly的作用
- 301和302的区别

### Vue

- 双向绑定原理 （源码）-（必考）
- computed和watch当前区别（源码）-必考
- Vue的diff算法（key）的作用 （必考)
- Vue3的特性有哪些？（必考）
- Vue的生命周期（必考）
- v-if和v-show的区别 （必考）
- 组件的传值方式 （必考）
- 谈MVVM的理解 
- Vue的渲染过程
- 路由原理
- 插槽的各种方式
- 混入
- keep-alive
- 自定义指令
- difinedProperty与Proxy的区别
- $nextTick原理

---------------------开始面试--------------------------------------

### React

- 谈对hook的理解 必考
- Fiber&渲染过程 必考
- React生命周期
- setState是同步还是异步
- React的diff算法以及Vue的有什么区别
- 树的比较时间复杂度为 0(n^3), React如何做优化虚拟DOM比较的
- React的组件传值
- useCallback
- hooks在什么场景下不可用，为什么？
- mobx与redux的区别



### webpack&babel

- webpack性能优化有哪些方式---必考
- webpack的打包过程-必考
- 自定义loader/plugin如何做？原理？
- weppack插件机制
- wepback的新特性
- 常见Loader和Plugin
- Tapable.js常见的投资函数
- External有什么缺陷
- 谈谈模块的热替换
- babel的 转换过程
- bebel的预设和插件的区别
- Vite的原理
- webpack / gulp/rollup、vite的区别



### Node.js和express Koa mongoDB mysql

- node.js的事件循环机制
- mongoDB和MySQL的区别
- node.js常见的模块
- Node.js写过工具吗？怎么做？
- express与koa的中间件原理
- RestFul风格的认
- Node.js怎么调试



### 其他（浏览器与设计模式）

- web常见的攻击原理已及预防方式

  > 传统的 XSS、CSRF 等安全问题之外，又时常遭遇网络劫持、非法调用 Hybrid API 等新型安全问题
  >
  >  CSP、Same-Site Cookies 等新技术来增强安全性
  >
  > csrf https://tech.meituan.com/2018/10/11/fe-security-csrf.html
  >
  > xss : https://tech.meituan.com/2018/09/27/fe-security.html
  >
  > session cookie
  >
  > ![image-20211102011324271](/Users/bobtang/Library/Application Support/typora-user-images/image-20211102011324271.png)

- Vue与React的对比 必考

- 性能优化方式 必考

- 回流与重绘

- 口述快排

- V8执行JavaScript代码的过程

- 单例模式和工厂模式

- 策略模式

- 设计模式

- 浏览器的标签页通信方式

  

### 手写题

- 防抖和节流
- 数组去重
- 扁平数组转树形对象 —— 中频
- bind/call/apply
- Promise.all
- Promise.allSettled
- 寄生组合继承
- 实现const

# 总结

- 由上面列举的题目可以看出，八股文的考察比例非常大，一定要做好充分的准备。
- 手写题考察频率也很高，都是非常常见的题目，在面试前一定要多练习，达到倒背如流的程度，并且注意尽量写的完善会很加分（可参考**伢羽**的博客)
- `js`、`Vue或React中一个框架`、`http`、`webpack`考察频率非常高，需要充分准备并且尽可能的有深度。
- HTML 和 CSS 的基础内容也会考察，注意不要大意翻车。
- 项目介绍、难点和亮点要提前准备好，可以多自己练习一下表达，并且准备面试官可能的相关技术上的追问