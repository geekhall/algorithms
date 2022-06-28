/**
 * ID:    00073
 * Title: Set Matrix Zeroes
 * Difficulty: Medium
 * Description: Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0 's.
 *
 * You must do it in place.
 *
 * Example 1:
 *
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]] Output: [[1,0,1],[0,0,0],[1,0,1]]
 *
 * Example 2:
 *
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -2 31 <= matrix[i][j] <= 2 31 - 1
 *
 * Follow up:
 *
 * A straightforward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 */
function setZeroes(matrix: number[][]): void {
  let m = matrix.length;
  let n = matrix[0].length;
  let row = new Array(m).fill(false);
  let col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};

function test_00073() {
  let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
  setZeroes(matrix)
  console.log(matrix)
  matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
  setZeroes(matrix)
  console.log(matrix)

}

test_00073()
