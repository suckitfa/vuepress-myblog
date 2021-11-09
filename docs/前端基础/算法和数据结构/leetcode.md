### 基础算法思路的应用

![image-20211109100436427](/Users/bobtang/Library/Application Support/typora-user-images/image-20211109100436427.png)

计数排序；桶排序

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let colorCount = [0,0,0];
    // 统计频率
    for(let i = 0; i < nums.length;i++) {
        colorCount[nums[i]] ++;
    }
    let numsIndex = 0;
  
    colorCount.forEach((curColorCount,index)=>{
        for(let i = 0; i < curColorCount;i++) {
            nums[numsIndex] = index;
            numsIndex++;
        }
    })
};
```

### 三路快排

> 先理解普通快排

![image-20211109113420056](/Users/bobtang/Library/Application Support/typora-user-images/image-20211109113420056.png)

适合大量的元素重复的情况

```c++
void sortColor(vetor<int>& nums) {
  int zero = -1; // nums[0...zero] === 0
  int two = nums.size(); // nums[two..n-1] = 2;
  for(int i =0; i < two;) {
    if(nums[i] == 1) {
      i++;
    } else if(nums[i] == 2) {
      swap(nums[i],nums[--two]);
    } else {
      swap(nums[++zero],nums[i++]);
    }
  }
}
```

### 很多题目都是基于基础算法来实现的

- 88 Merge sorted Array (归并排序中的归并操作)
- 215 Kth larget Element in an Array (利用亏安排partition中，将pivot防止在其正确位置上的性质)



### 167 Two Sum I Input array is sorted

> 解题时，明确细节
>
> 数组有序 ===》 二分查找
>
> 暴力解法0(n^2) --> 0n * log(n)

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length;i++) {
        const remaining = target - numbers[i];
        const index = binarySearch(i+1,numbers,remaining);
        if(index !== -1) {
            return [i+1,index+1];
        }
    }
};

// 从start开始进行二分查找
function binarySearch(start,nums,target){
    let left = start, right = nums.length-1;
    while(left <= right) {
        let mid = parseInt(left+(right-left)/2);
        if(nums[mid]===target) {
            return mid;
        } else if(nums[mid] > target) {
            right = mid-1;
        } else if(nums[mid] < target) {
            left = mid+1;
        }
    }
    return -1;
}
```

双指针 夹逼

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while(left <= right) {
        const curSum = numbers[left] + numbers[right];
        if(curSum === target) {
            return [left+1,right+1];
        } else if(curSum > target) {
            right --;
        } else if(curSum < target) {
            left ++;
        }
    }
};
```

- 125 Valid Palindrome （回文串）
- 244 Reverse String
- 345 Reverse Vowels of a String
- Container With Most water (容乃最多水)
