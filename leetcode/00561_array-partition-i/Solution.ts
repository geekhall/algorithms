/**
 * ID:    00561
 * Title: Array Partition I
 * Difficulty: Easy
 * Description: Given an integer array nums of 2n integers, group these integers into n pairs (a 1, b 1), (a 2, b 2), ..., (a n, b n) such that the sum of min(a i, b i) for all i is maximized. Return the maximized sum.
 *
 * Example 1:
 *
 * Input: nums = [1,4,3,2] Output: 4 Explanation: All possible pairings (ignoring the ordering of elements) are: 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4 So the maximum possible sum is 4.
 *
 * Example 2:
 *
 * Input: nums = [6,2,6,5,1,2] Output: 9 Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
 *
 * Constraints:
 *
 * 1 <= n <= 10 4
 * nums.length == 2 * n
 * -10 4 <= nums[i] <= 10 4
 */
function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => b - a)
  let res = 0
  nums.forEach((v, i) => {
    if (i % 2)
      res += v
  })
  return res
};

function test_00561() {
  let nums = [6, 2, 6, 5, 1, 2]
  console.log(arrayPairSum(nums));

}

test_00561()
