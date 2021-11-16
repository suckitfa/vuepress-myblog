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
            update();
            value = val;
        }
    })
}
// 设置getter
observer(data)
data.name = 'juju'