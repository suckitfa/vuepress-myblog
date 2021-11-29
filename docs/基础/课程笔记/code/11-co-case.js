const fs = require('mz/fs');


// co的核心原理
function co(it) {
    return new Promise((resolve, reject) => {
        function next(val) {
            let { value, done } = it.next(val);
            if (done) {
                return resolve(val);
            }
            // 如果不是promise 将其包装为一个Promise
            Promise.resolve(value).then(data => {
                next(data);
            }, reject);
        }
        next();
    });
}