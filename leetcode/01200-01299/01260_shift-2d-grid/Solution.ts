/**
 * ID:    01260
 * Title: Shift 2D Grid
 * Difficulty: Easy
 * Description: Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
 *
 * In one shift operation:
 *
 * Element at grid[i][j] moves to grid[i][j + 1].
 * Element at grid[i][n - 1] moves to grid[i + 1][0].
 * Element at grid[m - 1][n - 1] moves to grid[0][0].
 *
 * Return the 2D grid after applying shift operation k times.
 *
 * Example 1:
 *
 * Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1 Output: [[9,1,2],[3,4,5],[6,7,8]]
 *
 * Example 2:
 *
 * Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4 Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
 *
 * Example 3:
 *
 * Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9 Output: [[1,2,3],[4,5,6],[7,8,9]]
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m <= 50
 * 1 <= n <= 50
 * -1000 <= grid[i][j] <= 1000
 * 0 <= k <= 100
 */
function shiftGrid(grid: number[][], k: number): number[][] {
  let m = grid.length;
  let n = grid[0].length;
  let result = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let newI = (i + Math.trunc((j + k) / n)) % m;
      let newJ = (j + k) % n;
      result[newI][newJ] = grid[i][j];
      // console.log(`${i}, ${j} -> ${newI}, ${newJ}`);
    }
  }
  return result;
};

function test_01260() {
  let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 1
  console.log(shiftGrid(grid, k));
  grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], k = 4
  console.log(shiftGrid(grid, k));
  grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 9
  console.log(shiftGrid(grid, k));

}

test_01260()
