/**
 * ID:    01905
 * Title: Count Sub Islands
 * Difficulty: Medium
 * Description: You are given two m x n binary matrices grid1 and grid2 containing only 0 's (representing water) and 1 's (representing land). An island is a group of 1 's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.
 *
 * An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.
 *
 * Return the number of islands in grid2 that are considered sub-islands.
 *
 * Example 1:
 *
 * Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]] Output: 3 Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2. The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
 *
 * Example 2:
 *
 * Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]] Output: 2 Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2. The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.
 *
 * Constraints:
 *
 * m == grid1.length == grid2.length
 * n == grid1[i].length == grid2[i].length
 * 1 <= m, n <= 500
 * grid1[i][j] and grid2[i][j] are either 0 or 1.
 */
/**
 * 沉掉grid2中的子岛，每次沉掉的时候，把grid2中的岛屿的值改为0，
 *
 * @param grid1
 * @param grid2
 * @returns
 */
function countSubIslands(grid1: number[][], grid2: number[][]): number {
  let m = grid1.length
  let n = grid1[0].length
  let count = 0
  let is_sub_island = true
  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) {
      return
    }
    if (grid1[i][j] === 0) {
      is_sub_island = false
      return
    }
    grid2[i][j] = 0
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid1[i][j] === 1 && grid2[i][j] === 1) {
        is_sub_island = true
        dfs(i, j)
        if (is_sub_island) {
          count++
        }
      }
    }
  }
  return count
};

function test_01905() {
  let grid1 = [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]], grid2 = [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]
  console.log(countSubIslands(grid1, grid2))
  grid1 = [[1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1]], grid2 = [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]]
  console.log(countSubIslands(grid1, grid2))
}

test_01905()
