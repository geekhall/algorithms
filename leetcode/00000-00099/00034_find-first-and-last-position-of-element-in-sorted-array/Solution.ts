/**
 * ID:    00034
 * Title: Find First and Last Position of Element in Sorted Array
 * Difficulty: Medium
 * Description: Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 *
 * Input: nums = [5,7,7,8,8,10], target = 8 Output: [3,4]
 *
 * Example 2:
 *
 * Input: nums = [5,7,7,8,8,10], target = 6 Output: [-1,-1]
 *
 * Example 3:
 *
 * Input: nums = [], target = 0 Output: [-1,-1]
 *
 * Constraints:
 *
 * 0 <= nums.length <= 10 5
 * -10 9 <= nums[i] <= 10 9
 * nums is a non-decreasing array.
 * -10 9 <= target <= 10 9
 */
function searchRange(nums: number[], target: number): number[] {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) {
      let left = middle
      let right = middle
      while (left >= 0 && nums[left] === target) {
        left--
      }
      while (right < nums.length && nums[right] === target) {
        right++
      }
      return [left + 1, right - 1]
    } else if (nums[middle] > target) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return [-1, -1]
};

function test_00034() {
  let nums = [5, 7, 7, 8, 8, 10], target = 8
  console.log(searchRange(nums, target))
  nums = [5, 7, 7, 8, 8, 10], target = 6
  console.log(searchRange(nums, target))
}

test_00034()
