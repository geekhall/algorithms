/**
 * ID:    00189
 * Title: Rotate Array
 * Difficulty: Medium
 * Description: Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4,5,6,7], k = 3 Output: [5,6,7,1,2,3,4] Explanation: rotate 1 steps to the right: [7,1,2,3,4,5,6] rotate 2 steps to the right: [6,7,1,2,3,4,5] rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 * Example 2:
 *
 * Input: nums = [-1,-100,3,99], k = 2 Output: [3,99,-1,-100] Explanation: rotate 1 steps to the right: [99,-1,-100,3] rotate 2 steps to the right: [3,99,-1,-100]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * -2 31 <= nums[i] <= 2 31 - 1
 * 0 <= k <= 10 5
 *
 * Follow up:
 *
 * Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 */
// time limit over
function rotate1(nums: number[], k: number): void {
  let n = nums.length
  let temp = 0
  while (k > 0) {
    temp = nums[n - 1]
    for (let i = n - 1; i > 0; i--) {
      nums[i] = nums[i - 1]
    }
    nums[0] = temp
    k--
  }
};


function rotate(nums: number[], k: number): void {
  const reverse = (nums: number[], start: number, end: number) => {
    let left = start, right = end
    while (left <= right) {
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
      right--
    }
  }
  let n = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, n - 1)
  reverse(nums, n, nums.length - 1)
}
function test_00189() {
  let nums = [1, 2, 3, 4, 5, 6, 7], k = 3
  rotate(nums, k);
  console.log(nums);
}

test_00189()
