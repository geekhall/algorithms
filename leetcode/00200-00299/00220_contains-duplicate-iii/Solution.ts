/**
 * ID:    00220
 * Title: Contains Duplicate III
 * Difficulty: Medium
 * Description: Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1], k = 3, t = 0 Output: true
 *
 * Example 2:
 *
 * Input: nums = [1,0,1,1], k = 1, t = 2 Output: true
 *
 * Example 3:
 *
 * Input: nums = [1,5,9,1,5,9], k = 2, t = 3 Output: false
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 10 4
 * -2 31 <= nums[i] <= 2 31 - 1
 * 0 <= k <= 10 4
 * 0 <= t <= 2 31 - 1
 */
// bf
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  let n = nums.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && j - i <= k)
        return true
    }
  }
  return false
};

function test_00220() {
  let nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3
  console.log(containsNearbyAlmostDuplicate(nums, k, t));
  nums = [1, 2, 3, 1], k = 3, t = 0
  console.log(containsNearbyAlmostDuplicate(nums, k, t));

  nums = [8, 7, 15, 1, 6, 1, 9, 15], k = 1, t = 3
  console.log(containsNearbyAlmostDuplicate(nums, k, t)); // Expected true
}

test_00220()
