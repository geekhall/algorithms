/**
 * ID:    00070
 * Title: Climbing Stairs
 * Difficulty: Easy
 * Description: You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 *
 * Input: n = 2 Output: 2 Explanation: There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps
 *
 * Example 2:
 *
 * Input: n = 3 Output: 3 Explanation: There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step
 *
 * Constraints:
 *
 * 1 <= n <= 45
 */

function climbStairs(n: number): number {
  let sqrt5 = Math.sqrt(5)
  let pow1 = Math.pow((1 + sqrt5) / 2, n + 1)
  let pow2 = Math.pow((1 - sqrt5) / 2, n + 1)
  return Math.round((pow1 - pow2) / sqrt5)
};

function test_00070() {
  let n = 2
  console.log(climbStairs(n))
}

test_00070()
