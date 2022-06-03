/**
 * ID:    01800
 * Title: Maximum Ascending Subarray Sum
 * Difficulty: Easy
 * Description: Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
 *
 * A subarray is defined as a contiguous sequence of numbers in an array.
 *
 * A subarray [nums l, nums l+1, ..., nums r-1, nums r ] is ascending if for all i where l <= i < r, nums i < nums i+1. Note that a subarray of size 1 is ascending.
 *
 * Example 1:
 *
 * Input: nums = [10,20,30,5,10,50] Output: 65 Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
 *
 * Example 2:
 *
 * Input: nums = [10,20,30,40,50] Output: 150 Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
 *
 * Example 3:
 *
 * Input: nums = [12,17,15,13,10,11,12] Output: 33 Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
function maxAscendingSum(nums: number[]): number {
  let sum = nums[0]
  let max = sum
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }
    max = Math.max(max, sum)
  }
  return max
};

function test_01800() {
  let nums = [10, 20, 30, 5, 10, 50]
  console.log(maxAscendingSum(nums))
  nums = [12, 17, 15, 13, 10, 11, 12]
  console.log(maxAscendingSum(nums))
}

test_01800()
