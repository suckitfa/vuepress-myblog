// left instanceof right
```js
function instanceof(left,right) {
    const prototype = right.prototype
    left = left.__proto__
    while(true) {
        if(left === null) {
            return false
        }
        if(prototype === left) {
            return true
        }
        left = left.__proto__
    }
}
```