const PENDING = "pending";
const REJECTED = 'rejected';
const FULFILLED = "fulfilled";


function Promise(executor) {
    const self = this;
    self.status = PENDING;
    self.value = undefined;
    self.reason = undefined;
    self.onFulfilledCallBacks = [];
    self.onRejectedCallBacks = [];

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }


    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilledCallBacks.forEach(cb => cb())
        }
    }

    function reject(reason) {
        if (self.status = PENDING) {
            self.status = REJECTED;
            self.reason = reason;
            self.onRejectedCallBacks.forEach(cb => cb())
        }
    }
}


Promise.prototype.then = function(onFulfilled, onRejected) {
    const self = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw new Error(error) };
    const promise2 = new Promise((resolve, reject) => {
        const asyncOnFulfilled = () => queueMicrotask(
            () => {
                try {
                    const x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });

        const asyncOnRejected = () => queueMicrotask(
            () => {
                try {
                    const x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });

        if (self.status === PENDING) {
            if (self.status === FULFILLED) {
                self.onFulfilledCallBacks.push(asyncOnFulfilled);
                self.onRejectedCallBacks.push(asyncOnRejected);
            }

            if (self.status === REJECTED) {
                try {
                    const x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }

            if (self.status === FULFILLED) {
                try {
                    const x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }

        }
    });

    return promise2;
}


function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return new TypeError('refer to the same Object!');
    }

    if (x !== null && (typeof x === 'object' ||
            typeof x === 'function')) {
        let called = false;
        try {
            let then = x.then
            if (then && typeof then === 'function') {
                then.call(x,
                    y => {
                        if (called) return;
                        // resolve(y);
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    });
            } else {
                // {then:{}}
                resolve(x);
            }
        } catch (e) {
            reject(e);
        }
    } else {
        // 普通值，直接resolve
        resolve(x);
    }
}

const p = new Promise((resolve, reject) => {
    resolve("hello promise")
});
p.then(d => { console.log(d), e => console.log(e) })
console.log(p);