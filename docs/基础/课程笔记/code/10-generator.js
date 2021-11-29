// generator 生成器 iterator迭代器 迭代器有一个next方法， 
// 每次调用后返回value,done两个 属性
// 类数组: lenght key为数组， iterator
// Array.from和[...]的区别?
// 给一个对象添加迭代器，可以扩展运算符使用它迭代
const obj = {
    0: 22,
    1: 22,
    length: 2,
    // [Symbol.iterator]: function() {
    //     let self = this;
    //     let index = 0;
    //     return {
    //         next() {
    //             return { value: self[index], done: (index++ === self.length) }
    //         }
    //     }
    // }
    // 使用生成器来产出
    [Symbol.iterator]: function*() {
        // 每次浏览器都会不停的调用Next方法，返回value和done
        let index = 0;
        while (index < this.length) {
            yield this[index++];
        }
    }
}

function arg() {
    let arr = [...arguments];
    console.log(arr);
}

arg(obj)

// 生成器配合yeild使用， 如果碰到yield，就暂停执行
function* read() {
    yield 1;
    yield 2;
    yield 3;
}

// Object [Generator] {}
// 生成器返回的是迭代器，迭代器有next方法，调用next方法可以返回value和done
let r = read();
console.log(r);
console.log(r.next());
console.log(r.next());
console.log(r.next());
console.log(r.next());