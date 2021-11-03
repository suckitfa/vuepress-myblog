// /**
//  * 判断是否为引用类型
//  * 核心：typeof 特殊处理null,function
//  */
// function isReferenceValue(val) {
//     const type = typeof val;
//     return val !== null && (type == 'function' || type == 'object')
// }

// function deepClone(val, map = new WeakMap()) {
//     if (isReferenceValue(val)) {
//         const clonedVal = Array.isArray(val) ? [] : {}
//         if (map.has(val)) {
//             return map.get(val)
//         }
//         map.set(val, clonedVal)

//         for (const key in val) {
//             clonedVal[key] = deepClone(val[key], map)
//         }
//         return clonedVal;
//     } else {
//         // 非引用类型直接返回
//         return val;
//     }
// }

// const obj = {
//     name: 'Bob',
//     city: ['NY', "BY"],
// }
// obj.self = obj;


// const _ = require('lodash')
// console.log(_.cloneDeep(obj))
// 可遍历
// const mapTag = '[object Map]';
// const setTag = '[object Set]';
// const arrayTag = '[object Array]';
// const objectTag = '[object Object]';
// // 不可遍历
// const boolTag = '[object Boolean]';
// const dateTag = '[object Date]';
// const errorTag = '[object Error]';
// const numberTag = '[object Number]';
// const regexpTag = '[object RegExp]';
// const stringTag = '[object String]';
// const symbolTag = '[object Symbol]';

// function isReferenceValue(val) {
//     const type = typeof val;
//     return val !== null && (type == 'function' || type == 'object')
// }

// function getInit(obj) {
//     const Ctor = obj.constructor;
//     return new Ctor;
// }

// function getType(val) {
//     return Object.prototype.toString.call(val);
// }
// const deepTag = [
//     mapTag, setTag, arrayTag, objectTag
// ]

// function clone(target, map = new WeakMap) {
//     if (!isReferenceValue) {
//         return target;
//     }

//     const type = getType(target);
//     let cloenTarget;
//     // 可遍历的
//     if (deepTag.includes(type)) {
//         cloneTarget = getInit(target)
//     }
//     // 防止循环引用
//     if (map.has(target)) {
//         return map.get(target)
//     }
//     map.set(target, cloneTarget)

//     switch (type) {
//         case setTag:
//             target.forEach(value => {
//                 cloneTarget.add(clone(value, map))
//             })
//             break;
//         case mapTag:
//             target.forEach((value, key) => {
//                 cloneTarget.set(value, clone(value, map))
//             });
//             break;
//         case objectTag:
//         case arrayTag:
//             for (const key in target) {
//                 cloneTarget[key] = clone(target[key], map)
//             }
//             break;

//         default:
//             break;
//     }
//     return target;
// }

// const map = new Map();
// map.set('key', 'value');
// map.set('ConardLi', 'code秘密花园');

// const set = new Set();
// set.add('ConardLi');
// set.add('code秘密花园');

// const target = {
//     field1: 1,
//     field2: undefined,
//     field3: {
//         child: 'child'
//     },
//     field4: [2, 4, 8],
//     empty: null,
//     map,
//     set,
// };


// const result = clone(target);

// console.log(result);
// console.log(result.map === target.map);

// function Test() {
//     return null
// }

// console.log(new Test())


// function Animal(name) {
//     this.name = name;
//     this.sleep = function() {
//         console.log('sleeping!')
//     }
// }

// function Dog(name, age) {

// }

// Function.prototype.mycall = function(context, ...args) {
//     // this指向调用的函数实例
//     context.ctxFunc = this;
//     const result = context.ctxFunc(...args)
//     delete context.ctxFunc
//     return result;
// }

// Function.prototype.mybind = function(context, ...args) {
//     context = context || window;
//     context.ctxFunc = this;
//     const argsArray = args;
//     return function() {
//         const result = context.ctxFunc(...argsArray);
//         delete context.ctxFunc;
//         return result;
//     }
// }

// function test(name) {
//     console.log(this, name)
// }
// const obj = { name: 'JS' }

// const bindedTest = test.mybind(obj, 'shit')

// let arrayLikeObject = {
//     '0': 'Apple',
//     '1': 'Orange',
//     '2': 'Bnana'
// }
// const toArray = Array.prototype.slice.call(arrayLikeObject)
// console.log(toArray instanceof Array)

// var curry = function(fn) {
//     var args = [].slice.call(arguments, 1)
//     return function() {
//         // 此arguments非彼arguments
//         var newArgs = args.concat([].slice.call(arguments));
//         return fn.apply(this, newArgs)
//     }
// }

// function add(a, b) {
//     return a + b;
// }

// var addCurry = curry(add, 1)
// const result = addCurry(1)
// console.log(result)

// console.log(add.apply(undefined, [2, 3]));

// function sub_curry(fn) {
//     var args = [].slice.call(arguments, 1);
//     return function() {
//         return fn.apply(this, args.concat([].slice.call(arguments)));
//     }
// }

// function curry(fn, length) {
//     // 获取函数接受参数的长度
//     length = length || fn.length;
//     var slice = Array.prototype.slice;
//     return function() {
//         if (arguments.length < length) {
//             var combined = [fn].concat(slice.call(arguments));
//             // 根据参数的长度，递归拼接参数
//             return curry(sub_curry.apply(this.combined), length - arguments.length)
//         } else {
//             return fn.apply(this, arguments);
//         }
//     }
// }

// var scope = "global scope";

// function checkscope() {
//     var scope = "local scope";

//     function f() {
//         return scope;
//     }
//     return f;
// }

// var foo = checkscope();
// const result = foo();
// console.log(result) // localscope
// var name = "The window"
// var obj = {
//     name: 'The obj',
//     getNameFunc: function() {
//         return function() {
//             return this.name;
//         }
//     }
// }

// alert(obj.getNameFunc()())

// var bar = {
//     myName: "time.geekbang.com",
//     printName: function() {
//         console.log(myName)
//     }
// }

// function foo() {
//     let myName = " 极客时间 "
//     return bar.printName
// }
// let myName = " 极客邦 "
// let _printName = foo()
// _printName()
// bar.printName()


// function curry(fn, args) {
//     // 获取当前要被柯里化函数的参数长度
//     length = fn.length;
//     args = args || []
//     return function() {
//         var _args = args.slice(0).concat(...arguments)

//         if (_args.length < length) {
//             return curry.call(this, fn, _args);
//         } else {
//             // _args.length == length 参数长度符合要求
//             return fn.apply(this, _args)
//         }
//     }
// }

// function sum(a, b) {
//     return a + b;
// }
// console.log('sumLength = ', sum.length)

// const curriedSum = curry(sum)
// const result = curriedSum(1)(2)
// console.log(result)

// function curry(fn, args, holes) {
//     length = fn.length
//     args = args || []
//     holes = holes || []
//     return function() {
//         var _args = args.slice(0),
//             _holes = holes.slice(0),
//             argsLen = args.length,
//             holesLen = holes.length,
//             arg,
//             i,
//             index = 0;
//         for (i = 0; i < arguments.length; i++) {
//             arg = arguments[i];
//             // 处理 fn(1,_,_,4)(_,3)
//             if (arg == _ && holesLen) {
//                 index++;
//                 if (index > holesLen) {
//                     _args.push(arg)
//                     _holes.push(argsLen - 1 + index - holesLen);
//                 }
//             }
//             // fn(1)(_)
//             else if (arg == _) {
//                 _args.push(arg);
//                 _holes.push(argsLen + i);
//             } else if (holesLen) {
//                 if (index >= holesLen) {
//                     _args.push(arg)
//                 } else {
//                     _args.splice(_holes[index], 1, arg)
//                     _holes.splice(index, 1)
//                 }
//             }
//         }


//     }
// }

// fn(1, 2, 3, 4, 5);
// fn(_, 2, 3, 4, 5)(1);
// fn(1, _, 3, 4, 5)(2);
// fn(1, _, 3)(_, 4)(2)(5);
// fn(1, _, _, 4)(_, 3)(2)(5);
// fn(_, 2)(_, _, 4)(1)(3)(5)

// Array.prototype.myForEach = function(cb) {
//     const thisArray = this;
//     const length = thisArray.length;
//     let index = -1;
//     // 对数组中的每一项元素执行该回调
//     while (++index < length) {
//         cb(thisArray[index], index, thisArray)
//     }
// };
// [1, 2, 3, 2].myForEach((item, index) => {
//     console.log(item)
// })

// const todos = [{ title: '学习', done: true }, { title: '吃饭', done: false }]
// const doneList = todos.filter(item => item.done)
// console.log(doneList)

// 同步操作
console.log('start');
// 宏任务入队
setTimeout(() => {
    console.log('timeout')
});

// 微任务 入队
Promise.resolve().then(() => {
    console.log('resolve');
});
// 同步操作
console.log('end');