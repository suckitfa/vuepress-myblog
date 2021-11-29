### 基础算法思路的应用

系统性的学习资源 清华大学幕客

![image-20211110164306441](/Users/bobtang/Library/Application Support/typora-user-images/image-20211110164306441.png)

![image-20211109100436427](/Users/bobtang/Library/Application Support/typora-user-images/image-20211109100436427.png)

> 计数排序；桶排序
>
> 大量重复的元素：快排

### 三路快排

![image-20211110131440856](/Users/bobtang/Library/Application Support/typora-user-images/image-20211110131440856.png)

> 将整个数组分成3部分

![image-20211109113420056](/Users/bobtang/Library/Application Support/typora-user-images/image-20211109113420056.png)

适合大量的元素重复的情况



### 很多题目都是基于基础算法来实现的

- 88 Merge sorted Array (归并排序中的归并操作)

- 215 Kth larget Element in an Array (利用亏安排partition中，将pivot防止在其正确位置上的性质)

  ```java
  class Solution {
      Random random = new Random();
  
      public int findKthLargest(int[] nums, int k) {
          return quickSelect(nums, 0, nums.length - 1, nums.length - k);
      }
  
      public int quickSelect(int[] a, int l, int r, int index) {
          int q = randomPartition(a, l, r);
          if (q == index) {
              return a[q];
          } else {
              return q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a, l, q - 1, index);
          }
      }
  
      public int randomPartition(int[] a, int l, int r) {
          int i = random.nextInt(r - l + 1) + l;
          swap(a, i, r);
          return partition(a, l, r);
      }
  
      public int partition(int[] a, int l, int r) {
          int x = a[r], i = l - 1;
          for (int j = l; j < r; ++j) {
              if (a[j] <= x) {
                  swap(a, ++i, j);
              }
          }
          swap(a, i + 1, r);
          return i + 1;
      }
  
      public void swap(int[] a, int i, int j) {
          int temp = a[i];
          a[i] = a[j];
          a[j] = temp;
      }
  }
  ```

  

  



### 167 Two Sum I Input array is sorted

> 解题时，明确细节
>
> 数组有序 ===》 二分查找
>
> 暴力解法0(n^2) --> 0n * log(n)

双指针 夹逼



- 125 Valid Palindrome （回文串）
- 244 Reverse String
- 345 Reverse Vowels of a String
- Container With Most water (容乃最多水)





### 双指针

滑动窗口：适合解决子串问题

- 209 Minum Size Subarray Sum

```js
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let  left = 0, right = -1;// nums[l,r]为滑动窗口
    let sum = 0;
    let res = nums.length + 1; //滑动窗口长度
    while(left < nums.length) {
        if((right+1 < nums.length)&& sum < target) {
            // 向滑动窗口添加值
            sum += nums[++right]
        } else {
            sum -= nums[left++]
        }
        // 找到目标值
        if(sum >= target) {
            res = Math.min(res,right-left + 1);
        }
    }
    // 未更新
    if(res === nums.length + 1) return 0;
    else return res;
};
```

![image-20211117101340681](/Users/bobtang/Library/Application Support/typora-user-images/image-20211117101340681.png)

- 3 Longest Substring Without Repeating Characters

```c++
class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char,int> need,window;
        for(char c : t) need[c]++;
        int left = 0,right = 0;
        int len = INT_MAX,start = 0;
        int valid = 0;
        while(right < s.size()) {
            char c = s[right];
            right ++;

            if(need.count(c)) {
                window[c] ++;
                if(window[c] == need[c]) {
                    valid ++;
                }
            }

            while(valid == need.size()) {
                // 更新当前的子串长度，和起始索引
                if(right - left < len) {
                    start = left;
                    len = right - left;
                }
                char item = s[left];
                left ++;
                if(need.count(item)) {
                    if(window[item] == need[item]) valid--;
                    window[item] --;
                }
            }
        }
        return len == INT_MAX ? "" : s.substr(start,len);
    }
};
```



![image-20211115101940992](/Users/bobtang/Library/Application Support/typora-user-images/image-20211115101940992.png)

- 438 Find All Anagrams in a String

```c++
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        // 存储结果
        vector<int> res;
        unordered_map<char,int> need,window;
        for(char c : p) need[c]++;
        int left = 0,right = 0;//[left,right)
        // 当前滑动窗口中，满足要求的字符个数
        int valid = 0;

        while(right < s.size()) {
            // 滑动窗口先扩大
            char c = s[right];
            right ++;
            if(need.count(c)) {
                window[c] ++;
                if(window[c] == need[c]) {
                    valid ++;
                }
            }

            // 窗口开始收缩时机，
            while(right - left >= p.size()) {
                if(valid == need.size()) {
                    // 先保存
                    res.push_back(left);
                }

                char t = s[left];
                left ++;
                if(need.count(t)) {
                    if(window[t] == need[t]) valid --;
                    window[t]--;
                }
            }

        }
        return res;
    }
};
```



- 76 Minimum Window Substring

```c++
class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char,int> need,window;
        for(char c : t) need[c]++;
        int left = 0,right = 0;
        int len = INT_MAX,start = 0;
        int valid = 0;
        while(right < s.size()) {
            char c = s[right];
            right ++;

            if(need.count(c)) {
                window[c] ++;
                if(window[c] == need[c]) {
                    valid ++;
                }
            }

            while(valid == need.size()) {
                // 更新当前的子串长度，和起始索引
                if(right - left < len) {
                    start = left;
                    len = right - left;
                }
                char item = s[left];
                left ++;
                if(need.count(item)) {
                    if(window[item] == need[item]) valid--;
                    window[item] --;
                }
            }
        }
        return len == INT_MAX ? "" : s.substr(start,len);
    }
};
```



### 48 最长无重复子串

```js
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // 滑动窗口中的记录
        unordered_map<char,int> window;
        int left = 0,right = 0;
        int len = 0;
        while(right < s.size()) {
            char c = s[right];
            right ++;
            window[c] ++;
          	// 收缩的关键是其中没有重复的子串
            while(window[c] > 1) {
                char d = s[left];
                left ++;
                window[d] --;
            }
            len = max(len,right-left);
        }
        return len;
    }
};  
```

