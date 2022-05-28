/**
 * ID:    00054
 * Title: Spiral Matrix
 * Difficulty: Medium
 * Description: Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1:
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [1,2,3,6,9,8,7,4,5]
 *
 * Example 2:
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */
function spiralOrder(matrix: number[][]): number[] {
  let res = new Array()
  let x = 0
  let y = 0
  let minRow = 1
  let maxRow = matrix.length
  let minCol = 0
  let maxCol = matrix[0].length
  let total = maxCol * maxRow
  let currentDirection = 0 // 0: right, 1: down, 2: left, 3:up
  if (maxRow === 1) {
    return matrix[0]
  }
  if (maxCol === 1) {
    return matrix.reduce((pre, cur) => pre.concat(cur), [])
  }
  for (let i = 0; i < total; i++) {
    res.push(matrix[x][y])
    if (currentDirection === 0) {
      y++
      if (y === maxCol - 1) {
        currentDirection = 1
        maxCol--
      }
    }
    else if (currentDirection === 1) {
      x++
      if (x === maxRow - 1) {
        currentDirection = 2
        maxRow--
      }
    } else if (currentDirection === 2) {
      y--
      if (y === minCol) {
        currentDirection = 3
        minCol++
      }
    } else if (currentDirection === 3) {
      x--
      if (x === minRow) {
        currentDirection = 0
        minRow++
      }
    }
  }
  return res
};

function test_00054() {
  let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  console.log(spiralOrder(matrix));
  matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
  console.log(spiralOrder(matrix));
  matrix = [[3], [2], [1]]
  console.log(spiralOrder(matrix));
  matrix = [[3, 4, 5]]
  console.log(spiralOrder(matrix));
}

test_00054()
