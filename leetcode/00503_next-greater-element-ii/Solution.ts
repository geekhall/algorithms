/**
 * ID:    00503
 * Title: Next Greater Element II
 * Difficulty: Medium
 * Description: Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.
 *
 * The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.
 *
 * Example 1:
 *
 * Input: nums = [1,2,1] Output: [2,-1,2] Explanation: The first 1's next greater number is 2; The number 2 can't find next greater number. The second 1's next greater number needs to search circularly, which is also 2.
 *
 * Example 2:
 *
 * Input: nums = [1,2,3,4,3] Output: [2,3,4,-1,4]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 4
 * -10 9 <= nums[i] <= 10 9
 */
function nextGreaterElements1(nums: number[]): number[] {
  let n = nums.length
  let res = new Array(n).fill(-1)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n + i + 1; j++) {
      if (nums[j % n] > nums[i]) {
        res[i] = nums[j % n]
        break
      }
    }
  }
  return res
};

// use stack
function nextGreaterElements(nums: number[]): number[] {
  let n = nums.length
  let res = new Array(n).fill(-1)
  let stack: number[] = []
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i % n]) {
      stack.pop()
    }
    res[i % n] = stack.length === 0 ? -1 : nums[stack[stack.length - 1]]
    stack.push(i % n)
  }
  return res
};
function test_00503() {
  let nums = [1, 2, 3, 4, 3]
  console.log(nextGreaterElements(nums));

}

test_00503()
