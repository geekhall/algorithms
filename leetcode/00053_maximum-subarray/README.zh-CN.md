# 00053. Maximum Subarray

  _Read this in other languages:_
    [_English_](README.md)

<p>Given an integer array <code>nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return <em>its sum</em>.</p>

<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]
<strong>Output:</strong> 6
<strong>Explanation:</strong> [4,-1,2,1] has the largest sum = 6.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1]
<strong>Output:</strong> 1
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,4,-1,7,8]
<strong>Output:</strong> 23
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.</p>

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
