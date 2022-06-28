/**
 * ID:    00078
 * Title: Subsets
 * Difficulty: Medium
 * Description: Given an integer array nums of unique elements, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3] Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Example 2:
 *
 * Input: nums = [0] Output: [[],[0]]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 */
function subsets(nums: number[]): number[][] {
  let result: number[][] = [[]]
  for (let i = 0; i < nums.length; i++) {
    let len = result.length
    for (let j = 0; j < len; j++) {
      result.push([...result[j], nums[i]])
    }
  }
  return result
};

function test_00078() {
  let nums = [1, 2, 3]
  console.log(subsets(nums))
}

test_00078()
