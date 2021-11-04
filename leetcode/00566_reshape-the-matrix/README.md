# 00566. Reshape the Matrix

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

## 题目大意

在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

## Example 1

```txt
输入：mat = [[1,2],[3,4]], r = 1, c = 4
输出：[[1,2,3,4]]
```

## Example 2

```txt
输入：mat = [[1,2],[3,4]], r = 2, c = 4
输出：[[1,2],[3,4]]
```

## Constraints

```txt
m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300
```

## Solution 1

Queue

### Go

```go
func matrixReshape1(mat [][]int, r int, c int) [][]int {
 m := len(mat)
 n := len(mat[0])
 if m*n != r*c {
  return mat
 }

 queue := make([]int, 0)
 for i := 0; i < len(mat); i++ {
  for j := 0; j < len(mat[0]); j++ {
   queue = append(queue, mat[i][j])
  }
 }

 res := make([][]int, r)
 for i := 0; i < r; i++ {
  res[i] = make([]int, c)
  for j := 0; j < c; j++ {
   res[i][j] = queue[0]
   queue = queue[1:]
  }
 }
 return res
}
```

## Solution 2

```go
func matrixReshape(nums [][]int, r int, c int) [][]int {
 n, m := len(nums), len(nums[0])
 if n*m != r*c {
  return nums
 }
 ans := make([][]int, r)
 for i := range ans {
  ans[i] = make([]int, c)
 }
 for i := 0; i < n*m; i++ {
  ans[i/c][i%c] = nums[i/m][i%m]
 }
 return ans
}
```
