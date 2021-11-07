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
    let self = this;
    if (self.status === FULFILLED) {
        self.onFulfilledCallbacks.forEach(cb => cb())
    }

    if (self.status === REJECTED) {
        self.onRejectedCallbacks.forEach(cb => cb());
    }


    if (self.status === PENDING) {
        // 相当于订阅
        self.onFulfilledCallbacks.push(function() {
            onFulfilled(self.value)
        });
        self.onRejectedCallbacks.push(function() {
            onRejected(self.reason);
        });
    }
}
module.exports = Promise;