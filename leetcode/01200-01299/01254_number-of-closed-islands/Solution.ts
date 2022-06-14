/**
 * ID:    01254
 * Title: Number of Closed Islands
 * Difficulty: Medium
 * Description: Given a 2D grid consists of 0s (land) and 1s (water). An island is a maximal 4-directionally connected group of 0 s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
 *
 * Return the number of closed islands.
 *
 * Example 1:
 *
 * Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]] Output: 2 Explanation: Islands in gray are closed because they are completely surrounded by water (group of 1s).
 *
 * Example 2:
 *
 * Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]] Output: 1
 *
 * Example 3:
 *
 * Input: grid = [[1,1,1,1,1,1,1], [1,0,0,0,0,0,1], [1,0,1,1,1,0,1], [1,0,1,0,1,0,1], [1,0,1,1,1,0,1], [1,0,0,0,0,0,1], [1,1,1,1,1,1,1]] Output: 2
 *
 * Constraints:
 *
 * 1 <= grid.length, grid[0].length <= 100
 * 0 <= grid[i][j] <=1
 */
function closedIsland(grid: number[][]): number {
  let res = 0
  let totally_surrendled = true
  const dfs = (grid: number[][], i: number, j: number) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      totally_surrendled = false
      return
    }
    if (grid[i][j] !== 0) {
      return
    }
    grid[i][j] = 1
    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        totally_surrendled = true
        dfs(grid, i, j)
        if (totally_surrendled) {
          res++
        }
      }
    }
  }

  return res
};

function test_01254() {
  let grid = [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]
  console.log(closedIsland(grid))
  grid = [
    [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0]
  ]
  console.log(closedIsland(grid))
}

test_01254()
