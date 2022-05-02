/**
 * ID:    02148
 * Title: Count Elements With Strictly Smaller and Greater Elements
 * Difficulty: Easy
 * Description: Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.
 *
 * Example 1:
 *
 * Input: nums = [11,7,2,15] Output: 2 Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it. Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it. In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
 *
 * Example 2:
 *
 * Input: nums = [-3,3,3,90] Output: 2 Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it. Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * -10 5 <= nums[i] <= 10 5
 */
function countElements(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let n = nums.length
  let res = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[0] && nums[i] < nums[n - 1])
      res++
  }

  return res
};

function test_02148() {
  let nums = [11, 7, 2, 15]
  console.log(countElements(nums));

}

test_02148()
