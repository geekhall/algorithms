# 00283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

## Example 1

```txt
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

## Example 2

```txt
Input: nums = [0]
Output: [0]
```

## Constraints

```txt
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
```

## 题目大意

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

## Solution 1

这里参考了快速排序的思想，
把不等于0的放到左边，等于0的放到右边。
使用两个指针i和j，只要nums[i]!=0，我们就交换nums[i]和nums[j]

### Go

```go
func moveZeroes(nums []int) {
 for lastNonZeroFoundAt, current := 0, 0; current < len(nums); current++ {
  if nums[current] != 0 {
   nums[current], nums[lastNonZeroFoundAt] = nums[lastNonZeroFoundAt], nums[current]
   lastNonZeroFoundAt++
  }
 }
}
```

### Python

```python

```

### Java

```java

```
