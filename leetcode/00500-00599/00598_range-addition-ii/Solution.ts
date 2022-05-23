/**
 * ID:    00598
 * Title: Range Addition II
 * Difficulty: Easy
 * Description: You are given an m x n matrix M initialized with all 0 's and an array of operations ops, where ops[i] = [a i, b i ] means M[x][y] should be incremented by one for all 0 <= x < a i and 0 <= y < b i.
 *
 * Count and return the number of maximum integers in the matrix after performing all the operations.
 *
 * Example 1:
 *
 * Input: m = 3, n = 3, ops = [[2,2],[3,3]] Output: 4 Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
 *
 * Example 2:
 *
 * Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]] Output: 4
 *
 * Example 3:
 *
 * Input: m = 3, n = 3, ops = [] Output: 9
 *
 * Constraints:
 *
 * 1 <= m, n <= 4 * 10 4
 * 0 <= ops.length <= 10 4
 * ops[i].length == 2
 * 1 <= a i <= m
 * 1 <= b i <= n
 */
// too slow.
function maxCount1(m: number, n: number, ops: number[][]): number {
  if (ops.length === 0) {
    return m * n
  }
  let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < ops.length; i++) {
    for (let j = 0; j < ops[i][0]; j++) {
      for (let k = 0; k < ops[i][1]; k++) {
        matrix[j][k]++
      }
    }
  }
  let max = matrix[0][0]
  let res = 0
  matrix.forEach((arr) => {
    arr.forEach((v) => {
      if (v === max)
        res++
    })
  })
  return res
};

function maxCount(m: number, n: number, ops: number[][]): number {
  if (ops.length === 0)
    return m * n
  let minx = Number.MAX_SAFE_INTEGER
  let miny = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < ops.length; i++) {
    if ((minx) > ops[i][0]) {
      minx = ops[i][0]
    }
    if ((miny) > ops[i][1]) {
      miny = ops[i][1]
    }
  }
  return minx * miny
}

function test_00598() {
  let m = 3, n = 4, ops = [[2, 2], [3, 3]]
  console.log(maxCount(m, n, ops));
  m = 3, n = 3, ops = [[2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3]]
  console.log(maxCount(m, n, ops));
  m = 40000, n = 40000, ops = []
  console.log(maxCount(m, n, ops));
  m = 39999, n = 39999, ops = [[19999, 19999]]
  console.log(maxCount(m, n, ops));

}

test_00598()
