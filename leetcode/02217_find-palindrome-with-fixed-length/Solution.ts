// Given an integer array nums of size n,
// return the number with the value closest to 0 in nums.
// If there are multiple answers,
// return the number with the largest value.

// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.

function findClosestNumber(nums: number[]): number {
  if (nums == null || nums.length == 0)
    return 0
  let min = Number.MAX_VALUE
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) < min) {
      min = Math.abs(nums[i])
    }
  }
  if (nums.indexOf(min) !== -1)
    return min
  return -min
};
function test_02239() {
  let nums = [-4, -2, -1, 4, 8]
  console.log(findClosestNumber(nums));
}
test_02239()
