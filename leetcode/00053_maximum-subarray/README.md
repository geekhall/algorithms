# 00053. MaximumSub

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

## 题目大意

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

这个问题在机械工业出版社出版的《数据结构与算法分析》一书中给出了四种算法，
用以说明不同算法的时间复杂度。在下面说明

## Example 1

```txt
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

## Example 2

```txt
Input: nums = [1]
Output: 1
```

## Example 3

```txt
Input: nums = [5,4,-1,7,8]
Output: 23
```

## Constraints

```txt
1 <= nums.length <= 105
-104 <= nums[i] <= 104
```

## Solution 1

时间复杂度：O($N^3$)
 (Over time limit)

```go
func maxSubArray(nums []int) int {
 var thisSum, maxSum int
 maxSum = math.MinInt16
 for i := 0; i < len(nums); i++ {
  for j := i; j < len(nums); j++ {
   thisSum = 0
   for k := i; k <= j; k++ {
    thisSum += nums[k]
   }
   if thisSum > maxSum {
    maxSum = thisSum
   }
  }
 }
 return maxSum
}
```

## Solution 2

时间复杂度：O($N^2$)
(Over time limit)

```go
func maxSubArray(nums []int) int {
 var thisSum, maxSum int
 maxSum = math.MinInt16
 for i := 0; i < len(nums); i++ {
  thisSum = 0
  for j := i; j < len(nums); j++ {
   thisSum += nums[j]

   if thisSum > maxSum {
    maxSum = thisSum
   }
  }
 }
 return maxSum
}
```

## Solution 3

分治法

```go

```

## Solution 4

DP

dp[i] 表示 [0,i] 区间内各个子区间和的最大值，
状态转移方程:

* dp[i] = nums[i] + dp[i-1] (dp[i-1] > 0)，
* dp[i] = nums[i]           (dp[i-1] ≤ 0)。

遍历一次且不改变原数组的方法。，
BTY，《数据结构与算法分析》一书中的算法有误，如果使用`[-2 1 -3 4 -1 2 1 -5 4]`作为输入时，
书中的算法返回了2，实际正确答案应该为6，即子数组`[4 -1 2 1]`的和。

```go
func maxSubArray(nums []int) int {
 thisSum, maxSum := nums[0], nums[0]
 for i := 1; i < len(nums); i++ {
  if thisSum > 0 {
   thisSum += nums[i]
  } else {
   thisSum = nums[i]
  }
  if thisSum > maxSum {
   maxSum = thisSum
  }
  fmt.Println(thisSum, maxSum)
 }
 return maxSum
}

```

## Solution 5

DP，基本思想与 Solution4基本相同，但是使用了滚动数组的方式，
改变了原数组的内容，但进一步降低了空间使用。

### Go

```go
func maxSubArray(nums []int) int {
    max := nums[0]
    for i := 1; i < len(nums); i++ {
        if nums[i] + nums[i-1] > nums[i] {
            nums[i] += nums[i-1]
        }
        if nums[i] > max {
            max = nums[i]
        }
    }
    return max
}
```

## Solution 6

分治法

```go
func maxSubArray(nums []int) int {
 return get(nums, 0, len(nums)-1).mSum
}

func pushUp(l, r Status) Status {
 iSum := l.iSum + r.iSum
 lSum := max(l.lSum, l.iSum+r.lSum)
 rSum := max(r.rSum, r.iSum+l.rSum)
 mSum := max(max(l.mSum, r.mSum), l.rSum+r.lSum)
 return Status{lSum, rSum, mSum, iSum}
}

func get(nums []int, l, r int) Status {
 if l == r {
  return Status{nums[l], nums[l], nums[l], nums[l]}
 }
 m := (l + r) >> 1
 lSub := get(nums, l, m)
 rSub := get(nums, m+1, r)
 return pushUp(lSub, rSub)
}

func max(x, y int) int {
 if x > y {
  return x
 }
 return y
}

type Status struct {
 lSum, rSum, mSum, iSum int
}
```
