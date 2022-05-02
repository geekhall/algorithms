/**
 * ID:    00260
 * Title: Single Number III
 * Difficulty: Medium
 * Description: Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
 *
 * You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
 *
 * Example 1:
 *
 * Input: nums = [1,2,1,3,2,5] Output: [3,5] Explanation: [5, 3] is also a valid answer.
 *
 * Example 2:
 *
 * Input: nums = [-1,0] Output: [-1,0]
 *
 * Example 3:
 *
 * Input: nums = [0,1] Output: [1,0]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 3 * 10 4
 * -2 31 <= nums[i] <= 2 31 - 1
 * Each integer in nums will appear twice, only two integers will appear once.
 */
function singleNumber(nums: number[]): number[] {
  let n = nums.length
  let xorResult = nums.reduce((p, c) => p ^ c)
  let s = new Set(nums)
  for (let i = 0; i < n; i++) {
    if (s.has(nums[i] ^ xorResult))
      return [nums[i], nums[i] ^ xorResult]
  }

  return []
};
function test_00260() {
  let nums = [1, 2, 1, 3, 2, 5]
  console.log(singleNumber(nums));
  nums = [2, 2, 3, 2]
  console.log(singleNumber(nums));
}

test_00260()
