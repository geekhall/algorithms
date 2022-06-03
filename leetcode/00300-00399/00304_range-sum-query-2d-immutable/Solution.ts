/**
 * ID:    00304
 * Title: Range Sum Query 2D - Immutable
 * Difficulty: Medium
 * Description: Given a 2D matrix matrix, handle multiple queries of the following type:
 *
 * Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Implement the NumMatrix class:
 *
 * NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
 * int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Example 1:
 *
 * Input ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"] [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]] Output [null, 8, 11, 12] Explanation NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]); numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle) numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle) numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 200
 * -10 5 <= matrix[i][j] <= 10 5
 * 0 <= row1 <= row2 < m
 * 0 <= col1 <= col2 < n
 * At most 10 4 calls will be made to sumRegion.
 */
// Simple, but not efficient.
class NumMatrix1 {
  matrix: number[][]
  constructor(matrix: number[][]) {
    this.matrix = matrix
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = 0
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j]
      }
    }
    return sum
  }
}

// More efficient.
class NumMatrix {
  matrix: number[][]
  constructor(matrix: number[][]) {
    this.matrix = matrix

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === 0 && j === 0) {
          continue
        }
        if (i === 0) {
          this.matrix[i][j] += this.matrix[i][j - 1]
        } else if (j === 0) {
          this.matrix[i][j] += this.matrix[i - 1][j]
        } else {
          this.matrix[i][j] += this.matrix[i - 1][j] + this.matrix[i][j - 1] - this.matrix[i - 1][j - 1]
        }
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.matrix[row2][col2]
      - (row1 > 0 ? this.matrix[row1 - 1][col2] : 0)
      - (col1 > 0 ? this.matrix[row2][col1 - 1] : 0)
      + (row1 > 0 && col1 > 0 ? this.matrix[row1 - 1][col1 - 1] : 0)
  }
}


function test_00304() {
  let matrix = new Array([3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5])
  let numMatrix = new NumMatrix(matrix)
  console.log(numMatrix.sumRegion(2, 1, 4, 3))
  console.log(numMatrix.sumRegion(1, 1, 2, 2))
  console.log(numMatrix.sumRegion(1, 2, 2, 4))

}

test_00304()
