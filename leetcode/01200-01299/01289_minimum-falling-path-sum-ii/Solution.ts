/**
 * ID:    01289
 * Title: Minimum Falling Path Sum II
 * Difficulty: Hard
 * Description: Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero shifts.
 *
 * A falling path with non-zero shifts is a choice of exactly one element from each row of grid such that no two elements chosen in adjacent rows are in the same column.
 *
 * Example 1:
 *
 * Input: arr = [[1,2,3],[4,5,6],[7,8,9]] Output: 13 Explanation: The possible falling paths are: [1,5,9], [1,5,7], [1,6,7], [1,6,8], [2,4,8], [2,4,9], [2,6,7], [2,6,8], [3,4,8], [3,4,9], [3,5,7], [3,5,9] The falling path with the smallest sum is [1,5,7], so the answer is 13.
 *
 * Example 2:
 *
 * Input: grid = [[7]] Output: 7
 *
 * Constraints:
 *
 * n == grid.length == grid[i].length
 * 1 <= n <= 200
 * -99 <= grid[i][j] <= 99
 */
function minFallingPathSum(grid: number[][]): number {

  let n = grid.length
  if (n === 1) {
    return grid[0][0]
  }

  let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  let level_min = Number.MAX_SAFE_INTEGER
  let level_min_index = -1
  let level_second = Number.MAX_SAFE_INTEGER
  let level_second_index = -1
  let last_level_min = Number.MAX_SAFE_INTEGER
  let last_level_min_index = -1
  let last_level_second = Number.MAX_SAFE_INTEGER
  let last_level_second_index = -1
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (i === n - 1) {
        dp[i][j] = grid[i][j]
        if (dp[i][j] < level_min) {
          last_level_second = last_level_min
          last_level_second_index = last_level_min_index
          last_level_min = dp[i][j]
          last_level_min_index = j
        } else if (dp[i][j] < last_level_second) {
          last_level_second = dp[i][j]
          last_level_second_index = j
        }
      } else {
        if (j === last_level_min_index) {
          dp[i][j] = grid[i][j] + dp[i + 1][last_level_second_index]
        } else {
          dp[i][j] = grid[i][j] + dp[i + 1][last_level_min_index]
        }
      }
      if (dp[i][j] < level_min) {
        level_second = level_min
        level_second_index = level_min_index
        level_min = dp[i][j]
        level_min_index = j
      } else if (dp[i][j] < level_second) {
        level_second = dp[i][j]
        level_second_index = j
      }
    }
    last_level_min = level_min
    last_level_min_index = level_min_index
    last_level_second = level_second
    last_level_second_index = level_second_index
    level_min = Number.MAX_SAFE_INTEGER
    level_min_index = -1
    level_second = Number.MAX_SAFE_INTEGER
    level_second_index = -1
  }
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < n; i++) {
    min = Math.min(min, dp[0][i])
  }
  return min
}

function test_01289() {
  let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  console.log(minFallingPathSum(arr))
  arr = [[7]]
  console.log(minFallingPathSum(arr))
  arr = [
    [-73, 61, 43, -48, -36],
    [3, 30, 27, 57, 10],
    [96, -76, 84, 59, -15],
    [5, -49, 76, 31, -7],
    [97, 91, 61, -46, 67]]
  console.log(minFallingPathSum(arr)) // expect -192
}

test_01289()
