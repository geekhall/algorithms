/**
 * ID:    00611
 * Title: Valid Triangle Number
 * Difficulty: Medium
 * Description: Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
 *
 * Example 1:
 *
 * Input: nums = [2,2,3,4] Output: 3 Explanation: Valid combinations are: 2,3,4 (using the first 2) 2,3,4 (using the second 2) 2,2,3
 *
 * Example 2:
 *
 * Input: nums = [4,2,3,4] Output: 4
 *
 * Constraints:
 *
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 1000
 */
function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] > nums[k]) cnt++;
      }
    }
  }
  return cnt;
};

function test_00611() {
  let nums = [2, 2, 3, 4]
  console.log(triangleNumber(nums));
  nums = [4, 2, 3, 4]
  console.log(triangleNumber(nums));
}

test_00611()
