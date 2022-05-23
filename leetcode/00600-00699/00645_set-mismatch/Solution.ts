/**
 * ID:    00645
 * Title: Set Mismatch
 * Difficulty: Easy
 * Description: You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
 *
 * You are given an integer array nums representing the data status of this set after the error.
 *
 * Find the number that occurs twice and the number that is missing and return them in the form of an array.
 *
 * Example 1:
 *
 * Input: nums = [1,2,2,4] Output: [2,3]
 *
 * Example 2:
 *
 * Input: nums = [1,1] Output: [1,2]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 10 4
 * 1 <= nums[i] <= 10 4
 */
function findErrorNums(nums: number[]): number[] {
  nums.sort((a, b) => a - b)
  let res: number[] = new Array(2)
  let sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1])
      res[0] = nums[i]
    sum += nums[i]
  }
  let realSum = (1 + nums.length) * nums.length / 2
  res[1] = realSum - sum + res[0]
  return res
};

function test_00645() {
  let nums = [1, 2, 2, 4]
  console.log(findErrorNums(nums));
  nums = [1, 1]
  console.log(findErrorNums(nums));
}

test_00645()
