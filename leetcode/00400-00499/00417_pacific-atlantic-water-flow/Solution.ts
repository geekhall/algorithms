/**
 * ID:    00417
 * Title: Pacific Atlantic Water Flow
 * Difficulty: Medium
 * Description: There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
 *
 * The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
 *
 * The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
 *
 * Return a 2D list of grid coordinates result where result[i] = [r i, c i ] denotes that rain water can flow from cell (r i, c i) to both the Pacific and Atlantic oceans.
 *
 * Example 1:
 *
 * Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]] Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 *
 * Example 2:
 *
 * Input: heights = [[2,1],[1,2]] Output: [[0,0],[0,1],[1,0],[1,1]]
 *
 * Constraints:
 *
 * m == heights.length
 * n == heights[r].length
 * 1 <= m, n <= 200
 * 0 <= heights[r][c] <= 10 5
 */
/**
 * 从四边出发搜索，遇到邻居节点比自己低则停止。否则继续搜索。
 * @param {number[][]} heights
 */
function pacificAtlantic(heights: number[][]): number[][] {
  let n = heights.length
  let m = heights[0].length
  let result = new Array()
  let pacific = new Array(n).fill(0).map(() => new Array(m).fill(false))
  let atlantic = new Array(n).fill(0).map(() => new Array(m).fill(false))
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const dfs = (i: number, j: number, visited: boolean[][], heights: number[][]) => {
    if (visited[i][j]) return
    visited[i][j] = true
    const neighbors = directions.map(([x, y]) => [i + x, j + y])
    for (let [x, y] of neighbors) {
      if (x < 0 || x >= n || y < 0 || y >= m || heights[x][y] < heights[i][j]) continue
      dfs(x, y, visited, heights)
    }
  }

  // walk vertical
  for (let i = 0; i < n; i++) {
    dfs(i, 0, pacific, heights)
    dfs(i, m - 1, atlantic, heights)
  }
  // walk horizontal
  for (let j = 0; j < m; j++) {
    dfs(0, j, pacific, heights)
    dfs(n - 1, j, atlantic, heights)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j])
      }
    }
  }
  return result
};

function test_00417() {
  let heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
  console.log(pacificAtlantic(heights))
}

test_00417()
