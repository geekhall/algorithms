/**
 * ID:    00867
 * Title: Transpose Matrix
 * Difficulty: Easy
 * Description: Given a 2D integer array matrix, return the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 *
 * Example 1:
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [[1,4,7],[2,5,8],[3,6,9]]
 *
 * Example 2:
 *
 * Input: matrix = [[1,2,3],[4,5,6]] Output: [[1,4],[2,5],[3,6]]
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 1000
 * 1 <= m * n <= 10 5
 * -10 9 <= matrix[i][j] <= 10 9
 */
function transpose(matrix: number[][]): number[][] {
  let res = new Array()
  for (let i = 0; i < matrix[0].length; i++) {
    let arr = new Array(matrix.length).fill(0)
    for (let j = 0; j < matrix.length; j++) {
      arr[j] = matrix[j][i]
    }
    res.push(arr)
  }
  return res
}

function test_00867() {
  let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  console.log(transpose(matrix));
  matrix = [[1, 2, 3], [4, 5, 6]]
  console.log(transpose(matrix));
}

test_00867()
