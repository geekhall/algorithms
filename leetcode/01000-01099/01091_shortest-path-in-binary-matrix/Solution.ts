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
  if (grid[0][0] !== 0) {
    return -1
  }
  let res = 1
  let checked = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false))
  let queue = new Array()
  queue.push([0, 0])
  checked[0][0] = true
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      const cur = queue.shift()
      if (cur[0] === grid.length - 1 && cur[1] === grid[0].length - 1) {
        return res
      }

      for (const [di, dj] of dirs) {
        const neighbor_x = cur[0] + di
        const neighbor_y = cur[1] + dj
        if (neighbor_x < 0 || neighbor_x >= grid.length
          || neighbor_y < 0 || neighbor_y >= grid[0].length
          || checked[neighbor_x][neighbor_y] || grid[neighbor_x][neighbor_y] === 1) {
          continue
        }
        checked[neighbor_x][neighbor_y] = true
        queue.push([neighbor_x, neighbor_y])
      }
    }
    res++
  }

  return -1
};

function test_01091() {
  let grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]]
  console.log(shortestPathBinaryMatrix(grid))
  grid = grid = [[1, 0, 0], [1, 1, 0], [1, 1, 0]]
  console.log(shortestPathBinaryMatrix(grid))
  grid = [[0, 1], [1, 0]]
  console.log(shortestPathBinaryMatrix(grid))

}

test_01091()
