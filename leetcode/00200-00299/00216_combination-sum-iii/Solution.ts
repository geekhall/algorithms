/**
 * ID:    00216
 * Title: Combination Sum III
 * Difficulty: Medium
 * Description: Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 *
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 *
 * Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
 *
 * Example 1:
 *
 * Input: k = 3, n = 7 Output: [[1,2,4]] Explanation: 1 + 2 + 4 = 7 There are no other valid combinations.
 *
 * Example 2:
 *
 * Input: k = 3, n = 9 Output: [[1,2,6],[1,3,5],[2,3,4]] Explanation: 1 + 2 + 6 = 9 1 + 3 + 5 = 9 2 + 3 + 4 = 9 There are no other valid combinations.
 *
 * Example 3:
 *
 * Input: k = 4, n = 1 Output: [] Explanation: There are no valid combinations. Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 *
 * Constraints:
 *
 * 2 <= k <= 9
 * 1 <= n <= 60
 */
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = []
  const dfs = (candidates: number[], target: number, path: number[], index: number) => {
    if (target === 0 && path.length === k) {
      res.push(path)
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) {
        break
      }
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue
      }
      let new_candidates = [...candidates]
      new_candidates.splice(i, 1)
      dfs(new_candidates, target - candidates[i], [...path, candidates[i]], i)
    }
  }
  dfs([1, 2, 3, 4, 5, 6, 7, 8, 9], n, [], 0)
  return res
};

function test_00216() {
  let k = 3, n = 7
  console.log(combinationSum3(k, n))
  k = 3, n = 9
  console.log(combinationSum3(k, n))
  k = 4, n = 1
  console.log(combinationSum3(k, n))

}

test_00216()
