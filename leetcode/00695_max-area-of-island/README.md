# 00695. Max Area of Island

给你一个大小为 m x n 的二进制矩阵 grid 。

岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

岛屿的面积是岛上值为 1 的单元格的数目。

计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

## Example 1

```txt
输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
输出：6
解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
```

![](https://gitee.com/geekhall/pic/raw/main/img/leetcode_00695.png)

## Example 2

```txt
输入：grid = [[0,0,0,0,0,0,0,0]]
输出：0
```

## Constraints

```txt
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] 为 0 或 1

```

## Solution 1

dfs方法，这里需要注意的是在dfs递归调用时需要使用“沉岛”方法，
即计算过对应的点之后需要将其赋值为0，否则会产生递归死循环。

### Go

```go
func maxAreaOfIsland(grid [][]int) int {
 var max int
 r, c := len(grid), len(grid[0])
 for i := 0; i < r; i++ {
  for j := 0; j < c; j++ {
   if grid[i][j] == 1 {
    area := get_area(grid, r, c, i, j)
    if area > max {
     max = area
    }
   }
  }
 }
 return max
}

func get_area(grid [][]int, r int, c int, i int, j int) int {
 var area int = 0
 if grid[i][j] == 1 {
  area += 1
  grid[i][j] = 0 // 计算过对应的点之后需要将其赋值为0，否则会产生递归死循环。
  if i-1 >= 0 && grid[i-1][j] == 1 {
   area += get_area(grid, r, c, i-1, j)
  }
  if i+1 < r && grid[i+1][j] == 1 {
   area += get_area(grid, r, c, i+1, j)
  }
  if j-1 >= 0 && grid[i][j-1] == 1 {
   area += get_area(grid, r, c, i, j-1)
  }
  if j+1 < c && grid[i][j+1] == 1 {
   area += get_area(grid, r, c, i, j+1)
  }
 }
 return area
}
```
