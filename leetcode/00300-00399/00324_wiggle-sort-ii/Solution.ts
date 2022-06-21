/**
 * ID:    00324
 * Title: Wiggle Sort II
 * Difficulty: Medium
 * Description: Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
 *
 * You may assume the input array always has a valid answer.
 *
 * Example 1:
 *
 * Input: nums = [1,5,1,1,6,4] Output: [1,6,1,5,1,4] Explanation: [1,4,1,5,1,6] is also accepted.
 *
 * Example 2:
 *
 * Input: nums = [1,3,2,2,3,1] Output: [2,3,1,3,1,2]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 5 * 10 4
 * 0 <= nums[i] <= 5000
 * It is guaranteed that there will be an answer for the given input nums.
 *
 * Follow Up: Can you do it in O(n) time and/or in-place with O(1) extra space?
 */
function wiggleSort(nums: number[]): void {
  let n = nums.length
  let mid = Math.ceil(n / 2)
  nums.sort((a, b) => a - b)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid)
  left.sort((a, b) => b - a)
  right.sort((a, b) => b - a)
  let i = 0, j = 0
  for (let k = 0; k < n; k++) {
    if (k % 2 === 0) {
      nums[k] = left[i]
      i++
    } else {
      nums[k] = right[j]
      j++
    }
  }
};


function test_00324() {
  let nums = [1, 5, 1, 1, 6, 4]
  wiggleSort(nums)
  console.log(nums)
  nums = [1, 3, 2, 2, 3, 1]
  wiggleSort(nums)
  console.log(nums) // expect [2,3,1,3,1,2]
  nums = [1, 1, 2, 1, 2, 2, 1]
  wiggleSort(nums)
  console.log(nums) // expect [1,2,1,2,1,2,1]

}

test_00324()
