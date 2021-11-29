// 并发调用接口，两个ajax1 ajax2 ， 模拟实现
let fs = require('fs');


function after(times, callback) {
    let self = this;
    let result = {};
    return function(key, value) {
        result[key] = value;
        if (--times === 0) {
            callback.call(self, result);
        }
    }
}



let newFn = after(2, function(result) {
    console.log(result);
});

/**
 * 下面模拟两个接口
 */

// 路径查找的问题，默认在根目录上运行
fs.readFile(__dirname + '/name.txt', 'utf-8', function(err, val) {
    if (err) console.log(err);
    if (val) newFn('name', val);
});

fs.readFile(__dirname + '/age.txt', 'utf-8', function(err, val) {
    if (err) console.log(err)
    if (val) newFn('age', val)
})



// 串行：两个函数有关系，上一个人的输出是下一个人的输入
// 并行：两个函数没有关系 可以同时执行
// 前端面试中 发布订阅模式（promise)  观察者模式
// 观察者模式包含发布订阅模式