package main

import "fmt"

// Solution 1
// DFS 深搜，注意剪枝
func combine(n int, k int) [][]int {
	if n <= 0 || k <= 0 || k > n {
		return [][]int{}
	}
	c, res := []int{}, [][]int{}
	generateCombinations(n, k, 1, c, &res)
	return res
}

func generateCombinations(n, k, start int, c []int, res *[][]int) {
	fmt.Printf("===== n= %d, k=%d, start=%d len(c)=%d, len(res)=%d \n", n, k, start, len(c), len(*res))
	if len(c) == k {
		b := make([]int, len(c))
		copy(b, c)
		*res = append(*res, b)
		return
	}
	//
	for i := start; i <= n-(k-len(c))+1; i++ {
		c = append(c, i)
		generateCombinations(n, k, i+1, c, res)
		c = c[:len(c)-1]
	}
	return
}

func main() {
	res := combine(4, 2)
	fmt.Println(res)
}
