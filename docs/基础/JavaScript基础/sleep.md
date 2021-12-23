### 手写 sleep函数
```js
const sleep = time => {
    // return new Promise((resolve,reject) => setTimeout(resolve,time))

}
// new Promise 支持之传入一个参数
const sleep = time => new Promise(resolve => setTimeout(resolve,time))
```

```js
function sleep(callback,time) {
    if(typeof callback === 'function') {
        setTimeout(callback,time)
    }
}
```