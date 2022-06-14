/**
 * ID:    00200
 * Title: Number of Islands
 * Difficulty: Medium
 * Description: Given an m x n 2D binary grid grid which represents a map of '1' s (land) and '0' s (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 *
 * Input: grid = [ ["1","1","1","1","0"], ["1","1","0","1","0"], ["1","1","0","0","0"], ["0","0","0","0","0"] ] Output: 1
 *
 * Example 2:
 *
 * Input: grid = [ ["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"] ] Output: 3
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 */
function numIslands(grid: string[][]): number {
  let res = 0
  const dfs = (grid: string[][], i: number, j: number) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== '1')
      return
    grid[i][j] = '2'
    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        res++
        dfs(grid, i, j)
      }
    }
  }
  return res
};

function test_00200() {
  let grid = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]
  console.log(numIslands(grid))
  grid = [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]
  console.log(numIslands(grid))
}

test_00200()
