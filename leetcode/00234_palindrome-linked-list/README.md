# 00217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## 题目大意

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

## Example 1

```txt
Input: nums = [1,2,3,1]
Output: true
```

## Example 2

```txt
Input: nums = [1,2,3,4]
Output: false
```

## Example 3

```txt
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Constraints

```txt
1 <= nums.length <= 105
-109 <= nums[i] <= 109
```

## Solution 1

排序后比较相邻元素

### Go

```go
func containsDuplicate(nums []int) bool {
 if len(nums) <= 1 {
  return false
 }

 res := quickSort(nums)
 for i := 1; i < len(nums); i++ {
  if res[i] == res[i-1] {
   return true
  }
 }
 return false
}

func quickSort(nums []int) []int {
 if len(nums) < 2 {
  return nums
 }
 left, right := 0, len(nums)-1
 rand.Seed(time.Now().UnixNano()) // 取纳秒时间戳，可以保证每次的随机数种子都不同
 pivot := rand.Int() % len(nums)
 nums[pivot], nums[right] = nums[right], nums[pivot]

 for i, _ := range nums {
  if nums[i] < nums[right] {
   nums[left], nums[i] = nums[i], nums[left]
   left++
  }
 }

 nums[left], nums[right] = nums[right], nums[left]
 quickSort(nums[:left])
 quickSort(nums[left+1:])

 return nums
}
```

## Solution 2

使用map

```go
func containsDuplicate(nums []int) bool {
 if len(nums) < 2 {
  return false
 }
 num_map := make(map[int]int, 0)
 for _, v := range nums {
  num_map[v]++
 }
 for _, v := range num_map {
  if v > 1 {
   return true
  }
 }
 return false
}
```
