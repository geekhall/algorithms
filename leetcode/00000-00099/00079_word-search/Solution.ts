/**
 * ID:    00079
 * Title: Word Search
 * Difficulty: Medium
 * Description: Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 *
 * Example 1:
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" Output: true
 *
 * Example 2:
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE" Output: true
 *
 * Example 3:
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB" Output: false
 *
 * Constraints:
 *
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15
 * board and word consists of only lowercase and uppercase English letters.
 *
 * Follow up: Could you use search pruning to make your solution faster with a larger board?
 */
function exist(board: string[][], word: string): boolean {
  let m = board.length, n = board[0].length
  let visited = new Array(m).fill(0).map(() => new Array(n).fill(0))
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const dfs = (i: number, j: number, k: number): boolean => {
    if (k === word.length)
      return true
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[k])
      return false
    visited[i][j] = 1
    for (let [x, y] of dirs) {
      if (dfs(i + x, j + y, k + 1))
        return true
    }
    visited[i][j] = 0
    return false
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
};

function test_00079() {
  let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
  ], word = "ABCCED"
  console.log(exist(board, word))
  board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
  ], word = "SEE"
  console.log(exist(board, word))
  board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
  ], word = "ABCB"
  console.log(exist(board, word))
}

test_00079()
