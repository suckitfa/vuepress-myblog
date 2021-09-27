### JavaScript是一门单线程语言,如何理解？为什么不可以多线程？
JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。
> 主线程: “干活的线程”
#### 异步任务指的是，不进入主线程、而进入任务队列（task queue）的任务，只有等主线程任务执行完毕，任务队列开始通知主线程，请求执行任务，该任务才会进入主线程执行。
### 宏任务和微任务执行顺序
微任务》》 宏任务
当某个宏任务执行完后,会查看是否有微任务队列。
如果有，先执行微任务队列中的所有任务；
如果没有，在执行环境栈中会读取宏任务队列中排在最前的任务；
执行宏任务的过程中，遇到微任务，依次加入微任务队列。
栈空后，再次读取微任务队列里的任务，依次类推。
同步（Promise）>异步（微任务（process.nextTick ，Promises.then, Promise.catch ，resove,reject,MutationObserver) > 宏任务（setTimeout，setInterval，setImmediate））
### await阻塞 后面的代码执行，因此跳出async函数执行下一个微任务
> 错误处理？？ async和await的写法能够同事处理异步和同步错误
### event-loop


### 参考资料
- 阮一峰老师： https://www.ruanyifeng.com/blog/2014/10/event-loop.html