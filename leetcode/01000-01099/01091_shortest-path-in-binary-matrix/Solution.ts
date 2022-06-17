/**
 * ID:    01091
 * Title: Shortest Path in Binary Matrix
 * Difficulty: Medium
 * Description: Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
 *
 * A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
 *
 * All the visited cells of the path are 0.
 * All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
 *
 * The length of a clear path is the number of visited cells of this path.
 *
 * Example 1:
 *
 * Input: grid = [[0,1],[1,0]] Output: 2
 *
 * Example 2:
 *
 * Input: grid = [[0,0,0],[1,1,0],[1,1,0]] Output: 4
 *
 * Example 3:
 *
 * Input: grid = [[1,0,0],[1,1,0],[1,1,0]] Output: -1
 *
 * Constraints:
 *
 * n == grid.length
 * n == grid[i].length
 * 1 <= n <= 100
 * grid[i][j] is 0 or 1
 */
function shortestPathBinaryMatrix(grid: number[][]): number {
  let res = 0
  let checked = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false))

  const dfs = (grid: number[][], i: number, j: number): number => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 1 || checked[i][j]) {
      return 0
    }
    checked[i][j] = true
    grid[i][j] = 1
    res += 1
    res += dfs(grid, i + 1, j)
    res += dfs(grid, i, j + 1)
    return res
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        res = Math.max(res, dfs(grid, i, j))
      }
    }
  }
  return res === 0 ? -1 : res
};

function test_01091() {
  let grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]]
  console.log(shortestPathBinaryMatrix(grid))
}

test_01091()
