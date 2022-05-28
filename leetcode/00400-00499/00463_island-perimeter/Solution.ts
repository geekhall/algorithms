/**
 * ID:    00463
 * Title: Island Perimeter
 * Difficulty: Easy
 * Description: You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 *
 * Example 1:
 *
 * Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] Output: 16 Explanation: The perimeter is the 16 yellow stripes in the image above.
 *
 * Example 2:
 *
 * Input: grid = [[1]] Output: 4
 *
 * Example 3:
 *
 * Input: grid = [[1,0]] Output: 4
 *
 * Constraints:
 *
 * row == grid.length
 * col == grid[i].length
 * 1 <= row, col <= 100
 * grid[i][j] is 0 or 1.
 * There is exactly one island in grid.
 */
function islandPerimeter(grid: number[][]): number {

  let res = 0
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ]
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        res += 4
        directions.forEach((v) => {
          if ((i + v[0] >= 0 && i + v[0] < grid.length) &&
            (j + v[1] >= 0 && j + v[1] < grid[0].length) &&
            (grid[i + v[0]][j + v[1]] === 1)) {
            res -= 1
          }
        })
      }
    }
  }

  return res
};

function test_00463() {
  let grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ]
  console.log(islandPerimeter(grid));
  grid = [[1]]
  console.log(islandPerimeter(grid));
  grid = [[1, 0]]
  console.log(islandPerimeter(grid));
}

test_00463()
