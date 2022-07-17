/**
 * ID:    00713
 * Title: Subarray Product Less Than K
 * Difficulty: Medium
 * Description: Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 *
 * Example 1:
 *
 * Input: nums = [10,5,2,6], k = 100 Output: 8 Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6] Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
 *
 * Example 2:
 *
 * Input: nums = [1,2,3], k = 0 Output: 0
 *
 * Constraints:
 *
 * 1 <= nums.length <= 3 * 10 4
 * 1 <= nums[i] <= 1000
 * 0 <= k <= 10 6
 */
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (nums.length == 0) {
    return 0;
  }
  const helper = (nums: number[], k: number) => {
    let count = 0;
    let product = 1;
    let start = 0;
    let end = 0;
    while (end < nums.length) {
      product *= nums[end];
      while (product >= k) {
        product /= nums[start];
        start++;
      }
      count += end - start + 1 > 0 ? end - start + 1 : 0;
      end++;
    }
    return count;
  }
  return helper(nums, k);
};

function test_00713() {
  console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))
  console.log(numSubarrayProductLessThanK([1, 2, 3], 0))
}

test_00713()
