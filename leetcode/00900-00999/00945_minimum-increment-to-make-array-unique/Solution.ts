/**
 * ID:    00945
 * Title: Minimum Increment to Make Array Unique
 * Difficulty: Medium
 * Description: You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
 *
 * Return the minimum number of moves to make every value in nums unique.
 *
 * Example 1:
 *
 * Input: nums = [1,2,2] Output: 1 Explanation: After 1 move, the array could be [1, 2, 3].
 *
 * Example 2:
 *
 * Input: nums = [3,2,1,2,1,7] Output: 6 Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7]. It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * 0 <= nums[i] <= 10 5
 */
// time limit exceeded
function minIncrementForUnique1(nums: number[]): number {
  let res = 0
  let set = new Set()
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      let cur = nums[i]
      while (set.has(cur)) {
        cur++
        res++
      }
      set.add(cur)
    } else {
      set.add(nums[i])
    }
  }
  return res
};
function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let res = 0, need = 0;
  for (let n of nums) {
    res += Math.max(need - n, 0);
    need = Math.max(n, need) + 1;
    console.log("res:", res, "need:", need, "n:", n)
  }
  return res;
};

function test_00945() {
  let nums = [1, 2, 2]
  console.log(minIncrementForUnique(nums))
  nums = [3, 2, 1, 2, 1, 7]
  console.log(minIncrementForUnique(nums))
}

test_00945()
