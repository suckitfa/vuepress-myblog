### Promise
> 使用的技术
- 回调函数延迟绑定 （通过then等延迟加入回调函数）
- 返回值穿透（链式调用）
- 错误冒泡 （catch...错误放到最后来处理）


### 解决效果
实现链式调用，解决多层嵌套问题
实现错误冒泡后一站式处理，解决每次任务中判断错误、增加代码混乱度的问题

### 简单实现
```js
const PENDING = "pending";
const REJCTED = "rejected";
```
### 延迟对象
```js
Promise.deferred = function() {
    let def = {};
    def.promise = new Promise((resolve,reject)=>{
        def.resolve = resolve;
        def.reject = reject;
    })
    return def;
}
function read(url) {
    let deferred = Promise.deferred();
    fs.readFile(url,'utf-8',function(err,val) {
        if(err) deferred.reject(err)
        deferred.resolve(val);
    })
}
```

### Promise.race
> 传入promise实例数组，返回数组包含Proimse实例的结果值;如果其中一个Promise实例出现错误，直接拒绝Promise

```js
Promise.all = function(promises) {
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)) {
            throw new TypeError("promises must be an array")
        }
        const result = []
        let count = 0
        promises.forEach((promise,index)=>{
            promise.then((res)=>{
                result[index] = res
                count ++
                // 关键
                count === promises.length && resolve(result)
            },err=>{
                reject(err)
            })
        })
    })
}
```
### Promise.allSettled
> `settled`的状态是指Promise实例为`resolved`或者为`rejected`
```js
Promise.allSettled = function(promises) {
    if(!Array.isArray(promises)) {
        throw new TypeError('promises is not an array!')
    }
    if(promises.length === 0) return Promise.resolve([])
    // 确保传入的内容都为Promise实例
    const _promises = promises.map(
        item => item instanceof Promise ? item: Promise.resolve(item)
    )
    return new Promise((resolve,reject) => {
        const result = [];
        const unSettledPromiseCount = _promises.length;
        _promises.forEach((promise,index) => {
            promise.then(value => {
                result[index] = {
                    status:'fulfilled',
                    value
                }
                unSettledPromiseCount -= 1
                if(unSettledPromiseCount === 0) resolve(result);
            },
            reason => {
                result[index] = {
                    status:'rejected',
                    reason
                }
                unSettledPromiseCount -= 1
                if(unSettledPromiseCount === 0) {
                    resolve(result);
                }
            }
            )
        })
    })
}
```
### Promise.finally
```js
Promise.prototype = function(cb) {
    return this.then(
        value => {
            return Promise.resolve(cb()).then(() => value)
        },
        error => {
            return Promise.resolve(cn()).then(() => throw error)
        }
    )
}
```

### Promise.race
```js
Promise.race = function(promises) {
    if(!Array.isArray(promises)) {
        throw new TypeError("promises must be an array")
    }
    const _promises = promises.map(
        item => item instanceof Promise ? item : Promise.resolve(item)
    )
    return new Promise((resolve,reject)=>{
        _promises.forEach((promise,index)=>{
            promise.then(res=>{
                // 直接返回
                resolve(res)
            },err=>{
                reject(err)
            })
        })
    })
}
```

### Promise.any
> 有一个promises为成功的就返回，如果所有的都失败则抛出错误
```js
Promise.any = function(promises) {
    let index = 0;
    if(promises.length === 0) return;
    return new Promise((resolve,reject) => {
        promises.forEach((promise,index) => {
            Promise.resolve(promise).then(
                val => {
                    resolve(val);
                },
                err => {
                    index ++;
                    if(index === promises.length) {
                        reject(new AggregateError("all promises were rejected"))
                    }
                }
            )
        })
    })
}
```

### Promise中的关键 resolvePromise
```js
function resolvePromise(x,promise2,resolve,reject) {
    
}
```