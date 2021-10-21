// let person = {}
// Object.defineProperty(person, 'name', {
//     value: 'bob',
//     configurable: false
// })

// Object.defineProperty(person, 'name', {
//     configurable: true,

// })


let book = {
    year_: 2017,
    edtion: 1
}

// 重新定义一个属性,year，和上面的year_是不同一个
Object.defineProperty(book, 'year', {
    // 非严格模式下，只定义获取函数，意味着属性时只读的，尝试修改会被忽略
    // 严格模式下，跑出错误
    // 只设置设置函数，是不可以读的，非严格模式下返回undefined
    // 严格模式跑出错误
    get() {
        return this.year_
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue
            this.edtion = newValue - 2017
        }
    }
})


book.year = 2018
console.log(book.edtion)