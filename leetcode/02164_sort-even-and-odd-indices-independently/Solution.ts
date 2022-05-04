/**
 * ID:    02164
 * Title: Sort Even and Odd Indices Independently
 * Difficulty: Easy
 * Description: You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:
 *
 * Sort the values at odd indices of nums in non-increasing order.
 *
 * For example, if nums = [4, 1,2, 3 ] before this step, it becomes [4, 3,2, 1 ] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
 *
 * Sort the values at even indices of nums in non-decreasing order.
 *
 * For example, if nums = [ 4,1, 2,3] before this step, it becomes [ 2,1, 4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
 *
 * Return the array formed after rearranging the values of nums.
 *
 * Example 1:
 *
 * Input: nums = [4,1,2,3] Output: [2,3,4,1] Explanation: First, we sort the values present at odd indices (1 and 3) in non-increasing order. So, nums changes from [4, 1,2, 3 ] to [4, 3,2, 1 ]. Next, we sort the values present at even indices (0 and 2) in non-decreasing order. So, nums changes from [ 4,1, 2,3] to [ 2,3, 4,1]. Thus, the array formed after rearranging the values is [2,3,4,1].
 *
 * Example 2:
 *
 * Input: nums = [2,1] Output: [2,1] Explanation: Since there is exactly one odd index and one even index, no rearrangement of values takes place. The resultant array formed is [2,1], which is the same as the initial array.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
// BF
function sortEvenOdd1(nums: number[]): number[] {
  let res = []
  let oddArr = nums.filter((_, i) => i % 2).sort((a, b) => b - a)
  let evenArr = nums.filter((_, i) => !(i % 2)).sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i % 2) { // odd
      res[i] = oddArr[Math.floor(i / 2)]
    } else { // even
      res[i] = evenArr[Math.floor(i / 2)]
    }
  }
  return res
};

// shell sort
function sortEvenOdd(nums: number[]): number[] {
  let temp
  let n = nums.length

  for (let i = 2; i < n; i++) {
    temp = nums[i]
    let j = i - 2
    if (i % 2) { // odd indices with non-increasing order
      while (j >= 0 && nums[j] < temp) {
        nums[j + 2] = nums[j]
        j -= 2
      }
    } else {// even indices with non-decreasing order
      while (j >= 0 && nums[j] > temp) {
        nums[j + 2] = nums[j]
        j -= 2
      }
    }
    nums[j + 2] = temp
  }

  return nums
}

function test_02164() {
  let nums = [4, 1, 2, 3]
  console.log(sortEvenOdd(nums));
  nums = [36, 45, 32, 31, 15, 41, 9, 46, 36, 6, 15, 16, 33, 26, 27, 31, 44, 34]
  // expected [9,46,15,45,15,41,27,34,32,31,33,31,36,26,36,16,44,6]
  console.log(sortEvenOdd(nums));

}

test_02164()
