/**
 * ID:    00994
 * Title: Rotting Oranges
 * Difficulty: Medium
 * Description: You are given an m x n grid where each cell can have one of three values:
 *
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 *
 * Example 1:
 *
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]] Output: 4
 *
 * Example 2:
 *
 * Input: grid = [[2,1,1],[0,1,1],[1,0,1]] Output: -1 Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
 *
 * Example 3:
 *
 * Input: grid = [[0,2]] Output: 0 Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 10
 * grid[i][j] is 0, 1, or 2.
 */
function orangesRotting(grid: number[][]): number {
  let queue = []
  let fresh = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        fresh++
      }
      if (grid[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }
  if (fresh === 0) {
    return 0
  }
  let minutes = 0
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let cur: number[] = queue.shift()!
      let x = cur[0]
      let y = cur[1]
      for (let [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
        let nx = x + dx
        let ny = y + dy
        if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[nx].length) {
          continue
        }
        if (grid[nx][ny] === 1) {
          grid[nx][ny] = 2
          fresh--
          queue.push([nx, ny])
        }
      }
    }
    minutes++
    if (fresh === 0) {
      return minutes
    }
  }
  return fresh === 0 ? minutes : -1
};

function test_00994() {
  let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
  console.log(orangesRotting(grid))
  grid = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]
  console.log(orangesRotting(grid))
  grid = [[0, 2]]
  console.log(orangesRotting(grid))
}

test_00994()
