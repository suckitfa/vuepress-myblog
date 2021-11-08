// const Promise = require('./06-promise');
const fs = require('fs');
const path = require('path')

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, fileName), 'utf-8', function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });
}

// 链式调用：jQuery的方式返回this， 而Promise的方式是：
// 1. 如果then方法中返回的是一个promise，用这个promise的状态转为成功或者失败，把promise的结果作为参数
// 2. 如果返回一个普通值，直接作为下一个then的成功的参数
// 3. 在then方法中抛出异常，也会走失败，如果错误中返回一个普通值，也会变成成功。
// *每一个then方法都会返回一个新的promise
// rejected throw Error | reject
readFile('age.txt').then(data => {
    return readFile(data);
}).then(data => {
    console.log(data, '1');
    throw new Error('失败');
}, err => {
    console.log(err, 'err');
}).then(data => {
    console.log(data, '2');
}, e => {
    console.log(e, '3');
})