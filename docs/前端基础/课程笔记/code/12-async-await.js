let fs = require('mz/fs')

function getFile(fileName) {
    return __dirname + '/' + fileName;
}


async function read() {
    let e;
    try {
        let r = await fs.readFile(getFile('name.txt'), 'utf8');
        let age = await fs.readFile(getFile(r), 'utf8')
        e = await [age];
    } catch (e) {
        console.log(e);
    }
    return e;
}
// async函数执行后，返回一个promise
// try + catch那么这个promsie返回的就是真
read().then(data => {
    console.log(data);
});


// js的异步方案查看
// 1. callback多个请求并发，不好管理，导致回掉函嵌套过多，形成回调地狱
// 2. promise的优点，可以优雅的处理一步，处理错误，同时基于回掉的，还是有一点嵌套问题
// 3. generator+co 不支持try..catch
// 4. async + await 异步问题， try....catch