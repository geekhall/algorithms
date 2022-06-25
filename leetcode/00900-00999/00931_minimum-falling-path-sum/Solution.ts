/**
 * ID:    00931
 * Title: Minimum Falling Path Sum
 * Difficulty: Medium
 * Description: Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
 *
 * A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
 *
 * Example 1:
 *
 * Input: matrix = [[2,1,3],[6,5,4],[7,8,9]] Output: 13 Explanation: There are two falling paths with a minimum sum as shown.
 *
 * Example 2:
 *
 * Input: matrix = [[-19,57],[-40,-5]] Output: -59 Explanation: The falling path with a minimum sum is shown.
 *
 * Constraints:
 *
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 100
 * -100 <= matrix[i][j] <= 100
 */
function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length
  const dp = Array.from({ length: n }).fill(0)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        dp[j] = matrix[i][j]
      } else {
        const min = Math.min(dp[j - 1], dp[j], dp[j + 1])
        dp[j] = min + matrix[i][j]
      }
    }
  }
  return Math.min(...dp)

};

function test_00931() {
  let matrix = [[2, 1, 3], [6, 5, 4], [7, 8, 9]]
  console.log(minFallingPathSum(matrix))
  matrix = [[-19, 57], [-40, -5]]
  console.log(minFallingPathSum(matrix))
}

test_00931()
