# 00189. Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.

## Example 1

```txt
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

## Example 2

```txt
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

## Constraints

```txt
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
```

## 题目大意

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

## Solution 1

暴力解法，不好，超过时间限制

### Go

```go
func rotate1(nums []int, k int) {
 temp := 0
 for k > 0 {
  temp = nums[len(nums)-1]
  for i := len(nums) - 1; i > 0; i-- {
   nums[i] = nums[i-1]
  }
  nums[0] = temp
  k--
 }
}
```

## Solution 2

### Go

```go
func rotate(nums []int, k int) {
 length := len(nums)
 ans := make([]int, length)
 for i, n := range nums {
  ans[(i+k)%length] = n
 }
 copy(nums, ans)
}
```

## Solution 3

递归

### Go

```go
func rotate(nums []int, k int) {
 n := k % len(nums)
 reverse(nums)
 reverse(nums[:n])
 reverse(nums[n:])
}
func reverse(nums []int) {
 for i, n := 0, len(nums); i < n/2; i++ {
  nums[i], nums[n-i-1] = nums[n-i-1], nums[i]
 }
}
```
