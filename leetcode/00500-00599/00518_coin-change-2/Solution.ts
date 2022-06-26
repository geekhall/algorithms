/**
 * ID:    00518
 * Title: Coin Change 2
 * Difficulty: Medium
 * Description: You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 *
 * Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * The answer is guaranteed to fit into a signed 32-bit integer.
 *
 * Example 1:
 *
 * Input: amount = 5, coins = [1,2,5] Output: 4 Explanation: there are four ways to make up the amount: 5=5 5=2+2+1 5=2+1+1+1 5=1+1+1+1+1
 *
 * Example 2:
 *
 * Input: amount = 3, coins = [2] Output: 0 Explanation: the amount of 3 cannot be made up just with coins of 2.
 *
 * Example 3:
 *
 * Input: amount = 10, coins = [10] Output: 1
 *
 * Constraints:
 *
 * 1 <= coins.length <= 300
 * 1 <= coins[i] <= 5000
 * All the values of coins are unique.
 * 0 <= amount <= 5000
 */
// recursive BF solution, time limit exceeded
function change1(amount: number, coins: number[]): number {
  const helper = (amount: number, index: number): number => {
    if (amount === 0) {
      return 1
    }
    if (amount < 0 || index >= coins.length) {
      return 0
    }
    return helper(amount - coins[index], index) + helper(amount, index + 1)
  }

  return helper(amount, 0)
};

function change(amount: number, coins: number[]): number {
  // dp[i] = the number of ways to make up amount i
  // dp[i][j] = the number of ways to make up amount i with coin j
  let dp = Array.from({ length: amount + 1 }, () => Array.from({ length: coins.length + 1 }, () => 0));
  for (let col = 0; col < coins.length; col++) {
    dp[0][col] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = coins.length - 1; j >= 0; j--) {
      if (i >= coins[j]) {
        dp[i][j] = dp[i - coins[j]][j] + dp[i][j + 1];
      } else {
        dp[i][j] = dp[i][j + 1];
      }
    }
  }
  return dp[amount][0]
}
function test_00518() {
  let amount = 5, coins = [1, 2, 5]
  console.log(change(amount, coins))
  amount = 3, coins = [2]
  console.log(change(amount, coins))
  amount = 10, coins = [10]
  console.log(change(amount, coins))

}

test_00518()
