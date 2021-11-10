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
