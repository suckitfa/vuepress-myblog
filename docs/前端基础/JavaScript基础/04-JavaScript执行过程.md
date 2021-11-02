浏览器执行js的机制
执行上下文 + 调用栈
变量提升： 声明和赋值操作
所谓的变量提升是指，在JavaScript代码执行过程中，JavaScript引擎把变量的声明部分和函数的声明部分提到开头的行为。变量提升后，会给变量设置默认值undefined;

javascript的执行流程
 加载代码阶段-->编译阶段 ---> 执行阶段

 ### 编译阶段
 编译代码，创建
1.  执行上下文
  - 变量环境(this,变量，对象及其函数)
  - 词法环境 (支持块级作用域 let const， 根据作用域块，在词法环境内部维护这一个栈结构)
先在词法环境中查找，然后在变量环境中查找，只要找到就停止查找。
> 块级作用域就是通过词法环境的栈结构来实现的，而变量提升是通过变量环境来实现，通过这两者的结合，JavaScript引擎也就同时支持了变量提升和块级作用域了

2. 可执行代码


编译成执行上下文
1. 全局
2. 函数
3. eval


调用栈：用来管理函数之间的调用关系
调用一个函数fn，为其创建执行上下文，并压入栈顶，执行fn的代码，执行完毕后，将函数的执行上下文从栈中弹出


作用域：控制着变量和函数的课访问范围和生命周期
全局作用域
函数作用域
块级作用域
```js
if(){}
while(){}
function foo(){}
{}
```

作用域链

https://blog.poetries.top/browser-working-principle/guide/part2/lesson10.html#%E8%AF%8D%E6%B3%95%E4%BD%9C%E7%94%A8%E5%9F%9F


https://blog.poetries.top/browser-working-principle/guide/part2/lesson11.html#javascript-%E4%B8%AD%E7%9A%84-this-%E6%98%AF%E4%BB%80%E4%B9%88