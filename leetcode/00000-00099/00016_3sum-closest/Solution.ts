/**
 * ID:    00016
 * Title: 3Sum Closest
 * Difficulty: Medium
 * Description: Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 *
 * Return the sum of the three integers.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Example 1:
 *
 * Input: nums = [-1,2,1,-4], target = 1 Output: 2 Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * Example 2:
 *
 * Input: nums = [0,0,0], target = 1 Output: 0
 *
 * Constraints:
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10 4 <= target <= 10 4
 */
/**
* Given an integer array nums of length n and an integer target,
* find three integers in nums such that the sum is closest to target.
* Return the sum of the three integers.
* You may assume that each input would have exactly one solution.
* @param nums
* @param target
* @return the sum of the three integers
*/
function threeSumClosest(nums: number[], target: number): number {
  let res = 0
  if (nums.length < 2)
    return 0

  nums.sort()
  let min = Number.MAX_VALUE
  let right = nums.length - 1
  for (let first = 0; first < nums.length - 1; first++) {
    for (let left = first + 1; left < nums.length - 1; left++) {
      for (right = nums.length - 1; left < right; right--) {
        if (Math.abs(nums[first] + nums[left] + nums[right] - target) < min) {
          min = Math.abs(nums[first] + nums[left] + nums[right] - target)
          res = nums[first] + nums[left] + nums[right]
        }
      }
    }
  }
  return res
}

function test_00016() {
  let arr: number[] = [-1, 2, 1, -4]
  console.log(threeSumClosest(arr, 1));

  let arr1: number[] = [0, 0, 0]
  console.log(threeSumClosest(arr1, 1));
}

test_00016()
