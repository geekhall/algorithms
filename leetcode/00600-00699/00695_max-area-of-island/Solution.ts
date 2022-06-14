/**
 * ID:    00695
 * Title: Max Area of Island
 * Difficulty: Medium
 * Description: You are given an m x n binary matrix grid. An island is a group of 1 's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 *
 * Return the maximum area of an island in grid. If there is no island, return 0.
 *
 * Example 1:
 *
 * Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]] Output: 6 Explanation: The answer is not 11, because the island must be connected 4-directionally.
 *
 * Example 2:
 *
 * Input: grid = [[0,0,0,0,0,0,0,0]] Output: 0
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 50
 * grid[i][j] is either 0 or 1.
 */
function maxAreaOfIsland(grid: number[][]): number {
  let max = 0

  const dfs = (grid: number[][], i: number, j: number): number => {
    let res = 0
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
      return res
    }
    grid[i][j] = 0
    res += 1
    res += dfs(grid, i + 1, j)
    res += dfs(grid, i - 1, j)
    res += dfs(grid, i, j + 1)
    res += dfs(grid, i, j - 1)
    return res
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, i, j))
      }
    }
  }
  return max
};

function test_00695() {
  let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
  console.log(maxAreaOfIsland(grid))
}

test_00695()
