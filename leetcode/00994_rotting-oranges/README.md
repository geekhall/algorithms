# 00994. Rotting Oranges

```txt
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

## 题目大意
腐烂的橘子

在给定的网格中，每个单元格可以有以下三个值之一：

* 值 0 代表空单元格；
* 值 1 代表新鲜橘子；
* 值 2 代表腐烂的橘子。

每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

```

## Example 1

```txt
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
```

![Example1](https://gitee.com/geekhall/pic/raw/main/img/20211002232417.png)

## Example 2

```txt
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
```

## Example 3

```txt
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
```

## Constraints

```txt
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
```

## Solution 1

BFS

### Go

```go
func orangesRotting(grid [][]int) int {
 round := -1
 queue := make([][]int, 0)
 for i, row := range grid {
  for j, e := range row {
   if e == 2 {
    queue = append(queue, []int{i, j})
   }
  }
 }
 round = 0
 for len(queue) > 0 {
  queue = spread(grid, queue)
  round++
 }

 if has_good(grid) {
  return -1
 } else if round == 0 {
  return 0
 } else {
  return round - 1
 }
}

func spread(grid [][]int, queue [][]int) [][]int {
 r, c := len(grid), len(grid[0])
 res := make([][]int, 0)
 directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
 for _, node := range queue {
  i := node[0]
  j := node[1]
  if grid[i][j] == 2 {
   for _, direction := range directions {
    x := i + direction[0]
    y := j + direction[1]
    if x < 0 || x > r-1 || y < 0 || y > c-1 || grid[x][y] == 0 || grid[x][y] == 2 {
     continue
    } else {
     grid[x][y] = 2
     res = append(res, []int{x, y})
    }
   }
  }
 }
 return res
}
func has_good(grid [][]int) bool {
 for _, row := range grid {
  for _, e := range row {
   if e == 1 {
    return true
   }
  }
 }
 return false
}
```
