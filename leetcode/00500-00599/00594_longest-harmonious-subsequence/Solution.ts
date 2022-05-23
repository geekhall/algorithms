/**
 * ID:    00594
 * Title: Longest Harmonious Subsequence
 * Difficulty: Easy
 * Description: We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
 *
 * Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
 *
 * A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.
 *
 * Example 1:
 *
 * Input: nums = [1,3,2,2,5,2,3,7] Output: 5 Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 *
 * Example 2:
 *
 * Input: nums = [1,2,3,4] Output: 2
 *
 * Example 3:
 *
 * Input: nums = [1,1,1,1] Output: 0
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 10 4
 * -10 9 <= nums[i] <= 10 9
 */
function findLHS(nums: number[]): number {
  const arr2map = (arr: number[]): Map<number, number> => {
    let m = new Map<number, number>()
    for (let i = 0; i < arr.length; i++) {
      if (m.get(arr[i]) === undefined) {
        m.set(arr[i], 1)
      } else {
        m.set(arr[i], m.get(arr[i])! + 1)
      }
    }
    return m
  }
  let m = arr2map(nums)
  let arr = [...m.keys()].sort((a, b) => a - b)
  let max = 0
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) === 1 && m.get(arr[i])! + m.get(arr[i - 1])! > max) {
      max = m.get(arr[i])! + m.get(arr[i - 1])!
    }
  }
  return max
};

function test_00594() {
  let nums = [1, 3, 2, 2, 5, 2, 3, 7]
  console.log(findLHS(nums));
  nums = [1, 2, 3, 4]
  console.log(findLHS(nums));
  nums = [1, 1, 1, 1]
  console.log(findLHS(nums));

}

test_00594()
