/**
 * ID:    00090
 * Title: Subsets II
 * Difficulty: Medium
 * Description: Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Example 1:
 *
 * Input: nums = [1,2,2] Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 *
 * Example 2:
 *
 * Input: nums = [0] Output: [[],[0]]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 */
function subsetsWithDup(nums: number[]): number[][] {
  let result: number[][] = [[]]
  let s = new Set()
  for (let i = 0; i < nums.length; i++) {
    let len = result.length
    for (let j = 0; j < len; j++) {
      let r = [...result[j], nums[i]].sort((a, b) => a - b)
      if (!s.has(r.join(','))) {
        s.add(r.join(','))
        result.push(r)
      }
    }
  }
  return result
};

function test_00090() {
  let nums = [1, 2, 2]
  console.log(subsetsWithDup(nums))
  nums = [4, 4, 4, 1, 4]
  console.log(subsetsWithDup(nums))
}

test_00090()
