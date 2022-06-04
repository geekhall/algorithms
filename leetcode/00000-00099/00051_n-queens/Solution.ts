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

function solveNQueens(n: number): string[][] {
  if (n === 1)
    return [["Q"]];
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

  let res = new Array(n).fill('').map(() => new Array(n).fill('.'))
  let remaining = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isArrValid(res, i, j)) {
        res[i][j] = 'Q'
      }
    }
  }
  return res;
};

function test_00051() {
  // console.log(solveNQueens(4));
  // let arr = new Array('.', 'Q', '.', 'Q', '.', 'Q')
  // console.log(arr.indexOf('Q', 2));
  solveNQueens(4);
}

test_00051()
