/**
 * ID:    01162
 * Title: As Far from Land as Possible
 * Difficulty: Medium
 * Description: Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.
 *
 * The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.
 *
 * Example 1:
 *
 * Input: grid = [[1,0,1],[0,0,0],[1,0,1]] Output: 2 Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.
 *
 * Example 2:
 *
 * Input: grid = [[1,0,0],[0,0,0],[0,0,0]] Output: 4 Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.
 *
 * Constraints:
 *
 * n == grid.length
 * n == grid[i].length
 * 1 <= n <= 100
 * grid[i][j] is 0 or 1
 */
// DP
function maxDistance(grid: number[][]): number {
  let n = grid.length
  let max = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) continue
      grid[i][j] = 201
      if (i > 0) {
        grid[i][j] = Math.min(grid[i][j], grid[i - 1][j] + 1)
      }
      if (j > 0) {
        grid[i][j] = Math.min(grid[i][j], grid[i][j - 1] + 1)
      }
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 1) continue

      if (i < n - 1) {
        grid[i][j] = Math.min(grid[i][j], grid[i + 1][j] + 1)
      }
      if (j < n - 1) {
        grid[i][j] = Math.min(grid[i][j], grid[i][j + 1] + 1)
      }
      max = Math.max(max, grid[i][j])
    }
  }
  return max === 201 ? -1 : max - 1
};
function test_01162() {
  let grid = [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
  console.log(maxDistance(grid))
  grid = [[1, 0, 0], [0, 0, 0], [0, 0, 0]]
  console.log(maxDistance(grid))
  grid = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
  console.log(maxDistance(grid))
  grid = [[0, 0, 1, 1, 1], [0, 1, 1, 0, 0], [0, 0, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 1]]
  console.log(maxDistance(grid))
}

test_01162()
