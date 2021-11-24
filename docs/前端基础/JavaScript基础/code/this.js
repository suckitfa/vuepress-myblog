// // this可以跟家方便的来应用对象
// function foo() {
//     console.log(this);
// }

// // 直接调用
// foo();

// var obj = {
//     name: "why",
//     foo: foo
// }

// // 函数调用
// obj.foo();


// // call aplly
// foo.call("abc");

// function foo() {
//     console.log(this);
// }

// function callFoo(func) {
//     func();
// }
// callFoo(foo);
// // window
// function foo() {
//     console.log(this);
// }
// const obj = {
//     name: "even",
//     foo: foo
// }
// obj.foo();
// {name:"even",foo:...}

// var name = "window";

// var person = {
//     name: "person",
//     sayName: function() {
//         console.log(this.name);
//     }
// }

// function sayName() {
//     var ss = person.sayName;
//     // 独立函数调用
//     ss();
//     // 和对象关联
//     person.sayName();
//     (person.sayName)();
//     (b = person.sayName)();
// }
// sayName();
// // window
// // person
// // person
// // window
var name = 'window';
var person1 = {
    name: "person1",
    foo1: function() {
        console.log(this.name)
    },
    foo2: () => {
        console.log(this.name);
    },
    foo3: function() {
        return function() {
            console.log(this.name)
        }
    },
    foo4: function() {
        return () => {
            console.log(this.name);
        }
    }

}
var person2 = { name: "person2" };
// 隐式绑定
person1.foo1(); // person1
// 显示绑定 > 隐式绑定
person1.foo1.call(person2) // person2


// 箭头函数 ，不使用所有规则
person1.foo2(); // window
person1.foo2.call(person2); // window

// foo3返回的是一个普通函数
person1.foo3()(); // window
person1.foo3.call(person2)(); // window
person1.foo3().call(person2); // person2


person1.foo4()(); // person1
person1.foo4.call(person2)(); // person2
person1.foo4().call(person2); // person1