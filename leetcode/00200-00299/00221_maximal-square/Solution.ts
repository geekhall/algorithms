/**
 * ID:    00221
 * Title: Maximal Square
 * Difficulty: Medium
 * Description: Given an m x n binary matrix filled with 0 's and 1 's, find the largest square containing only 1 's and return its area.
 *
 * Example 1:
 *
 * Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]] Output: 4
 *
 * Example 2:
 *
 * Input: matrix = [["0","1"],["1","0"]] Output: 1
 *
 * Example 3:
 *
 * Input: matrix = [["0"]] Output: 0
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 300
 * matrix[i][j] is '0' or '1'.
 */
function maximalSquare(matrix: string[][]): number {
  if (matrix.length === 0) {
    return 0
  }
  let m = matrix.length
  let n = matrix[0].length
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let max = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }
  return max * max
};

function test_00221() {
  let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
  console.log(maximalSquare(matrix));
  matrix = [["0", "1"], ["1", "0"]]
  console.log(maximalSquare(matrix));
  matrix = [["0"]]
  console.log(maximalSquare(matrix));
  matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ]
  console.log(maximalSquare(matrix));
}

test_00221()
