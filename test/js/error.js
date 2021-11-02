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

function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    }
}

function curry(fn, length) {
    // 获取函数接受参数的长度
    length = length || fn.length;
    var slice = Array.prototype.slice;
    return function() {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            // 根据参数的长度，递归拼接参数
            return curry(sub_curry.apply(this.combined), length - arguments.length)
        } else {
            return fn.apply(this, arguments);
        }
    }
}