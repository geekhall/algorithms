/**
 * ID:    01275
 * Title: Find Winner on a Tic Tac Toe Game
 * Difficulty: Easy
 * Description: Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:
 *
 * Players take turns placing characters into empty squares ' '.
 * The first player A always places 'X' characters, while the second player B always places 'O' characters.
 * 'X' and 'O' characters are always placed into empty squares, never on filled ones.
 * The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
 * The game also ends if all squares are non-empty.
 * No more moves can be played if the game is over.
 *
 * Given a 2D integer array moves where moves[i] = [row i, col i ] indicates that the i th move will be played on grid[row i ][col i ]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".
 *
 * You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.
 *
 * Example 1:
 *
 * Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]] Output:"A" Explanation: A wins, they always play first.
 *
 * Example 2:
 *
 * Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]] Output:"B" Explanation: B wins.
 *
 * Example 3:
 *
 * Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]] Output:"Draw" Explanation: The game ends in a draw since there are no moves to make.
 *
 * Constraints:
 *
 * 1 <= moves.length <= 9
 * moves[i].length == 2
 * 0 <= row i, col i <= 2
 * There are no repeated elements on moves.
 * moves follow the rules of tic tac toe.
 */
function tictactoe(moves: number[][]): string {
  const isWin = (grid: string[][], player: string): boolean => {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    // check rows
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === player) {
          count++;
        }
      }
      if (count === n)
        return true;
      count = 0;
    }
    // check cols
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[j][i] === player) {
          count++;
        }
      }
      if (count === m)
        return true;
      count = 0;
    }
    // check diagonals
    for (let i = 0; i < m; i++) {
      if (grid[i][i] === player) {
        count++;
      }
    }
    if (count === m)
      return true;
    count = 0;
    for (let i = 0; i < m; i++) {
      if (grid[i][n - 1 - i] === player) {
        count++;
      }
    }
    if (count === m)
      return true;
    return false
  }
  let grid = new Array(3).fill(0).map(() => new Array(3).fill(0));
  let player = 'A';
  for (let i = 0; i < moves.length; i++) {
    let [row, col] = moves[i];
    grid[row][col] = player;
    if (isWin(grid, player)) {
      return player;
    }
    player = player === 'A' ? 'B' : 'A';
  }
  if (moves.length === 9) {
    return 'Draw';
  }
  return 'Pending';
};

function test_01275() {
  let moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]
  console.log(tictactoe(moves));
  moves = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]
  console.log(tictactoe(moves));
  moves = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]
  console.log(tictactoe(moves));
}

test_01275()
