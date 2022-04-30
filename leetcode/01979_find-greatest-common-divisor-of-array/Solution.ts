/**
 * ID:    01979
 * Title: Find Greatest Common Divisor of Array
 * Difficulty: Easy
 * Description: Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
 *
 * The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
 *
 * Example 1:
 *
 * Input: nums = [2,5,6,9,10] Output: 2 Explanation: The smallest number in nums is 2. The largest number in nums is 10. The greatest common divisor of 2 and 10 is 2.
 *
 * Example 2:
 *
 * Input: nums = [7,5,6,8,3] Output: 1 Explanation: The smallest number in nums is 3. The largest number in nums is 8. The greatest common divisor of 3 and 8 is 1.
 *
 * Example 3:
 *
 * Input: nums = [3,3] Output: 3 Explanation: The smallest number in nums is 3. The largest number in nums is 3. The greatest common divisor of 3 and 3 is 3.
 *
 * Constraints:
 *
 * 2 <= nums.length <= 1000
 * 1 <= nums[i] <= 1000
 */
// leetcode returns compile error . don't know why.
// Line 29: Char 19: error TS2304: Cannot find name 'commonChars'.
function findGCD(nums: number[]): number {
  let nums_min = Number.MAX_VALUE
  let nums_max = Number.MIN_VALUE

  nums.forEach((v, i) => {
    if (v < nums_min)
      nums_min = v
    if (v > nums_max)
      nums_max = v
  })

  return gcd(nums_max, nums_min)
};

function gcd(a: number, b: number): number {
  if (b === 0)
    return a
  return gcd(b, a % b)
}

function test_01979() {
  let nums = [2, 5, 6, 9, 10]
  console.log(findGCD(nums));

  nums = [7, 5, 6, 8, 3]
  console.log(findGCD(nums));

  nums = [3, 3]
  console.log(findGCD(nums));
}

test_01979()
