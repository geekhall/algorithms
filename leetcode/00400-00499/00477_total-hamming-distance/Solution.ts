/**
 * ID:    00477
 * Title: Total Hamming Distance
 * Difficulty: Medium
 * Description: The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 *
 * Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.
 *
 * Example 1:
 *
 * Input: nums = [4,14,2] Output: 6 Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just showing the four bits relevant in this case). The answer will be: HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
 *
 * Example 2:
 *
 * Input: nums = [4,14,4] Output: 4
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 4
 * 0 <= nums[i] <= 10 9
 * The answer for the given input will fit in a 32-bit integer.
 */
function totalHammingDistance(nums: number[]): number {
  let res = 0
  // save the sum count of bit-1 in nums in position i
  let ones: number[] = new Array(32).fill(0)
  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < nums.length; j++) {
      ones[i] += (nums[j] >> i) & 1
    }
  }

  for (let i = 0; i < 32; i++) {
    res += ones[i] * (nums.length - ones[i])
  }
  return res
};

function test_00477() {
  let nums = [4, 14, 2]
  console.log(totalHammingDistance(nums));
  nums = [4, 14, 4]
  console.log(totalHammingDistance(nums));

}

test_00477()
