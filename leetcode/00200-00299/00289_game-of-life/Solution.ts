/**
 * ID:    00289
 * Title: Game of Life
 * Difficulty: Medium
 * Description: According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 *
 * The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
 *
 * Any live cell with fewer than two live neighbors dies as if caused by under-population.
 * Any live cell with two or three live neighbors lives on to the next generation.
 * Any live cell with more than three live neighbors dies, as if by over-population.
 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 *
 * The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
 *
 * Example 1:
 *
 * Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]] Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
 *
 * Example 2:
 *
 * Input: board = [[1,1],[1,0]] Output: [[1,1],[1,1]]
 *
 * Constraints:
 *
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 25
 * board[i][j] is 0 or 1.
 *
 * Follow up:
 *
 * Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
 * In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
 */
function gameOfLife(board: number[][]): void {
  let m = board.length;
  let n = board[0].length;
  const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let count = 0;
      // check neighbors for live cells[i][j]
      for (let k = 0; k < neighbors.length; k++) {
        let x = i + neighbors[k][0];
        let y = j + neighbors[k][1];
        if (x >= 0 && x < m && y >= 0 && y < n) {
          if (board[x][y] === 1 || board[x][y] === 2) {
            count++;
          }
        }
      }
      if (board[i][j] === 1) {
        if (count < 2 || count > 3) { // live cell dies
          board[i][j] = 2;
        }
      } else if (board[i][j] === 0) { // dead cell becomes live
        if (count === 3) {
          board[i][j] = 3;
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 0;
      } else if (board[i][j] === 3) {
        board[i][j] = 1;
      }
    }
  }

};

function test_00289() {
  let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
  gameOfLife(board)
  console.log(board)
  board = [[1, 1], [1, 0]]
  gameOfLife(board)
  console.log(board)
}

test_00289()
