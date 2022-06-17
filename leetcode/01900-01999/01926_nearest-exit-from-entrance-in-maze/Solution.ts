/**
 * ID:    01926
 * Title: Nearest Exit from Entrance in Maze
 * Difficulty: Medium
 * Description: You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrance row, entrance col ] denotes the row and column of the cell you are initially standing at.
 *
 * In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
 *
 * Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.
 *
 * Example 1:
 *
 * Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2] Output: 1 Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3]. Initially, you are at the entrance cell [1,2]. - You can reach [1,0] by moving 2 steps left. - You can reach [0,2] by moving 1 step up. It is impossible to reach [2,3] from the entrance. Thus, the nearest exit is [0,2], which is 1 step away.
 *
 * Example 2:
 *
 * Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0] Output: 2 Explanation: There is 1 exit in this maze at [1,2]. [1,0] does not count as an exit since it is the entrance cell. Initially, you are at the entrance cell [1,0]. - You can reach [1,2] by moving 2 steps right. Thus, the nearest exit is [1,2], which is 2 steps away.
 *
 * Example 3:
 *
 * Input: maze = [[".","+"]], entrance = [0,0] Output: -1 Explanation: There are no exits in this maze.
 *
 * Constraints:
 *
 * maze.length == m
 * maze[i].length == n
 * 1 <= m, n <= 100
 * maze[i][j] is either '.' or '+'.
 * entrance.length == 2
 * 0 <= entrance row < m
 * 0 <= entrance col < n
 * entrance will always be an empty cell.
 */
function nearestExit(maze: string[][], entrance: number[]): number {
  let m = maze.length, n = maze[0].length
  let queue = new Array()
  let visited = new Array(m).fill(false).map(() => new Array(n).fill(false))
  queue.push([entrance[0], entrance[1]])
  visited[entrance[0]][entrance[1]] = true
  let step = 0
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let [row, col] = queue.shift()
      if ((row === 0 || row === m - 1 || col === 0 || col === n - 1) && (row !== entrance[0] || col !== entrance[1])) {
        return step
      }
      for (let [r, c] of [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]) {
        if (r < 0 || r >= m || c < 0 || c >= n || visited[r][c] || maze[r][c] === '+') continue
        queue.push([r, c])
        visited[r][c] = true
      }
    }
    step++
  }

  return -1
};

function test_01926() {
  let maze = [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], entrance = [1, 2]
  console.log(nearestExit(maze, entrance));
  maze = [["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], entrance = [1, 0]
  console.log(nearestExit(maze, entrance));
  maze = [[".", "+"]], entrance = [0, 0]
  console.log(nearestExit(maze, entrance));
}

test_01926()
