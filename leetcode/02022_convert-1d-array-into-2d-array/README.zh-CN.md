# 02022. Convert 1D Array Into 2D Array

  _Read this in other languages:_
    [_English_](README.md)

<p>给你一个下标从 0 开始的一维整数数组 original 和两个整数 m 和  n 。你需要使用 original 中 所有 元素创建一个 m 行 n 列的二维数组。

original 中下标从 0 到 n - 1 （都 包含 ）的元素构成二维数组的第一行，下标从 n 到 2 * n - 1 （都 包含 ）的元素构成二维数组的第二行，依此类推。

请你根据上述过程返回一个 m x n 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组。

</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2021/08/26/image-20210826114243-1.png" style="width: 500px; height: 174px;" />
<pre>
<strong>Input:</strong> original = [1,2,3,4], m = 2, n = 2
<strong>Output:</strong> [[1,2],[3,4]]
<strong>Explanation:</strong> The constructed 2D array should contain 2 rows and 2 columns.
The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> original = [1,2,3], m = 1, n = 3
<strong>Output:</strong> [[1,2,3]]
<strong>Explanation:</strong> The constructed 2D array should contain 1 row and 3 columns.
Put all three elements in original into the first row of the constructed 2D array.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> original = [1,2], m = 1, n = 1
<strong>Output:</strong> []
<strong>Explanation:</strong> There are 2 elements in original.
It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= original.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= original[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= m, n &lt;= 4 * 10<sup>4</sup></code></li>
</ul>

## Example 1

```txt
输入：original = [1,2,3,4], m = 2, n = 2
输出：[[1,2],[3,4]]
解释：
构造出的二维数组应该包含 2 行 2 列。
original 中第一个 n=2 的部分为 [1,2] ，构成二维数组的第一行。
original 中第二个 n=2 的部分为 [3,4] ，构成二维数组的第二行。
```

## Example 2

```txt
输入：original = [1,2,3], m = 1, n = 3
输出：[[1,2,3]]
解释：
构造出的二维数组应该包含 1 行 3 列。
将 original 中所有三个元素放入第一行中，构成要求的二维数组。
```

## Example 3

```txt
输入：original = [1,2], m = 1, n = 1
输出：[]
解释：
original 中有 2 个元素。
无法将 2 个元素放入到一个 1x1 的二维数组中，所以返回一个空的二维数组。
```

## Example 4

```txt
输入：original = [3], m = 1, n = 2
输出：[]
解释：
original 中只有 1 个元素。
无法将 1 个元素放满一个 1x2 的二维数组，所以返回一个空的二维数组。
```

## Constraints

```txt
1 <= original.length <= 5 * 104
1 <= original[i] <= 105
1 <= m, n <= 4 * 104
```

## Solution 1

### Go

```go
func construct2DArray1(original []int, m int, n int) [][]int {
 if m*n != len(original) {
  return nil
 }
 res := make([][]int, m)
 for i := 0; i < m; i++ {
  res[i] = make([]int, n)
  for j := 0; j < n; j++ {
   res[i][j] = original[i*n+j]
  }
 }
 return res
}

```

## Solution 2

```go
func construct2DArray(original []int, m int, n int) [][]int {
 k := len(original)
 if k != m*n {
  return nil
 }
 ans := make([][]int, 0, m)
 for i := 0; i < k; i += n {
  ans = append(ans, original[i:i+n])
 }
 return ans
}
```
