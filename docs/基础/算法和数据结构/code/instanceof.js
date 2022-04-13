const _instanceof = (target, Fn) => {
    // 第一个是实例，第二个参数是函数
    // 补全代码
    if (typeof target !== 'object' || target === null) return false;
    const father = Fn.prototype;
    let sonproto = target.__proto__;
    while (sonproto != null) {
        if (sonproto == father) return true;
        sonproto = sonproto.__proto__;
    }
    return false;
};

// 测试用例
function testCase() {
    const Fn = function() {};
    const o = new Fn();
    const result = _instanceof(o, Fn) && !_instanceof(o, Array);
    return result
}

console.log(testCase());