# 00121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## 题目大意

买卖股票的最佳时机

给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

## Example 1

```txt
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

## Example 2

```txt
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

## Constraints

```txt
1 <= prices.length <= 105
0 <= prices[i] <= 104
```

## Solution 1

暴力解法：O($N^2$)  Over time limit

### Go

```go
func maxProfit1(prices []int) int {
 if len(prices) < 2 {
  return 0
 }
 var profit int
 if prices[0] < prices[1] {
  profit = prices[1] - prices[0]
 } else {
  profit = 0
 }

 for i := 0; i < len(prices)-1; i++ {
  for j := i + 1; j < len(prices); j++ {
   if prices[j]-prices[i] > profit {
    profit = prices[j] - prices[i]
   }
  }
 }
 return profit
}
```

## Solution 2

DP

```go
func maxProfit2(prices []int) int {
 if len(prices) < 1 {
  return 0
 }
 min, maxProfit := prices[0], 0
 for i := 1; i < len(prices); i++ {
  if prices[i]-min > maxProfit {
   maxProfit = prices[i] - min
  }
  if prices[i] < min {
   min = prices[i]
  }
 }
 return maxProfit
}
```

## Solution 3

单调栈

单调栈（单调栈要求栈中的元素是单调递增或者单调递减的。）

单调栈适合的题目是求解下一个大于 xxx或者下一个小于 xxx这种题目。

关联题目：394, 946, 1381

```go
func maxProfit(prices []int) int {
 if len(prices) == 0 {
  return 0
 }
 stack, res := []int{prices[0]}, 0
 for i := 1; i < len(prices); i++ {
  if prices[i] > stack[len(stack)-1] {
   stack = append(stack, prices[i])
  } else {
   index := len(stack) - 1
   for ; index >= 0; index-- {
    if stack[index] < prices[i] {
     break
    }
   }
   stack = stack[:index+1]
   stack = append(stack, prices[i])
  }
  res = max(res, stack[len(stack)-1]-stack[0])
 }
 return res
}
func max(a int, b int) int {
 if a > b {
  return a
 }
 return b
}
```
