/**
 * ID:    00287
 * Title: Find the Duplicate Number
 * Difficulty: Medium
 * Description: Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 *
 * There is only one repeated number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 *
 * Example 1:
 *
 * Input: nums = [1,3,4,2,2] Output: 2
 *
 * Example 2:
 *
 * Input: nums = [3,1,3,4,2] Output: 3
 *
 * Constraints:
 *
 * 1 <= n <= 10 5
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 * All the integers in nums appear only once except for precisely one integer which appears two or more times.
 *
 * Follow up:
 *
 * How can we prove that at least one duplicate number must exist in nums?
 * Can you solve the problem in linear runtime complexity?
 */
function findDuplicate(nums: number[]): number {
  let n = nums.length
  nums.sort()
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1])
      return nums[i]
  }
  return 0
};

function findDuplicate1(nums: number[]): number {
  let n = nums.length
  let s = new Set()
  for (let i = 0; i < n; i++) {
    if (s.has(nums[i]))
      return nums[i]
    s.add(nums[i])
  }
  return 0
};


function test_00287() {
  let nums = [3, 1, 3, 4, 2]
  console.log(findDuplicate(nums));
  nums = [2, 2, 2, 2, 2]
  console.log(findDuplicate(nums));
}

test_00287()
