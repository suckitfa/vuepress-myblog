// Promise的三个状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {
    // 确保this为当前的promse实例
    const self = this;

    self.status = PENDING;
    self.value = null;
    self.reason = null;

    /**
     * executor内部有异步
     */
    self.onFulfilledCallBacks = [];
    self.onRejectedCallBacks = [];

    // 变成成功
    function resolve(value) {
        // value是一个 promise
        if (value instanceof Promise) {
            return value.then(resolve, reject);
        }
        if (self.status === PENDING) {
            self.value = value;
            self.status = FULFILLED;

            // 执行回调
            self.onFulfilledCallBacks.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.reason = reason;
            self.status = REJECTED;
            // 执行回调
            self.onRejectedCallBacks.forEach(fn => fn());
        }
    }

    // 执行器立即执行
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    // 支持可选参数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw Error(error) };

    const self = this;
    const promise2 = new Promise((resolve, reject) => {
        const asnycOnFulfilled = function() {
            setTimeout(() => {
                try {
                    const x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        }

        const asnycOnRejected = function() {
            setTimeout(() => {
                try {
                    const x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            })
        }
        if (self.status === FULFILLED) {
            asnycOnFulfilled();
        }

        if (self.status === REJECTED) {
            asnycOnRejected();
        }
        // 发布订阅模式
        if (self.state === PENDING) {
            self.onFulfilledCallBacks.push(asnycOnFulfilled)
            self.onRejectedCallBacks.push(asnycOnRejected);
        }
    });
    return promise2;
}

// 
function resolvePromise(promise2, x, resolve, reject) {
    // If promise and x refer to the same object, 
    // reject promise with a TypeError as the reason
    if (promise2 === x) {
        return reject(new TypeError('Promise Chaining Cycle Deteceted!'));
    }
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let called;
        // x认为是一个对象，看是否有then
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(
                    x,
                    y => {
                        if (called) return;
                        called = true;
                        /**
                         * new Promise((resolve,reject)=>{
                         *      resolve(new Promise((resolve,reject)=>{
                         *          return 1;
                         *      }))
                         * })
                         */
                        // resove Promise,递归解析,知道y为一个常量
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                );
            } else {
                // x为对象
                resolve(x);
            } // not a function
        } catch (e) {
            // 防止出错后，调用回调
            if (called) return;
            called = true;
            // 防止ObjectDefineProperty定义的
            reject(e);
        }

    } else {
        // 普通值
        resolve(x);
    }
}
// catch是then的简写
Promise.prototype.catch = function(errCallBack) {
    return this.then(null, errCallBack)
}

Promise.resolve = function(val) {
    return new Promise((resolve, reject) => {
        resolve(val);
    })
}

Promise.resolve = function(err) {
    return new Promise((resolve, reject) => {
        reject(err)
    })
}
Promise.deferred = function() {
    let def = {};
    def.promise = new Promise((resolve, reject) => {
        def.resolve = resolve;
        def.reject = reject;
    })
    return def;
}

module.exports = Promise;