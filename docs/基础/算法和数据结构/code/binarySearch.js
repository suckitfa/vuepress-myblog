function binarySearch(nums, target) {
    let left = 0,
        right = nums.length - 1; // [left,right]搜索
    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2);
        const cur = nums[mid];
        if (cur === target) {
            return mid;
        } else if (cur > target) {
            right = mid - 1;
        } else if (cur < target) {
            left = mid + 1;
        }
    }
    return -1;
}

const arr = [1, 3, 4, 5, 6, 7, 8, 9]
const target = 6;
console.log(binarySearch(arr, target))