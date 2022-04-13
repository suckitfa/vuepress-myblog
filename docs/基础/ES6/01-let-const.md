### var声明存在的问题
- 声明变量存在变量提升
- 在全局下声明 放在了window上
- 同时可以被重复声明，赋值的时候，后面的覆盖前面的。
```js
var a =  1;
console.log(window.a); // a
```

### let const
- 具有块级作用域
```js
{
    let a = 1;
}
```
- 同一个作用域不可以重复定义，存在暂时性死区
```js
// above this declartion is a's TDZ 
let a = 1;
```