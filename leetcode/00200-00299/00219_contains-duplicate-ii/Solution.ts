/**
 * ID:    00219
 * Title: Contains Duplicate II
 * Difficulty: Easy
 * Description: Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1], k = 3 Output: true
 *
 * Example 2:
 *
 * Input: nums = [1,0,1,1], k = 1 Output: true
 *
 * Example 3:
 *
 * Input: nums = [1,2,3,1,2,3], k = 2 Output: false
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * -10 9 <= nums[i] <= 10 9
 * 0 <= k <= 10 5
 */
function containsNearbyDuplicate1(nums: number[], k: number): boolean {
  let n = nums.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j] && j - i <= k) {
        return true
      }
    }
  }
  return false
};
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let n = nums.length
  let m = new Map()
  for (let i = 0; i < n; i++) {
    if (m.has(nums[i]) && i - m.get(nums[i]) <= k)
      return true
    m.set(nums[i], i)
  }
  return false
};
function test_00219() {
  let nums = [1, 2, 3, 1], k = 3
  console.log(containsNearbyDuplicate(nums, k));
  nums = [1, 2, 3, 1, 2, 3], k = 2
  console.log(containsNearbyDuplicate(nums, k));
}

test_00219()
