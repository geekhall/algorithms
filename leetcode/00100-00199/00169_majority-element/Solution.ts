/**
 * ID:    00169
 * Title: Majority Element
 * Difficulty: Easy
 * Description: Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * Example 1:
 *
 * Input: nums = [3,2,3] Output: 3
 *
 * Example 2:
 *
 * Input: nums = [2,2,1,1,1,2,2] Output: 2
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 5 * 10 4
 * -10 9 <= nums[i] <= 10 9
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */
function majorityElement(nums: number[]): number {
  let count = 0
  let candidate = 0
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
    }
    if (nums[i] === candidate) {
      count++
    } else {
      count--
    }
  }
  return candidate
};

function test_00169() {
  let nums = [3, 2, 3]
  console.log(majorityElement(nums));
  nums = [2, 2, 1, 1, 1, 2, 2]
  console.log(majorityElement(nums));
}

test_00169()
