function testCase() {
    const a = [1, 2, 3];
    const newa = a._map(i => i * 3);
    console.log(newa)
    judge = JSON.stringify(newa) === '[3,6,9]';
    return judge
}

// 补全代码, 接收一个回调
Array.prototype._map = function(fn) {
    let index = 0;
    const array = this;
    // 所有元素执行一遍
    while (index < array.length) {
        array[index] = fn.call(array[index], index, array)
        index++;
    }
    return array;
}
testCase();