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

### Promise.finally
```js
Promise.prototype = function(cb) {
    return this.then(
        function(value) {
            return Promise.resolve(cb()).then(
                function() {
                    return value
                },
                function(err) {
                    return Promise.resolve(cb()).then(
                        function() {
                            throw err
                })
        })
    })
}
```

### Promise.race
```js
Promise.race = function(promises) {
    if(!Array.isArray(promises)) {
        throw new TypeError("promises must be an array")
    }
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
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