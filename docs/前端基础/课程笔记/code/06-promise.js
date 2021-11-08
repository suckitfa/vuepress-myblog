const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {
    let self = this;
    self.status = PENDING;
    self.reason = undefined;
    self.value = undefined;

    // 定义两个队列存放对应的回调，处理异步情况
    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];

    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED;
            self.value = value;

            self.onFulfilledCallbacks.forEach(cb => cb())
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED;
            self.reason = reason;

            self.onRejectedCallbacks.forEach(cb => cb());
        }

    }

    try {
        // 执行器立即执行
        executor(resolve, reject)
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    // 可选参数处理
    onFulfilled = isCallable(onFulfilled) ? onFulfilled : value => value;
    onRejected = isCallable(onRejected) ? onRejected : error => { throw Error(error) };

    let self = this;
    // 返回新的promise， 让当前的then方法执行后可以继续调用then
    const promise2 = new Promise(function(resolve, reject) {
        // 加入setTimeout的作用：等待promise2完成
        if (self.status === FULFILLED) {
            setTimeout(() => {
                setTimeout(() => {
                    // 拿到then中的回调函数的执行结果;
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                })
            })
        }

        if (self.status === REJECTED) {
            setTimeout(() => {
                try {
                    const x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        }


        if (self.status === PENDING) {
            // 相当于发布订阅模式
            self.onFulfilledCallbacks.push(function() {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            });

            self.onRejectedCallbacks.push(function() {
                setTimeout(() => {
                    try {
                        const x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            });
        }
    });

    return promise2;
}

// promise就是then返回的promsie
// x 就是当前then中成功或者失败的回调返回的结果
function resolvePromise(promise2, x, resolve, reject) {
    // If promise and x refer to the same object, reject promise with a TypeError as the reason.
    if (x === promise2) {
        return reject(new TypeError('Chaining Cycle detected #<Promise>'));
    }

    // x可能为一个promise
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let then;
        try {
            then = x.then;

            // then是一个函数
            if (isCallable(then)) {
                then.call(
                    x,
                    y => {
                        resolve(y);
                    },
                    r => {
                        reject(r);
                    });
            } else {
                resolve(x);
            }
        } catch (e) {
            reject(e);
        }
    } else {
        // 普通值
        resolve(x);
    }
}


function isCallable(val) {
    return typeof val === 'function';
}

module.exports = Promise;