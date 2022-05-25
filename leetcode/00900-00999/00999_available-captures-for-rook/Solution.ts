/**
 * ID:    00999
 * Title: Available Captures for Rook
 * Difficulty: Easy
 * Description: On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.
 *
 * When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.
 *
 * Return the number of available captures for the white rook.
 *
 * Example 1:
 *
 * Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]] Output: 3 Explanation: In this example, the rook is attacking all the pawns.
 *
 * Example 2:
 *
 * Input: board = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]] Output: 0 Explanation: The bishops are blocking the rook from attacking any of the pawns.
 *
 * Example 3:
 *
 * Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]] Output: 3 Explanation: The rook is attacking the pawns at positions b5, d6, and f5.
 *
 * Constraints:
 *
 * board.length == 8
 * board[i].length == 8
 * board[i][j] is either 'R', '.', 'B', or 'p'
 * There is exactly one cell with board[i][j] == 'R'
 */
function numRookCaptures(board: string[][]): number {
  let rx = 0
  let ry = 0
  const getRPos = () => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] === 'R') {
          rx = i
          ry = j
          return
        }
      }
    }
  }
  getRPos()
  let res = 0
  // let st: string[] = new Array()
  let st: string[][] = new Array(4).fill(0).map(() => new Array(8));
  for (let i = 0; i < ry; i++) {
    st[0].push(board[rx][i])
  }
  for (let i = 8; i > ry; i++) {
    st[1].push(board[rx][i])
  }
  for (let i = 0; i < rx; i++) {
    st[2].push(board[i][ry])
  }
  for (let i = 8; i > rx; i++) {
    st[3].push(board[i][ry])
  }
  for (let i = 0; i < 4; i++) {
    while (st[i].length > 0) {
      let cur = st[i].pop()
      if (cur === '.') {
        continue
      } else {
        if (cur === 'p') {
          res += 1
        }
        break
      }
    }
  }

  return res
};

function test_00999() {
  let board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
  ]
  console.log(numRookCaptures(board));
  board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "B", "R", "B", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
  ]
  console.log(numRookCaptures(board));
}

test_00999()
