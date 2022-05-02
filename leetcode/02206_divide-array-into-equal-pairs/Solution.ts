/**
 * ID:    02206
 * Title: Divide Array Into Equal Pairs
 * Difficulty: Easy
 * Description: You are given an integer array nums consisting of 2 * n integers.
 *
 * You need to divide nums into n pairs such that:
 *
 * Each element belongs to exactly one pair.
 * The elements present in a pair are equal.
 *
 * Return true if nums can be divided into n pairs, otherwise return false.
 *
 * Example 1:
 *
 * Input: nums = [3,2,3,2,2,2] Output: true Explanation: There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs. If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.
 *
 * Example 2:
 *
 * Input: nums = [1,2,3,4] Output: false Explanation: There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.
 *
 * Constraints:
 *
 * nums.length == 2 * n
 * 1 <= n <= 500
 * 1 <= nums[i] <= 500
 */
function divideArray(nums: number[]): boolean {
  // xor is wrong, because 1 ^ 2 ^ 3 is also zero
  // return !nums.reduce((pre, cur) => pre ^ cur)
  let m = new Map()
  nums.forEach(v => {
    if (m.has(v))
      m.set(v, m.get(v) + 1)
    else
      m.set(v, 1)
  })

  return !Array.from(m.values()).some((v) => {
    return v % 2
  })
}

function test_02206() {
  let nums = [3, 2, 3, 2, 2, 2]
  console.log(divideArray(nums));
  nums = [1, 2, 3, 4]
  console.log(divideArray(nums));
  nums = [9, 9, 19, 10, 9, 12, 2, 12, 3, 3, 11, 5, 8, 4, 13, 6, 2, 11, 9, 19, 11, 15, 9, 17, 15, 12, 5, 14, 12, 16, 18, 16, 10, 3, 8, 9, 16, 20, 2, 4, 16, 12, 11, 14, 20, 16, 2, 18, 17, 20, 3, 13, 16, 17, 1, 1, 11, 20, 20, 4]
  console.log(divideArray(nums));

}

test_02206()
