/**
 * ID:    00934
 * Title: Shortest Bridge
 * Difficulty: Medium
 * Description: You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
 *
 * An island is a 4-directionally connected group of 1 's not connected to any other 1 's. There are exactly two islands in grid.
 *
 * You may change 0 's to 1 's to connect the two islands to form one island.
 *
 * Return the smallest number of 0 's you must flip to connect the two islands.
 *
 * Example 1:
 *
 * Input: grid = [[0,1],[1,0]] Output: 1
 *
 * Example 2:
 *
 * Input: grid = [[0,1,0],[0,0,0],[0,0,1]] Output: 2
 *
 * Example 3:
 *
 * Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] Output: 1
 *
 * Constraints:
 *
 * n == grid.length == grid[i].length
 * 2 <= n <= 100
 * grid[i][j] is either 0 or 1.
 * There are exactly two islands in grid.
 */
function shortestBridge(grid: number[][]): number {
  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]
  const visited = new Array(grid.length).fill(0).map(() => new Array(grid.length).fill(false))
  const queue: [number, number][] = []
  /**
   * dfs to find the first island
   */
  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid.length || visited[i][j] || grid[i][j] === 0) {
      return
    }
    if (grid[i][j] === 1) {
      visited[i][j] = true
      queue.push([i, j])
      for (let k = 0; k < directions.length; k++) {
        dfs(i + directions[k][0], j + directions[k][1])
      }
    }
  }
  const findFirstIsland = () => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 1) {
          dfs(i, j)
          return
        }
      }
    }
  }
  findFirstIsland()
  // console.log(visited)
  /**
   * bfs to expand the first island
   */
  while (queue.length > 0) {
    let cur = queue.shift()!
    const x = cur[0]
    const y = cur[1]
    for (let k = 0; k < directions.length; k++) {
      let [nx, ny] = [x + directions[k][0], y + directions[k][1]]
      if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid.length || visited[nx][ny]) {
        continue
      }
      if (grid[nx][ny] === 0) {
        visited[nx][ny] = true
        grid[nx][ny] = grid[x][y] + 1
        queue.push([nx, ny])
      } else if (grid[nx][ny] === 1 && visited[nx][ny] === false) { // reach the second island
        return grid[x][y] - 1
      }
    }
  }
  // console.log(grid)
  return -1
};

function test_00934() {
  let grid = [[0, 1], [1, 0]]
  console.log(shortestBridge(grid))
  grid = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1]
  ]
  console.log(shortestBridge(grid))
  grid = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ]
  console.log(shortestBridge(grid))
}

test_00934()
