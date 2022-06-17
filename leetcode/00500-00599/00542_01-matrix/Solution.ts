/**
 * ID:    00542
 * Title: 01 Matrix
 * Difficulty: Medium
 * Description: Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 *
 * The distance between two adjacent cells is 1.
 *
 * Example 1:
 *
 * Input: mat = [[0,0,0],[0,1,0],[0,0,0]] Output: [[0,0,0],[0,1,0],[0,0,0]]
 *
 * Example 2:
 *
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]] Output: [[0,0,0],[0,1,0],[1,2,1]]
 *
 * Constraints:
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 10 4
 * 1 <= m * n <= 10 4
 * mat[i][j] is either 0 or 1.
 * There is at least one 0 in mat.
 */
function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length
  const n = mat[0].length
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let queue = new Array()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        res[i][j] = 0
        queue.push([i, j])
      } else {
        res[i][j] = -1
      }
    }
  }
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  while (queue.length > 0) {
    const cur = queue.shift()
    for (const [di, dj] of dirs) {
      const x = cur[0] + di
      const y = cur[1] + dj
      if (x < 0 || x >= m || y < 0 || y >= n || res[x][y] !== -1) {
        continue
      }
      res[x][y] = res[cur[0]][cur[1]] + 1
      queue.push([x, y])
    }
  }
  return res
};

function test_00542() {
  let mat = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
  console.log(updateMatrix(mat))
  mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
  console.log(updateMatrix(mat))
  mat = [
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
  ]
  console.log(updateMatrix(mat))
}

test_00542()
