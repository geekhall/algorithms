/**
 * ID:    00130
 * Title: Surrounded Regions
 * Difficulty: Medium
 * Description: Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
 *
 * A region is captured by flipping all 'O' s into 'X' s in that surrounded region.
 *
 * Example 1:
 *
 * Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]] Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]] Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
 *
 * Example 2:
 *
 * Input: board = [["X"]] Output: [["X"]]
 *
 * Constraints:
 *
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 200
 * board[i][j] is 'X' or 'O'.
 */
function solve(board: string[][]): void {
  const m = board.length
  const n = board[0].length
  let is_edge = false
  let queue = new Array()
  const visited = Array.from({ length: m }).map(() => Array.from({ length: n }).fill(false))
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const dfs = (i: number, j: number): void => {
    // edge case
    if (i < 0 || i >= m || j < 0 || j >= n) {
      is_edge = true
      return
    }
    if (board[i][j] !== "O" || visited[i][j]) {
      return
    }
    visited[i][j] = true
    queue.push([i, j])
    for (const [di, dj] of directions) {
      dfs(i + di, j + dj)
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O" && !visited[i][j]) {
        queue = [[i, j]]
        is_edge = false
        dfs(i, j)
        if (!is_edge) {
          while (queue.length > 0) {
            const [i, j] = queue.pop()
            board[i][j] = "X"
          }
        }
      }
    }
  }
};

function test_00130() {
  let board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
  ]
  solve(board)
  console.log(board)
}

test_00130()
