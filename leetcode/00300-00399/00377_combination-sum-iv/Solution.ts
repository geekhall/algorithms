/**
 * ID:    00377
 * Title: Combination Sum IV
 * Difficulty: Medium
 * Description: Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.
 *
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3], target = 4 Output: 7 Explanation: The possible combination ways are: (1, 1, 1, 1) (1, 1, 2) (1, 2, 1) (1, 3) (2, 1, 1) (2, 2) (3, 1) Note that different sequences are counted as different combinations.
 *
 * Example 2:
 *
 * Input: nums = [9], target = 3 Output: 0
 *
 * Constraints:
 *
 * 1 <= nums.length <= 200
 * 1 <= nums[i] <= 1000
 * All the elements of nums are unique.
 * 1 <= target <= 1000
 *
 * Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?
 */
function combinationSum4(nums: number[], target: number): number {
  const dp = Array.from({ length: target + 1 }, () => 0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  return dp[target]
};

function test_00377() {
  let nums = [1, 2, 3], target = 4
  console.log(combinationSum4(nums, target))
  nums = [9], target = 3
  console.log(combinationSum4(nums, target))
}

test_00377()
