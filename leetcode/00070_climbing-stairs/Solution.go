package main

import (
	"fmt"
	"math"
)

// Solution 1
// 递归，不好，OverTimeLimit
func climbStairs(n int) int {
	if n <= 2 {
		return n
	}
	return climbStairs(n-1) + climbStairs(n-2)
}

// Solution 2
// DP
// 因为最后一步可以上一级或者上两级台阶，
// 所以，不难得出：f(n) = f(n-1) + f(n-2)
// 类比 000509 斐波那契数列的所有解法本题均适用
func climbStairs2(n int) int {
	if n == 0 {
		return 0
	}
	if n == 1 {
		return 1
	}
	p := 1
	q := 1
	r := 2
	for i := 2; i < n; i++ {
		p = q
		q = r
		r = p + q
	}
	return r
}

// Solution 3
// 矩阵快速幂
// 以上的方法适用于 nn 比较小的情况，在 nn 变大之后，O(n)O(n) 的时间复杂度会让这个算法看起来有些捉襟见肘。
// 我们可以用「矩阵快速幂」的方法来优化这个过程。

// Solution 4
func climbStairs4(n int) int {
	sqrt5 := math.Sqrt(5)
	pow1 := math.Pow((1+sqrt5)/2, float64(n+1))
	pow2 := math.Pow((1-sqrt5)/2, float64(n+1))
	return int(math.Round((pow1 - pow2) / sqrt5))
}

func main() {
	res := climbStairs(5)
	fmt.Println(res)
}
