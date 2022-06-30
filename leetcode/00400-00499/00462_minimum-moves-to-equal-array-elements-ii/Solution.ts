/**
 * ID:    00462
 * Title: Minimum Moves to Equal Array Elements II
 * Difficulty: Medium
 * Description: Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
 *
 * In one move, you can increment or decrement an element of the array by 1.
 *
 * Test cases are designed so that the answer will fit in a 32-bit integer.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3] Output: 2 Explanation: Only two moves are needed (remember each move increments or decrements one element): [ 1,2,3] => [2,2, 3 ] => [2,2,2]
 *
 * Example 2:
 *
 * Input: nums = [1,10,2,9] Output: 16
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= nums.length <= 10 5
 * -10 9 <= nums[i] <= 10 9
 */
// bf
function minMoves21(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    let res = 0
    for (let n of nums) {
      res += Math.abs(nums[i] - n)
    }
    min = Math.min(min, res)
  }
  return min
};

function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let i = 0, j = nums.length - 1
  let res = 0
  while (i < j) {
    res += nums[j] - nums[i]
    i++
    j--
  }
  return res
}

function test_00462() {
  let nums = [1, 2, 3]
  console.log(minMoves2(nums))
  nums = [1, 10, 2, 9]
  console.log(minMoves2(nums))
  nums = [1, 0, 0, 8, 6]
  console.log(minMoves2(nums)) // expected: 14
}

test_00462()
