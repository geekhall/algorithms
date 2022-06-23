/**
 * ID:    00077
 * Title: Combinations
 * Difficulty: Medium
 * Description: Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
 *
 * You may return the answer in any order.
 *
 * Example 1:
 *
 * Input: n = 4, k = 2 Output: [ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4], ]
 *
 * Example 2:
 *
 * Input: n = 1, k = 1 Output: [[1]]
 *
 * Constraints:
 *
 * 1 <= n <= 20
 * 1 <= k <= n
 */
function combine1(n: number, k: number): number[][] {
  let res: number[][] = []
  let cur: number[] = []
  let i = 1
  let j = 1
  let count = 0
  while (count < k) {
    if (i > n) {
      i = 1
      j++
    }
    if (j > n) {
      j = 1
      i++
    }
    if (i === j) {
      cur.push(i)
      count++
    } else {
      cur.push(i)
      cur.push(j)
      count += 2
    }
    if (count === k) {
      res.push(cur)
    }
  }
  return res
};
function combine(n: number, k: number): number[][] {

  const dfs = (start: number, end: number, cur: number[], res: number[][]) => {
    if (cur.length === k) {
      res.push(cur)
      return
    }
    for (let i = start; i <= end; i++) {
      cur.push(i)
      dfs(i + 1, end, cur, res)
      cur.pop()
    }
  }
  const res: number[][] = []
  dfs(1, n, [], res)
  return res
}

function test_00077() {
  let n = 4
  let k = 2
  let res = combine(n, k)
  console.log(res)

}

test_00077()
