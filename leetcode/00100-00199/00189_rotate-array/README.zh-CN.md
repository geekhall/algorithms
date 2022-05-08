# 00189. Rotate Array

  _Read this in other languages:_
    [_English_](README.md)

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。


<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5,6,7], k = 3
<strong>Output:</strong> [5,6,7,1,2,3,4]
<strong>Explanation:</strong>
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,-100,3,99], k = 2
<strong>Output:</strong> [3,99,-1,-100]
<strong>Explanation:</strong>
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>Try to come up with as many solutions as you can. There are at least <strong>three</strong> different ways to solve this problem.</li>
	<li>Could you do it in-place with <code>O(1)</code> extra space?</li>
</ul>

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
