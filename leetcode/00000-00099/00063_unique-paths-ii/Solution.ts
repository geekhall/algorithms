/**
 * ID:    00063
 * Title: Unique Paths II
 * Difficulty: Medium
 * Description: You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.
 *
 * An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
 *
 * Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *
 * The testcases are generated so that the answer will be less than or equal to 2 * 10 9.
 *
 * Example 1:
 *
 * Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]] Output: 2 Explanation: There is one obstacle in the middle of the 3x3 grid above. There are two ways to reach the bottom-right corner: 1. Right -> Right -> Down -> Down 2. Down -> Down -> Right -> Right
 *
 * Example 2:
 *
 * Input: obstacleGrid = [[0,1],[0,0]] Output: 1
 *
 * Constraints:
 *
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] is 0 or 1.
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dp[0][0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) {
        dp[i][j] += dp[i - 1][j]
      }
      if (j > 0) {
        dp[i][j] += dp[i][j - 1]
      }
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      }
    }
  }
  return dp[m - 1][n - 1]
};

function test_00063() {
  let obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
  console.log(uniquePathsWithObstacles(obstacleGrid))
  obstacleGrid = [[0, 1], [0, 0]]
  console.log(uniquePathsWithObstacles(obstacleGrid))
}

test_00063()
