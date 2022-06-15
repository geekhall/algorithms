/**
 * ID:    00566
 * Title: Reshape the Matrix
 * Difficulty: Easy
 * Description: In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
 *
 * You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
 *
 * The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
 *
 * If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 *
 * Example 1:
 *
 * Input: mat = [[1,2],[3,4]], r = 1, c = 4 Output: [[1,2,3,4]]
 *
 * Example 2:
 *
 * Input: mat = [[1,2],[3,4]], r = 2, c = 4 Output: [[1,2],[3,4]]
 *
 * Constraints:
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 100
 * -1000 <= mat[i][j] <= 1000
 * 1 <= r, c <= 300
 */
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let n = mat.length
  let m = mat[0].length
  if (n * m != r * c) {
    return mat
  }
  let ans = new Array(r).fill(0).map(() => new Array(c).fill(0))
  for (let i = 0; i < n * m; i++) {
    ans[Math.floor(i / c)][i % c] = mat[Math.floor(i / m)][i % m]
  }
  return ans
};

function test_00566() {
  let mat = [[1, 2], [3, 4]], r = 1, c = 4
  console.log(matrixReshape(mat, r, c))
  mat = [[1, 2], [3, 4]], r = 2, c = 4
  console.log(matrixReshape(mat, r, c))
}

test_00566()
