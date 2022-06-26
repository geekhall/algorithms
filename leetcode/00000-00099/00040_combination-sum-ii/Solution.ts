/**
 * ID:    00040
 * Title: Combination Sum II
 * Difficulty: Medium
 * Description: Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 * Example 1:
 *
 * Input: candidates = [10,1,2,7,6,1,5], target = 8 Output: [ [1,1,6], [1,2,5], [1,7], [2,6] ]
 *
 * Example 2:
 *
 * Input: candidates = [2,5,2,1,2], target = 5 Output: [ [1,2,2], [5] ]
 *
 * Constraints:
 *
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 */
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  candidates.sort((a, b) => a - b)
  const dfs = (candidates: number[], target: number, path: number[], index: number) => {
    if (target === 0) {
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
  dfs(candidates, target, [], 0)
  return res
};

function test_00040() {
  let candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
  console.log(combinationSum2(candidates, target))
}

test_00040()
