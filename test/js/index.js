const testarr = [1, 11111, 2, [3, [3, [5, 6, [6]]]]];

function flat(arr) {
    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr)
    }
    return arr;
}


console.log(flat(testarr));