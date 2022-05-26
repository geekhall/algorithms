/**
 * ID:    01018
 * Title: Binary Prefix Divisible By 5
 * Difficulty: Easy
 * Description: You are given a binary array nums (0-indexed).
 *
 * We define x i as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).
 *
 * For example, if nums = [1,0,1], then x 0 = 1, x 1 = 2, and x 2 = 5.
 *
 * Return an array of booleans answer where answer[i] is true if x i is divisible by 5.
 *
 * Example 1:
 *
 * Input: nums = [0,1,1] Output: [true,false,false] Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10. Only the first number is divisible by 5, so answer[0] is true.
 *
 * Example 2:
 *
 * Input: nums = [1,1,1] Output: [false,false,false]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * nums[i] is either 0 or 1.
 */
function prefixesDivBy5(nums: number[]): boolean[] {
  let res = new Array<boolean>()
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    cur = (cur << 1) + nums[i]
    res.push(cur % 5 === 0 ? true : false)
  }
  return res
};

function test_01018() {
  let nums = [0, 1, 1]
  console.log(prefixesDivBy5(nums));
  nums = [1, 1, 1]
  console.log(prefixesDivBy5(nums));

}

test_01018()
