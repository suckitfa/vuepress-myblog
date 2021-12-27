### 手写 sleep函数
- Async + Awiat + Promise
```js
// new Promise 支持之传入一个参数
const sleep = time => new Promise(resolve => setTimeout(resolve,time))

// 格式代码， 在async使用await来使用
!async function(){ 
    // 阻塞3秒
    await sleep(3000);
    // do something
}()
```