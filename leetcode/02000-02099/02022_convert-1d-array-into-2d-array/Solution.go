package main

import "fmt"

// Solution 1
func construct2DArray1(original []int, m int, n int) [][]int {
	if m*n != len(original) {
		return nil
	}
	res := make([][]int, m)
	for i := 0; i < m; i++ {
		res[i] = make([]int, n)
		for j := 0; j < n; j++ {
			res[i][j] = original[i*n+j]
		}
	}
	return res
}

// Solution 2
func construct2DArray(original []int, m int, n int) [][]int {
	k := len(original)
	if k != m*n {
		return nil
	}
	ans := make([][]int, 0, m)
	for i := 0; i < k; i += n {
		ans = append(ans, original[i:i+n])
	}
	return ans
}

func main() {
	// test_data := []int{2, 3, 7, 9, 11, 20}
	// res := construct2DArray(test_data, 2, 3)
	test_data := []int{1, 1, 1, 1}
	res := construct2DArray(test_data, 4, 1)
	fmt.Println(res)
}
