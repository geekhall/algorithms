/**
 * ID:    01572
 * Title: Matrix Diagonal Sum
 * Difficulty: Easy
 * Description: Given a square matrix mat, return the sum of the matrix diagonals.
 *
 * Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 *
 * Example 1:
 *
 * Input: mat = [[ 1,2, 3 ], [4, 5,6], [ 7,8, 9 ]] Output: 25 Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25 Notice that element mat[1][1] = 5 is counted only once.
 *
 * Example 2:
 *
 * Input: mat = [[ 1,1,1, 1 ], [1, 1, 1,1], [1, 1, 1,1], [ 1,1,1, 1 ]] Output: 8
 *
 * Example 3:
 *
 * Input: mat = [[ 5 ]] Output: 5
 *
 * Constraints:
 *
 * n == mat.length == mat[i].length
 * 1 <= n <= 100
 * 1 <= mat[i][j] <= 100
 */

function diagonalSum(mat: number[][]): number {
  let n = mat.length
  let res = 0
  mat.forEach((row, x) => {
    row.forEach((element, y) => {
      if (x === y || x + y === n - 1) {
        res += element
      }
    })
  })
  return res
};

function isOdd(n: number): boolean {
  return !(n && !(n % 2))
}

function test_01572() {
  // Input: mat = [[1,2,3],
  //               [4,5,6],
  //               [7,8,9]]
  // Output: 25
  // Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
  // Notice that element mat[1][1] = 5 is counted only once.
  let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  console.log(diagonalSum(matrix1));

  // Input: mat = [[1,1,1,1],
  //             [1,1,1,1],
  //             [1,1,1,1],
  //             [1,1,1,1]]
  // Output: 8
  let matrix2 = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
  console.log(diagonalSum(matrix2));
}

test_01572()

