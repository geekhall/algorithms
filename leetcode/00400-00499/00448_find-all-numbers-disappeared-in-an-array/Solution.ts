/**
 * ID:    00448
 * Title: Find All Numbers Disappeared in an Array
 * Difficulty: Easy
 * Description: Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 *
 * Example 1:
 *
 * Input: nums = [4,3,2,7,8,2,3,1] Output: [5,6]
 *
 * Example 2:
 *
 * Input: nums = [1,1] Output: [2]
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 10 5
 * 1 <= nums[i] <= n
 *
 * Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 */
function findDisappearedNumbers(nums: number[]): number[] {
  let full = new Set(Array.from({ length: nums.length }, (_, k) => k + 1))
  let s = new Set()
  nums.forEach((v, i) => {
    s.add(v)
  });
  return Array.from(full).filter(x => !s.has(x))
};

function test_00448() {
  // Input: nums = [4,3,2,7,8,2,3,1]
  // Output: [5,6]
  let nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
  console.log(findDisappearedNumbers(nums1));

  // Input: nums = [1,1]
  // Output: [2]
  let nums2 = [1, 1]
  console.log(findDisappearedNumbers(nums2));

}
test_00448()
