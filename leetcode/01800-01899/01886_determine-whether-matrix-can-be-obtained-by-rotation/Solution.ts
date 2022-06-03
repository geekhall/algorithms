/**
 * ID:    01886
 * Title: Determine Whether Matrix Can Be Obtained By Rotation
 * Difficulty: Easy
 * Description: Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.
 *
 * Example 1:
 *
 * Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]] Output: true Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
 *
 * Example 2:
 *
 * Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]] Output: false Explanation: It is impossible to make mat equal to target by rotating mat.
 *
 * Example 3:
 *
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]] Output: true Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.
 *
 * Constraints:
 *
 * n == mat.length == target.length
 * n == mat[i].length == target[i].length
 * 1 <= n <= 10
 * mat[i][j] and target[i][j] are either 0 or 1.
 */
function findRotation(mat: number[][], target: number[][]): boolean {

  const n = mat.length
  const m = mat[0].length
  let rotate: boolean[] = new Array(true, true, true, true)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (rotate[0] && mat[i][j] !== target[i][j]) {
        rotate[0] = false
      }
      if (rotate[1] && mat[i][j] !== target[j][n - i - 1]) {
        rotate[1] = false
      }
      if (rotate[2] && mat[i][j] !== target[n - i - 1][m - j - 1]) {
        rotate[2] = false
      }
      if (rotate[3] && mat[i][j] !== target[m - j - 1][i]) {
        rotate[3] = false
      }
      if (!rotate[0] && !rotate[1] && !rotate[2] && !rotate[3]) {
        return false
      }
    }
  }
  return true
}

function test_01886() {
  let mat = [[0, 1], [1, 0]], target = [[1, 0], [0, 1]]
  console.log(findRotation(mat, target))
  mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]], target = [[1, 1, 1], [0, 1, 0], [0, 0, 0]]
  console.log(findRotation(mat, target))
  mat = [[0, 1], [1, 1]], target = [[1, 0], [0, 1]]
  console.log(findRotation(mat, target))
  mat = [[1, 1], [0, 0]], target = [[0, 1], [0, 1]]
  console.log(findRotation(mat, target))
}

test_01886()
