### this会在执行上下文中绑定一个对象。

所有函数在调用的时候回创建一个执行上下文：
- 记录函数调用栈，函数的调用方式，传入的参数信息
- this也是执行上下文中的一个属性

### this的绑定 
1. 显示指出this， call / apply/ bind
2. 全局上下文, this --> 全局
3. 直接调用函数 , this --> 全局
4. DOM事件绑定, this--> 元素
5. new执行构造函数： this--->当前实例
6. 箭头函数
> 箭头函数没有this, 因此也不能绑定。里面的this会指向当前最近的非箭头函数的this，找不到就是window(严格模式是undefined)

### 优先级
new > call,apply,bind  > 对象.方法 > 直接调用

### 函数的调用方式与显示绑定的切换
- func() 等价于 func.call(undefined)
- obj.func() 等价于 obj.func.call(obj)
- func.call(obj)
当call中第一个参数为undefined的时候，默认为window

### 相关面试题
- https://juejin.cn/post/6844904083707396109

### 手写call,apply,bind
> 主要目的，深入理解这几个函数的原理
1. call
```js
Function.prototype.mycall = function(context,...args) {
    context = context || window;
    // this指向调用的函数实例
    context.ctxFunc = this;
    const result = context.ctxFunc(...args)
    delete context.ctxFunc
    return result;
}

function test(name) {
    console.log(this,name)
}
const obj = {name:'JS'}
test.mycall(obj,'Bob')
// {name:'JS'} 'Bob'
```
2. apply
> 参数以数组的形式传入
```js
Function.prototype.myapply = function(context,args) {
    context = context || window;

    context.ctxFunc = this;
    
    const result = context.ctxFunc(args)
    
    delete context.ctxFunc

    return result;
}
```
3. bind
```js
Function.prototype.mybind = function(context,...args){
    context = context || window;
    context.ctxFunc = this;

    return function() {
        const result = context.ctxFunc(...args);
        delete context.ctxFunc;
        return result;
    }
}
```