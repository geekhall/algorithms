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
function combine(n: number, k: number): number[][] {
  let arr = new Array(n).fill(0).map((_, i) => i + 1)
  let res = new Array()
  let cur = new Array()
  const dfs = (arr: number[], cur: number[], k: number) => {
    if (k === 0) {
      res.push(cur.slice())
      return
    }
    for (let i = 0; i < arr.length; i++) {
      cur.push(arr[i])
      dfs(arr.slice(i + 1), cur, k - 1)
      cur.pop()
    }
  }
  dfs(arr, cur, k)
  return res
};

function test_00077() {
  let n = 4
  let k = 2
  console.log(combine(n, k))
  n = 1
  k = 1
  console.log(combine(n, k))
  let cur = Array.from({ length: 5 }).map((_, i) => i + 1)
}

test_00077()
