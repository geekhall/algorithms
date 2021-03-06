/**
 * ID:    00051
 * Title: N-Queens
 * Difficulty: Hard
 * Description: The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
 *
 * Example 1:
 *
 * Input: n = 4 Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
 *
 * Example 2:
 *
 * Input: n = 1 Output: [["Q"]]
 *
 * Constraints:
 *
 * 1 <= n <= 9
 */
function solveNQueens1(n: number) {
  const isArrValid = (arr: string[][], row: number, col: number): boolean => {
    let res = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i][col] === "Q") {
        res = false;
        break
      }
      if (arr[row][i] === "Q") {
        res = false;
        break
      }
      if (arr[i].indexOf('Q') !== -1) {
        let r = arr[i].indexOf('Q');
        // console.log("#3: ", row, col, i, r,
        //   Math.abs(row - i), Math.abs(col - r));
        if (Math.abs(row - i) === Math.abs(col - r)) {
          res = false;
          break
        }
      }
    }
    return res
  }
  const isValid = (str: string[], row: number, col: number): boolean => {
    return isArrValid(str.map(x => x.split('')), row, col)
  }
}
function solveNQueens(n: number): string[][] {
  if (n === 1)
    return [["Q"]];

  let result = new Array()
  const generateResult = (record: number[]) => {
    let res: string[] = new Array()
    for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 0; j < n; j++) {
        if (record[i] === j) {
          str += 'Q';
        } else {
          str += '.';
        }
      }
      res.push(str)
    }
    result.push(res)
  }
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
      generateResult(record)
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
function solveNQueens2(n: number): number {

  /**
   *
   * @param limit
   * @param col_lim ????????????1????????????????????????????????????
   * @param left_dia_lim  ??????????????????1????????????????????????????????????
   * @param right_dia_lim ??????????????????1????????????????????????????????????
   * @returns
   */
  const process = (limit: number, col_lim: number, left_dia_lim: number, right_dia_lim: number) => {
    if (col_lim === limit)
      return 1
    let pos = 0
    let most_right_one = 0
    // ???????????????????????????
    pos = limit & (~(col_lim | left_dia_lim | right_dia_lim))
    let res = 0
    while (pos !== 0) {
      most_right_one = pos & (~pos + 1)
      pos = pos - most_right_one
      res += process(limit!, col_lim | most_right_one, (left_dia_lim | most_right_one) << 1, (right_dia_lim | most_right_one) >>> 1)
    }
    return res
  }
  const generateNumber = (n: number) => {
    if (n < 1 || n > 32)
      return 0
    let limit = n === 32 ? -1 : (1 << n) - 1
    return process(limit, 0, 0, 0)
  }
  return generateNumber(n)
}
function test_00051() {
  console.log(solveNQueens2(4));
}

test_00051()
