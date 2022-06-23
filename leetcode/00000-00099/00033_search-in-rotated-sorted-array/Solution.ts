/**
 * ID:    00033
 * Title: Search in Rotated Sorted Array
 * Difficulty: Medium
 * Description: There is an integer array nums sorted in ascending order (with distinct values).
 *
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0 Output: 4
 *
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3 Output: -1
 *
 * Example 3:
 *
 * Input: nums = [1], target = 0 Output: -1
 *
 * Constraints:
 *
 * 1 <= nums.length <= 5000
 * -10 4 <= nums[i] <= 10 4
 * All values of nums are unique.
 * nums is an ascending array that is possibly rotated.
 * -10 4 <= target <= 10 4
 */
function search(nums: number[], target: number): number {
  let res = -1
  let left = 0
  let right = nums.length - 1
  let mid = 0
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      res = mid
      break
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid
      }
    } else if (nums[mid] > nums[right]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      right--
    }
  }
  return res
};

function test_00033() {
  let nums = [4, 5, 6, 7, 0, 1, 2], target = 0
  console.log(search(nums, target));
  nums = [4, 5, 6, 7, 0, 1, 2], target = 3
  console.log(search(nums, target));
  nums = [1], target = 0
  console.log(search(nums, target));
}

test_00033()
