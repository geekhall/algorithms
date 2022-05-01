# 00542. 01 Matrix

  _Read this in other languages:_
    [_English_](README.md)

<p>
给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。
</p>

<p>The distance between two adjacent cells is <code>1</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg" style="width: 253px; height: 253px;" />
<pre>
<strong>Input:</strong> mat = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[0,0,0]]
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg" style="width: 253px; height: 253px;" />
<pre>
<strong>Input:</strong> mat = [[0,0,0],[0,1,0],[1,1,1]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[1,2,1]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == mat.length</code></li>
	<li><code>n == mat[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
	<li><code>mat[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
	<li>There is at least one <code>0</code> in <code>mat</code>.</li>
</ul>


## Constraints

```txt
你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
树中节点的数量少于 4096
-1000 <= node.val <= 1000
```

## Solution 1

```txt
BFS
将原矩阵中值为0的位置，返回矩阵res也初始化为0，其余有值的初始化为-1，所有值为0的位置enque
第一轮遍历所有初始化时赋值为0的元素并deque，  若找到与其相邻的元素，且返回矩阵中值为-1，则赋值为1，将所有找到的位置enque
第二轮遍历所有第一轮找到的值为1的元素并deque，若找到与其相邻的元素，且返回矩阵中值为-1，则赋值为2，将所有找到的位置enque。。。
以此类推，直到最后一轮（queue为空）未知即返回了res。

以以下数组为例：
第一轮    第二轮     第三轮
mat     mat     mat
[0, 0, 0]   [0, 0, 0]   [0, 0, 0]
[0, 1, 0]   [0, 1, 0]   [0, 1, 0]
[1, 1, 1]   [1, 1, 1]   [1, 1, 1]

res     res     res
[0,  0,  0]   [0,  0,  0]   [0, 0, 0]
[0, -1,  0]   [0,  1,  0]   [0, 1, 0]
[-1,-1, -1]   [1, -1,  1]   [1, 2, 1]

 queue    queue    queue
[[0,0]     [1, 1]    [2, 1]
 [0,1]    [2, 0]
 [0,2]     [2, 2]
 [1,0]
 [1,2]]
```

### Go

```go
func updateMatrix1(mat [][]int) [][]int {
	directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	r, c := len(mat), len(mat[0])
	queue := make([][]int, 0)
	res := make([][]int, len(mat))
	if r == 0 || c == 0 {
		return res
	}
	for i := range mat {
		res[i] = make([]int, len(mat[0]))
		for j := range res[i] {
			if mat[i][j] == 0 {
				res[i][j] = 0
				queue = append(queue, []int{i, j})
			} else {
				res[i][j] = -1
			}
		}
	}
	level := 1
	for len(queue) > 0 {
		size := len(queue)
		for size > 0 {
			size--
			node := queue[0]
			queue = queue[1:]
			i, j := node[0], node[1]
			for _, direction := range directions {
				x := i + direction[0]
				y := j + direction[1]
				if x < 0 || x >= r || y < 0 || y >= c || res[x][y] >= 0 {
					continue
				}
				res[x][y] = level
				queue = append(queue, []int{x, y})
			}
		}
		level += 1
	}
	return res
}

```

## Solution 1 另一种写法

```go
func updateMatrix(mat [][]int) [][]int {
	res := make([][]int, len(mat))
	if len(mat) == 0 || len(mat[0]) == 0 {
		return res
	}
	queue := make([][]int, 0)
	for i := range mat {
		res[i] = make([]int, len(mat[0]))
		for j := range res[i] {
			if mat[i][j] == 0 {
				res[i][j] = -1
				queue = append(queue, []int{i, j})
			}
		}
	}
	level := 1
	for len(queue) > 0 {
		size := len(queue)
		for size > 0 {
			size--
			node := queue[0]
			queue = queue[1:]
			i, j := node[0], node[1]
			for _, direction := range [][]int{{-1, 0}, {1, 0}, {0, 1}, {0, -1}} {
				x := i + direction[0]
				y := j + direction[1]
				if x < 0 || x >= len(mat) || y < 0 || y >= len(mat[0]) || res[x][y] < 0 || res[x][y] > 0 {
					continue
				}
				res[x][y] = level
				queue = append(queue, []int{x, y})
			}
		}
		level++
	}
	for i, row := range res {
		for j, cell := range row {
			if cell == -1 {
				res[i][j] = 0
			}
		}
	}
	return res
}
```

## Solution 2

BFS

```go
func updateMatrix(mat [][]int) [][]int {
	r, c := len(mat), len(mat[0])
	res := make([][]int, len(mat))
	if r == 0 || c == 0 {
		return res
	}
	directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	for i := range mat {
		res[i] = make([]int, len(mat[0]))
		for j := range res[i] {
			// 原矩阵值为0的，返回矩阵相应位置也赋值为0
			if mat[i][j] == 0 {
				res[i][j] = 0
			} else if mat[i][j] == 1 {
				// 判断原矩阵值为1的位置，上下左右位置是否有0
				has_zero_around := false
				for _, direction := range directions {
					x := i + direction[0]
					y := j + direction[1]
					if x < 0 || x >= r || y < 0 || y >= c {
						continue
					} else if mat[x][y] == 0 {
						has_zero_around = true
						break
					}
				}

				if has_zero_around {
					// 原矩阵值为1，且周围有0的，返回矩阵相应位置赋值为1
					res[i][j] = 1
				} else {
					// 原矩阵值为1，且周围没有0的，返回矩阵相应位置赋值为最大值
					res[i][j] = math.MaxInt64
				}
			}
		}
	}

	// 递归调用DFS
	i := 0
	i_ret := 1
	for i < i_ret {
		i++
		i_ret = dfs(res, i)
	}
	return res
}
func dfs(res [][]int, level int) int {
	i_ret := level
	directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	r, c := len(res), len(res[0])
	for i := range res {
		for j := range res[i] {
			if res[i][j] == level {
				for _, direction := range directions {
					x := i + direction[0]
					y := j + direction[1]
					if x < 0 || x >= r || y < 0 || y >= c || res[x][y] <= level {
						continue
					} else {
						res[x][y] = level + 1
						i_ret++
					}
				}
			}
		}
	}
	return i_ret
}
```

## Solution 3

DP

```txt
由于上下左右有四个方向，每次处理两个方向，可以降低时间复杂度。
第一次循环从上到下，从左到右遍历，处理矩阵元素的上边和左边
第二次循环从下到上，从右到左遍历，处理矩阵元素的下边和右边
以以下数组为例：
第一轮     第二轮
  mat
[0, 0, 1, 1]
[0, 1, 0, 1]
[1, 1, 1, 0]
[1, 1, 1, 0]

  res     res
[0, 0, 1, 2]   [0, 0, 1, 2]
[0, 1, 0, 1]   [0, 1, 0, 1]
[1, 2, 1, 0]   [1, 2, 1, 0]
[2, 3, 2, 0]   [2, 2, 1, 0]
```

```go
func updateMatrix(mat [][]int) [][]int {
	r, c := len(mat), len(mat[0])
	if r == 0 || c == 0 {
		return [][]int{}
	}
	for i, row := range mat {
		for j, _ := range row {
			if mat[i][j] == 0 {
				continue
			}
			left, top := math.MaxInt16, math.MaxInt16
			if i > 0 {
				top = mat[i-1][j] + 1
			}
			if j > 0 {
				left = mat[i][j-1] + 1
			}
			mat[i][j] = min(left, top)
		}
	}
	for i := r - 1; i >= 0; i-- {
		for j := c - 1; j >= 0; j-- {
			if mat[i][j] == 0 {
				continue
			}
			right, bottom := math.MaxInt16, math.MaxInt16
			if i < r-1 {
				bottom = mat[i+1][j] + 1
			}
			if j < c-1 {
				right = mat[i][j+1] + 1
			}
			mat[i][j] = min(mat[i][j], min(bottom, right))
		}
	}
	return mat
}
func min(a int, b int) int {
	if a > b {
		return b
	} else {
		return a
	}
}
```
