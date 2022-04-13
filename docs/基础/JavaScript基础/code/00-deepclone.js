// 请补全JavaScript代码，要求实现对象参数的深拷贝并返回拷贝之后的新对象。
// 注意：
// 1. 参数对象和参数对象的每个数据项的数据类型范围仅在数组、普通对象（{}）、基本数据类型中]
// 2. 无需考虑循环引用问题
// https: //www.nowcoder.com/practice/3d436d07f5cb4b628a4dd7c12476cabe?tpId=274&gioEnter=menu

const _sampleDeepClone = target => {
    // 补全代码
    // 普通数据类型: string boolean number null undefined 
    if (target == null || typeof target !== 'object') {
        return target;
    }
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            if (target[key] && typeof target[key] == 'object') {
                cloneTarget[key] = _sampleDeepClone(target[key]);
            } else {
                // 基本数据类型
                cloneTarget[key] = target[key];
            }
        }
    }
    return cloneTarget;
};