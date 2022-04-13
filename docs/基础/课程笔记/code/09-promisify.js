const fs = require('fs');
// 获取同文件夹下的文件名
function getCurrentFilePath(filename) {
    return __dirname + '/' + filename;
}


// ES6中的
function promisify(fn) {
    return function() {
        return new Promise((resolve, reject) => {
            fn.call(this, ...arguments, function(err, data) {
                if (err) reject(err)
                resolve(data);
            })
        });
    }
}

// promisify fs中的模块
function promisifyAll(obj) {
    obj = obj ? obj : {};
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key + 'Async'] = promisify(obj[key]);
        }
    }
}

promisifyAll(fs)

// 使用promise封装之后的
fs.readFileAsync(getCurrentFilePath('name.txt'), 'utf-8').then(data => { console.log(data) });

// promisify  后的read方法的调用形式
let read = promisify(fs.readFile)
let write = promisify(fs.writeFile)

read(getCurrentFilePath('name.txt'), 'utf-8').then(data => {
    console.log(data);
})

write(getCurrentFilePath('location.txt'), 'BeiJing').then(d => {
    console.log(d);
})