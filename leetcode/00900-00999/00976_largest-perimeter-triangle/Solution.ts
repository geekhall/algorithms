/**
 * ID:    00976
 * Title: Largest Perimeter Triangle
 * Difficulty: Easy
 * Description: Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
 *
 * Example 1:
 *
 * Input: nums = [2,1,2] Output: 5
 *
 * Example 2:
 *
 * Input: nums = [1,2,1] Output: 0
 *
 * Constraints:
 *
 * 3 <= nums.length <= 10 4
 * 1 <= nums[i] <= 10 6
 */
// BF, time limit exceed
function largestPerimeter1(nums: number[]): number {
  let max = 0
  nums.sort((a, b) => b - a)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] - nums[j] < nums[k] && nums[i] < nums[j] + nums[k])
          if (nums[i] + nums[j] + nums[k] > max)
            max = nums[i] + nums[j] + nums[k]
      }
    }
  }
  return max
};
function largestPerimeter(nums: number[]): number {
  let max = 0
  nums.sort((a, b) => b - a)
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] - nums[i + 1] < nums[i + 2] && nums[i + 1] + nums[i + 2] > nums[i])
      return nums[i] + nums[i + 1] + nums[i + 2]
  }
  return max
};

function test_00976() {
  let nums = [2, 1, 2]
  console.log(largestPerimeter(nums));
  nums = [1, 2, 1]
  console.log(largestPerimeter(nums));
}

test_00976()
