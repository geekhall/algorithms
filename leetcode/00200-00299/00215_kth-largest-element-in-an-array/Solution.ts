/**
 * ID:    00215
 * Title: Kth Largest Element in an Array
 * Difficulty: Medium
 * Description: Given an integer array nums and an integer k, return the k th largest element in the array.
 *
 * Note that it is the k th largest element in the sorted order, not the k th distinct element.
 *
 * Example 1:
 *
 * Input: nums = [3,2,1,5,6,4], k = 2 Output: 5
 *
 * Example 2:
 *
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4 Output: 4
 *
 * Constraints:
 *
 * 1 <= k <= nums.length <= 10 4
 * -10 4 <= nums[i] <= 10 4
 */
function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1]
};

function test_00215() {
  let nums = [3, 2, 1, 5, 6, 4], k = 2
  console.log(findKthLargest(nums, k))
  nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
  console.log(findKthLargest(nums, k))
}

test_00215()
