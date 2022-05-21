/**
 * ID:    00303
 * Title: Range Sum Query - Immutable
 * Difficulty: Easy
 * Description: Given an integer array nums, handle multiple queries of the following type:
 *
 * Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
 *
 * Implement the NumArray class:
 *
 * NumArray(int[] nums) Initializes the object with the integer array nums.
 * int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 *
 * Example 1:
 *
 * Input ["NumArray", "sumRange", "sumRange", "sumRange"] [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]] Output [null, 1, -1, -3] Explanation NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]); numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1 numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1 numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 4
 * -10 5 <= nums[i] <= 10 5
 * 0 <= left <= right < nums.length
 * At most 10 4 calls will be made to sumRange.
 */
class NumArray {
  nums: number[]
  constructor(nums: number[]) {
    this.nums = nums === undefined ? new Array() : nums
  }

  sumRange(left: number, right: number): number {
    let res = 0
    for (let i = left; i <= right; i++) {
      res += this.nums[i]
    }
    return res
  }
}
function test_00303() {
  let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
  console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
  console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
  console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
}

test_00303()
