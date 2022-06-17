/**
 * ID:    00074
 * Title: Search a 2D Matrix
 * Difficulty: Medium
 * Description: Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
 *
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 *
 * Example 1:
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 Output: true
 *
 * Example 2:
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13 Output: false
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -10 4 <= matrix[i][j], target <= 10 4
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) {
    return false
  }
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      col--
    } else {
      row++
    }
  }
  return false
};

function test_00074() {
  let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ]
  let target = 3
  let result = searchMatrix(matrix, target)
  console.log(result)
  matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
  result = searchMatrix(matrix, target)
  console.log(result)
}

test_00074()
