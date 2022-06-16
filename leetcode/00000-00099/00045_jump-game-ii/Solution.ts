/**
 * ID:    00045
 * Title: Jump Game II
 * Difficulty: Medium
 * Description: Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 *
 * Each element in the array represents your maximum jump length at that position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * You can assume that you can always reach the last index.
 *
 * Example 1:
 *
 * Input: nums = [2,3,1,1,4] Output: 2 Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 *
 * Input: nums = [2,3,0,1,4] Output: 2
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 4
 * 0 <= nums[i] <= 1000
 */
function jump(nums: number[]): number {
  // dp[i] 表示到达 i 位置，最少需要多少步
  let dp = new Array(nums.length).fill(0)
  dp[0] = 0
  for (let i = 1; i < nums.length; i++) {
    let min_jump = nums.length
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i) {
        min_jump = Math.min(min_jump, dp[j] + 1)
      }
    }
    dp[i] = min_jump
  }
  return dp[nums.length - 1]
};

function test_00045() {
  let nums = [2, 3, 1, 1, 4]
  console.log(jump(nums))
  nums = [2, 3, 0, 1, 4]
  console.log(jump(nums))
  nums = [2, 1, 1, 1, 1]
  console.log(jump(nums))
}

test_00045()
