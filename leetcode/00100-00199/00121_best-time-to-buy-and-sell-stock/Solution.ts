/**
 * ID:    00121
 * Title: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * Description: You are given an array prices where prices[i] is the price of a given stock on the i th day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4] Output: 5 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * Example 2:
 *
 * Input: prices = [7,6,4,3,1] Output: 0 Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * Constraints:
 *
 * 1 <= prices.length <= 10 5
 * 0 <= prices[i] <= 10 4
 */
function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0
  }
  let stack = new Array<number>()
  stack.push(prices[0])
  let maxProfit = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > stack[stack.length - 1]) {
      stack.push(prices[i])
    } else {
      let index = stack.length - 1
      for (; index >= 0; index--) {
        if (stack[index] < prices[i]) {
          break
        }
      }
      if (index >= 0) {
        maxProfit += stack[index] - min
        min = stack[index]
        stack = stack.slice(0, index + 1)
        stack.push(prices[i])
      }

    }
    maxProfit = Math.max(maxProfit, stack[stack.length - 1] - stack[0])
  }

  return maxProfit
};
function test_00121() {
  let prices = [7, 1, 5, 3, 6, 4]
  console.log(maxProfit(prices));

}

test_00121()
