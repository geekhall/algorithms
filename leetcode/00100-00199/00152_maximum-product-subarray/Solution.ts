/**
 * ID:    00152
 * Title: Maximum Product Subarray
 * Difficulty: Medium
 * Description: Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 *
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * A subarray is a contiguous subsequence of the array.
 *
 * Example 1:
 *
 * Input: nums = [2,3,-2,4] Output: 6 Explanation: [2,3] has the largest product 6.
 *
 * Example 2:
 *
 * Input: nums = [-2,0,-1] Output: 0 Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 10 4
 * -10 <= nums[i] <= 10
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */
function maxProduct(nums: number[]): number {
  let max = nums[0];
  let min = nums[0];
  let maxProduct = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const temp = max;
    max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
    min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);
    maxProduct = Math.max(maxProduct, max);
  }
  return maxProduct;
};

function test_00152() {
  let nums = [2, 3, -2, 4]
  console.log(maxProduct(nums));
  nums = [-2, 0, -1]
  console.log(maxProduct(nums));
}

test_00152()
