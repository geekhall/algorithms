/**
 * ID:    01738
 * Title: Find Kth Largest XOR Coordinate Value
 * Difficulty: Medium
 * Description: You are given a 2D matrix of size m x n, consisting of non-negative integers. You are also given an integer k.
 *
 * The value of coordinate (a, b) of the matrix is the XOR of all matrix[i][j] where 0 <= i <= a < m and 0 <= j <= b < n (0-indexed).
 *
 * Find the k th largest value (1-indexed) of all the coordinates of matrix.
 *
 * Example 1:
 *
 * Input: matrix = [[5,2],[1,6]], k = 1 Output: 7 Explanation: The value of coordinate (0,1) is 5 XOR 2 = 7, which is the largest value.
 *
 * Example 2:
 *
 * Input: matrix = [[5,2],[1,6]], k = 2 Output: 5 Explanation: The value of coordinate (0,0) is 5 = 5, which is the 2nd largest value.
 *
 * Example 3:
 *
 * Input: matrix = [[5,2],[1,6]], k = 3 Output: 4 Explanation: The value of coordinate (1,0) is 5 XOR 1 = 4, which is the 3rd largest value.
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 1000
 * 0 <= matrix[i][j] <= 10 6
 * 1 <= k <= m * n
 */
function kthLargestValue(matrix: number[][], k: number): number {
  const m = matrix.length
  const n = matrix[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = matrix[i][j]
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] ^ matrix[i][j]
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] ^ matrix[i][j]
      } else {
        dp[i][j] = dp[i - 1][j] ^ dp[i][j - 1] ^ matrix[i][j] ^ dp[i - 1][j - 1]
      }
    }
  }
  const res: number[] = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res.push(dp[i][j])
    }
  }
  res.sort((a, b) => b - a)
  return res[k - 1]
};

function test_01738() {
  let matrix = [[5, 2], [1, 6]], k = 1
  console.log(kthLargestValue(matrix, k))
  matrix = [[5, 2], [1, 6]], k = 2
  console.log(kthLargestValue(matrix, k))
  matrix = [[5, 2], [1, 6]], k = 3
  console.log(kthLargestValue(matrix, k))

}

test_01738()
