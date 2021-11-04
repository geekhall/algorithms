package main

import "fmt"

// Solution 1
// 暴力解法：O($N^2$)  Over time limit
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

// Solution 2
// DP
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

// Solution 3
// 单调栈（单调栈要求栈中的元素是单调递增或者单调递减的。）
// 单调栈适合的题目是求解下一个大于 xxx或者下一个小于 xxx这种题目。
// 关联题目：394, 946, 1381
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
func main() {
	test_data := [][]int{
		{7, 1, 5, 3, 6, 4},
		{7, 6, 4, 3, 1},
		{1, 2},
		{3, 3},
		{2, 4, 1},
	}
	for _, v := range test_data {
		res := maxProfit(v)
		fmt.Println(res)
	}

}
