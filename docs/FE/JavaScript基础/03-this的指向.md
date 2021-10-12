### 执行上下文
- 变量对象（variable object) VO
- 作用域链（Scope chian)
- this


### 手写call
```js
Function.prototype.mycall = function(context) {
    const args = 
    context.fn = this
    const resrult = context.fn()
    delete context.fn
}
```
### 手写apply
### 手写bind