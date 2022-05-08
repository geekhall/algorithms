# 00169. Majority Element

  _Read this in other languages:_
    [_English_](README.md)


给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。


<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,3]
<strong>Output:</strong> 3
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,1,1,1,2,2]
<strong>Output:</strong> 2
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?


## Example 1

```txt
Input: nums = [3,2,3]
Output: 3
```

## Example 2

```txt
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

## Constraints

```txt
n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1
```

## Solution 1

### Go

```go
func majorityElement(nums []int) int {
 m := make(map[int]int)
 for _, v := range nums {
  m[v]++
  if m[v] > len(nums)/2{
   return v
  }
 }
 for k, v := range m {
  if v > len(nums)/2 {
   return k
  }
 }
 return 0
}
```

## Solution 2

排序后，第n/2个元素即为众数。

```go
func majorityElement2(nums []int) int {
 sort.Ints(nums)
 return nums[len(nums)/2]
}
```

## Solution 3

随机化，因为超过一半的数组下标被众数占据了，这样我们随机挑选一个下标对应的元素并验证，有很大的概率能找到众数。

```go
func majorityElement3(nums []int) int {
 for true {
  rand.Seed(time.Now().UnixNano())
  index := rand.Int() % len(nums)
  if countElement(nums, nums[index]) > len(nums)/2 {
   return nums[index]
  }
 }
 return 0
}
func countElement(nums []int, n int) int {
 count := 0
 for _, v := range nums {
  if n == v {
   count++
  }
 }
 return count
}
```

## Solution 4

分治

```go
func majorityElement4(nums []int) int {
 return majorityElementRec(nums, 0, len(nums)-1)
}
func majorityElementRec(nums []int, lo, hi int) int {
 if lo == hi {
  return nums[lo]
 }
 mid := lo + (hi-lo)>>1
 left := majorityElementRec(nums, lo, mid)
 right := majorityElementRec(nums, mid+1, hi)
 if left == right {
  return left
 } else {
  if countElementFromTo(nums, left, lo, mid) >= countElementFromTo(nums, right, mid+1, hi) {
   return left
  } else {
   return right
  }
 }
}
```

## Solution 5

Boyer-Moore投票法

```go
func majorityElement(nums []int) int {
 count := 0
 var candidate int
 for _, v := range nums {
  if count == 0 {
   candidate = v
  }
  if v == candidate {
   count++
  } else {
   count--
  }
 }
 return candidate
}
```
