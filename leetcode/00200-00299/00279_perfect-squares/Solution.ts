/**
 * ID:    00279
 * Title: Perfect Squares
 * Difficulty: Medium
 * Description: Given an integer n, return the least number of perfect square numbers that sum to n.
 *
 * A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 *
 * Example 1:
 *
 * Input: n = 12 Output: 3 Explanation: 12 = 4 + 4 + 4.
 *
 * Example 2:
 *
 * Input: n = 13 Output: 2 Explanation: 13 = 4 + 9.
 *
 * Constraints:
 *
 * 1 <= n <= 10 4
 */
// dp
function numSquares(n: number): number {
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let min = Infinity;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j] + 1);
    }
    dp[i] = min;
  }
  return dp[n];
};

function test_00279() {
  let n = 12
  console.log(numSquares(n));
  n = 13
  console.log(numSquares(n));

}

test_00279()
