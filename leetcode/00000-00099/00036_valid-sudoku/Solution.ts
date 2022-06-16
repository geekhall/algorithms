/**
 * ID:    00036
 * Title: Valid Sudoku
 * Difficulty: Medium
 * Description: Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 * Example 1:
 *
 * Input: board = [["5","3",".",".","7",".",".",".","."] ,["6",".",".","1","9","5",".",".","."] ,[".","9","8",".",".",".",".","6","."] ,["8",".",".",".","6",".",".",".","3"] ,["4",".",".","8",".","3",".",".","1"] ,["7",".",".",".","2",".",".",".","6"] ,[".","6",".",".",".",".","2","8","."] ,[".",".",".","4","1","9",".",".","5"] ,[".",".",".",".","8",".",".","7","9"]] Output: true
 *
 * Example 2:
 *
 * Input: board = [["8","3",".",".","7",".",".",".","."] ,["6",".",".","1","9","5",".",".","."] ,[".","9","8",".",".",".",".","6","."] ,["8",".",".",".","6",".",".",".","3"] ,["4",".",".","8",".","3",".",".","1"] ,["7",".",".",".","2",".",".",".","6"] ,[".","6",".",".",".",".","2","8","."] ,[".",".",".","4","1","9",".",".","5"] ,[".",".",".",".","8",".",".","7","9"]] Output: false Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 *
 * Constraints:
 *
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'.
 */
function isValidSudoku(board: string[][]): boolean {
  // row[i] 表示第 i 行的数字，比如row[0][5-1] = 1 ，表示第一行中5出现过
  let row = new Array(9).fill(0).map(() => new Array(9).fill(0))
  // col[i] 表示第 i 列的数字
  let col = new Array(9).fill(0).map(() => new Array(9).fill(0))
  // box[i] 表示第 i 个Box的数字
  let box = new Array(9).fill(0).map(() => new Array(9).fill(0))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        continue
      }
      let num = parseInt(board[i][j])
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (row[i][num - 1] || col[j][num - 1] || box[boxIndex][num - 1]) {
        return false
      }
      row[i][num - 1] = 1
      col[j][num - 1] = 1
      box[boxIndex][num - 1] = 1
    }
  }
  return true
};

function test_00036() {
  let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]
  console.log(isValidSudoku(board))

  board = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]
  console.log(isValidSudoku(board))
}

test_00036()
