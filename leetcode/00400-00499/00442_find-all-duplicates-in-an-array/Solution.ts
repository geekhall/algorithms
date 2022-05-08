/**
 * ID:    00442
 * Title: Find All Duplicates in an Array
 * Difficulty: Medium
 * Description: Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
 *
 * You must write an algorithm that runs in O(n) time and uses only constant extra space.
 *
 * Example 1:
 *
 * Input: nums = [4,3,2,7,8,2,3,1] Output: [2,3]
 *
 * Example 2:
 *
 * Input: nums = [1,1,2] Output: [1]
 *
 * Example 3:
 *
 * Input: nums = [1] Output: []
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 10 5
 * 1 <= nums[i] <= n
 * Each element in nums appears once or twice.
 */
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

function findDuplicates(nums: number[]): number[] {
  let s = new Set()
  let res = new Array()
  nums.forEach((v, i) => {
    if (s.has(v))
      res.push(v)
    s.add(v)
  })
  return res
};

function test_00442() {
  // Input: nums = [4,3,2,7,8,2,3,1]
  // Output: [2,3]
  let nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
  console.log(findDuplicates(nums1));

  // Input: nums = [1,1,2]
  // Output: [1]
  let nums2 = [1, 1, 2]
  console.log(findDuplicates(nums2));

  // Input: nums = [1]
  // Output: []
  let nums3 = [1]
  console.log(findDuplicates(nums3));

}
test_00442()

