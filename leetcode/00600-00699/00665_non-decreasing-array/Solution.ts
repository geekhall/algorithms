/**
 * ID:    00665
 * Title: Non-decreasing Array
 * Difficulty: Medium
 * Description: Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
 *
 * We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
 *
 * Example 1:
 *
 * Input: nums = [4,2,3] Output: true Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
 *
 * Example 2:
 *
 * Input: nums = [4,2,1] Output: false Explanation: You can't get a non-decreasing array by modify at most one element.
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 10 4
 * -10 5 <= nums[i] <= 10 5
 */
// Greedy
function checkPossibility(nums: number[]): boolean {
  let cnt = 0;                                                                   //the number of changes
  for (let i = 1; i < nums.length && cnt <= 1; i++) {
    if (nums[i - 1] > nums[i]) {
      cnt++;
      if (i - 2 < 0 || nums[i - 2] <= nums[i]) nums[i - 1] = nums[i];            //modify nums[i-1] of a priority
      else nums[i] = nums[i - 1];                                                //have to modify nums[i]
    }
  }
  return cnt <= 1;
};

function test_00665() {
  let nums = [4, 2, 3]
  console.log(checkPossibility(nums));
  nums = [4, 2, 1]
  console.log(checkPossibility(nums));
  nums = [3, 4, 2, 3]
  console.log(checkPossibility(nums)); // false
}

test_00665()
