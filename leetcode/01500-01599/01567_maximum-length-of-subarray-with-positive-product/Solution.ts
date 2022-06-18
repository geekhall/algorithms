/**
 * ID:    01567
 * Title: Maximum Length of Subarray With Positive Product
 * Difficulty: Medium
 * Description: Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.
 *
 * A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
 *
 * Return the maximum length of a subarray with positive product.
 *
 * Example 1:
 *
 * Input: nums = [1,-2,-3,4] Output: 4 Explanation: The array nums already has a positive product of 24.
 *
 * Example 2:
 *
 * Input: nums = [0,1,-2,-3,-4] Output: 3 Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6. Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.
 *
 * Example 3:
 *
 * Input: nums = [-1,-2,-3,0,1] Output: 2 Explanation: The longest subarray with positive product is [-1,-2] or [-2,-3].
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * -10 9 <= nums[i] <= 10 9
 */
function getMaxLen(nums: number[]): number {
  let zero_position = -1
  let first_negative_position = -1
  let negative_count = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negative_count++
      if (first_negative_position === -1) {
        first_negative_position = i
      }
    }
    if (nums[i] === 0) {
      negative_count = 0
      first_negative_position = -1
      zero_position = i
    } else {
      if (negative_count % 2 === 0) max = Math.max(max, i - zero_position)
      else max = Math.max(max, i - first_negative_position)
    }
  }
  return max
};

function test_01567() {
  let nums = [1, -2, -3, 4]
  console.log(getMaxLen(nums));
  nums = [0, 1, -2, -3, -4]
  console.log(getMaxLen(nums));
  nums = [-1, -2, -3, 0, 1]
  console.log(getMaxLen(nums));

}

test_01567()
