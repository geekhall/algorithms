/**
 * ID:    01314
 * Title: Matrix Block Sum
 * Difficulty: Medium
 * Description: Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:
 *
 * i - k <= r <= i + k,
 * j - k <= c <= j + k, and
 * (r, c) is a valid position in the matrix.
 *
 * Example 1:
 *
 * Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1 Output: [[12,21,16],[27,45,33],[24,39,28]]
 *
 * Example 2:
 *
 * Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2 Output: [[45,45,45],[45,45,45],[45,45,45]]
 *
 * Constraints:
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n, k <= 100
 * 1 <= mat[i][j] <= 100
 */
function matrixBlockSum(mat: number[][], k: number): number[][] {
  const m = mat.length
  const n = mat[0].length
  const res: number[][] = []
  for (let i = 0; i < m; i++) {
    res.push([])
    for (let j = 0; j < n; j++) {
      let sum = 0
      for (let r = Math.max(0, i - k); r <= Math.min(m - 1, i + k); r++) {
        for (let c = Math.max(0, j - k); c <= Math.min(n - 1, j + k); c++) {
          sum += mat[r][c]
        }
      }
      res[i].push(sum)
    }
  }
  return res
};

function test_01314() {
  let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 1
  console.log(matrixBlockSum(mat, k))
  mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 2
  console.log(matrixBlockSum(mat, k))

}

test_01314()
