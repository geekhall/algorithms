/**
 * ID:    00747
 * Title: Largest Number At Least Twice of Others
 * Difficulty: Easy
 * Description: You are given an integer array nums where the largest integer is unique.
 *
 * Determine whether the largest element in the array is at least twice as much as every other number in the array.
 * If it is, return the index of the largest element, or return -1 otherwise.
 *
 * Example 1:
 *
 * Input: nums = [3,6,1,0] Output: 1 Explanation: 6 is the largest integer. For every other number in the array x, 6 is at least twice as big as x. The index of value 6 is 1, so we return 1.
 *
 * Example 2:
 *
 * Input: nums = [1,2,3,4] Output: -1 Explanation: 4 is less than twice the value of 3, so we return -1.
 *
 * Example 3:
 *
 * Input: nums = [1] Output: 0 Explanation: 1 is trivially at least twice the value as any other number because there are no other numbers.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 50
 * 0 <= nums[i] <= 100
 * The largest element in nums is unique.
 */
function dominantIndex(nums: number[]): number {
  let res = 0
  let first = Number.MIN_VALUE;
  let second = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first
      first = nums[i]
      res = i
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }
  return first >= second * 2 ? res : -1
};

function test_00747() {
  let nums = [3, 6, 1, 0]
  console.log(dominantIndex(nums));
  nums = [1]
  console.log(dominantIndex(nums));
  nums = [1, 2, 3, 4]
  console.log(dominantIndex(nums));

}

test_00747()
