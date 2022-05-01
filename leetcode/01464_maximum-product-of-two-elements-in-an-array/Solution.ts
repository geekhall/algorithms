/**
 * ID:    01464
 * Title: Maximum Product of Two Elements in an Array
 * Difficulty: Easy
 * Description: Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 *
 * Example 1:
 *
 * Input: nums = [3,4,5,2] Output: 12 Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.
 *
 * Example 2:
 *
 * Input: nums = [1,5,4,5] Output: 16 Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
 *
 * Example 3:
 *
 * Input: nums = [3,7] Output: 12
 *
 * Constraints:
 *
 * 2 <= nums.length <= 500
 * 1 <= nums[i] <= 10^3
 */
function maxProduct1(nums: number[]): number {
  nums.sort((a, b) => b - a)
  return (nums[0] - 1) * (nums[1] - 1)
};

function maxProduct(nums: number[]): number {
  let n = nums.length
  let first = nums[0] > nums[1] ? nums[0] : nums[1]
  let second = nums[0] > nums[1] ? nums[1] : nums[0]
  for (let i = 2; i < n; i++) {
    if (nums[i] >= first) {
      second = first
      first = nums[i]
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }
  return (first - 1) * (second - 1)
}

function test_01464() {
  let nums = [3, 4, 5, 2]
  console.log(maxProduct(nums));

}

test_01464()
