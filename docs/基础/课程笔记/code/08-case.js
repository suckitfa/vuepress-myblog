const fs = require('fs');
const { path } = require('path');
const Promise = require('./06-promise')

function read(fileName) {
    const p = new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/' + fileName, 'utf-8', function(err, data) {
            if (err) reject(err);
            resolve(data);
        })
    });
    return p;
}


// 计数器实现按序返回
Promise.all = function(values) {
    return new Promise((resolve, reject) => {
        let arr = [];
        let count = 0;

        function processData(key, value) {
            arr[key] = value;
            if (++count === values.length) {
                resolve(arr);
            }
        }

        for (let i = 0; i < values.length; i++) {
            const current = values[i];
            // 当前是一个promise
            if (current.then && typeof current.then === 'function') {
                then.call(
                    current,
                    y => {
                        processData(i, y);
                    },
                    // 其中一个promise出错，停止执行
                    reject
                );
            } else {
                // 常量
                processData(i, current);
            }
        }
    });
};

Promise.race = function(values) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < values.length; i++) {
            let current = values[i];
            let then = current.then;
            if (then && typeof then === 'function') {
                then.call(
                    current,
                    y => {
                        resolve(y);
                    },
                    reject
                );
            } else {
                resolve(current);
            }
        }
    });
};

Promise.all([read('name.txt'), read('age.txt'), 1, 2, 3]).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
})