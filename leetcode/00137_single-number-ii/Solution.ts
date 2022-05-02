/**
 * ID:    00137
 * Title: Single Number II
 * Difficulty: Medium
 * Description: Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * Example 1:
 *
 * Input: nums = [2,2,3,2] Output: 3
 *
 * Example 2:
 *
 * Input: nums = [0,1,0,1,0,1,99] Output: 99
 *
 * Constraints:
 *
 * 1 <= nums.length <= 3 * 10 4
 * -2 31 <= nums[i] <= 2 31 - 1
 * Each element in nums appears exactly three times except for one element which appears once.
 */
function singleNumber(nums: number[]): number {
  let n = nums.length
  let m = new Map()
  for (let i = 0; i < n; i++) {
    if (m.has(nums[i]))
      m.set(nums[i], m.get(nums[i]) + 1)
    else
      m.set(nums[i], 1)
  }
  let res = 0
  m.forEach((v, k) => {
    if (v === 1)
      res = k
  })

  return res
};

function test_00137() {
  let nums = [2, 2, 3, 2]
  console.log(singleNumber(nums));
  nums = [0, 1, 0, 1, 0, 1, 99]
  console.log(singleNumber(nums));
}

test_00137()
