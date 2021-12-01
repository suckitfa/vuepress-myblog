function test() {
    const a = [5, 6, 7];
    const newa = a._filter(i => i > 5);
    console.log(newa);

    const judge = JSON.stringify(newa) === '[6,7]';
    return judge
}
test();

// 补全代码
Array.prototype._filter = function(fn) {
    const array = this;
    const len = array.length;
    const result = [];
    let index = 0;
    while (index < len) {
        const cur = array[index]
        if (fn(cur, index, array)) result.push(cur);
        index++;
    }
    return result;
}