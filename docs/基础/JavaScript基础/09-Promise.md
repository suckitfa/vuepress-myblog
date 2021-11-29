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