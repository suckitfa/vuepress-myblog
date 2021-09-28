const PENDING = 'pending'
const FUlFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    constructor(executor) {
        try {
            // 执行器，进入构造函数后立即执行
            executor(this.resolve,this.reject)
        }catch(e) {
            this.reject(e)
        }
    }
    // 对es6的面对对象语法不熟悉
    status = PENDING
    reason = null
    value =  null

    onFulfilledCallbacks = []
    onRejectedCallbacks = []
    // 这里使用箭头函数，当直接调用的是window或者undfiend
    // 使用箭头函数可以让this指向当前实例
    resolve = (value) => {
        if(this.status === PENDING) {
            this.status = FUlFILLED
            this.value = value

            while(this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }

    reject = (reason) => {
        if(this.status === PENDING) {
            this.status = FUlFILLED
            this.reason = reason

            while(this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            } 
        }
    }
    // then的简单实现
    then(onFulfilled,onRejected) {
        const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled:value=>value
        const realOnRejected = typeof onRejected === 'function' ? onRejected:reason=>{throw reason}
        const promise2 = new MyPromise((resolve,reject)=>{
            const fullfilledMicrotask = ()=> {
                queueMicrotask(()=>{
                    try {
                        const x = realOnFulfilled(this.value)
                        resolvePromise(promise2,x,resolve,reject)
                    }catch(e) {
                        reject(e)
                    }
                })
            }

            const rejectedMicrotask = () => {
                queueMicrotask(()=>{
                    try {
                        const x = realOnFulfilled(this.value)
                        resolvePromise(promise2,x,resolve,reject)
                    }
                })
            }
            if(this.status === FUlFILLED) {
                // 获取成功回调的返回执行结果
                const x =  onFulfilled(this.value)
                resolvePromise(x,resolve,reject)
            } else if(this.status === REJECTED) {
                const x = onRejected(this.reason)
                resolvePromise(x,resolve,reject)
            } else if(this.status === PENDING) {
                this.onFulfilledCallbacks.push(onFulfilled)
                this.onRejectedCallbacks.push(onRejected)
            }
        })
        return promise2
    }
}


function resolvePromise(promise2,x,resolve,reject) {
    if(promise2 === x) {
        return reject(new TypeError('chaing cycle detected for #<Promise>'))
    }
    if(x instanceof MyPromise) {
        x.then(resolve,reject)
    } else {
        resolve(x)
    }
}

// test.js

// const MyPromise = require('./MyPromise')
const promise = new MyPromise((resolve, reject) => {
  // 目前这里只处理同步的问题
  resolve('success')
})

function other () {
  return new MyPromise((resolve, reject) =>{
    resolve('other')
  })
}
promise.then(value => {
  console.log(1)
  console.log('resolve', value)
  return other()
}).then(value => {
  console.log(2)
  console.log('resolve', value)
})
