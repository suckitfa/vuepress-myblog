// // 工厂模式
// function createPerson(name, age, job) {
//     // 返回一个函数
//     return {
//         name,
//         age,
//         job,
//         sayName() {
//             console.log('Hi,I am ', this.name)
//         }
//     }
// }

// const Bob = createPerson('Bob', 21, 'coder')
// Bob.sayName()

function SuperType(age) {
    this.age = age
    this.colors = ['red', 'green']
}

function SubType() {}
SubType.prototype = new SuperType(21)


const b = new SubType(21)
console.log(b)