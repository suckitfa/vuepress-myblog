this会在执行上下文中绑定一个对象。

所有函数在调用的时候回创建一个执行上下文：
- 记录函数调用栈，函数的调用方式，传入的参数信息
- this也是执行上下文中的一个属性

### this的绑定规则
1. 默认绑定
> 普通函数调用
```js
function foo() {
    console.log(this)
}
foo();
```
> 函数调用链(函数嵌套调用)
```js
function test1() {
    console.log(this);
    test2();
}

function test2() {
    console.log(this)
}
test1();
```
> 函数作为参数，传入到另外一个函数
```js
function foo(func) {
    func()
}
function bar() {
    console.log(this)
}
foo(bar);
```

2. 隐式绑定（对象发起调用）

3. call/apply强制绑定this调用

setTimeout、setInterval调用回调， 默认绑定this


### 函数的调用方式
- func() 等价于 func.call(undefined)
- obj.func() 等价于 obj.func.call(obj)
- func.call(obj)

当call中第一个参数为undefined的时候，默认为window

