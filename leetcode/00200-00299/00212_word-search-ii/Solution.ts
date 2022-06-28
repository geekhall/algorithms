/**
 * ID:    00212
 * Title: Word Search II
 * Difficulty: Hard
 * Description: Given an m x n board of characters and a list of strings words, return all words on the board.
 *
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 *
 * Example 1:
 *
 * Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"] Output: ["eat","oath"]
 *
 * Example 2:
 *
 * Input: board = [["a","b"],["c","d"]], words = ["abcb"] Output: []
 *
 * Constraints:
 *
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 12
 * board[i][j] is a lowercase English letter.
 * 1 <= words.length <= 3 * 10 4
 * 1 <= words[i].length <= 10
 * words[i] consists of lowercase English letters.
 * All the strings of words are unique.
 */
// time limit exceeded
function findWords(board: string[][], words: string[]): string[] {
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const exist = (word: string): boolean => {
    let m = board.length, n = board[0].length
    let visited = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const dfs = (i: number, j: number, k: number): boolean => {
      if (k === word.length) {
        return true
      }
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
  let result: string[] = []
  for (let word of words) {
    if (exist(word)) {
      result.push(word)
    }
  }
  return result
}

function test_00212() {
  let board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
  ], words = ["oath", "pea", "eat", "rain"]
  console.log(findWords(board, words))
  board = [
    ["a", "b"],
    ["c", "d"]
  ], words = ["abcb"]
  console.log(findWords(board, words))
}

test_00212()
