function type(val) {
    const result = Object.prototype.toString.call(val);
    // 这个正则，扣出数据类型名字
    return result.match(/\[object (.*?)\]/)[1].toLowerCase();
}
[
    'String',
    'Boolean',
    'Number',
    'Undefined',
    'Null',
    'Symbol',
    'Boolean',
    'Function',
    'RegExp'
].forEach(item => {
    type['is' + item] = (val) => {
        return type(val) === item.toLowerCase();
    }
})

console.log(type(1))
console.log(type.isNumber(NaN))