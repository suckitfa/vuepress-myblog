function deepClone(obj, map = new WeakMap()) {
    if (obj && typeof obj === 'object') {
        // object 
        const cloneObj = Array.isArray(obj) ? [] : {};
        if (map.has(obj)) {
            return map.get(obj)
        }
        map.set(obj, cloneObj)
            // 使用递归
        for (const key in obj) {
            cloneObj[key] = deepClone(obj[key], map)
        }
        return cloneObj;
    } else {
        // function string number boolean null undefined
        return obj;
    }
}
// 可遍历
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
// 不可遍历
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

const deepTag = [mapTag, setTag, arrayTag, objectTag]
    // 判断是否为引用类型
    // function , null 特殊处理
function isObject(obj) {
    const type = typeof obj;
    return obj !== null && (type === 'object' || type === 'function')
}

// 获取数据类型
function getType(target) {
    return Object.prototype.toString.call(target)
}

// 初始化
function getInit(target) {
    const ctor = target.constructor
    return new ctor();
}

function clone(target, map = new WeakMap()) {
    // 不是引用类型直接返回
    if (!isObject(target)) {
        return target
    }

    // 初始化
    const type = getType(target)
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target);
    }

    // 循环引用
    if (map.has(target)) {
        return map.get(target)
    }
    map.set(target, cloneTarget)

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            // 递归调用
            cloneTarget.add(clone(value, map));
        })
        return cloneTarget
    }

    // map
    if (type === mapTag) {
        target.forEach((value, key) => {
            // 递归调用
            cloneTarget.set(key, clone(value, map))
        })
    }

    // 克隆对象和数组
    for (const key in target) {
        cloneTarget[key] = clone(target[key], map)
    }
    return cloneTarget;
}

// Bool、Number、String、
// String、Date、Error这几种类型我们
// 都可以直接用构造函数和原始数据创建一个新对象：
function cloneOtherType(target, type) {
    const Ctor = target.constructor
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(target)
        case regexpTag:
            return cloneReg(target)
        case symbolTag:
            return cloneSymbol(target)
        default:
            return null;
    }
}

function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}


function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}