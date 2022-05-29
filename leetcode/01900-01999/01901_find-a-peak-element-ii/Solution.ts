/**
 * ID:    01901
 * Title: Find a Peak Element II
 * Difficulty: Medium
 * Description: A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.
 *
 * Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].
 *
 * You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.
 *
 * You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.
 *
 * Example 1:
 *
 * Input: mat = [[1,4],[3,2]] Output: [0,1] Explanation: Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.
 *
 * Example 2:
 *
 * Input: mat = [[10,20,15],[21,30,14],[7,16,32]] Output: [1,1] Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.
 *
 * Constraints:
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 500
 * 1 <= mat[i][j] <= 10 5
 * No two adjacent cells are equal.
 */
function findPeakGrid(mat: number[][]): number[] {
  let res = new Array()
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let isPeak = true
      for (let k = 0; k < direction.length; k++) {
        let x = i + direction[k][0]
        let y = j + direction[k][1]
        if (x < 0 || x >= mat.length || y < 0 || y >= mat[x].length) {
          continue
        }
        if (mat[i][j] < mat[x][y]) {
          isPeak = false
          break
        }
      }
      if (isPeak) {
        res = [i, j]
        return res
      }
    }
  }
  return res
}

function test_01901() {
  let mat = [[1, 4], [3, 2]]
  console.log(findPeakGrid(mat));
  mat = [[10, 20, 15], [21, 30, 14], [7, 16, 32]]
  console.log(findPeakGrid(mat));
}

test_01901()
