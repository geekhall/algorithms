/**
 * ID:    00052
 * Title: N-Queens II
 * Difficulty: Hard
 * Description: The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 *
 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 *
 * Example 1:
 *
 * Input: n = 4 Output: 2 Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
 *
 * Example 2:
 *
 * Input: n = 1 Output: 1
 *
 * Constraints:
 *
 * 1 <= n <= 9
 */
function totalNQueens(n: number): number {

  if (n === 1)
    return 1;

  let result = 0

  const isValid = (record: number[], row: number, col: number): boolean => {
    for (let i = 0; i < record.length; i++) {
      if (record[i] === col) {
        return false
      }
      if (Math.abs(record[i] - col) === Math.abs(i - row)) {
        return false
      }
    }
    return true
  }
  /**
   *
   * @param row row
   * @param record record[i] is the column of the queen in row i
   * @param n n
   * @returns
   */
  const process = (row: number, record: number[], n: number) => {
    if (row === n) {
      result++
    }
    for (let col = 0; col < n; col++) {
      if (isValid(record, row, col)) {
        record[row] = col;
        process(row + 1, record, n);
      }
      if (col === n - 1 && record[row] === undefined) {
        record.splice(row - 1, 1);
      }
    }
  }
  let record = new Array()
  process(0, record, n);

  return result
};
function test_00052() {
  console.log(totalNQueens(4));
  console.log(totalNQueens(5));
  console.log(totalNQueens(1));
  console.log(totalNQueens(8));
}

test_00052()
