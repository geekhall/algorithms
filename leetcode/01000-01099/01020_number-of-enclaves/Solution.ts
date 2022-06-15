/**
 * ID:    01020
 * Title: Number of Enclaves
 * Difficulty: Medium
 * Description: You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.
 *
 * A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.
 *
 * Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.
 *
 * Example 1:
 *
 * Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]] Output: 3 Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
 *
 * Example 2:
 *
 * Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]] Output: 0 Explanation: All 1s are either on the boundary or can reach the boundary.
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 500
 * grid[i][j] is either 0 or 1.
 */
function numEnclaves(grid: number[][]): number {
  let m = grid.length
  let n = grid[0].length
  let count = 0
  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
      return
    }
    grid[i][j] = 0
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 1) {
      dfs(i, 0)
    }
    if (grid[i][n - 1] === 1) {
      dfs(i, n - 1)
    }
  }
  for (let j = 0; j < n; j++) {
    if (grid[0][j] === 1) {
      dfs(0, j)
    }
    if (grid[m - 1][j] === 1) {
      dfs(m - 1, j)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        count++
      }
    }
  }

  return count
};

function test_01020() {
  let grid = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
  console.log(numEnclaves(grid));
  grid = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
  console.log(numEnclaves(grid));
}

test_01020()
