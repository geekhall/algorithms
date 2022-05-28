/**
 * ID:    00059
 * Title: Spiral Matrix II
 * Difficulty: Medium
 * Description: Given a positive integer n, generate an n x n matrix filled with elements from 1 to n 2 in spiral order.
 *
 * Example 1:
 *
 * Input: n = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
 *
 * Example 2:
 *
 * Input: n = 1 Output: [[1]]
 *
 * Constraints:
 *
 * 1 <= n <= 20
 */
function generateMatrix(n: number): number[][] {
  if (n === 1)
    return [[1]]
  if (n === 2)
    return [[1, 2], [4, 3]]
  let x = 0
  let y = 0
  let minRow = 1
  let maxRow = n
  let minCol = 0
  let maxCol = n
  let total = maxCol * maxRow
  let currentDirection = 0 // 0: right, 1: down, 2: left, 3:up

  let matrix: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 1; i <= total; i++) {
    matrix[x][y] = i
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
  return matrix
};

function test_00059() {
  let n = 3
  console.log(generateMatrix(n));
  n = 2
  console.log(generateMatrix(n));

}

test_00059()
