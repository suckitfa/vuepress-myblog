const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function myPromise(executor) {
    // 缓存当前的promise实例
    let self = this;
    self.value = null;
    self.error = null;
    self.state = PENDING;
    self.onFulfilled = null;
    self.onRejected = null;

    const resolve = (value) => {

    }

    const reject = (error) => {

    }
}