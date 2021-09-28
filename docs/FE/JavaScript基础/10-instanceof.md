// left instanceof right
```
```js
function instanceof(left,right) {
    const prototype = right.prototype
    left = left.__proto__
    while(true) {
        // 原型链的顶端
        if(left === null) {
            return false
        }
        if(prototype === left) {
            return true
        }
        // 沿着原型链向上查找
        left = left.__proto__
    }
}
```