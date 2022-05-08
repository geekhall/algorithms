/**
 * ID:    01295
 * Title: Find Numbers with Even Number of Digits
 * Difficulty: Easy
 * Description: Given an array nums of integers, return how many of them contain an even number of digits.
 *
 * Example 1:
 *
 * Input: nums = [12,345,2,6,7896] Output: 2 Explanation: 12 contains 2 digits (even number of digits). 345 contains 3 digits (odd number of digits). 2 contains 1 digit (odd number of digits). 6 contains 1 digit (odd number of digits). 7896 contains 4 digits (even number of digits). Therefore only 12 and 7896 contain an even number of digits.
 *
 * Example 2:
 *
 * Input: nums = [555,901,482,1771] Output: 1 Explanation: Only 1771 contains an even number of digits.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10 5
 */
function findNumbers(nums: number[]): number {
  let res = 0
  nums.forEach(v => {
    if (!(v.toString().length % 2))
      res++
  })
  return res
};

function findNumbers1(nums: number[]): number {
  let res = 0
  nums.forEach(v => {
    if (!(((Math.log10((v ^ (v >> 31)) - (v >> 31)) | 0) + 1) % 2))
      res++
  })
  return res
};

function getDigits(n: number): number {
  return (Math.log10((n ^ (n >> 31)) - (n >> 31)) | 0) + 1
}

function test_01295() {
  let nums = [12, 345, 2, 6, 7896]
  console.log(findNumbers(nums));
}

test_01295()
