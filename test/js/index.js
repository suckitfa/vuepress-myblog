// Promise实例的三个状态；
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
    // 缓存当前的promise实例
    let self = this;
    // 成功实例的值
    self.value = null;
    // 失败实例的原因
    self.error = null;
    // 状态，初始状态为pending;
    self.status = PENDING;
    // 成功的回调
    self.onFulfilledCallbacks = [];
    // 失败的回调
    self.onRejectedCallbacks = [];

    const resolve = (value) => {
        if (self.status !== PENDING) return;
        setTimeout(() => {
            self.value = value;
            self.status = FULFILLED;

            // 执行成功的回调
            self.onFulfilledCallbacks.forEach(cb => cb(self.value))
        })
    };

    const reject = (error) => {
        if (self.status !== PENDING) return;
        setTimeout(() => {
            self.error = error;
            self.status = REJECTED;
            self.onRejectedCallbacks.forEach(cb => cb(self.error))
        });
    };

    // 执行器执行
    executor(resolve, reject);
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    // 如果传入的不是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error; }

    let bridgePromise;
    let self = this;

    // pending状态
    if (self.status === PENDING) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            self.onFulfilledCallbacks.push(value => {
                try {
                    let x = onFulfilled(value);
                    resovePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });

            self.onRejectedCallbacks.push(error => {
                try {
                    let x = onRejected(error);
                    resovePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            })
        });


    } else if (self.status === FULFILLED) {
        // 清空
        self.onFulfilledCallbacks.forEach(callback => callback(self.value))
    } else {
        self.onRejectedCallbacks.forEach(callback => callback(self.error));
    }
    // 返回当前的实例
    return this;
};
// 值穿透
function resovePromise(bridgePromise, x, resolve, reject) {
    if (x instanceof MyPromise) {
        if (x.status === PENDING) {
            x.then(y => {
                    resovePromise(bridgePromise, y, resolve, reject);
                },
                error => {
                    reject(error);
                }
            );
        } else {
            x.then(resolve, reject);
        }
    } else {
        resolve(x);
    }
}
let promise1 = new MyPromise((resolve, reject) => {
    resolve('hello')
});

promise1.then(data => {
    console.log(data);
}).then(data => {
    console.log(data)
    console.log(promise1)
})
console.log(promise1)