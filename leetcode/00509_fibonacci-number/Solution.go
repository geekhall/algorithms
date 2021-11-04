package main

import (
	"fmt"
	"math"
)

// Solution 1 普通递归
func fib1(n int) int {
	if n == 0 {
		return 0
	} else if n == 1 {
		return 1
	} else {
		return fib(n-1) + fib(n-2)
	}
}

// Solution2 DP
func fib2(n int) int {
	p := 0
	q := 1
	r := 1
	if n == 0 {
		return 0
	} else if n == 1 {
		return 1
	} else {
		for i := 2; i < n; i++ {
			p = q
			q = r
			r = p + q
		}
	}
	return r
}

// Solution 3
// 矩阵快速幂
// 方法一的时间复杂度是 O(n)O(n)。使用矩阵快速幂的方法可以降低时间复杂度。
type matrix [2][2]int

func multiply(a, b matrix) (c matrix) {
	for i := 0; i < 2; i++ {
		for j := 0; j < 2; j++ {
			c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j]
		}
	}
	return
}

func pow(a matrix, n int) matrix {
	ret := matrix{{1, 0}, {0, 1}}
	for ; n > 0; n >>= 1 {
		if n&1 == 1 {
			ret = multiply(ret, a)
		}
		a = multiply(a, a)
	}
	return ret
}

func fib(n int) int {
	if n < 2 {
		return n
	}
	res := pow(matrix{{1, 1}, {1, 0}}, n-1)
	return res[0][0]
}

// Solution 4
func fib4(n int) int {
	sqrt5 := math.Sqrt(5)
	p1 := math.Pow((1+sqrt5)/2, float64(n))
	p2 := math.Pow((1-sqrt5)/2, float64(n))
	return int(math.Round((p1 - p2) / sqrt5))
}

func main() {
	fmt.Println(fib(6))
	fmt.Println(fib4(6))
}
