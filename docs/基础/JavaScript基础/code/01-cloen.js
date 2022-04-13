// 注意：
// 1. 参数可能包含 函数、 正则、 日期、 ES6新对象 都是引用对象
// 如果是"object"，就获取该参数的构造函数名，通过正则表达式判断该对象是否为函数、正则、日期、ES6新对象等，
// 如果返回true，则直接返回该参数
// 遍历: 区分可遍历和不可遍历对象
// 不可遍历对象特殊处理
// 可遍历对象
const _shallowClone = target => {
    if (typeof target === 'object' && target != null) {
        // 补全代码
        // 不可遍历对象: Function RegExp Date 
        const constructor = target.constructor;
        if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return target;
        // 可遍历对象: 普通对象，数组
        const cloenTarget = Array.isArray(target) ? [] : {};
        for (let key in target) {
            cloenTarget[key] = target[key];
        }
        return cloenTarget;
    } else {
        // 基本数据类型: string number boolean null undefined symbol
        return target;
    }
}