/**
 * ID:    00309
 * Title: Best Time to Buy and Sell Stock with Cooldown
 * Difficulty: Medium
 * Description: You are given an array prices where prices[i] is the price of a given stock on the i th day.
 *
 * Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
 *
 * After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 *
 * Example 1:
 *
 * Input: prices = [1,2,3,0,2] Output: 3 Explanation: transactions = [buy, sell, cooldown, buy, sell]
 *
 * Example 2:
 *
 * Input: prices = [1] Output: 0
 *
 * Constraints:
 *
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
 */
function maxProfit(prices: number[]): number {
  let sell = 0, prev_sell = 0, buy = Number.MIN_SAFE_INTEGER, prev_buy;
  for (let price of prices) {
    prev_buy = buy;
    buy = Math.max(prev_sell - price, prev_buy);
    prev_sell = sell;
    sell = Math.max(prev_buy + price, prev_sell);
    // console.log(`price: ${price}, prev_buy: ${prev_buy}, buy: ${buy}, prev_sell: ${prev_sell}, sell: ${sell}`);
    // price: 1, prev_buy: -9007199254740991, buy: -1, prev_sell: 0, sell: 0
    // price: 2, prev_buy: -1, buy: -1, prev_sell: 0, sell: 1
    // price: 3, prev_buy: -1, buy: -1, prev_sell: 1, sell: 2
    // price: 0, prev_buy: -1, buy: 1, prev_sell: 2, sell: 2
    // price: 2, prev_buy: 1, buy: 1, prev_sell: 2, sell: 3
  }
  return sell;
};

function test_00309() {
  let prices = [1, 2, 3, 0, 2]
  console.log(maxProfit(prices));
  prices = [2, 1, 2, 0, 1]
  console.log(maxProfit(prices));
}

test_00309()
