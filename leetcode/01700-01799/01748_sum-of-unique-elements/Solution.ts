/**
 * ID:    01748
 * Title: Sum of Unique Elements
 * Difficulty: Easy
 * Description: You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
 *
 * Return the sum of all the unique elements of nums.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,2] Output: 4 Explanation: The unique elements are [1,3], and the sum is 4.
 *
 * Example 2:
 *
 * Input: nums = [1,1,1,1,1] Output: 0 Explanation: There are no unique elements, and the sum is 0.
 *
 * Example 3:
 *
 * Input: nums = [1,2,3,4,5] Output: 15 Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
function sumOfUnique(nums: number[]): number {
  let m = new Map()
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (m.get(nums[i]) === undefined) {
      m.set(nums[i], 1)
    } else {
      m.set(nums[i], m.get(nums[i]) + 1)
    }
  }

  m.forEach((v, k) => {
    if (v === 1) {
      res += k
    }
  })
  return res
};

function test_01748() {
  let nums = [1, 2, 3, 4, 5]
  console.log(sumOfUnique(nums));
  nums = [1, 2, 3, 2]
  console.log(sumOfUnique(nums));

}

test_01748()
