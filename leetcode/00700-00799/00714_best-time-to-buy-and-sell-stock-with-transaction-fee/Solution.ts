/**
 * ID:    00714
 * Title: Best Time to Buy and Sell Stock with Transaction Fee
 * Difficulty: Medium
 * Description: You are given an array prices where prices[i] is the price of a given stock on the i th day, and an integer fee representing a transaction fee.
 *
 * Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 *
 * Example 1:
 *
 * Input: prices = [1,3,2,8,4,9], fee = 2 Output: 8 Explanation: The maximum profit can be achieved by: - Buying at prices[0] = 1 - Selling at prices[3] = 8 - Buying at prices[4] = 4 - Selling at prices[5] = 9 The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 *
 * Example 2:
 *
 * Input: prices = [1,3,7,5,10,3], fee = 3 Output: 6
 *
 * Constraints:
 *
 * 1 <= prices.length <= 5 * 10 4
 * 1 <= prices[i] < 5 * 10 4
 * 0 <= fee < 5 * 10 4
 */
function maxProfit(prices: number[], fee: number): number {
  let T_ik0 = 0, T_ik1 = Number.MIN_SAFE_INTEGER

  for (let price of prices) {
    let T_ik0_old = T_ik0;
    T_ik0 = Math.max(T_ik0, T_ik1 + price);
    T_ik1 = Math.max(T_ik1, T_ik0_old - price - fee);
  }

  return T_ik0;
};

function test_00714() {
  let prices = [1, 3, 2, 8, 4, 9], fee = 2
  console.log(maxProfit(prices, fee)); // 8
  prices = [1, 3, 7, 5, 10, 3], fee = 3
  console.log(maxProfit(prices, fee)); // 6
}

test_00714()
