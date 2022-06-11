/**
 * ID:    01658
 * Title: Minimum Operations to Reduce X to Zero
 * Difficulty: Medium
 * Description: You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.
 *
 * Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.
 *
 * Example 1:
 *
 * Input: nums = [1,1,4,2,3], x = 5 Output: 2 Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
 *
 * Example 2:
 *
 * Input: nums = [5,6,7,8,9], x = 4 Output: -1
 *
 * Example 3:
 *
 * Input: nums = [3,2,20,1,1,3], x = 10 Output: 5 Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * 1 <= nums[i] <= 10 4
 * 1 <= x <= 10 9
 */
function minOperations(nums: number[], x: number): number {
  let sum = nums.reduce((pre, cur) => pre + cur)
  let maxLength = -1
  let currSum = 0
  for (let l = 0, r = 0; r < nums.length; r++) {
    currSum += nums[r]
    while (l <= r && currSum > sum - x) {
      currSum -= nums[l]
      l++
    }
    if (currSum === sum - x) {
      maxLength = Math.max(maxLength, r - l + 1)
    }
  }
  return maxLength === -1 ? -1 : nums.length - maxLength
}
// BF solution, time limit exceeded
function minOperations1(nums: number[], x: number): number {

  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    let sum = i === 0 ? 0 : nums.slice(0, i).reduce((pre, cur) => pre + cur);
    let op = i
    if (sum > x) {
      break
    }
    if (sum === x) {
      min = Math.min(min, op)
    }
    for (let j = nums.length - 1; j >= i; j--) {
      sum += nums[j]
      op++

      if (sum === x) {
        min = Math.min(min, op)
      }
      if (sum > x) {
        break
      }
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? -1 : min
};

function test_01658() {
  let nums = [1, 1, 4, 2, 3], x = 5
  console.log(minOperations(nums, x));
  nums = [5, 6, 7, 8, 9], x = 4
  console.log(minOperations(nums, x));
  nums = [3, 2, 20, 1, 1, 3], x = 10
  console.log(minOperations(nums, x));
  nums = [1, 1], x = 3
  console.log(minOperations(nums, x));  // expect -1
  nums = [8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309]
  x = 134365
  console.log(minOperations(nums, x));  // expect 16
}

test_01658()
