/**
 * ID:    01480
 * Title: Running Sum of 1d Array
 * Difficulty: Easy
 * Description: Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4] Output: [1,3,6,10] Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * Example 2:
 *
 * Input: nums = [1,1,1,1,1] Output: [1,2,3,4,5] Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 *
 * Example 3:
 *
 * Input: nums = [3,1,2,10,1] Output: [3,4,6,16,17]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 */
function runningSum(nums: number[]): number[] {
  let n = nums.length
  if (n === 0)
    return []
  let res: number[] = new Array(n).fill(0)
  res[0] = nums[0]
  for (let i = 1; i < res.length; i++) {
    res[i] = nums[i] + res[i - 1]
  }
  return res
};

function test_01480() {
  let nums = [1, 2, 3, 4]
  console.log(runningSum(nums));
}

test_01480()
