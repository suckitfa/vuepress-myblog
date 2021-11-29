function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // 选择基准值，待排序区间的首部元素
    var pivot = arr[0];
    var left = [];
    var right = [];

    // 待排序区间，从第二个元素开始
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 合并左右数组
    return quickSort(left).concat(pivot).concat(quickSort(right));
}

// var quickSort2 = function(arr) {
//     // 如果数组不可在分，则跳出递归
//     if (arr.length <= 1) {
//         return arr;
//     }
//     // 基准值取数组第一个
//     var pivot = arr[0];
//     var left = [];
//     var right = [];
//     for (var i = 1; i < arr.length; i++) {
//         // 小于等于基准值的放在左边,大于基准值的放在右边
//         if (arr[i] <= pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     // 对左右数组递归quickSort，最后合并成一个完整的数组
//     return quickSort2(left).concat(pivot).concat(quickSort2(right));
// }

const testArray = [6, 3, 2, 6, 7, 12, 9, 3]
console.log(quickSort(testArray));