/**
 * ID:    00322
 * Title: Coin Change
 * Difficulty: Medium
 * Description: You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Example 1:
 *
 * Input: coins = [1,2,5], amount = 11 Output: 3 Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 *
 * Input: coins = [2], amount = 3 Output: -1
 *
 * Example 3:
 *
 * Input: coins = [1], amount = 0 Output: 0
 *
 * Constraints:
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2 31 - 1
 * 0 <= amount <= 10 4
 */
function coinChange(coins: number[], amount: number): number {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

function test_00322() {
  let coins = [1, 2, 5], amount = 11
  console.log(coinChange(coins, amount))
  coins = [2], amount = 3
  console.log(coinChange(coins, amount))
  coins = [1], amount = 0
  console.log(coinChange(coins, amount))
}

test_00322()
