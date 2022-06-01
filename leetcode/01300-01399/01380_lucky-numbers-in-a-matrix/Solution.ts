/**
 * ID:    01380
 * Title: Lucky Numbers in a Matrix
 * Difficulty: Easy
 * Description: Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
 *
 * A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
 *
 * Example 1:
 *
 * Input: matrix = [[3,7,8],[9,11,13],[15,16,17]] Output: [15] Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
 *
 * Example 2:
 *
 * Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]] Output: [12] Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
 *
 * Example 3:
 *
 * Input: matrix = [[7,8],[1,2]] Output: [7] Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.
 *
 * Constraints:
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= n, m <= 50
 * 1 <= matrix[i][j] <= 10 5.
 * All elements in the matrix are distinct.
 */
function luckyNumbers(matrix: number[][]): number[] {
  let res = new Array()
  for (let i = 0; i < matrix.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = 0
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
        minIndex = j;
      }
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < matrix.length; j++) {
      max = Math.max(max, matrix[j][minIndex])
    }
    if (min === max) {
      res.push(min)
    }
  }
  return res
};

function test_01380() {
  let matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]];
  console.log(luckyNumbers(matrix));
  matrix = [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]];
  console.log(luckyNumbers(matrix));
  matrix = [[7, 8], [1, 2]];
  console.log(luckyNumbers(matrix));
}

test_01380()
