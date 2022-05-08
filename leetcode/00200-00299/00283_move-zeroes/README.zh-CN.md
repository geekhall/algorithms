# 00283. Move Zeroes

  _Read this in other languages:_
    [_English_](README.md)

<p>
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。
</p>

<p><strong>Note</strong> that you must do this in-place without making a copy of the array.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,0,3,12]
<strong>Output:</strong> [1,3,12,0,0]
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you minimize the total number of operations done?



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
