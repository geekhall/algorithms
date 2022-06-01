/**
 * ID:    02099
 * Title: Find Subsequence of Length K With the Largest Sum
 * Difficulty: Easy
 * Description: You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.
 *
 * Return any such subsequence as an integer array of length k.
 *
 * A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 *
 * Example 1:
 *
 * Input: nums = [2,1,3,3], k = 2 Output: [3,3] Explanation: The subsequence has the largest sum of 3 + 3 = 6.
 *
 * Example 2:
 *
 * Input: nums = [-1,-2,3,4], k = 3 Output: [-1,3,4] Explanation: The subsequence has the largest sum of -1 + 3 + 4 = 6.
 *
 * Example 3:
 *
 * Input: nums = [3,4,3,3], k = 2 Output: [3,4] Explanation: The subsequence has the largest sum of 3 + 4 = 7. Another possible subsequence is [4, 3].
 *
 * Constraints:
 *
 * 1 <= nums.length <= 1000
 * -10 5 <= nums[i] <= 10 5
 * 1 <= k <= nums.length
 */
function maxSubsequence(nums: number[], k: number): number[] {
  let res: number[] = []
  let m = new Map()
  for (let i = 0; i < nums.length; i++) {
    m.set(i, nums[i])
  }
  let newMap = new Map([...m.entries()].sort((a, b) => b[1] - a[1]))
  let keys = [...newMap.keys()]
  for (let i = 0; i < k; i++) {
    res.push(keys[i])
  }

  res.sort((a, b) => a - b)
  return res.map(i => newMap.get(i))
};

function test_02099() {
  let nums = [2, 1, 3, 3]
  let k = 2
  console.log(maxSubsequence(nums, k));
  nums = [-1, -2, 3, 4]
  k = 3
  console.log(maxSubsequence(nums, k));
  nums = [3, 4, 3, 3]
  k = 2
  console.log(maxSubsequence(nums, k));
}

test_02099()
