### 用来描述对象的属性
### 数据属性
- `enumerable` 默认:false不支持`for in obj..`进行枚举属性
- `configurable`, 默认：true， 支持配置,修改为false之后无法再次改变
- writable
- value
### 访问器属性
- `set` 函数
- `get` 函数


### 应用
- vue2.0的响应式对象关键原理
```js
let data = {
    name: "Evan",
    age: 18
}

function update() {
    console.log("更新视图............");
}

function observer(obj) {
    if (obj == null || typeof obj !== 'object') return obj;
    for (let key in obj) {
        defineReactive(obj, key, obj[key]);
    }
}

function defineReactive(obj, key, value) {
    // 递归设置value的getter,setter
    observer(value);
    Object.defineProperty(obj, key, {
        get() {
            return value;
        },
        set(val) {
            if(val === value) return;
            update();
            value = val;
        }
    })
}
// 设置getter
observer(data)
data.name = 'juju'
```
- vue2.0数组方法的劫持
```js
// 拦截能够改变数组本身的方法
let methods = ['push','pop','shift','unshift','reverse','sort']
methods.forEach(fn=>{
    let oldMethod = Arrray.prototype[fn];
    Array.prototype[fn] = function() {
        // 重写方法
        update();
        oldMethod.call(this,...arguments);
    }
})
```