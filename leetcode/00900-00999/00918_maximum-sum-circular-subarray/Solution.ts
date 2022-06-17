/**
 * ID:    00918
 * Title: Maximum Sum Circular Subarray
 * Difficulty: Medium
 * Description: Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
 *
 * A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
 *
 * A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
 *
 * Example 1:
 *
 * Input: nums = [1,-2,3,-2] Output: 3 Explanation: Subarray [3] has maximum sum 3.
 *
 * Example 2:
 *
 * Input: nums = [5,-3,5] Output: 10 Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
 *
 * Example 3:
 *
 * Input: nums = [-3,-2,-3] Output: -2 Explanation: Subarray [-2] has maximum sum -2.
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 3 * 10 4
 * -3 * 10 4 <= nums[i] <= 3 * 10 4
 */
// case1：最大子数组在数组范围内，直接查找最大子数组
// case2：最大子数组在数组两边，这种情况转换为查找范围内的最小子数组即可
function maxSubarraySumCircular(nums: number[]): number {
  let cur_max = nums[0]
  let cur_min = nums[0]
  let total = nums[0]
  let max_sum = nums[0]
  let min_sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    cur_max = Math.max(cur_max + nums[i], nums[i])
    max_sum = Math.max(max_sum, cur_max)
    cur_min = Math.min(cur_min + nums[i], nums[i])
    min_sum = Math.min(min_sum, cur_min)
    total += nums[i]
  }
  return max_sum > 0 ? Math.max(max_sum, total - min_sum) : max_sum
};

function test_00918() {
  let nums = [1, -2, 3, -2]
  console.log(maxSubarraySumCircular(nums))
  nums = [5, -3, 5]
  console.log(maxSubarraySumCircular(nums))
  nums = [-3, -2, -3]
  console.log(maxSubarraySumCircular(nums))
  nums = [-2]
  console.log(maxSubarraySumCircular(nums))
  nums = [3, 1, 3, 2, 6]
  console.log(maxSubarraySumCircular(nums)) // expect : 15
  nums = [3, -1, 2, -1]
  console.log(maxSubarraySumCircular(nums))
}

test_00918()
