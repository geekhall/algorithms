/**
 * ID:    00892
 * Title: Surface Area of 3D Shapes
 * Difficulty: Easy
 * Description: You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).
 *
 * After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes.
 *
 * Return the total surface area of the resulting shapes.
 *
 * Note: The bottom face of each shape counts toward its surface area.
 *
 * Example 1:
 *
 * Input: grid = [[1,2],[3,4]] Output: 34
 *
 * Example 2:
 *
 * Input: grid = [[1,1,1],[1,0,1],[1,1,1]] Output: 32
 *
 * Example 3:
 *
 * Input: grid = [[2,2,2],[2,1,2],[2,2,2]] Output: 46
 *
 * Constraints:
 *
 * n == grid.length == grid[i].length
 * 1 <= n <= 50
 * 0 <= grid[i][j] <= 50
 */
function surfaceArea(grid: number[][]): number {
  let total = 0
  let adjacent = 0
  let horizon = 0
  let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      total += grid[i][j]
      horizon += (grid[i][j] > 1 ? 2 * (grid[i][j] - 1) : 0)
      for (let k = 0; k < direction.length; k++) {
        let x = i + direction[k][0]
        let y = j + direction[k][1]
        if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
          adjacent += Math.min(grid[i][j], grid[x][y])
        }
      }
    }
  }

  return total * 6 - adjacent - horizon
};

function test_00892() {
  let grid = [[1, 2], [3, 4]]
  console.log(surfaceArea(grid))

  grid = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
  console.log(surfaceArea(grid))

  grid = [[2, 2, 2], [2, 1, 2], [2, 2, 2]]
  console.log(surfaceArea(grid))

}

test_00892()
