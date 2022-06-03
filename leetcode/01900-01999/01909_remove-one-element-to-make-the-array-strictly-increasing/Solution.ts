/**
 * ID:    01909
 * Title: Remove One Element to Make the Array Strictly Increasing
 * Difficulty: Easy
 * Description: Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.
 *
 * The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).
 *
 * Example 1:
 *
 * Input: nums = [1,2, 10,5,7] Output: true Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7]. [1,2,5,7] is strictly increasing, so return true.
 *
 * Example 2:
 *
 * Input: nums = [2,3,1,2] Output: false Explanation: [3,1,2] is the result of removing the element at index 0. [2,1,2] is the result of removing the element at index 1. [2,3,2] is the result of removing the element at index 2. [2,3,1] is the result of removing the element at index 3. No resulting array is strictly increasing, so return false.
 *
 * Example 3:
 *
 * Input: nums = [1,1,1] Output: false Explanation: The result of removing any element is [1,1]. [1,1] is not strictly increasing, so return false.
 *we
 * Constraints:
 *
 * 2 <= nums.length <= 1000
 * 1 <= nums[i] <= 1000
 */
function canBeIncreasing(nums: number[]): boolean {
  let deleted = false
  let previous = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= previous) {
      if (deleted) {
        return false
      }
      deleted = true
      if (i === 1 || nums[i] > nums[i - 2]) { // remove element at i - 1 because it is the biggest element in i, i-1, and i-2
        previous = nums[i]
      }
    } else {
      previous = nums[i]
    }
  }
  return true
};

function test_01909() {
  let nums = [1, 2, 10, 5, 7]
  console.log(canBeIncreasing(nums))
  nums = [2, 3, 1, 2]
  console.log(canBeIncreasing(nums))
  nums = [1, 1, 1]
  console.log(canBeIncreasing(nums))
}

test_01909()
