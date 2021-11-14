// 交换数组中的元素
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partion(arr, left, right) {
    var index = left;
    var pivot = arr[right]; // 取出待排序区间中最后一个元素作为基准值
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            swap(arr, index, i);
            index++;
        }
    }
    swap(arr, right, index);
    return index;
}

function quickSort(arr, left, right) {
    if (left > right) {
        return;
    }
    var sortIndex = partion(arr, left, right);
}