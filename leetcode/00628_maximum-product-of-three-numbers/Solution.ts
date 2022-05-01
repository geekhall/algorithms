/**
 * ID:    00628
 * Title: Maximum Product of Three Numbers
 * Difficulty: Easy
 * Description: Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3] Output: 6
 *
 * Example 2:
 *
 * Input: nums = [1,2,3,4] Output: 24
 *
 * Example 3:
 *
 * Input: nums = [-1,-2,-3] Output: -6
 *
 * Constraints:
 *
 * 3 <= nums.length <= 10 4
 * -1000 <= nums[i] <= 1000
 */
function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => b - a)
  let n = nums.length
  return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[n - 1] * nums[n - 2])
};

function test_00628() {
  let nums = [-100, -98, -1, 2, 3, 4]
  console.log(maximumProduct(nums));
  nums = [-100, 26, -1, 2, 3, 4]
  console.log(maximumProduct(nums));

}

test_00628()
