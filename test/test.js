// 准确的判断数据类型
// 可以继续遍历的
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

// 不可继续遍历
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

// 判断是否为引用类型
function isObject(val) {
    const type = typeof val;
    return val !== null && (type === 'object' || type === 'function');
}

function getInit(obj) {
    const Contor = obj.constructor;
    return new Contor();
}
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

function getType(val) {
    return Object.prototype.toString.call(val)
}

function clone(target, map = new WeakMap()) {

    // 克隆原始数据类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    const type = getType(target)
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type)
    }

}