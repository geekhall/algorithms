/**
 * ID:    00053
 * Title: Maximum Subarray
 * Difficulty: Easy
 * Description: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 *
 * Example 1:
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6 Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 *
 * Input: nums = [1] Output: 1
 *
 * Example 3:
 *
 * Input: nums = [5,4,-1,7,8] Output: 23
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * -10 4 <= nums[i] <= 10 4
 *
 * Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */
function maxSubArray(nums: number[]): number {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + nums[i - 1] > nums[i]) {
      nums[i] += nums[i - 1]
    }
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return max
};

function test_00053() {
  let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  console.log(maxSubArray(nums))
}

test_00053()
