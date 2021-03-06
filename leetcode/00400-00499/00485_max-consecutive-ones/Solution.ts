/**
 * ID:    00485
 * Title: Max Consecutive Ones
 * Difficulty: Easy
 * Description: Given a binary array nums, return the maximum number of consecutive 1 's in the array.
 *
 * Example 1:
 *
 * Input: nums = [1,1,0,1,1,1] Output: 3 Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 *
 * Example 2:
 *
 * Input: nums = [1,0,1,1,0,1] Output: 2
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * nums[i] is either 0 or 1.
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let arr = nums.join('').split(/0+/g)
  let max = 0
  arr.forEach(v => {
    if (v.length > max)
      max = v.length
  })

  return max
};

function test_00485() {
  let nums = [1, 1, 0, 1, 1, 1]
  console.log(findMaxConsecutiveOnes(nums));
  nums = [1, 0, 1, 1, 0, 1]
  console.log(findMaxConsecutiveOnes(nums));
}

test_00485()
